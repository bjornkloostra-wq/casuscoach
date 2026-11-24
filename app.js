/* Casuscoach: de werking van de website. De inhoud staat in inhoud.js en teksten.js. */
(function () {
  'use strict';

  var D = window.INHOUD, T = window.CASUSTEKSTEN || {};
  var app = document.getElementById('app');
  if (!D) { app.innerHTML = '<p>De inhoud kon niet worden geladen. Controleer of inhoud.js naast index.html staat.</p>'; return; }

  /* ---------- Hulpjes ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function hash(s) { var h = 5381; for (var i = 0; i < s.length; i++) { h = ((h << 5) + h + s.charCodeAt(i)) | 0; } return (h >>> 0).toString(36); }
  function bar(f) { var p = Math.max(0, Math.min(100, Math.round((f || 0) * 100))); return '<span class="bar" role="img" aria-label="' + p + ' procent"><span style="width:' + p + '%"></span></span>'; }

  /* ---------- Opslag (alleen op dit apparaat) ---------- */
  var PREFIX = 'casuscoach-v1-';
  function sget(k, d) { try { var v = localStorage.getItem(PREFIX + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function sset(k, v) { try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* opslag niet beschikbaar */ } }
  var S = { niveau: sget('niveau', null), antw: sget('antw', {}), zelf: sget('zelf', {}), kaart: sget('kaart', {}), best: sget('best', {}) };
  function niv() { return D.niveaus[S.niveau] ? S.niveau : 'kb'; }
  function N() { return D.niveaus[niv()]; }

  /* ---------- Leeshulp (weergave-instellingen, alleen op dit apparaat) ---------- */
  var WG_STD = { tekst: 'normaal', letter: 'standaard', ruimte: false, liniaal: false, thema: 'auto', contrast: false, rustig: false, tempo: 'normaal' };
  var WG = Object.assign({}, WG_STD, sget('weergave', {}));
  function pasWeergaveToe() {
    var r = document.documentElement, cl = r.classList;
    cl.toggle('fs-1', WG.tekst === 'groot'); cl.toggle('fs-2', WG.tekst === 'extra');
    cl.toggle('lexend', WG.letter === 'lexend'); cl.toggle('ruim', !!WG.ruimte);
    cl.toggle('contrast', !!WG.contrast); cl.toggle('rustig', !!WG.rustig || !!WG.contrast);
    if (WG.thema === 'licht') r.setAttribute('data-theme', 'light');
    else if (WG.thema === 'donker') r.setAttribute('data-theme', 'dark');
    else r.removeAttribute('data-theme');
    var l = document.getElementById('liniaal'); if (l) l.hidden = !WG.liniaal;
  }
  pasWeergaveToe();
  var LH = [
    { k: 'tekst', label: 'Tekstgrootte', opts: [['normaal', 'Normaal'], ['groot', 'Groot'], ['extra', 'Extra groot']] },
    { k: 'letter', label: 'Lettertype', opts: [['standaard', 'Standaard'], ['lexend', 'Lexend (rustige letters)']] },
    { k: 'ruimte', label: 'Ruimte tussen letters en regels', uitleg: 'Extra ruimte helpt veel lezers, bijvoorbeeld bij dyslexie.', opts: [[false, 'Normaal'], [true, 'Extra ruimte']] },
    { k: 'liniaal', label: 'Leesliniaal', uitleg: 'Een gele balk volgt je muis of vinger, zodat je makkelijker in de regel blijft.', opts: [[false, 'Uit'], [true, 'Aan']] },
    { k: 'thema', label: 'Licht of donker', opts: [['auto', 'Zoals mijn apparaat'], ['licht', 'Licht'], ['donker', 'Donker']] },
    { k: 'contrast', label: 'Contrast', opts: [[false, 'Normaal'], [true, 'Hoog contrast']] },
    { k: 'rustig', label: 'Kleuren en effecten', uitleg: 'Zet kleurverlopen en gloed uit als die je afleiden.', opts: [[false, 'Met kleurverlopen'], [true, 'Rustige weergave']] },
    { k: 'tempo', label: 'Voorleessnelheid', spraak: true, opts: [['langzaam', 'Langzaam'], ['normaal', 'Normaal'], ['snel', 'Snel']] }
  ];
  function lhHTML() {
    var spreken = ('speechSynthesis' in window);
    return '<div class="lh-grid">' + LH.filter(function (r) { return !r.spraak || spreken; }).map(function (r) {
      return '<div class="lh-row"><p class="lbl" id="lh-' + r.k + '">' + esc(r.label) + '</p>' + (r.uitleg ? '<p class="small muted">' + esc(r.uitleg) + '</p>' : '') +
        '<div class="lh-opts" role="group" aria-labelledby="lh-' + r.k + '">' + r.opts.map(function (o) {
          return '<button type="button" class="lh-opt" data-act="lh" data-k="' + r.k + '" data-v="' + String(o[0]) + '" aria-pressed="' + (WG[r.k] === o[0]) + '">' + esc(o[1]) + '</button>';
        }).join('') + '</div></div>';
    }).join('') + '<div class="row"><button type="button" class="btn ghost" data-act="lh-reset">Standaard herstellen</button></div></div>';
  }

  /* ---------- Gegevens ---------- */
  var BRIL = D.brillen, CASUS = D.casussen, BMAP = {};
  D.begrippen.forEach(function (b) { BMAP[b.n] = b; });
  var UNITS = { cs: BRIL.cs.eenheid, sv: BRIL.sv.eenheid, mz: BRIL.mz.eenheid, bs: BRIL.bs.eenheid, alg: 'Algemeen' };
  var TYPE = { R: 'Reproductie: het antwoord staat in de tekst', T: 'Toepassing: gebruik een begrip of leg uit', I: 'Inzicht: je eigen mening met argumenten' };
  var ZELF = { goed: 'Goed', bijna: 'Bijna', nog: 'Nog niet' };
  var KEYS = ['cs', 'sv', 'mz', 'bs'];
  var GLASSES = '<svg class="glasses" viewBox="0 0 32 16" width="24" height="12" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="8" cy="9" r="5.4"/><circle cx="24" cy="9" r="5.4"/><path d="M13.4 8.4c1.6-1.3 3.6-1.3 5.2 0M2.6 8 1 5M29.4 8 31 5"/></svg>';

  function inNiv(b) { return niv() === 'gt' || !b.gt; }
  function begrip(name) {
    var b = BMAP[name];
    if (!b) { if (window.console) console.warn('Onbekend begrip in inhoud.js: ' + name); return null; }
    return inNiv(b) ? b : null;
  }
  function gekend(name) { return (S.kaart[name] || 0) >= 2; }
  function chip(name) {
    var b = begrip(name); if (!b) return '';
    return '<button type="button" class="chip ' + b.e + '" data-begrip="' + esc(b.n) + '">' + esc(b.n) +
      (b.gt ? ' <span class="gtmark">GL/TL</span>' : '') + (gekend(b.n) ? '<span class="ok" aria-label="gekend">✓</span>' : '') + '</button>';
  }
  function vragen(c) { return c.vragen.filter(function (q) { return q.n.indexOf(niv()) > -1; }); }
  function qid(c, q) { return 'q' + c.nr + '-' + hash(q.q); }
  function stats(c) {
    var s = { goed: 0, bijna: 0, nog: 0, open: 0, tot: 0 };
    vragen(c).forEach(function (q) { s.tot++; var z = S.zelf[qid(c, q)]; if (z && s[z] != null) s[z]++; else s.open++; });
    return s;
  }
  function begrippenVan(c) {
    var set = {};
    KEYS.forEach(function (k) { (c.brillen[k].b || []).forEach(function (n) { set[n] = 1; }); });
    c.vragen.forEach(function (q) { (q.b || []).forEach(function (n) { set[n] = 1; }); });
    return Object.keys(set).filter(function (n) { return BMAP[n] && inNiv(BMAP[n]); });
  }
  function casussenMet(name) { return CASUS.filter(function (c) { return begrippenVan(c).indexOf(name) > -1; }); }
  function zichtbareBegrippen() { return D.begrippen.filter(inNiv); }

  /* ---------- Router ---------- */
  var VIEWS = {}, NAVOF = { flitskaarten: 'oefenen', 'feit-of-mening': 'oefenen', 'welke-bril': 'oefenen', koppelen: 'oefenen', gatentekst: 'oefenen', docent: '' };
  function huidigeHash() { var h = (location.hash || '').slice(1); try { h = decodeURIComponent(h); } catch (e) { } return h || 'start'; }
  function route(keepScroll) {
    stopSpeech(); hideTip(); DND.actief = null; DND.sel = null; document.body.removeAttribute('data-print');
    var h = huidigeHash(), nav = 'start';
    var m = /^casus-(\d+)(?:-(lezen|achtergrond|brillen|vragen|samenvatting))?$/.exec(h);
    var mk = /^koppelen-([a-z0-9]+)$/.exec(h), mg = /^gatentekst-(\d+)$/.exec(h);
    if (m && CASUS[+m[1] - 1]) { viewCasus(CASUS[+m[1] - 1], m[2] || 'lezen'); nav = 'casussen'; }
    else if (mk) { KOP.set = mk[1]; kopStart(); VIEWS.koppelen(); nav = 'oefenen'; }
    else if (mg && CASUS[+mg[1] - 1]) { viewGat(CASUS[+mg[1] - 1]); nav = 'oefenen'; }
    else if (VIEWS[h]) { VIEWS[h](); nav = (h in NAVOF) ? NAVOF[h] : h; }
    else { VIEWS.start(); nav = 'start'; }
    $$('[data-nav]').forEach(function (a) { if (a.getAttribute('data-nav') === nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $$('[data-setniv]').forEach(function (b) { b.setAttribute('aria-pressed', S.niveau && b.getAttribute('data-setniv') === S.niveau ? 'true' : 'false'); });
    if (!keepScroll) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', function () { route(false); });
  function setNiveau(n) { if (!D.niveaus[n]) return; S.niveau = n; sset('niveau', n); FK.stage = 'setup'; GAME = {}; KOP.stage = 'setup'; GAT.key = null; route(true); }

  /* ---------- Startpagina ---------- */
  function casusCard(c) {
    var s = stats(c);
    return '<a class="ccard ' + c.hoofd + '" href="#casus-' + c.nr + '"><span class="cnr">' + c.nr + '</span><span class="ctitle">' + esc(c.kort) + '</span>' +
      '<span class="csub">' + esc(c.titel) + '</span><span class="cprog">' + bar(s.tot ? s.goed / s.tot : 0) + '<span class="small muted">' + s.goed + ' van ' + s.tot + ' vragen goed</span></span></a>';
  }
  function gameLink(id, title, desc) {
    var best = S.best[id];
    return '<a class="glink" href="#' + id + '"><b>' + esc(title) + '</b><span>' + esc(desc) + '</span><span class="small muted">' + (best != null ? 'Beste score: ' + best + ' van 10' : 'Nog niet gespeeld') + '</span></a>';
  }
  VIEWS.start = function () {
    var n = N(), h = '<div class="view">';
    if (!S.niveau) {
      h += '<section class="welcome"><p class="eyebrow">Examentrainer maatschappijleer vmbo · ' + D.jaar + '</p><h1>Welkom bij Casuscoach</h1>' +
        '<p class="lead">Hier oefen je voor je examen maatschappijleer: de vijf casussen, de begrippen en je eigen mening. Kies eerst op welk niveau jij examen doet.</p>' +
        '<div class="nivpick">' + ['bb', 'kb', 'gt'].map(function (k) {
          var x = D.niveaus[k];
          return '<button type="button" class="nivcard" data-act="kies-niveau" data-niv="' + k + '"><span class="nivname">' + esc(x.naam) + '</span><span class="small muted">' + esc(x.lang) + '</span><span>' + esc(x.uitleg) + '</span></button>';
        }).join('') + '</div></section>';
    } else {
      h += '<section class="hello"><p class="eyebrow">Examentrainer maatschappijleer vmbo · ' + D.jaar + '</p><h1>Waar ga je vandaag mee oefenen?</h1>' +
        '<p class="lead">Je oefent op niveau <strong>' + esc(n.naam) + '</strong>. Je kunt dat bovenaan altijd veranderen.</p></section>';
    }
    h += '<section class="examstrip" aria-label="Jouw examen">' +
      '<div><b>Schriftelijk</b><span>' + n.schriftelijk + ' minuten · telt voor de helft</span></div>' +
      '<div><b>Mondeling</b><span>25 minuten · 2 van de 5 casussen en de examenstof · telt voor de helft</span></div>' +
      '<div><b>Let op</b><span>Bij het mondeling mag je geen aantekeningen gebruiken</span></div></section>';
    h += '<section class="block"><div class="block-head"><h2>De vijf casussen</h2><a href="#casussen">Hoe pak je een casus aan?</a></div><div class="cgrid">' + CASUS.map(casusCard).join('') + '</div></section>';
    var tot = zichtbareBegrippen(), ken = tot.filter(function (b) { return gekend(b.n); }).length;
    h += '<section class="two">' +
      '<article class="panel"><p class="eyebrow">Begrippen</p><h2>' + ken + ' van ' + tot.length + ' begrippen gekend</h2>' + bar(ken / tot.length) +
      '<p class="muted small">Een begrip telt als gekend als je het twee keer achter elkaar goed had bij de flitskaarten.</p>' +
      '<div class="row"><a class="btn" href="#flitskaarten">Oefen met flitskaarten</a><a class="btn ghost" href="#begrippen">Begrippenlijst</a></div></article>' +
      '<article class="panel"><p class="eyebrow">Games</p><h2>Even snel oefenen</h2><div class="gamelinks">' +
      gameLink('feit-of-mening', 'Feit of mening?', 'Herken feiten, meningen en stereotypen.') +
      gameLink('welke-bril', 'Welke bril?', 'Koppel een uitspraak aan de juiste exameneenheid.') +
      '<a class="glink" href="#koppelen"><b>Begrippen koppelen</b><span>Sleep begrippen naar de goede omschrijving.</span></a>' +
      '<a class="glink" href="#gatentekst"><b>Gatenteksten</b><span>Zet het goede begrip op de goede plek in de tekst.</span></a></div></article></section>';
    h += '<section class="block"><h2>Zo pak je een casus aan</h2><ol class="steps">' +
      '<li><b>Lees en kijk</b><span>Lees de tekst van jouw niveau en bekijk de achtergrond met video\'s.</span></li>' +
      '<li><b>Kijk door vier brillen</b><span>Welke waarden, belangen, macht en beelden spelen er?</span></li>' +
      '<li><b>Maak de vragen</b><span>Schrijf of zeg je antwoord en vergelijk het met het modelantwoord.</span></li>' +
      '<li><b>Vertel het hardop</b><span>Leg de casus uit zonder in de tekst te kijken, net als op het mondeling.</span></li></ol></section>';
    app.innerHTML = h + '</div>';
    document.title = 'Casuscoach Maatschappijleer';
  };

  /* ---------- Casussen-overzicht ---------- */
  function lensIntro() {
    return '<div class="lensintro">' + KEYS.map(function (k) {
      return '<div class="' + k + '"><b>' + GLASSES + esc(BRIL[k].naam) + '</b><span class="lbl">' + esc(BRIL[k].eenheid) + '</span><span>' + esc(BRIL[k].vraag) + '</span></div>';
    }).join('') + '</div>';
  }
  VIEWS.casussen = function () {
    var h = '<div class="view"><section class="hello"><p class="eyebrow">Casussen ' + D.jaar + '</p><h1>De vijf casussen</h1>' +
      '<p class="lead">Op het mondeling krijg je twee van deze vijf casussen. Eén kies je zelf, de andere kiest de examinator. Bereid ze dus alle vijf voor, en oefen ze zonder aantekeningen.</p></section>' +
      '<section class="block"><h2>Kijk door vier brillen</h2><p class="muted" style="max-width:70ch">Bij maatschappijleer bekijk je een probleem van verschillende kanten. Elke bril hoort bij een deel van je examenstof en heeft een eigen kleur. Die kleur zie je overal terug.</p>' + lensIntro() + '</section>' +
      '<section class="block"><h2>Kies een casus</h2><div class="clist">' + CASUS.map(function (c) {
        var s = stats(c);
        return '<a class="ccard wide ' + c.hoofd + '" href="#casus-' + c.nr + '"><span class="cnr">' + c.nr + '</span><span class="cbody"><span class="ctitle">' + esc(c.titel) + '</span>' +
          '<span class="csub">' + esc(c.probleem) + '</span><span class="cbril">Sterkste bril: ' + esc(BRIL[c.hoofd].naam) + '</span>' +
          '<span class="cprog">' + bar(s.tot ? s.goed / s.tot : 0) + '<span class="small muted">' + s.goed + ' van ' + s.tot + ' vragen goed</span></span></span></a>';
      }).join('') + '</div></section></div>';
    app.innerHTML = h;
    document.title = 'Casussen · Casuscoach';
  };

  /* ---------- Eén casus ---------- */
  var canSpeak = ('speechSynthesis' in window) && typeof window.SpeechSynthesisUtterance === 'function';
  var leesTekst = [];

  function markeer(txt, woorden, used) {
    var hits = [];
    woorden.forEach(function (w) {
      if (used[w.w]) return;
      var re;
      try { re = new RegExp('(^|[^\\p{L}])(' + reEsc(w.w) + ')(\\p{L}*)', 'iu'); } catch (e) { re = new RegExp('(^|\\W)(' + reEsc(w.w) + ')(\\w*)', 'i'); }
      var m = re.exec(txt);
      if (m) { var s = m.index + m[1].length; hits.push({ s: s, e: s + m[2].length + m[3].length, w: w }); }
    });
    hits.sort(function (a, b) { return a.s - b.s; });
    var out = '', pos = 0;
    hits.forEach(function (h) {
      if (h.s < pos) return;
      used[h.w.w] = true;
      out += esc(txt.slice(pos, h.s)) + '<button type="button" class="woord" data-uitleg="' + esc(h.w.u) + '">' + esc(txt.slice(h.s, h.e)) + '</button>';
      pos = h.e;
    });
    return out + esc(txt.slice(pos));
  }

  function tabLezen(c) {
    var alineas = (T[c.nr] || {})[niv()];
    if (!alineas) return '<p>Voor deze casus staat nog geen tekst op dit niveau in teksten.js.</p>';
    var woorden = (c.woorden || []).slice().sort(function (a, b) { return b.w.length - a.w.length; }), used = {};
    leesTekst = [c.titel];
    var body = alineas.map(function (p) {
      if (p.indexOf('## ') === 0) { leesTekst.push(p.slice(3)); return '<h3>' + esc(p.slice(3)) + '</h3>'; }
      var cls = '', txt = p;
      if (p.indexOf('> ') === 0) { cls = 'lead-in'; txt = p.slice(2); }
      else if (p.indexOf('* ') === 0) { cls = 'foot'; }
      leesTekst.push(txt.replace(/^\* /, ''));
      return '<p' + (cls ? ' class="' + cls + '"' : '') + '>' + markeer(txt, woorden, used) + '</p>';
    }).join('');
    var gebruikt = (c.woorden || []).filter(function (w) { return used[w.w]; });
    return '<div class="readwrap"><article class="reader"><div class="reader-top"><span class="pill">Tekst voor niveau ' + esc(N().naam) + '</span>' +
      (canSpeak ? '<button type="button" class="btn ghost sm" data-act="voorlezen" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg><span>Lees voor</span></button>' : '') +
      '</div><h2 class="rtitle">' + esc(c.titel) + '</h2>' + body + '<p class="small muted">Tik op een gemarkeerd woord voor uitleg.</p></article>' +
      '<aside class="side">' +
      (gebruikt.length ? '<section class="sidebox"><h3>Moeilijke woorden</h3><dl class="words">' + gebruikt.map(function (w) { return '<dt>' + esc(w.w) + '</dt><dd>' + esc(w.u) + '</dd>'; }).join('') + '</dl></section>' : '') +
      '<section class="sidebox"><h3>Het originele artikel</h3><p class="small muted">De casus is een bewerking van een nieuwsbericht. Lees het origineel en zoek meer informatie bij betrouwbare bronnen.</p>' +
      '<a class="btn" href="' + esc(c.bron.url) + '" target="_blank" rel="noopener">Lees bij ' + esc(c.bron.medium) + ' ↗</a>' +
      '<ul class="links">' + c.verder.map(function (v) { return '<li><a href="' + esc(v.u) + '" target="_blank" rel="noopener">' + esc(v.t) + ' ↗</a></li>'; }).join('') + '</ul></section></aside></div>' +
      '<div class="nextstep"><a class="btn" href="#casus-' + c.nr + '-achtergrond">Verder: lees de achtergrond en bekijk video\'s →</a></div>';
  }

  /* ---------- Achtergrond ---------- */
  var SOORTKLEUR = { Uitleg: 'cs', Nieuws: 'mz', Overheid: 'alg', Onderzoek: 'alg', Mening: 'bs', Satire: 'bs', 'Let op': 'bs', Archief: 'sv', Voorlichting: 'sv' };
  var PLAY = '<svg width="44" height="44" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" style="fill:currentColor"/><path d="M10 7.5l6.5 4.5-6.5 4.5z" style="fill:var(--video)"/></svg>';
  function mediaCard(m) {
    var meta = [m.maker, m.jaar, m.duur].filter(Boolean).join(' · ');
    var schooltv = /schooltv/i.test(m.maker || ''), video = m.type !== 'web' || schooltv;
    var href = m.type === 'youtube' ? 'https://www.youtube.com/watch?v=' + m.id : m.url;
    var label = m.type === 'youtube' ? 'Open op YouTube' : m.type === 'schatkamer' ? 'Bekijk in de Schatkamer' : schooltv ? 'Bekijk bij Schooltv' : 'Lees bij ' + m.maker;
    var top = m.type === 'youtube'
      ? '<a class="vid vidlink" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + PLAY + '<span>Bekijk op YouTube</span><small>De video opent in een nieuw tabblad, bij YouTube zelf.</small></a>'
      : '<div class="mstrip ' + (m.type === 'schatkamer' ? 'sv' : schooltv ? 'cs' : 'alg') + '">' + (m.type === 'schatkamer' ? 'Archiefbeeld · De Schatkamer van Beeld & Geluid' : schooltv ? 'Video · Schooltv' : 'Artikel of webpagina') + '</div>';
    return '<article class="mcard">' + top + '<div class="mbody"><div class="mtags"><span class="pill ' + (SOORTKLEUR[m.soort] || 'alg') + '">' + esc(m.soort) + '</span><span class="small muted">' + esc(meta) + '</span></div>' +
      '<h3>' + esc(m.titel) + '</h3><p class="small"><strong>Waarom deze bron?</strong> ' + esc(m.waarom) + '</p>' +
      '<p class="kijk"><strong>' + (video ? 'Kijkvraag' : 'Leesvraag') + ':</strong> ' + esc(m.kijk) + '</p>' +
      '<a class="mlink" href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(label) + ' ↗</a></div></article>';
  }
  function bronCheck() {
    return '<section class="sidebox"><h3>Check je bron</h3><ol class="checklist">' +
      '<li><b>Wie</b> heeft het gemaakt?</li><li><b>Wanneer</b>? Is het nog actueel?</li><li><b>Waarom</b>: informeren, overtuigen, vermaken of verkopen?</li><li><b>Feit of mening</b>? Kun je het controleren?</li></ol>' +
      '<p class="lbl">Soorten bronnen</p><div class="chips">' + ['Uitleg', 'Nieuws', 'Overheid', 'Onderzoek', 'Archief', 'Voorlichting', 'Mening', 'Satire', 'Let op'].map(function (x) { return '<span class="pill ' + SOORTKLEUR[x] + '">' + x + '</span>'; }).join(' ') + '</div>' +
      '<p class="small muted">Bij mening, satire en "let op" leer je veel, maar kijk je extra kritisch.</p></section>';
  }
  function tabAchtergrond(c) {
    var A = (window.ACHTERGROND || {})[c.nr];
    if (!A) return '<p>Voor deze casus is nog geen achtergrond toegevoegd in achtergrond.js.</p>';
    var body = ((A.tekst || {})[niv()] || []).map(function (p) {
      if (p.indexOf('## ') === 0) return '<h3>' + esc(p.slice(3)) + '</h3>';
      if (p.indexOf('! ') === 0) return '<aside class="nieuws"><p class="lbl">Laatste ontwikkeling</p><p>' + esc(p.slice(2)) + '</p></aside>';
      return '<p>' + esc(p) + '</p>';
    }).join('');
    var media = (A.media || []).filter(function (m) { return (m.n || []).indexOf(niv()) > -1; });
    return '<div class="readwrap"><article class="reader"><div class="reader-top"><span class="pill">Achtergrond voor niveau ' + esc(N().naam) + '</span></div><h2 class="rtitle">Achtergrond: ' + esc(c.kort) + '</h2>' + body + '</article><aside class="side">' + bronCheck() + '</aside></div>' +
      '<section class="block"><h2>Kijken en lezen</h2><p class="muted" style="max-width:70ch">' + (niv() === 'gt'
        ? 'Op GL/TL zie je ook bronnen met een mening, satire of een sensationele titel. Daar leer je veel van, maar kijk er kritisch naar. Bekijk minstens drie bronnen en beantwoord de kijkvragen.'
        : 'Bekijk minstens twee bronnen en beantwoord de kijkvraag. Zo leer je meer over de casus dan alleen uit de tekst.') + '</p>' +
      '<div class="mgrid">' + media.map(mediaCard).join('') + '</div></section>' +
      '<div class="nextstep"><a class="btn" href="#casus-' + c.nr + '-brillen">Verder: bekijk de casus door vier brillen →</a></div>';
  }

  function lensCard(k, L, hoofd) {
    return '<article class="lens ' + k + '"><h3>' + GLASSES + esc(BRIL[k].naam) + (hoofd ? ' <span class="main">sterkste bril</span>' : '') + '</h3>' +
      '<span class="unit">' + esc(BRIL[k].eenheid) + '</span><p class="lq">' + esc(BRIL[k].vraag) + '</p><p>' + esc(L.t) + '</p>' +
      '<div class="chips">' + (L.b || []).map(chip).join('') + '</div></article>';
  }
  function tabBrillen(c) {
    return '<section class="probleem"><p class="eyebrow">Het maatschappelijke probleem</p><p class="big">' + esc(c.probleem) + '</p></section>' +
      '<div class="lenses">' + KEYS.map(function (k) { return lensCard(k, c.brillen[k], k === c.hoofd); }).join('') + '</div>' +
      '<p class="small muted">Tik op een begrip voor uitleg en een voorbeeld.</p>' +
      '<section class="tipbox"><h3>Zo vertel je over een casus op het mondeling</h3><ol>' +
      '<li>Vertel in twee zinnen waar de casus over gaat.</li><li>Leg uit waarom het een maatschappelijk probleem is.</li>' +
      '<li>Kies een bril en noem een begrip, met een voorbeeld uit de tekst.</li><li>Zeg wat jij ervan vindt, met twee argumenten.</li></ol></section>' +
      '<div class="nextstep"><a class="btn" href="#casus-' + c.nr + '-vragen">Verder: maak de vragen →</a></div>';
  }

  function qsumHTML(s) {
    return '<div class="nums"><span><b>' + s.goed + '</b> goed</span><span><b>' + s.bijna + '</b> bijna</span><span><b>' + s.nog + '</b> nog niet</span><span><b>' + s.open + '</b> nog open</span></div>' + bar(s.tot ? s.goed / s.tot : 0);
  }
  function zelfKnoppen(id, z) {
    return ['goed', 'bijna', 'nog'].map(function (v) { return '<button type="button" class="zbtn" data-act="zelf" data-q="' + id + '" data-val="' + v + '" aria-pressed="' + (z === v) + '">' + ZELF[v] + '</button>'; }).join('');
  }
  function tipFor(q) {
    if (q.tip) return q.tip;
    if (q.t === 'I') return 'Een standpunt met twee argumenten. Extra sterk: noem een tegenargument en reageer erop.';
    if (q.t === 'T') return 'Gebruik het juiste begrip én een voorbeeld uit de casus.';
    return '';
  }
  function qCard(c, q) {
    var id = qid(c, q), z = S.zelf[id] || '', a = S.antw[id] || '', tip = tipFor(q), bs = (q.b || []).map(chip).join('');
    var starters = (D.zinsstarters && D.zinsstarters[q.t]) || [];
    return '<article class="qcard" id="card-' + id + '">' +
      '<div class="qhead"><span class="badge ' + q.t + '" aria-hidden="true">' + q.t + '</span><div><p class="qtype">' + esc(TYPE[q.t]) + '</p><h3 class="qtext">' + esc(q.q) + '</h3></div>' +
      '<span class="zstat ' + z + '" id="st-' + id + '"' + (z ? '' : ' hidden') + '>' + (ZELF[z] || '') + '</span></div>' +
      '<label class="sr" for="a-' + id + '">Jouw antwoord</label><textarea id="a-' + id + '" data-antw="' + id + '" rows="3" placeholder="Typ hier je antwoord, of zeg het hardop.">' + esc(a) + '</textarea>' +
      (starters.length ? '<details class="hulp"' + (niv() === 'bb' ? ' open' : '') + '><summary>Hulp: zinnen om mee te beginnen</summary><ul>' + starters.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></details>' : '') +
      '<div class="row"' + (z ? ' hidden' : '') + ' id="tb-' + id + '"><button type="button" class="btn" data-act="toon" data-q="' + id + '">Bekijk het modelantwoord</button></div>' +
      '<div class="model" id="m-' + id + '"' + (z ? '' : ' hidden') + '><p class="lbl">Modelantwoord</p><p>' + esc(q.a) + '</p>' +
      (tip ? '<p class="tipline"><strong>Waar let de examinator op?</strong> ' + esc(tip) + '</p>' : '') +
      (bs ? '<div class="chips"><span class="small muted">Begrippen:</span> ' + bs + '</div>' : '') +
      '<p class="lbl">Hoe ging het?</p><div class="zelf">' + zelfKnoppen(id, z) + '</div></div></article>';
  }
  function tabVragen(c) {
    var qs = vragen(c);
    return '<div class="qsum" id="qsum">' + qsumHTML(stats(c)) + '</div>' +
      '<p class="muted small">Schrijf je antwoord op of zeg het hardop. Bekijk daarna het modelantwoord en geef aan hoe het ging. Je antwoorden worden alleen op dit apparaat bewaard.</p>' +
      '<div class="qlist">' + qs.map(function (q) { return qCard(c, q); }).join('') + '</div>' +
      '<section class="tipbox"><h3>Oefen verder met deze casus</h3><div class="row"><a class="btn" href="#gatentekst-' + c.nr + '">Gatentekst</a><a class="btn ghost" href="#koppelen-c' + c.nr + '">Begrippen koppelen</a><a class="btn ghost" href="#flitskaarten">Flitskaarten</a><a class="btn ghost" href="#casus-' + c.nr + '-samenvatting">Samenvattingskaart</a></div></section>';
  }

  /* ---------- Samenvattingskaart ---------- */
  function eersteZin(t) {
    var m = /^(.*?[.!?])(\s|$)/.exec(t);
    if (!m) return t;
    if (m[1].length < 25) { var m2 = /^(.*?[.!?]\s.*?[.!?])(\s|$)/.exec(t); return m2 ? m2[1] : t; }
    return m[1];
  }
  function kaartBegrippen(c) {
    var lijst = [], max = { bb: 6, kb: 8, gt: 10 }[niv()];
    [c.hoofd].concat(KEYS.filter(function (k) { return k !== c.hoofd; })).forEach(function (k) {
      (c.brillen[k].b || []).forEach(function (n) { if (lijst.indexOf(n) < 0 && BMAP[n] && inNiv(BMAP[n])) lijst.push(n); });
    });
    return lijst.slice(0, max);
  }
  function tabSamenvatting(c) {
    var feiten = vragen(c).filter(function (q) { return q.t === 'R'; }).map(function (q) { return q.a; });
    var mid = 'mening-' + c.nr, mening = S.antw[mid] || '';
    return '<p class="muted noprint" style="max-width:72ch">Alles over deze casus op één kaart. Vul je eigen mening in en print de kaart, of bewaar hem als PDF. Let op: bij het mondeling mag je geen aantekeningen gebruiken. Deze kaart is om thuis mee te leren.</p>' +
      '<article class="kaart"><header class="k-head"><div><p class="eyebrow">Samenvattingskaart · casus ' + c.nr + ' · niveau ' + esc(N().naam) + '</p><h2>' + esc(c.titel) + '</h2></div><span class="k-logo">Casuscoach ✦</span></header>' +
      '<section class="k-blok"><h3>Het maatschappelijke probleem</h3><p>' + esc(c.probleem) + '</p></section>' +
      (feiten.length ? '<section class="k-blok"><h3>Belangrijke feiten</h3><ul>' + feiten.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul></section>' : '') +
      '<section class="k-blok"><h3>Vier brillen</h3><div class="k-brillen">' + KEYS.map(function (k) {
        var bs = (c.brillen[k].b || []).filter(function (n) { return BMAP[n] && inNiv(BMAP[n]); }).slice(0, 4);
        return '<div class="k-bril ' + k + '"><b>' + esc(BRIL[k].naam) + (k === c.hoofd ? ' · sterkste bril' : '') + '</b><span>' + esc(eersteZin(c.brillen[k].t)) + '</span>' +
          (bs.length ? '<span class="kb">' + esc(bs.join(' · ')) + '</span>' : '') + '</div>';
      }).join('') + '</div></section>' +
      '<section class="k-blok"><h3>Begrippen om te kennen</h3><dl class="k-begr">' + kaartBegrippen(c).map(function (n) {
        return '<dt>' + esc(n) + '</dt><dd>' + esc(eersteZin(BMAP[n].d)) + '</dd>';
      }).join('') + '</dl></section>' +
      '<section class="k-blok"><h3>Mijn mening</h3><p class="small muted">Mijn standpunt, met twee argumenten.</p><label class="sr" for="a-' + mid + '">Mijn mening</label>' +
      '<textarea id="a-' + mid + '" data-antw="' + mid + '" rows="4" placeholder="Ik vind dat … omdat … Een tweede argument is …">' + esc(mening) + '</textarea>' +
      '<div class="k-print" data-mirror="' + mid + '">' + esc(mening) + '</div></section>' +
      '<footer class="k-foot">Bron: ' + esc(c.bron.medium) + ' · casustekst: CvTE, vakinformatie staatsexamen ' + D.jaar + ' · gemaakt met Casuscoach</footer></article>' +
      '<div class="row noprint"><button type="button" class="btn" data-act="print">Print of bewaar als PDF</button></div>';
  }

  var huidigeCasus = null;
  function viewCasus(c, tab) {
    huidigeCasus = c;
    var s = stats(c);
    var tabs = [['lezen', 'Lezen'], ['achtergrond', 'Achtergrond'], ['brillen', 'Vier brillen'], ['vragen', 'Vragen'], ['samenvatting', 'Samenvatting']];
    var h = '<div class="view"><div class="crumbs"><a href="#casussen">← Alle casussen</a></div>' +
      '<header class="chead"><p class="eyebrow">Casus ' + c.nr + ' · bron: ' + esc(c.bron.medium) + '</p><h1>' + esc(c.titel) + '</h1></header>' +
      '<nav class="ctabs" aria-label="Onderdelen van casus ' + c.nr + '">' + tabs.map(function (t) {
        var on = t[0] === tab;
        return '<a class="ctab' + (on ? ' on' : '') + '" href="#casus-' + c.nr + '-' + t[0] + '"' + (on ? ' aria-current="page"' : '') + '>' + t[1] +
          (t[0] === 'vragen' ? ' <span class="cnt" id="tabcnt">' + s.goed + '/' + s.tot + '</span>' : '') + '</a>';
      }).join('') + '</nav>';
    h += tab === 'achtergrond' ? tabAchtergrond(c) : tab === 'brillen' ? tabBrillen(c) : tab === 'vragen' ? tabVragen(c) : tab === 'samenvatting' ? tabSamenvatting(c) : tabLezen(c);
    var prev = CASUS[c.nr - 2], next = CASUS[c.nr];
    h += '<nav class="pager" aria-label="Andere casussen">' + (prev ? '<a href="#casus-' + prev.nr + '">← Casus ' + prev.nr + ': ' + esc(prev.kort) + '</a>' : '<span></span>') +
      (next ? '<a href="#casus-' + next.nr + '">Casus ' + next.nr + ': ' + esc(next.kort) + ' →</a>' : '') + '</nav></div>';
    app.innerHTML = h;
    document.title = 'Casus ' + c.nr + ' · Casuscoach';
    if (tab === 'samenvatting') document.body.setAttribute('data-print', 'kaart');
  }

  /* ---------- Voorlezen ---------- */
  function stopSpeech() {
    if (canSpeak) { try { window.speechSynthesis.cancel(); } catch (e) { } }
    $$('[data-act="voorlezen"]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); var sp = b.querySelector('span'); if (sp) sp.textContent = 'Lees voor'; });
  }
  function voorlezen(btn) {
    if (!canSpeak) return;
    if (btn.getAttribute('aria-pressed') === 'true') { stopSpeech(); return; }
    var synth = window.speechSynthesis; synth.cancel();
    var stem = (synth.getVoices() || []).filter(function (v) { return /^nl([-_]|$)/i.test(v.lang); })[0];
    leesTekst.forEach(function (t, i) {
      var u = new SpeechSynthesisUtterance(t); u.lang = 'nl-NL'; u.rate = ({ langzaam: 0.75, normaal: 0.95, snel: 1.15 })[WG.tempo] || 0.95; if (stem) u.voice = stem;
      if (i === leesTekst.length - 1) u.onend = function () { stopSpeech(); };
      synth.speak(u);
    });
    btn.setAttribute('aria-pressed', 'true'); var sp = btn.querySelector('span'); if (sp) sp.textContent = 'Stop met voorlezen';
  }

  /* ---------- Begrippen ---------- */
  var bank = { filter: 'all', query: '', todo: false };
  function bankLijst() {
    var list = zichtbareBegrippen().filter(function (b) {
      return (bank.filter === 'all' || b.e === bank.filter) && b.n.toLowerCase().indexOf(bank.query) > -1 && (!bank.todo || !gekend(b.n));
    }).sort(function (a, b) { return a.n.localeCompare(b.n, 'nl'); });
    if (!list.length) return '<p class="muted">Geen begrip gevonden. Probeer een ander woord of zet de filters uit.</p>';
    var groepen = bank.filter === 'all' ? KEYS.concat(['alg']) : [bank.filter];
    return groepen.map(function (k) {
      var items = list.filter(function (b) { return b.e === k; });
      if (!items.length) return '';
      return '<section class="group ' + k + '"><h3><span class="dot"></span>' + esc(UNITS[k]) + ' <span class="small muted">(' + items.length + ')</span></h3><div class="chips">' + items.map(function (b) { return chip(b.n); }).join('') + '</div></section>';
    }).join('');
  }
  VIEWS.begrippen = function () {
    var tot = zichtbareBegrippen(), ken = tot.filter(function (b) { return gekend(b.n); }).length;
    var filters = ['all'].concat(KEYS, ['alg']).map(function (k) {
      var label = k === 'all' ? 'Alle' : UNITS[k];
      return '<button type="button" class="filt ' + k + '" data-act="filt" data-k="' + k + '" aria-pressed="' + (bank.filter === k) + '">' + (k !== 'all' ? '<span class="dot"></span>' : '') + esc(label) + '</button>';
    }).join('');
    app.innerHTML = '<div class="view"><section class="hello"><p class="eyebrow">Begrippen · niveau ' + esc(N().naam) + '</p><h1>Begrippenlijst</h1>' +
      '<p class="lead">Alle ' + tot.length + ' begrippen uit je examenstof. Tik op een begrip voor uitleg, een voorbeeld en de casussen waarin het terugkomt.</p></section>' +
      '<section class="stat"><strong>Je kent ' + ken + ' van de ' + tot.length + ' begrippen</strong>' + bar(ken / tot.length) + '<div class="row"><a class="btn" href="#flitskaarten">Oefen met flitskaarten</a></div></section>' +
      '<div class="tools">' + filters + '<label class="sr" for="bankSearch">Zoek een begrip</label><input class="search" id="bankSearch" type="search" placeholder="Zoek een begrip" value="' + esc(bank.query) + '">' +
      '<button type="button" class="filt all" data-act="todo" aria-pressed="' + bank.todo + '">Alleen nog niet gekend</button></div>' +
      '<div class="banklist" id="bankList">' + bankLijst() + '</div></div>';
    document.title = 'Begrippen · Casuscoach';
  };

  /* ---------- Begrip-venster ---------- */
  var dlg = $('#dlg');
  function openBegrip(name) {
    var b = BMAP[name]; if (!b) return;
    var cs = casussenMet(name), box = S.kaart[name] || 0;
    $('#dlgBody').innerHTML = '<div class="dlg-head ' + b.e + '"><div class="pills"><span class="pill">' + esc(UNITS[b.e]) + '</span>' + (b.gt ? '<span class="pill alg">alleen GL/TL</span>' : '') +
      '<span class="pill ' + (gekend(name) ? 'cs">gekend ✓' : (box ? 'sv">bijna gekend' : 'alg">nog oefenen')) + '</span></div><h2 id="dlgTitle">' + esc(b.n) + '</h2></div>' +
      '<p>' + esc(b.d) + '</p><p class="lbl">Voorbeeld</p><p>' + esc(b.v) + '</p>' +
      (b.x ? '<p class="lbl">Verwar het niet met</p><p>' + esc(b.x) + '</p>' : '') +
      '<p class="lbl">Komt terug in</p>' + (cs.length ? '<div class="chips">' + cs.map(function (c) { return '<a class="chip ' + c.hoofd + '" href="#casus-' + c.nr + '-brillen" data-act="sluit">Casus ' + c.nr + ': ' + esc(c.kort) + '</a>'; }).join('') + '</div>' : '<p class="muted">Dit begrip zit niet in de casussen van ' + D.jaar + ', maar kan wel in het schriftelijk examen voorkomen.</p>');
    if (typeof dlg.showModal === 'function') { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute('open', '');
  }
  function sluitDlg() { if (dlg.open) { if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open'); } }
  $('#dlgClose').addEventListener('click', sluitDlg);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) sluitDlg(); });

  var lhDlg = $('#lh');
  function sluitLh() { if (lhDlg.open) { if (typeof lhDlg.close === 'function') lhDlg.close(); else lhDlg.removeAttribute('open'); } }
  $('#lhClose').addEventListener('click', sluitLh);
  lhDlg.addEventListener('click', function (e) { if (e.target === lhDlg) sluitLh(); });
  function liniaalNaar(y) { var l = document.getElementById('liniaal'); if (!l || l.hidden) return; l.style.top = (y - l.offsetHeight / 2) + 'px'; }
  document.addEventListener('pointermove', function (e) { if (WG.liniaal) liniaalNaar(e.clientY); }, { passive: true });
  document.addEventListener('touchmove', function (e) { if (WG.liniaal && e.touches[0]) liniaalNaar(e.touches[0].clientY); }, { passive: true });
  document.addEventListener('touchstart', function (e) { if (WG.liniaal && e.touches[0]) liniaalNaar(e.touches[0].clientY); }, { passive: true });

  /* ---------- Woord-uitleg ---------- */
  var tip = $('#tip');
  function showTip(w) {
    tip.innerHTML = '<strong>' + esc(w.textContent) + '</strong><br>' + esc(w.getAttribute('data-uitleg'));
    tip.hidden = false;
    var r = w.getBoundingClientRect(), tw = Math.min(300, window.innerWidth - 32);
    tip.style.width = tw + 'px';
    var left = Math.max(window.scrollX + 16, Math.min(r.left + window.scrollX, window.scrollX + window.innerWidth - 16 - tw));
    tip.style.left = left + 'px'; tip.style.top = (r.bottom + window.scrollY + 8) + 'px';
  }
  function hideTip() { tip.hidden = true; }
  window.addEventListener('resize', hideTip);

  /* ---------- Oefenen ---------- */
  VIEWS.oefenen = function () {
    var best = function (id) { return S.best[id] != null ? 'Beste score: ' + S.best[id] + ' van 10' : 'Nog niet gespeeld'; };
    var tot = zichtbareBegrippen(), ken = tot.filter(function (b) { return gekend(b.n); }).length;
    app.innerHTML = '<div class="view"><section class="hello"><p class="eyebrow">Oefenen</p><h1>Kies hoe je wilt oefenen</h1><p class="lead">Elke oefening duurt een paar minuten. Na elk antwoord krijg je uitleg.</p></section>' +
      '<div class="ogrid">' +
      '<a class="ocard" href="#flitskaarten"><b>Flitskaarten</b><span>Leer de begrippen. Kaarten die je nog niet kent, komen vaker terug.</span><span class="tr">' + ken + ' van ' + tot.length + ' begrippen gekend</span></a>' +
      '<a class="ocard" href="#feit-of-mening"><b>Feit of mening?</b><span>Is een uitspraak uit de casussen een feit of een mening? Herken ook stereotypen.</span><span class="tr">' + best('feit-of-mening') + '</span></a>' +
      '<a class="ocard" href="#welke-bril"><b>Welke bril?</b><span>Bij welke exameneenheid hoort een uitspraak: waarden, belangen, macht of beeldvorming?</span><span class="tr">' + best('welke-bril') + '</span></a>' +
      '<a class="ocard" href="#koppelen"><b>Begrippen koppelen</b><span>Sleep elk begrip naar de goede omschrijving. Kies alle begrippen, één exameneenheid of één casus.</span><span class="tr">' + ({ bb: 4, kb: 5, gt: 6 })[niv()] + ' begrippen per ronde</span></a>' +
      '<a class="ocard" href="#gatentekst"><b>Gatenteksten</b><span>Per casus een korte tekst met open plekken. Zet het goede begrip op de goede plek.</span><span class="tr">5 casussen</span></a>' +
      '</div></div>';
    document.title = 'Oefenen · Casuscoach';
  };

  /* ---------- Flitskaarten ---------- */
  var FK = { stage: 'setup', set: 'alle', mode: null, queue: [], i: 0, flipped: false, answered: false, picked: null, options: null, first: {}, retry: {} };
  function fkSets() {
    var sets = [{ id: 'alle', label: 'Alle begrippen', list: zichtbareBegrippen() },
      { id: 'todo', label: 'Nog niet gekend', list: zichtbareBegrippen().filter(function (b) { return !gekend(b.n); }) }];
    KEYS.concat(['alg']).forEach(function (k) { sets.push({ id: k, label: UNITS[k], list: zichtbareBegrippen().filter(function (b) { return b.e === k; }) }); });
    CASUS.forEach(function (c) { sets.push({ id: 'c' + c.nr, label: 'Casus ' + c.nr + ': ' + c.kort, list: begrippenVan(c).map(function (n) { return BMAP[n]; }) }); });
    return sets;
  }
  function maskeer(tekst, naam) {
    var out = tekst;
    naam.toLowerCase().split(/[\s\/,]+/).forEach(function (p) {
      p = p.replace(/[^\p{L}-]/gu, '');
      if (p.length < 3 || ['en', 'van', 'de', 'het'].indexOf(p) > -1) return;
      var re;
      if (p.length <= 5) re = new RegExp('(^|[^\\p{L}])(' + reEsc(p) + '(en|s)?)(?![\\p{L}])', 'giu');
      else { var stam = p.length > 7 ? p.slice(0, p.length - 2) : p; re = new RegExp('(^|[^\\p{L}])(\\p{L}*' + reEsc(stam) + '\\p{L}*)', 'giu'); }
      out = out.replace(re, function (m, pre) { return pre + '…'; });
    });
    return out;
  }
  function opties(b) {
    var zelfde = zichtbareBegrippen().filter(function (x) { return x.e === b.e && x.n !== b.n; });
    var rest = zichtbareBegrippen().filter(function (x) { return x.e !== b.e && x.n !== b.n; });
    var gekozen = shuffle(zelfde).slice(0, 3);
    if (gekozen.length < 3) gekozen = gekozen.concat(shuffle(rest).slice(0, 3 - gekozen.length));
    return shuffle(gekozen.map(function (x) { return x.n; }).concat([b.n]));
  }
  function fkStart() {
    var set = fkSets().filter(function (s) { return s.id === FK.set; })[0] || fkSets()[0];
    var list = shuffle(set.list.slice()).sort(function (a, b) { return (S.kaart[a.n] || 0) - (S.kaart[b.n] || 0); });
    if (!list.length) { FK.stage = 'setup'; return false; }
    FK.queue = list.slice(0, 10).map(function (b) { return b.n; });
    FK.i = 0; FK.first = {}; FK.retry = {}; FK.stage = 'card'; fkReset(); return true;
  }
  function fkReset() { FK.flipped = false; FK.answered = false; FK.picked = null; FK.options = null; }
  function fkScore(ok) {
    var n = FK.queue[FK.i];
    if (!(n in FK.first)) FK.first[n] = ok;
    S.kaart[n] = ok ? Math.min(3, (S.kaart[n] || 0) + 1) : 0; sset('kaart', S.kaart);
    if (!ok && !FK.retry[n]) { FK.retry[n] = 1; FK.queue.splice(Math.min(FK.queue.length, FK.i + 4), 0, n); }
  }
  function fkNext() { FK.i++; fkReset(); if (FK.i >= FK.queue.length) FK.stage = 'end'; }
  VIEWS.flitskaarten = function () {
    if (!FK.mode) FK.mode = niv() === 'bb' ? 'meerkeuze' : 'omdraaien';
    var h = '<div class="view">';
    if (FK.stage === 'setup') {
      var sets = fkSets();
      h += '<section class="hello"><p class="eyebrow">Oefenen · niveau ' + esc(N().naam) + '</p><h1>Flitskaarten</h1><p class="lead">Je krijgt tien begrippen. De begrippen die je het minst goed kent, komen eerst. Fout? Dan komt de kaart in dezelfde ronde nog een keer terug.</p></section>' +
        '<section class="block"><h2>Wat wil je oefenen?</h2><div class="setgrid">' + sets.map(function (s) {
          return '<button type="button" class="setbtn" data-act="fk-set" data-set="' + s.id + '" aria-pressed="' + (FK.set === s.id) + '"' + (s.list.length ? '' : ' disabled') + '><span>' + esc(s.label) + '</span><span class="n">' + s.list.length + '</span></button>';
        }).join('') + '</div></section>' +
        '<section class="block"><h2>Hoe wil je oefenen?</h2><div class="modegrid">' +
        '<button type="button" class="modebtn" data-act="fk-mode" data-mode="omdraaien" aria-pressed="' + (FK.mode === 'omdraaien') + '"><b>Omdraaien</b><span>Je ziet het begrip. Bedenk de uitleg en draai de kaart om.</span></button>' +
        '<button type="button" class="modebtn" data-act="fk-mode" data-mode="meerkeuze" aria-pressed="' + (FK.mode === 'meerkeuze') + '"><b>Meerkeuze</b><span>Je leest de uitleg. Kies het begrip dat erbij hoort.</span></button></div></section>' +
        '<div class="row"><button type="button" class="btn" data-act="fk-start">Start met oefenen</button></div>';
    } else if (FK.stage === 'card') {
      var n = FK.queue[FK.i], b = BMAP[n];
      h += '<div class="play"><div class="ptop"><span>Kaart ' + (FK.i + 1) + ' van ' + FK.queue.length + '</span><button type="button" class="linkbtn" data-act="fk-stop">Stoppen</button></div>' + bar(FK.i / FK.queue.length);
      if (FK.mode === 'omdraaien') {
        h += '<article class="fkcard ' + b.e + '"><span class="pill">' + esc(UNITS[b.e]) + '</span><p class="fkname">' + esc(b.n) + '</p>' +
          (FK.flipped ? '<div class="fkback"><p>' + esc(b.d) + '</p><p class="lbl">Voorbeeld</p><p>' + esc(b.v) + '</p>' + (b.x ? '<p class="lbl">Verwar het niet met</p><p>' + esc(b.x) + '</p>' : '') + '</div>'
            : '<p class="muted">Wat betekent dit begrip? Zeg het hardop of bedenk het, en draai de kaart dan om.</p>') + '</article>' +
          (FK.flipped ? '<div class="fkbtns"><button type="button" class="btn bad" data-act="fk-nee">Wist ik nog niet</button><button type="button" class="btn good" data-act="fk-ja">Wist ik</button></div>'
            : '<div class="fkbtns one"><button type="button" class="btn" data-act="fk-flip">Draai om</button></div>');
      } else {
        if (!FK.options) FK.options = opties(b);
        h += '<article class="fkcard"><p class="muted small">Welk begrip hoort bij deze uitleg?</p><p class="fkdef">' + esc(maskeer(b.d, b.n)) + '</p></article>' +
          '<div class="opts">' + FK.options.map(function (o) {
            var cls = ''; if (FK.answered) { if (o === n) cls = ' is-right'; else if (o === FK.picked) cls = ' is-wrong'; }
            return '<button type="button" class="opt' + cls + '" data-act="fk-kies" data-n="' + esc(o) + '"' + (FK.answered ? ' disabled' : '') + '>' + esc(o) + '</button>';
          }).join('') + '</div>';
        if (FK.answered) {
          var ok = FK.picked === n;
          h += '<div class="fb" aria-live="polite"><p class="' + (ok ? 'good' : 'bad') + '"><strong>' + (ok ? 'Goed!' : 'Niet helemaal. Het is: ' + esc(n) + '.') + '</strong> ' + esc(b.d) + '</p>' +
            '<p class="small"><strong>Voorbeeld:</strong> ' + esc(b.v) + '</p><button type="button" class="btn" data-act="fk-verder">' + (FK.i + 1 < FK.queue.length ? 'Volgende kaart' : 'Bekijk je resultaat') + '</button></div>';
        }
      }
      h += '</div>';
    } else {
      var namen = Object.keys(FK.first), goed = namen.filter(function (x) { return FK.first[x]; }), fout = namen.filter(function (x) { return !FK.first[x]; });
      h += '<div class="play"><div class="endcard"><p class="eyebrow">Ronde klaar</p><p class="score">' + goed.length + ' / ' + namen.length + '</p><p>' + (fout.length ? 'Deze begrippen wist je nog niet meteen. Ze komen de volgende keer eerder terug:' : 'Alles in één keer goed. Sterk!') + '</p>' +
        (fout.length ? '<div class="chips">' + fout.map(chip).join('') + '</div>' : '') +
        '<div class="row"><button type="button" class="btn" data-act="fk-again">Nog een ronde</button><button type="button" class="btn ghost" data-act="fk-stop">Iets anders oefenen</button></div></div></div>';
    }
    app.innerHTML = h + '</div>';
    document.title = 'Flitskaarten · Casuscoach';
  };

  /* ---------- Games ---------- */
  var GAME = {};
  var GAMES = {
    'feit-of-mening': { titel: 'Feit of mening?', intro: 'Een feit kun je controleren. Een mening is wat iemand vindt. Alle uitspraken komen uit de casussen van ' + D.jaar + '.', pool: D.feitOfMening,
      opts: [{ key: 'feit', label: 'Feit' }, { key: 'mening', label: 'Mening' }] },
    'welke-bril': { titel: 'Welke bril?', intro: 'Bij welke exameneenheid hoort de uitspraak het best? Kies de bril.', pool: D.welkeBril,
      opts: KEYS.map(function (k) { return { key: k, label: BRIL[k].naam, sub: BRIL[k].eenheid, cls: k }; }) }
  };
  function gameNieuw(id) { GAME[id] = { order: shuffle(GAMES[id].pool.slice()).slice(0, 10), i: 0, score: 0, answered: false, picked: null }; }
  function viewGame(id) {
    var cfg = GAMES[id]; if (!GAME[id]) gameNieuw(id);
    var g = GAME[id], h = '<div class="view"><section class="hello"><p class="eyebrow">Game</p><h1>' + esc(cfg.titel) + '</h1><p class="lead">' + esc(cfg.intro) + '</p></section><div class="play">';
    if (g.i >= g.order.length) {
      var msg = g.score === g.order.length ? 'Foutloos. Sterk!' : g.score >= 7 ? 'Goed bezig. Speel nog een keer met nieuwe uitspraken.' : 'Lees de uitleg nog eens rustig en probeer het opnieuw.';
      h += '<div class="endcard"><p class="eyebrow">Eindscore</p><p class="score">' + g.score + ' / ' + g.order.length + '</p><p>' + msg + '</p>' +
        (S.best[id] != null ? '<p class="small muted">Jouw beste score: ' + S.best[id] + ' van 10</p>' : '') +
        '<div class="row"><button type="button" class="btn" data-act="g-again" data-g="' + id + '">Nog een keer</button><a class="btn ghost" href="#oefenen">Andere oefening</a></div></div>';
    } else {
      var it = g.order[g.i];
      h += '<div class="ptop"><span>Uitspraak ' + (g.i + 1) + ' van ' + g.order.length + '</span><span>Score ' + g.score + '</span></div>' + bar(g.i / g.order.length) +
        '<article class="fkcard"><p class="stmt">' + esc(it.t) + '</p><p class="small muted">Uit casus ' + it.c + ': ' + esc((CASUS[it.c - 1] || {}).kort || '') + '</p></article>' +
        '<div class="opts">' + cfg.opts.map(function (o) {
          var cls = o.cls ? ' ' + o.cls : ''; if (g.answered) { if (o.key === it.a) cls += ' is-right'; else if (o.key === g.picked) cls += ' is-wrong'; }
          return '<button type="button" class="opt' + cls + '" data-act="g-kies" data-g="' + id + '" data-key="' + o.key + '"' + (g.answered ? ' disabled' : '') + '>' + esc(o.label) + (o.sub ? '<small>' + esc(o.sub) + '</small>' : '') + '</button>';
        }).join('') + '</div>';
      if (g.answered) {
        var ok = g.picked === it.a, juist = cfg.opts.filter(function (o) { return o.key === it.a; })[0];
        h += '<div class="fb" aria-live="polite"><p class="' + (ok ? 'good' : 'bad') + '"><strong>' + (ok ? 'Goed!' : 'Niet helemaal. Het is: ' + esc(juist.label) + '.') + '</strong> ' + esc(it.u) + '</p>' +
          '<button type="button" class="btn" data-act="g-next" data-g="' + id + '">' + (g.i + 1 < g.order.length ? 'Volgende' : 'Bekijk je score') + '</button></div>';
      }
    }
    app.innerHTML = h + '</div></div>';
    document.title = cfg.titel + ' · Casuscoach';
  }
  VIEWS['feit-of-mening'] = function () { viewGame('feit-of-mening'); };
  VIEWS['welke-bril'] = function () { viewGame('welke-bril'); };

  /* ---------- Slepen en plaatsen (koppelen en gatenteksten) ---------- */
  var DND = { sel: null, actief: null, stilKlik: 0, focus: null };
  function oefening() { return DND.actief === 'kop' ? KOP : DND.actief === 'gat' ? GAT : null; }
  function herteken() {
    if (DND.actief === 'kop') VIEWS.koppelen(); else if (DND.actief === 'gat') viewGat(GAT.casus);
    if (DND.focus) { var f = $(DND.focus); if (f) f.focus({ preventScroll: true }); DND.focus = null; }
  }
  function gebruikt(ex, id) { return Object.keys(ex.place).some(function (z) { return ex.place[z] === id; }); }
  function plaats(id, zone) {
    var ex = oefening(); if (!ex || ex.checked) return;
    Object.keys(ex.place).forEach(function (z) { if (ex.place[z] === id) delete ex.place[z]; });
    ex.place[zone] = id; DND.sel = null; herteken();
  }
  function chipHTML(id, label, weg) {
    if (weg) return '';
    return '<button type="button" class="dchip" data-chip="' + id + '" aria-pressed="' + (DND.sel === id) + '">' + esc(label) + '</button>';
  }
  function zoneHTML(id, label, cls, leeg) {
    return '<button type="button" class="dzone' + (label ? ' vol' : '') + (cls ? ' ' + cls : '') + '" data-zone="' + id + '">' + (label ? esc(label) : '<span class="leeg">' + esc(leeg) + '</span>') + '</button>';
  }
  var drag = null;
  document.addEventListener('pointerdown', function (e) {
    var c = e.target.closest && e.target.closest('[data-chip]');
    if (!c || (e.pointerType === 'mouse' && e.button !== 0)) return;
    drag = { id: c.getAttribute('data-chip'), x: e.clientX, y: e.clientY, el: c, ghost: null };
  });
  document.addEventListener('pointermove', function (e) {
    if (!drag) return;
    if (!drag.ghost) {
      if (Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y) < 8) return;
      drag.ghost = drag.el.cloneNode(true); drag.ghost.className = 'dchip ghost'; drag.ghost.removeAttribute('data-chip');
      document.body.appendChild(drag.ghost); drag.el.classList.add('dragging');
    }
    e.preventDefault();
    drag.ghost.style.left = (e.clientX - drag.ghost.offsetWidth / 2) + 'px';
    drag.ghost.style.top = (e.clientY - drag.ghost.offsetHeight / 2) + 'px';
    var over = document.elementFromPoint(e.clientX, e.clientY), z = over && over.closest('[data-zone]');
    $$('.dzone.over').forEach(function (x) { if (x !== z) x.classList.remove('over'); });
    if (z) z.classList.add('over');
  }, { passive: false });
  function eindDrag(e, annuleer) {
    if (!drag) return;
    var d = drag; drag = null;
    if (!d.ghost) return;
    d.ghost.remove(); d.el.classList.remove('dragging'); DND.stilKlik = Date.now();
    $$('.dzone.over').forEach(function (x) { x.classList.remove('over'); });
    if (annuleer) return;
    var over = document.elementFromPoint(e.clientX, e.clientY), z = over && over.closest('[data-zone]');
    if (z) plaats(d.id, z.getAttribute('data-zone'));
  }
  document.addEventListener('pointerup', function (e) { eindDrag(e, false); });
  document.addEventListener('pointercancel', function (e) { eindDrag(e, true); });

  /* ---------- Begrippen koppelen ---------- */
  var KOP = { stage: 'setup', set: 'alle', zones: [], bank: [], place: {}, checked: false };
  function kopAantal() { return { bb: 4, kb: 5, gt: 6 }[niv()]; }
  function kopStart() {
    var set = fkSets().filter(function (s) { return s.id === KOP.set; })[0] || fkSets()[0];
    var list = shuffle(set.list.slice()).sort(function (a, b) { return (S.kaart[a.n] || 0) - (S.kaart[b.n] || 0); }).slice(0, kopAantal());
    if (list.length < 2) { KOP.stage = 'setup'; return; }
    KOP.zones = shuffle(list.map(function (b, i) { return { id: 'z' + i, n: b.n }; }));
    KOP.bank = shuffle(list.map(function (b, i) { return { id: 'k' + i, n: b.n }; }));
    KOP.place = {}; KOP.checked = false; KOP.stage = 'play'; DND.sel = null;
  }
  VIEWS.koppelen = function () {
    DND.actief = 'kop';
    var h = '<div class="view"><section class="hello"><p class="eyebrow">Oefenen · niveau ' + esc(N().naam) + '</p><h1>Begrippen koppelen</h1>' +
      '<p class="lead">Sleep elk begrip naar de goede omschrijving. Lukt slepen niet? Tik dan eerst op een begrip en daarna op een vak.</p></section>';
    if (KOP.stage === 'setup') {
      h += '<section class="block"><h2>Welke begrippen wil je oefenen?</h2><div class="setgrid">' + fkSets().map(function (s) {
        return '<button type="button" class="setbtn" data-act="kop-set" data-set="' + s.id + '" aria-pressed="' + (KOP.set === s.id) + '"' + (s.list.length >= 2 ? '' : ' disabled') + '><span>' + esc(s.label) + '</span><span class="n">' + s.list.length + '</span></button>';
      }).join('') + '</div></section><div class="row"><button type="button" class="btn" data-act="kop-start">Start met ' + kopAantal() + ' begrippen</button></div>';
    } else {
      var ok = 0;
      var paren = KOP.zones.map(function (z) {
        var cid = KOP.place[z.id], item = cid ? KOP.bank.filter(function (b) { return b.id === cid; })[0] : null, goed = !!item && item.n === z.n;
        if (KOP.checked && goed) ok++;
        var cls = KOP.checked ? (goed ? 'ok' : 'bad') : '', b = BMAP[z.n];
        return '<li class="pair ' + cls + '">' + zoneHTML(z.id, item ? item.n : '', cls, 'Sleep hier een begrip') + '<p>' + esc(maskeer(b.d, b.n)) + '</p>' +
          (KOP.checked && !goed ? '<p class="small fix">Goed antwoord: ' + chip(z.n) + '</p>' : '') + '</li>';
      }).join('');
      var vol = Object.keys(KOP.place).length === KOP.zones.length;
      h += '<div class="dnd"><div class="bankbox"><p class="lbl">Begrippen</p><div class="chips">' +
        (KOP.bank.map(function (b) { return chipHTML(b.id, b.n, gebruikt(KOP, b.id)); }).join('') || '<span class="small muted">Alle begrippen zijn geplaatst.</span>') + '</div></div>' +
        '<ol class="pairs">' + paren + '</ol>';
      if (!KOP.checked) {
        h += '<div class="row"><button type="button" class="btn" data-act="kop-check"' + (vol ? '' : ' disabled') + '>Controleer</button>' + (vol ? '' : '<span class="small muted">Plaats eerst alle begrippen.</span>') + '<button type="button" class="linkbtn" data-act="kop-stop">Stoppen</button></div>';
      } else {
        var alles = ok === KOP.zones.length;
        h += '<div class="fb" aria-live="polite"><p class="' + (alles ? 'good' : 'bad') + '"><strong>' + ok + ' van de ' + KOP.zones.length + ' goed.</strong> ' + (alles ? 'Alles goed gekoppeld!' : 'Bij de rode vakken zie je het goede begrip. Tik erop voor uitleg.') + '</p>' +
          '<div class="row"><button type="button" class="btn" data-act="kop-again">Nieuwe ronde</button><button type="button" class="btn ghost" data-act="kop-stop">Andere begrippen kiezen</button></div></div>';
      }
      h += '</div>';
    }
    app.innerHTML = h + '</div>';
    document.title = 'Begrippen koppelen · Casuscoach';
  };

  /* ---------- Gatenteksten ---------- */
  var GAT = { key: null, casus: null, item: null, parts: [], gaps: [], bank: [], place: {}, checked: false };
  function gatItem(c) { return (D.gatenteksten || []).filter(function (g) { return g.c === c.nr && g.n.indexOf(niv()) > -1; })[0]; }
  function gatStart(c) {
    var it = gatItem(c);
    GAT.casus = c; GAT.item = it; GAT.key = c.nr + '-' + niv(); GAT.place = {}; GAT.checked = false; DND.sel = null; GAT.parts = []; GAT.gaps = []; GAT.bank = [];
    if (!it) return;
    var re = /\[\[(.+?)\]\]/g, last = 0, mm, i = 0;
    while ((mm = re.exec(it.tekst))) {
      GAT.parts.push({ t: it.tekst.slice(last, mm.index) });
      var a = mm[1].split('='), g = { id: 'g' + (i++), antw: a[0].trim(), begrip: (a[1] || a[0]).trim() };
      GAT.gaps.push(g); GAT.parts.push({ gap: g }); last = re.lastIndex;
    }
    GAT.parts.push({ t: it.tekst.slice(last) });
    var extra = niv() === 'bb' ? [] : niv() === 'kb' ? (it.afleiders || []).slice(0, 2) : (it.afleiders || []);
    GAT.bank = shuffle(GAT.gaps.map(function (g) { return g.antw; }).concat(extra).map(function (w, j) { return { id: 'w' + j, w: w }; }));
  }
  function viewGat(c) {
    DND.actief = 'gat';
    if (GAT.key !== c.nr + '-' + niv()) gatStart(c);
    var h = '<div class="view"><div class="crumbs"><a href="#gatentekst">← Alle gatenteksten</a></div><section class="hello"><p class="eyebrow">Gatentekst · casus ' + c.nr + ' · niveau ' + esc(N().naam) + '</p><h1>' + esc(c.kort) + '</h1>' +
      '<p class="lead">Sleep de woorden naar de goede plek in de tekst. Lukt slepen niet? Tik eerst op een woord en daarna op een open plek.' + (niv() === 'bb' ? '' : ' Let op: er zitten ook woorden tussen die niet passen.') + '</p></section>';
    if (!GAT.item) { app.innerHTML = h + '<p>Voor deze casus staat nog geen gatentekst op dit niveau in inhoud.js.</p></div>'; return; }
    var ok = 0;
    var tekst = GAT.parts.map(function (p) {
      if (!p.gap) return esc(p.t);
      var g = p.gap, cid = GAT.place[g.id], w = cid ? GAT.bank.filter(function (b) { return b.id === cid; })[0] : null;
      var goed = !!w && w.w.toLowerCase() === g.antw.toLowerCase();
      if (GAT.checked && goed) ok++;
      var cls = GAT.checked ? (goed ? 'ok' : 'bad') : '';
      return zoneHTML(g.id, w ? w.w : '', 'inline ' + cls, 'sleep hier') + (GAT.checked && !goed ? '<span class="fixw">→ ' + esc(g.antw) + '</span>' : '');
    }).join('');
    var vol = Object.keys(GAT.place).length === GAT.gaps.length;
    h += '<div class="dnd"><div class="bankbox"><p class="lbl">Woorden</p><div class="chips">' +
      (GAT.bank.map(function (b) { return chipHTML(b.id, b.w, gebruikt(GAT, b.id)); }).join('') || '<span class="small muted">Alle woorden zijn geplaatst.</span>') + '</div></div>' +
      '<article class="reader gaptext"><p>' + tekst + '</p></article>';
    if (!GAT.checked) {
      h += '<div class="row"><button type="button" class="btn" data-act="gat-check"' + (vol ? '' : ' disabled') + '>Controleer</button>' + (vol ? '' : '<span class="small muted">Vul eerst alle open plekken.</span>') + '<button type="button" class="linkbtn" data-act="gat-leeg">Alles leegmaken</button></div>';
    } else {
      var begr = []; GAT.gaps.forEach(function (g) { if (BMAP[g.begrip] && inNiv(BMAP[g.begrip]) && begr.indexOf(g.begrip) < 0) begr.push(g.begrip); });
      var alles = ok === GAT.gaps.length;
      h += '<div class="fb" aria-live="polite"><p class="' + (alles ? 'good' : 'bad') + '"><strong>' + ok + ' van de ' + GAT.gaps.length + ' goed.</strong> ' + (alles ? 'Helemaal goed!' : 'Bij de rode plekken zie je het goede woord.') + '</p>' +
        (GAT.item.uitleg ? '<p>' + esc(GAT.item.uitleg) + '</p>' : '') +
        (begr.length ? '<div class="chips"><span class="small muted">Begrippen uit deze tekst:</span> ' + begr.map(function (n) { return chip(n); }).join('') + '</div>' : '') +
        '<div class="row"><button type="button" class="btn" data-act="gat-opnieuw">Opnieuw proberen</button>' + (CASUS[c.nr] ? '<a class="btn ghost" href="#gatentekst-' + (c.nr + 1) + '">Volgende casus →</a>' : '<a class="btn ghost" href="#oefenen">Andere oefening</a>') + '</div></div>';
    }
    app.innerHTML = h + '</div></div>';
    document.title = 'Gatentekst casus ' + c.nr + ' · Casuscoach';
  }
  VIEWS.gatentekst = function () {
    app.innerHTML = '<div class="view"><section class="hello"><p class="eyebrow">Oefenen · niveau ' + esc(N().naam) + '</p><h1>Gatenteksten</h1>' +
      '<p class="lead">Elke casus heeft een korte tekst met open plekken. Zet het goede begrip op de goede plek.' + (niv() === 'bb' ? '' : ' Op jouw niveau staan er ook woorden in de woordbank die niet passen.') + '</p></section><div class="clist">' +
      CASUS.map(function (c) { return '<a class="ccard wide ' + c.hoofd + '" href="#gatentekst-' + c.nr + '"><span class="cnr">' + c.nr + '</span><span class="cbody"><span class="ctitle">' + esc(c.kort) + '</span><span class="csub">' + esc(c.titel) + '</span></span></a>'; }).join('') + '</div></div>';
    document.title = 'Gatenteksten · Casuscoach';
  };

  /* ---------- Docent ---------- */
  var resetVraag = false;
  VIEWS.docent = function () {
    app.innerHTML = '<div class="view"><section class="hello"><p class="eyebrow">Voor de docent</p><h1>Over Casuscoach</h1></section><div class="prose">' +
      '<p>Casuscoach helpt vmbo-leerlingen zich voor te bereiden op het examen maatschappijleer ' + D.jaar + '. Leerlingen kiezen hun niveau en werken met de vijf casussen, de begrippenlijst en twee games.</p>' +
      '<h2>Waar komt de inhoud vandaan?</h2><ul><li>De casusteksten per niveau komen uit de vakinformatie staatsexamen ' + D.jaar + ' van het College voor Toetsen en Examens (BB, KB en GL-TL).</li>' +
      '<li>De begrippen volgen de begrippenlijst uit dezelfde vakinformatie: 59 voor BB en KB, 62 voor GL/TL.</li>' +
      '<li>De uitleg van begrippen, de analyses per bril, de vragen en de modelantwoorden zijn een eerste versie. Controleer ze met je eigen lesmethode voordat leerlingen ermee werken.</li></ul>' +
      '<h2>Privacy</h2><p>Er is geen account en er wordt niets verstuurd. Niveau, antwoorden en voortgang worden alleen in de browser van de leerling bewaard. Op een gedeelde computer kan een leerling dat hieronder wissen. De site laadt geen bestanden van andere partijen: lettertypen staan op de eigen site en video\'s openen in een nieuw tabblad bij de aanbieder zelf. Ook de instellingen van de Leeshulp blijven op het apparaat.</p>' +
      '<h2>Inhoud aanpassen</h2><ul><li><code>teksten.js</code>: de casusteksten per niveau. Elke regel is een alinea.</li>' +
      '<li><code>inhoud.js</code>: begrippen, moeilijke woorden, brillen, vragen, gatenteksten en de uitspraken van de games.</li>' +
      '<li><code>achtergrond.js</code>: de achtergrondtekst per niveau en de video\'s en bronnen per casus.</li>' +
      '<li>Volgend schooljaar vervang je de vijf casussen in beide bestanden. De rest van de website past zich vanzelf aan.</li></ul>' +
      '<h2>Voortgang wissen</h2><p>Hiermee wis je het niveau, alle antwoorden en de voortgang op dit apparaat.</p>' +
      (resetVraag ? '<div class="confirm"><strong>Weet je het zeker? Dit kun je niet ongedaan maken.</strong><div class="row"><button type="button" class="btn" data-act="reset-ja">Ja, wis alles</button><button type="button" class="btn ghost" data-act="reset-nee">Annuleren</button></div></div>'
        : '<div class="row"><button type="button" class="btn ghost" data-act="reset">Wis mijn voortgang</button></div>') +
      '</div></div>';
    document.title = 'Voor de docent · Casuscoach';
  };

  /* ---------- Klikken en typen ---------- */
  document.addEventListener('click', function (e) {
    var w = e.target.closest('.woord');
    if (w) { showTip(w); return; }
    if (!e.target.closest('#tip')) hideTip();

    var sn = e.target.closest('[data-setniv]');
    if (sn) { setNiveau(sn.getAttribute('data-setniv')); return; }

    var bg = e.target.closest('[data-begrip]');
    if (bg) { openBegrip(bg.getAttribute('data-begrip')); return; }

    var ch = e.target.closest('[data-chip]');
    if (ch) {
      if (Date.now() - DND.stilKlik < 120) return;
      var cid = ch.getAttribute('data-chip');
      DND.sel = DND.sel === cid ? null : cid;
      if (e.detail === 0) DND.focus = '[data-chip="' + cid + '"]';
      herteken(); return;
    }
    var zn = e.target.closest('[data-zone]');
    if (zn) {
      if (Date.now() - DND.stilKlik < 120) return;
      var ex = oefening(); if (!ex || ex.checked) return;
      var zid = zn.getAttribute('data-zone');
      if (e.detail === 0) DND.focus = '[data-zone="' + zid + '"]';
      if (DND.sel) plaats(DND.sel, zid);
      else if (ex.place[zid]) { delete ex.place[zid]; herteken(); }
      return;
    }

    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act');
    switch (act) {
      case 'sluit': sluitDlg(); break;
      case 'kies-niveau': setNiveau(el.getAttribute('data-niv')); break;
      case 'voorlezen': voorlezen(el); break;
      case 'toon': {
        var id = el.getAttribute('data-q');
        $('#m-' + id).hidden = false; $('#tb-' + id).hidden = true;
        break;
      }
      case 'zelf': {
        var q = el.getAttribute('data-q'), val = el.getAttribute('data-val');
        S.zelf[q] = val; sset('zelf', S.zelf);
        $$('.zbtn[data-q="' + q + '"]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-val') === val ? 'true' : 'false'); });
        var st = $('#st-' + q); if (st) { st.className = 'zstat ' + val; st.textContent = ZELF[val]; st.hidden = false; }
        if (huidigeCasus) { var s = stats(huidigeCasus); var qs = $('#qsum'); if (qs) qs.innerHTML = qsumHTML(s); var tc = $('#tabcnt'); if (tc) tc.textContent = s.goed + '/' + s.tot; }
        break;
      }
      case 'filt': bank.filter = el.getAttribute('data-k'); VIEWS.begrippen(); break;
      case 'todo': bank.todo = !bank.todo; VIEWS.begrippen(); break;
      case 'fk-set': FK.set = el.getAttribute('data-set'); VIEWS.flitskaarten(); break;
      case 'fk-mode': FK.mode = el.getAttribute('data-mode'); VIEWS.flitskaarten(); break;
      case 'fk-start': case 'fk-again': fkStart(); VIEWS.flitskaarten(); window.scrollTo(0, 0); break;
      case 'fk-stop': FK.stage = 'setup'; VIEWS.flitskaarten(); window.scrollTo(0, 0); break;
      case 'fk-flip': FK.flipped = true; VIEWS.flitskaarten(); break;
      case 'fk-ja': fkScore(true); fkNext(); VIEWS.flitskaarten(); break;
      case 'fk-nee': fkScore(false); fkNext(); VIEWS.flitskaarten(); break;
      case 'fk-kies': if (!FK.answered) { FK.picked = el.getAttribute('data-n'); FK.answered = true; fkScore(FK.picked === FK.queue[FK.i]); VIEWS.flitskaarten(); } break;
      case 'fk-verder': fkNext(); VIEWS.flitskaarten(); break;
      case 'g-kies': {
        var gid = el.getAttribute('data-g'), g = GAME[gid];
        if (g && !g.answered) { g.picked = el.getAttribute('data-key'); g.answered = true; if (g.picked === g.order[g.i].a) g.score++; viewGame(gid); }
        break;
      }
      case 'g-next': {
        var gid2 = el.getAttribute('data-g'), g2 = GAME[gid2];
        g2.i++; g2.answered = false; g2.picked = null;
        if (g2.i >= g2.order.length && (S.best[gid2] == null || g2.score > S.best[gid2])) { S.best[gid2] = g2.score; sset('best', S.best); }
        viewGame(gid2); break;
      }
      case 'g-again': gameNieuw(el.getAttribute('data-g')); viewGame(el.getAttribute('data-g')); break;
      case 'kop-set': KOP.set = el.getAttribute('data-set'); VIEWS.koppelen(); break;
      case 'kop-start': case 'kop-again': kopStart(); VIEWS.koppelen(); window.scrollTo(0, 0); break;
      case 'kop-check': KOP.checked = true; VIEWS.koppelen(); break;
      case 'kop-stop': KOP.stage = 'setup'; VIEWS.koppelen(); window.scrollTo(0, 0); break;
      case 'gat-check': GAT.checked = true; viewGat(GAT.casus); break;
      case 'gat-leeg': GAT.place = {}; DND.sel = null; viewGat(GAT.casus); break;
      case 'gat-opnieuw': GAT.key = null; viewGat(GAT.casus); window.scrollTo(0, 0); break;
      case 'lh-open': $('#lhBody').innerHTML = lhHTML(); if (typeof lhDlg.showModal === 'function') { if (!lhDlg.open) lhDlg.showModal(); } else lhDlg.setAttribute('open', ''); break;
      case 'lh': {
        var k = el.getAttribute('data-k'), v = el.getAttribute('data-v');
        WG[k] = v === 'true' ? true : v === 'false' ? false : v;
        sset('weergave', WG); pasWeergaveToe(); $('#lhBody').innerHTML = lhHTML();
        var terug = $('#lhBody [data-k="' + k + '"][data-v="' + v + '"]'); if (terug) terug.focus();
        break;
      }
      case 'lh-reset': WG = Object.assign({}, WG_STD); sset('weergave', WG); pasWeergaveToe(); $('#lhBody').innerHTML = lhHTML(); break;
      case 'print': window.print(); break;
      case 'reset': resetVraag = true; VIEWS.docent(); break;
      case 'reset-nee': resetVraag = false; VIEWS.docent(); break;
      case 'reset-ja':
        ['niveau', 'antw', 'zelf', 'kaart', 'best'].forEach(function (k) { try { localStorage.removeItem(PREFIX + k); } catch (err) { } });
        S = { niveau: null, antw: {}, zelf: {}, kaart: {}, best: {} }; FK.stage = 'setup'; FK.mode = null; GAME = {}; KOP.stage = 'setup'; GAT.key = null; resetVraag = false;
        location.hash = 'start'; route(false); break;
    }
  });

  var bewaarTimer = null;
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.matches && t.matches('[data-antw]')) {
      S.antw[t.getAttribute('data-antw')] = t.value;
      var mir = document.querySelector('[data-mirror="' + t.getAttribute('data-antw') + '"]'); if (mir) mir.textContent = t.value;
      clearTimeout(bewaarTimer); bewaarTimer = setTimeout(function () { sset('antw', S.antw); }, 400);
    } else if (t.id === 'bankSearch') {
      bank.query = t.value.trim().toLowerCase();
      var l = $('#bankList'); if (l) l.innerHTML = bankLijst();
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideTip(); });

  route(false);
})();
