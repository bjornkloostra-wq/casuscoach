/*
  INHOUD VAN CASUSCOACH
  ---------------------
  Dit bestand bevat alles wat leerlingen zien, behalve de casusteksten (die staan in teksten.js).
  Je kunt het aanpassen in een gewone teksteditor. Let op: laat de komma's en aanhalingstekens staan.

  Niveaus:      bb = basis, kb = kader, gt = gemengd/theoretisch
  Brillen:      cs = cultuur en socialisatie, sv = sociale verschillen,
                mz = macht en zeggenschap, bs = beeldvorming en stereotypering, alg = algemeen
  Vraagtypen:   R = reproductie, T = toepassing, I = inzicht

  Begrippen in casussen en vragen moeten precies zo geschreven zijn als in de lijst 'begrippen'.
*/
window.INHOUD = {

  jaar: 2027,

  niveaus: {
    bb: { naam: "Basis", lang: "Basisberoepsgerichte leerweg", schriftelijk: 60, begrippen: 59,
          uitleg: "Korte teksten. De app leest voor, legt moeilijke woorden uit en geeft zinsstarters." },
    kb: { naam: "Kader", lang: "Kaderberoepsgerichte leerweg", schriftelijk: 90, begrippen: 59,
          uitleg: "Iets langere teksten met meer cijfers. Vragen over feiten, uitleg en je mening." },
    gt: { naam: "GL/TL", lang: "Gemengde en theoretische leerweg", schriftelijk: 90, begrippen: 62,
          uitleg: "De langste teksten en drie extra begrippen. Meer vragen over politieke stromingen en je eigen mening." }
  },

  brillen: {
    cs: { naam: "Waarden & normen", eenheid: "Cultuur en socialisatie", vraag: "Wat vinden mensen belangrijk, en waar hebben ze dat geleerd?" },
    sv: { naam: "Belangen & positie", eenheid: "Sociale verschillen", vraag: "Wie heeft er voordeel of nadeel van, en vanuit welke positie?" },
    mz: { naam: "Macht & regels", eenheid: "Macht en zeggenschap", vraag: "Wie beslist er, en met welke middelen?" },
    bs: { naam: "Beeld & media", eenheid: "Beeldvorming en stereotypering", vraag: "Welk beeld ontstaat er, en wie maakt dat beeld?" }
  },

  zinsstarters: {
    R: ["In de tekst staat dat …", "Het getal / de naam is …"],
    T: ["Een begrip dat hierbij past is …, want …", "In de tekst staat dat …", "Een voorbeeld daarvan is …"],
    I: ["Ik vind dat …", "Mijn eerste argument is …", "Mijn tweede argument is …", "Iemand anders zou kunnen zeggen dat …, maar …"]
  },

  /* ------------------------------------------------------------------ */
  /* BEGRIPPEN: naam, bril (e), omschrijving (d), voorbeeld (v),         */
  /* verwar niet met (x, mag leeg), alleen GL/TL (gt: true)              */
  /* ------------------------------------------------------------------ */
  begrippen: [
    { n: "aangeleerde/aangeboren eigenschappen", e: "cs", d: "Aangeboren eigenschappen heb je al bij je geboorte, zoals je oogkleur of aanleg voor sport. Aangeleerde eigenschappen leer je van anderen, zoals je taal of je manieren.", v: "Lang zijn is aangeboren. 'Dank je wel' zeggen heb je aangeleerd." },
    { n: "actiegroep", e: "mz", d: "Een groep mensen die samen actie voert voor één bepaald doel, meestal voor korte tijd.", v: "Ouders die handtekeningen verzamelen voor een veilige fietsroute naar school.", x: "Een politieke partij doet mee aan verkiezingen en heeft ideeën over álle onderwerpen. Een actiegroep wil één ding bereiken." },
    { n: "beeldvorming", e: "bs", d: "Het beeld dat je in je hoofd krijgt van een groep, een persoon of een onderwerp. Dat beeld ontstaat door wat je ziet, hoort en leest, bijvoorbeeld via (sociale) media.", v: "Door koppen als 'Gen Z is lui' krijgen mensen het beeld dat jongeren niet willen werken." },
    { n: "belangen", e: "sv", d: "Dat wat goed of voordelig is voor jou of voor een groep.", v: "Een werkgever heeft belang bij flexibele contracten. Een jonge werknemer heeft belang bij zekerheid." },
    { n: "belangengroep", e: "sv", d: "Een organisatie die lange tijd opkomt voor de belangen van een bepaalde groep mensen.", v: "Vakbond CNV komt op voor werknemers. De ANWB komt op voor weggebruikers.", x: "Een actiegroep bestaat vaak maar kort en wil één doel bereiken." },
    { n: "christendemocratie", e: "mz", d: "Politieke stroming die uitgaat van christelijke waarden, zoals naastenliefde en zorg voor elkaar. Gezin, kerk en verenigingen dragen veel verantwoordelijkheid; de overheid hoeft niet alles te regelen.", v: "Het CDA en de ChristenUnie horen bij deze stroming." },
    { n: "compromis", e: "mz", d: "Een oplossing waarbij beide partijen iets toegeven, zodat ze samen tot een besluit komen. In Nederland ontstaan veel politieke besluiten zo.", v: "Partij A wil een verbod, partij B wil niets regelen. Samen kiezen ze voor een verbod op school, maar niet thuis." },
    { n: "cultuur", e: "cs", d: "Alles wat mensen in een samenleving van elkaar leren en met elkaar delen: waarden, normen, gewoonten, taal en kennis.", v: "In Nederland is het normaal om op de fiets naar school te gaan." },
    { n: "cultuuroverdracht", e: "cs", d: "Het doorgeven van cultuur (waarden, normen, kennis en gewoonten) aan de volgende generatie. Dat is een taak van gezin en onderwijs.", v: "Op school leer je over de Grondwet en over feestdagen als Koningsdag." },
    { n: "democratie", e: "mz", d: "Een staatsvorm waarin het volk de macht heeft. Burgers kiezen in vrije verkiezingen wie hen vertegenwoordigt en hebben grondrechten. Besluiten worden met een meerderheid van stemmen genomen.", v: "Vanaf 18 jaar mag je stemmen voor de Tweede Kamer.", x: "In een dictatuur heeft één persoon of een kleine groep alle macht." },
    { n: "dictatuur", e: "mz", d: "Een staatsvorm waarin één persoon of een kleine groep alle macht heeft. Er zijn geen eerlijke verkiezingen en mensen hebben weinig vrijheid.", v: "Wie kritiek heeft op de leider, kan worden opgepakt. Kranten mogen niet alles schrijven." },
    { n: "discriminatie", e: "bs", d: "Mensen ongelijk behandelen om een kenmerk dat er niet toe doet, zoals afkomst, geloof, geslacht of leeftijd. Discriminatie is gedrag en is in Nederland verboden (artikel 1 van de Grondwet).", v: "Een sollicitant wordt niet uitgenodigd vanwege haar achternaam.", x: "Een vooroordeel is een gedachte. Discriminatie is wat je doet." },
    { n: "dominante cultuur", e: "cs", gt: true, d: "De cultuur van de grootste of machtigste groep in een samenleving. Die bepaalt vaak wat als 'normaal' wordt gezien.", v: "Dat winkels op zondag vroeger dicht waren, komt uit de christelijke cultuur die in Nederland lang dominant was." },
    { n: "emancipatie", e: "cs", d: "Het proces waarbij een achtergestelde groep dezelfde rechten en kansen krijgt als anderen.", v: "Vrouwen in Nederland mogen sinds 1919 stemmen." },
    { n: "etnische afkomst", e: "sv", d: "De groep waar je bij hoort door de herkomst van jou of je (voor)ouders: land, taal, cultuur en geschiedenis.", v: "Iemand met Marokkaanse, Surinaamse of Poolse roots." },
    { n: "extreemrechts", e: "mz", d: "Politieke stroming die het eigen volk en de eigen cultuur boven andere groepen stelt. Extreemrechtse groepen zijn fel tegen immigratie en hebben vaak weinig respect voor gelijke rechten van iedereen.", v: "Een groep die vindt dat alleen 'echte Nederlanders' dezelfde rechten mogen hebben." },
    { n: "feit", e: "bs", d: "Iets wat waar is en wat je kunt controleren.", v: "'1 op de 6 Nederlanders krijgt huidkanker.'", x: "Een mening is wat iemand ergens van vindt. Die kun je niet bewijzen." },
    { n: "formele macht", e: "mz", d: "Macht die je hebt door je functie en die in regels of wetten is vastgelegd.", v: "Een politieagent mag je een boete geven. Een minister mag wetten voorstellen.", x: "Informele macht staat niet op papier, maar komt door bijvoorbeeld populariteit of kennis." },
    { n: "gender", e: "sv", gt: true, d: "Hoe iemand zich voelt en gedraagt als man, vrouw of daartussen, en wat een samenleving 'mannelijk' of 'vrouwelijk' vindt. Gender is grotendeels aangeleerd en verschilt per tijd en plaats.", v: "Het idee dat meisjes beter kunnen zorgen en jongens beter zijn in techniek.", x: "Sekse is biologisch (je lichaam). Gender gaat over rollen en identiteit." },
    { n: "geschreven/ongeschreven regels", e: "mz", d: "Geschreven regels staan op papier, zoals wetten en het schoolreglement. Ongeschreven regels staan nergens, maar bijna iedereen kent ze. Dat zijn normen.", v: "Geschreven: een helmplicht. Ongeschreven: je laat een oudere voorgaan." },
    { n: "gezag", e: "mz", d: "Macht die mensen accepteren, omdat ze vinden dat iemand die macht terecht heeft.", v: "Je luistert naar een arts omdat je hem of haar deskundig vindt.", x: "Macht kan ook tegen je zin zijn. Gezag accepteer je." },
    { n: "grondwet", e: "mz", d: "De belangrijkste wet van Nederland. Er staan grondrechten in, zoals vrijheid van meningsuiting, en regels over hoe de staat werkt.", v: "Artikel 1: iedereen moet in gelijke gevallen gelijk worden behandeld." },
    { n: "identificatie", e: "cs", d: "Je wilt lijken op iemand die je bewondert. Daarom neem je zijn of haar gedrag, kleding of mening over.", v: "Een jongere stopt met insmeren omdat haar favoriete influencer dat ook doet.", x: "Bij imitatie doe je alleen gedrag na. Bij identificatie wil je zijn zoals die persoon." },
    { n: "imitatie", e: "cs", d: "Gedrag nadoen dat je bij anderen ziet.", v: "Een kleuter poetst zijn tanden zoals hij het zijn vader ziet doen." },
    { n: "individuele/collectieve belangen", e: "sv", d: "Een individueel belang is goed voor één persoon. Een collectief belang is goed voor een hele groep of voor de samenleving.", v: "Individueel: zelf beslissen over je lichaam. Collectief: genoeg donororganen voor patiënten." },
    { n: "informele macht", e: "mz", d: "Macht die niet in regels staat, maar ontstaat door bijvoorbeeld kennis, populariteit of persoonlijkheid.", v: "Een influencer met een miljoen volgers bepaalt mee wat jongeren normaal vinden." },
    { n: "liberalisme", e: "mz", d: "Politieke stroming waarin de vrijheid van het individu centraal staat. De overheid moet zich zo weinig mogelijk bemoeien met het leven van mensen; iedereen is zelf verantwoordelijk.", v: "'Ouders moeten zelf bepalen wanneer hun kind een telefoon krijgt.' De VVD hoort bij deze stroming." },
    { n: "maatschappelijk probleem", e: "alg", d: "Een probleem dat veel mensen raakt, waar mensen verschillend over denken, en waarvoor de overheid vaak een oplossing moet zoeken.", v: "De helft van de jongeren beweegt te weinig." },
    { n: "maatschappelijke ladder", e: "sv", d: "Een denkbeeldige ladder die laat zien hoe hoog iemand staat in de samenleving, door opleiding, beroep, inkomen en status.", v: "Een medisch specialist staat hoger op de ladder dan een vakkenvuller." },
    { n: "maatschappelijke positie", e: "sv", d: "De plek die je hebt in de samenleving. Die hangt af van je opleiding, beroep, inkomen, bezit en status.", v: "Een jongere met een flexcontract heeft een zwakkere positie dan iemand met een vast contract." },
    { n: "macht", e: "mz", d: "Het vermogen om het gedrag van anderen te bepalen, ook als zij dat niet willen.", v: "Een werkgever bepaalt hoeveel uur je mag werken.", x: "Gezag is macht die mensen accepteren." },
    { n: "machtsmiddelen", e: "mz", d: "De middelen waarmee je macht kunt uitoefenen: aantal (veel mensen), geweld, functie, kennis en geld.", v: "1400 artsen sturen samen een brief. Ze gebruiken kennis én aantal." },
    { n: "massamedia", e: "bs", d: "Media die heel veel mensen tegelijk bereiken, zoals tv, radio, kranten en nieuwswebsites.", v: "Het NOS Journaal en NU.nl." },
    { n: "mening", e: "bs", d: "Wat iemand ergens van vindt. Een mening is persoonlijk en kun je niet bewijzen.", v: "'Generatie Z is lui.'", x: "Een feit kun je controleren." },
    { n: "normbesef", e: "mz", d: "Het gevoel van wat wel en niet hoort. Je houdt je aan een regel omdat je zelf vindt dat het zo hoort, ook als niemand kijkt.", v: "Je zet je fiets netjes in het rek, ook als er geen handhaver is." },
    { n: "overheidsbeleid", e: "mz", d: "De plannen en maatregelen van de overheid om een probleem aan te pakken.", v: "Een helmplicht voor fatbikes, of een richtlijn voor schermgebruik." },
    { n: "parlementaire democratie", e: "mz", gt: true, d: "Een democratie waarin het volk een parlement kiest. In Nederland zijn dat de Tweede en Eerste Kamer. Het parlement maakt samen met de regering wetten en controleert de regering.", v: "Een meerderheid van de Tweede Kamer steunde het plan om smartphones op middelbare scholen te weren." },
    { n: "persoonlijkheidsvorming", e: "cs", d: "Een functie van gezin, school en media: ze helpen je een eigen persoonlijkheid te ontwikkelen, met een eigen mening, zelfvertrouwen en zelfstandigheid.", v: "In de klas oefen je met een debat en leer je je mening te onderbouwen." },
    { n: "politieke agenda", e: "mz", d: "De lijst met onderwerpen waar de politiek (regering en parlement) zich mee bezighoudt.", v: "Door de brief van 1400 artsen en veel aandacht in de media kwam schermgebruik van kinderen op de politieke agenda." },
    { n: "politieke partij", e: "mz", d: "Een organisatie van mensen met dezelfde idealen. Een partij doet mee aan verkiezingen om in het parlement of de gemeenteraad te komen en zo over alle onderwerpen mee te beslissen.", v: "Partijen in de Tweede Kamer, zoals de VVD, het CDA, de SP en GroenLinks-PvdA.", x: "Een actiegroep of pressiegroep doet niet mee aan verkiezingen." },
    { n: "politieke stromingen", e: "mz", d: "Groepen van ideeën over hoe de samenleving eruit moet zien. De belangrijkste zijn liberalisme, socialisme (sociaaldemocratie), christendemocratie, de ecologische stroming en extreemrechts.", v: "Liberalen willen veel vrijheid, socialisten veel gelijkheid." },
    { n: "positieve actie", e: "sv", d: "Een maatregel waarbij iemand uit een achtergestelde groep voorrang krijgt, als hij of zij even geschikt is als een andere kandidaat.", v: "Bij twee even goede sollicitanten kiest een bedrijf met weinig vrouwelijke technici voor de vrouw." },
    { n: "rechten en plichten", e: "mz", d: "Rechten zijn dingen die je mag of waar je recht op hebt. Plichten zijn dingen die je moet.", v: "Recht: onderwijs, en stemmen vanaf 18 jaar. Plicht: de leerplicht, en vanaf 14 jaar een identiteitsbewijs kunnen laten zien." },
    { n: "rolpatroon", e: "bs", d: "De verwachtingen die een samenleving heeft over het gedrag van mannen en vrouwen, of jongens en meisjes.", v: "Het traditionele idee dat de man werkt en de vrouw voor de kinderen zorgt." },
    { n: "samenleving", e: "alg", d: "Alle mensen die samen in een land of gebied wonen en met elkaar te maken hebben, met hun regels en organisaties.", v: "De Nederlandse samenleving." },
    { n: "selectie", e: "cs", d: "1. Functie van het onderwijs: leerlingen worden verdeeld over niveaus en opleidingen. 2. In de media: de keuze welk nieuws wel en niet wordt getoond.", v: "Na groep 8 ga je naar vmbo, havo of vwo. Een redactie kiest welke berichten in het journaal komen." },
    { n: "selectieve waarneming", e: "bs", d: "Je ziet en onthoudt vooral informatie die past bij wat je al dacht. De rest valt je minder op.", v: "Wie denkt dat jongeren lui zijn, onthoudt vooral die ene jongen die niet kwam opdagen." },
    { n: "sociaal milieu", e: "sv", d: "De sociale groep waarin je opgroeit. Die wordt bepaald door de opleiding, het beroep, het inkomen en de gewoonten van je ouders.", v: "Kinderen uit gezinnen met weinig geld sporten minder vaak bij een club." },
    { n: "sociale controle", e: "mz", d: "Mensen letten op elkaars gedrag en spreken elkaar aan als iemand zich niet aan de normen houdt.", v: "In een klein dorp weet iedereen wie zich niet aan de regels houdt." },
    { n: "sociale media", e: "bs", d: "Online platforms waarop gebruikers zelf berichten, foto's en video's maken en delen, zoals TikTok, Instagram en Snapchat.", v: "Een TikTokker die zegt dat insmeren niet nodig is." },
    { n: "sociale mobiliteit", e: "sv", d: "Stijgen of dalen op de maatschappelijke ladder.", v: "Een kind van ouders zonder diploma wordt verpleegkundige: dat is stijgen." },
    { n: "sociale verschillen/ongelijkheid", e: "sv", d: "Verschillen tussen mensen in inkomen, opleiding, status of macht, waardoor de ene groep meer kansen heeft dan de andere.", v: "Jongeren uit gezinnen met minder geld bewegen gemiddeld minder." },
    { n: "socialisatieproces", e: "cs", d: "Het proces waarin je leert hoe je je in de samenleving moet gedragen. Je leert waarden, normen en gewoonten van je gezin, school, vrienden en media. Dat gaat je hele leven door.", v: "Je leert thuis dat je niet met je telefoon aan tafel zit." },
    { n: "socialiserende instituties", e: "cs", d: "Groepen en organisaties die je vormen en opvoeden, zoals het gezin, de school, vrienden, (sociale) media, het geloof, de sportclub en je werk.", v: "Ouders die hun kind verschillende sporten laten proberen." },
    { n: "socialisme", e: "mz", d: "Politieke stroming waarin gelijkheid en solidariteit centraal staan. De overheid moet zorgen dat geld en kansen eerlijk verdeeld zijn en zwakkere groepen beschermen. Sociaaldemocratie is een gematigde vorm.", v: "'De overheid moet zorgen dat jongeren een vast contract krijgen.' De SP en GroenLinks-PvdA horen bij deze stroming." },
    { n: "status", e: "sv", d: "Het aanzien of de waardering die iemand krijgt van anderen, bijvoorbeeld door beroep, bezit of populariteit.", v: "Een arts heeft veel status. Bij jongeren heeft een influencer met veel volgers dat ook." },
    { n: "stereotype", e: "bs", d: "Een vast, simpel beeld van een groep, waarbij je alle leden van die groep dezelfde eigenschappen geeft.", v: "'Jongeren zitten de hele dag op hun telefoon.'", x: "Een vooroordeel is een (vaak negatief) oordeel zonder dat je de feiten kent. Een stereotype is het vaste beeld zelf." },
    { n: "subcultuur", e: "cs", d: "Een groep binnen de samenleving met eigen waarden, normen, kleding, taal of muziek, naast de cultuur van de meeste mensen.", v: "Gamers, skaters, of een streng gelovige gemeenschap." },
    { n: "tijd- en plaatsgebonden regels", e: "mz", d: "Regels en normen verschillen per periode en per land of plek.", v: "Alcohol kopen mocht vroeger vanaf 16 jaar, sinds 2014 pas vanaf 18. In Australië mogen kinderen onder de 16 sinds eind 2025 wettelijk geen sociale-media-account hebben; in Nederland is het een advies." },
    { n: "vooroordelen", e: "bs", d: "Een (vaak negatief) oordeel over een groep of persoon, terwijl je die niet echt kent of de feiten niet kent.", v: "'Die jongeren willen toch niet werken', zonder het onderzoek te kennen." },
    { n: "waarden en normen", e: "cs", d: "Waarden zijn dingen die je belangrijk vindt, zoals gezondheid, vrijheid of eerlijkheid. Normen zijn regels over hoe je je hoort te gedragen. Normen komen voort uit waarden.", v: "Waarde: gezondheid. Norm: je smeert je in als je lang in de zon zit." },
    { n: "wet", e: "mz", d: "Een geschreven regel die de overheid (regering en parlement) heeft gemaakt en die voor iedereen geldt. Wie een wet overtreedt, kan straf krijgen.", v: "De Donorwet. Een richtlijn is géén wet: dat is een advies." }
  ],

  /* ------------------------------------------------------------------ */
  /* CASUSSEN. Vragen: t = type, n = niveaus, q = vraag, a = modelantwoord, */
  /* b = begrippen bij de vraag, tip = waar let de examinator op (mag leeg) */
  /* ------------------------------------------------------------------ */
  casussen: [
    {
      nr: 1, kort: "Donor of niet?", hoofd: "cs",
      titel: "Meer mensen zijn automatisch donor doordat ze geen keuze maken",
      bron: { medium: "RTL Nieuws", url: "https://www.rtl.nl/nieuws/binnenland/artikel/5533241/aantal-donorregistraties-gestegen-naar-81-miljoen-jongeren-geven" },
      probleem: "Bijna een kwart van de volwassenen is donor zonder er zelf voor te kiezen. Sinds de Donorwet van 2020 word je als 'geen bezwaar' geregistreerd als je niets invult. Vooral jongeren en mannen geven geen keuze door.",
      verder: [
        { t: "Donorregister", u: "https://www.donorregister.nl" },
        { t: "Nederlandse Transplantatie Stichting", u: "https://www.transplantatiestichting.nl" },
        { t: "CBS", u: "https://www.cbs.nl" }
      ],
      woorden: [
        { w: "Donorregister", u: "Een lijst van de overheid waarin staat of iemand wel of geen orgaandonor wil zijn." },
        { w: "orgaandonatie", u: "Na je dood organen, zoals je nieren of hart, geven aan iemand die ziek is." },
        { w: "geregistreerd", u: "Ingeschreven in een officiële lijst." },
        { w: "toestemming", u: "Zeggen dat iets mag." },
        { w: "bezwaar", u: "Als je ergens bezwaar tegen hebt, ben je het er niet mee eens." },
        { w: "CBS", u: "Centraal Bureau voor de Statistiek: de organisatie die cijfers over Nederland verzamelt." },
        { w: "dierbaren", u: "Mensen van wie je veel houdt, zoals familie." },
        { w: "koploper", u: "Degene die het hoogst scoort." },
        { w: "gemeente", u: "Een stad of dorp met een eigen bestuur: een burgemeester en een gemeenteraad." },
        { w: "uitdrukkelijk", u: "Heel duidelijk gezegd." },
        { w: "expliciete", u: "Duidelijk en uitdrukkelijk gezegd." },
        { w: "naaste", u: "Iemand die dicht bij je staat, zoals een partner of familielid." }
      ],
      brillen: {
        cs: { t: "Zelf beslissen over je lichaam (zelfbeschikking) staat tegenover anderen helpen (solidariteit). In Urk en Neder-Betuwe, waar het geloof voor veel mensen belangrijk is, staan minder mensen als donor geregistreerd en laat men vaker de familie beslissen. Die waarden leer je via gezin en kerk.", b: ["waarden en normen", "socialisatieproces", "socialiserende instituties", "subcultuur", "dominante cultuur"] },
        sv: { t: "Patiënten op de wachtlijst hebben belang bij zoveel mogelijk donoren: een collectief belang. Iemand die zelf wil kiezen, heeft een individueel belang. Ook tussen groepen zijn er verschillen: mannen en jongeren van 18 tot 25 jaar geven minder vaak een keuze door.", b: ["individuele/collectieve belangen", "belangen", "belangengroep", "sociale verschillen/ongelijkheid"] },
        mz: { t: "De overheid heeft met de Donorwet bepaald wat er gebeurt als je niets kiest. Die wet kwam er via de Tweede en Eerste Kamer, met een meerderheid van stemmen. Iedereen houdt het recht om zelf 'ja' of 'nee' in te vullen.", b: ["wet", "overheidsbeleid", "formele macht", "democratie", "parlementaire democratie", "rechten en plichten", "politieke stromingen"] },
        bs: { t: "Wie geen keuze maakt, doet dat vaak uit onwetendheid of uitstel. Over orgaandonatie gaan ook fabels rond. De kop 'automatisch donor' kan het beeld geven dat de overheid voor je beslist, terwijl je je keuze altijd kunt veranderen.", b: ["beeldvorming", "feit", "mening", "massamedia"] }
      },
      vragen: [
        { t: "R", n: ["bb", "kb", "gt"], q: "Hoeveel procent van de volwassenen staat als donor geregistreerd? Hoe is dat verdeeld?", a: "58 procent. 34 procent heeft zelf toestemming gegeven en 24 procent staat op 'geen bezwaar', omdat ze geen keuze hebben doorgegeven." },
        { t: "R", n: ["bb", "kb", "gt"], q: "Wat gebeurt er als je zelf geen keuze doorgeeft aan het Donorregister?", a: "Dan word je geregistreerd als 'geen bezwaar tegen orgaandonatie'. Je bent dan dus automatisch donor. Je kunt je keuze altijd nog veranderen." },
        { t: "T", n: ["bb", "kb", "gt"], q: "Is dit een maatschappelijk probleem? Leg uit.", a: "Ja. Het raakt veel mensen (patiënten die op een orgaan wachten en hun families), mensen denken er verschillend over (zelf kiezen of anderen helpen) en de overheid heeft er een wet voor gemaakt.", b: ["maatschappelijk probleem"], tip: "Noem de kenmerken van een maatschappelijk probleem en koppel ze aan de casus." },
        { t: "T", n: ["bb", "kb", "gt"], q: "Welke twee waarden staan in deze discussie tegenover elkaar?", a: "Zelfbeschikking of vrijheid ('ik beslis zelf over mijn lichaam') tegenover solidariteit of naastenliefde ('na mijn dood help ik iemand anders'). Ook geloof kan een rol spelen.", b: ["waarden en normen"] },
        { t: "T", n: ["kb", "gt"], q: "Op Urk staan veel minder mensen als donor geregistreerd dan in Groningen. Hoe kun je dat verklaren met het socialisatieproces?", a: "Je leert waarden en normen van je gezin, je kerk en je school. In een gemeenschap waar het geloof belangrijk is, leer je bijvoorbeeld dat je lichaam na de dood heel moet blijven of dat de familie beslist. Die waarden neem je over.", b: ["socialisatieproces", "socialiserende instituties", "subcultuur"] },
        { t: "I", n: ["bb", "kb", "gt"], q: "Vind jij dat je automatisch donor moet zijn als je geen keuze maakt? Geef twee argumenten.", a: "Eigen mening. Voor: er komen meer organen beschikbaar, dus er worden meer levens gered, en je kunt altijd 'nee' invullen. Tegen: niets zeggen is geen toestemming, en je lichaam is van jou." },
        { t: "I", n: ["gt"], q: "Hoe zouden aanhangers van de christendemocratie en van het socialisme naar de Donorwet kijken?", a: "Christendemocratie: doneren is een bewuste gift uit naastenliefde; niets zeggen is geen 'ja', en de familie hoort mee te beslissen. CDA en ChristenUnie waren daarom tegen de wet. Socialisme: solidariteit staat voorop; zoveel mogelijk levens redden weegt zwaar, dus eerder voor.", b: ["christendemocratie", "socialisme", "politieke stromingen"] }
      ]
    },
    {
      nr: 2, kort: "Gen Z is niet lui", hoofd: "bs",
      titel: "Jongeren willen juist meer werken: “Generatie Z is niet lui”",
      bron: { medium: "NU.nl", url: "https://www.nu.nl/uit-andere-media/6400418/jongeren-willen-meer-werken-dat-gen-z-lui-is-klopt-niks-van.html" },
      probleem: "Meer dan twee derde van de jongeren onder de 30 wil fulltime werken, maar maar 53 procent heeft zo'n contract. Werkgevers geven liever kleine en flexibele contracten. Tegelijk bestaat het beeld dat Generatie Z lui is.",
      verder: [
        { t: "Rijksoverheid", u: "https://www.rijksoverheid.nl" },
        { t: "CNV", u: "https://www.cnv.nl" },
        { t: "CBS", u: "https://www.cbs.nl" }
      ],
      woorden: [
        { w: "fulltime", u: "De hele week werken, ongeveer 36 tot 40 uur." },
        { w: "misverstand", u: "Iets wat mensen verkeerd begrijpen." },
        { w: "vast contract", u: "Een contract zonder einddatum. Dat geeft meer zekerheid." },
        { w: "flexibel contract", u: "Een contract zonder vaste uren of voor korte tijd. Je weet niet zeker hoeveel je gaat verdienen." },
        { w: "flexcontracten", u: "Contracten zonder vaste uren of voor korte tijd. Je weet niet zeker hoeveel je gaat verdienen." },
        { w: "contract", u: "Een afspraak op papier tussen werkgever en werknemer, bijvoorbeeld over het aantal uren en het loon." },
        { w: "loondienst", u: "Je werkt voor een baas en krijgt daarvoor loon." },
        { w: "sectoren", u: "Delen van de economie, zoals de zorg of de horeca." },
        { w: "horeca", u: "Hotels, restaurants en cafés." },
        { w: "personeelstekort", u: "Er zijn te weinig mensen om al het werk te doen." },
        { w: "tekort aan personeel", u: "Er zijn te weinig mensen om al het werk te doen." },
        { w: "hoogleraar", u: "Een professor: de hoogste docent en onderzoeker aan een universiteit." },
        { w: "efficiëntie", u: "Zo veel mogelijk doen met zo weinig mogelijk tijd en geld." },
        { w: "vakbond", u: "Een organisatie die opkomt voor de belangen van werknemers." },
        { w: "rechter", u: "Iemand die bij een conflict volgens de wet beslist wie gelijk heeft." },
        { w: "afdwingen", u: "Iets voor elkaar krijgen, ook als de ander niet wil." },
        { w: "huurwoning", u: "Een huis waarvoor je elke maand huur betaalt aan de eigenaar." }
      ],
      brillen: {
        cs: { t: "Hard werken is in Nederland een belangrijke waarde; wie weinig uren werkt, krijgt al snel het etiket 'lui'. Werkgevers vinden flexibiliteit en efficiëntie belangrijk, werknemers zekerheid. Ook je werk is een socialiserende institutie: daar leer je wat 'normaal' is.", b: ["waarden en normen", "cultuur", "socialiserende instituties"] },
        sv: { t: "Werkgevers willen kosten besparen en weinig risico als iemand ziek wordt. Jonge werknemers willen meer uren, een zeker inkomen en een vast contract, bijvoorbeeld om een huis te kunnen huren. Dat zijn tegengestelde belangen. Vakbond CNV komt op voor de werknemers.", b: ["belangen", "individuele/collectieve belangen", "belangengroep", "maatschappelijke positie", "sociale mobiliteit"] },
        mz: { t: "De werkgever heeft meer macht door zijn functie en geld. De Wet flexibel werken geeft werknemers het recht om meer uren te vragen, maar jongeren durven dat vaak niet of vinden naar de rechter gaan te moeilijk. De vakbond gebruikt het aantal leden en kennis als machtsmiddelen.", b: ["macht", "machtsmiddelen", "wet", "rechten en plichten", "socialisme", "liberalisme"] },
        bs: { t: "'Generatie Z is lui' is een stereotype over een hele groep. Een onderzoek onder 88.000 werknemers laat iets anders zien. Zo'n beeld blijft hangen doordat het steeds wordt herhaald; door selectieve waarneming zie je vooral voorbeelden die erbij passen.", b: ["stereotype", "vooroordelen", "beeldvorming", "feit", "mening", "selectieve waarneming"] }
      },
      vragen: [
        { t: "R", n: ["bb", "kb", "gt"], q: "Hoeveel jongeren onder de 30 willen een fulltime contract, en hoeveel hebben er een?", a: "Meer dan twee derde wil fulltime werken, maar maar 53 procent heeft zo'n contract." },
        { t: "R", n: ["bb", "kb", "gt"], q: "Waarom geven werkgevers vaak kleine contracten?", a: "Om geld te besparen en minder risico te lopen als iemand ziek wordt." },
        { t: "T", n: ["bb", "kb", "gt"], q: "Is 'Generatie Z is lui' een feit of een mening? Leg uit.", a: "Een mening. Het is een oordeel over een hele groep (een stereotype) en het is niet te bewijzen. Het onderzoek onder 88.000 werknemers laat juist zien dat veel jongeren méér willen werken.", b: ["feit", "mening", "stereotype"] },
        { t: "T", n: ["bb", "kb", "gt"], q: "Welke tegengestelde belangen hebben een werkgever en een jonge werknemer?", a: "Werkgever: flexibiliteit, lage kosten en weinig risico. Jonge werknemer: meer uren, een zeker inkomen en een vast contract, bijvoorbeeld om een huurwoning te krijgen.", b: ["belangen"] },
        { t: "T", n: ["kb", "gt"], q: "De Wet flexibel werken bestaat al. Waarom helpt die jongeren niet altijd?", a: "Het is moeilijk om je baas om meer uren te vragen, omdat je van hem afhankelijk bent. Naar de rechter gaan is voor jonge werknemers lastig. In de GL/TL-tekst staat ook: de wet is te onbekend.", b: ["wet", "macht"] },
        { t: "T", n: ["bb", "kb", "gt"], q: "Welke machtsmiddelen kan de vakbond gebruiken om op te komen voor jongeren?", a: "Aantal: veel leden, en eventueel staken. Kennis: onderzoek en juristen. Daarnaast media-aandacht en gesprekken met politici.", b: ["machtsmiddelen", "belangengroep"] },
        { t: "I", n: ["bb", "kb", "gt"], q: "Moet de overheid werkgevers verplichten om jongeren vaker een vast contract te geven?", a: "Eigen mening. Voor: jongeren krijgen zekerheid en kunnen makkelijker een huis huren. Tegen: werkgevers verliezen flexibiliteit en nemen misschien minder mensen aan." },
        { t: "I", n: ["gt"], q: "Hoe kijken het socialisme en het liberalisme naar dit probleem?", a: "Socialisme: de overheid moet werknemers beschermen tegen onzekerheid, dus regels voor meer vaste contracten. Liberalisme: werkgevers en werknemers maken zelf afspraken; de overheid bemoeit zich er zo weinig mogelijk mee.", b: ["socialisme", "liberalisme", "politieke stromingen"] }
      ]
    },
    {
      nr: 3, kort: "Zonnebrand en TikTok", hoofd: "bs",
      titel: "1 op de 6 Nederlanders krijgt huidkanker, maar steeds meer jongeren smeren zich niet in",
      bron: { medium: "KRO-NCRV Brandpunt+", url: "https://kro-ncrv.nl/programmas/brandpuntplus/zonnebrandcreme-kankerverwekkend" },
      probleem: "Huidkanker is de meest voorkomende vorm van kanker in Nederland. Toch geloven steeds meer jongeren influencers die zeggen dat zonnebrandcrème slecht is of dat insmeren niet nodig is.",
      verder: [
        { t: "KWF Kankerbestrijding", u: "https://www.kwf.nl" },
        { t: "Thuisarts.nl", u: "https://www.thuisarts.nl" }
      ],
      woorden: [
        { w: "zonnebrandcrème", u: "Crème die je huid beschermt tegen de zon." },
        { w: "influencer", u: "Iemand met veel volgers op sociale media, die mensen beïnvloedt." },
        { w: "huidkanker", u: "Kanker in de huid. Het ontstaat vaak door te veel zon." },
        { w: "frustrerend", u: "Iets waar je boos of moedeloos van wordt." },
        { w: "TikTokker", u: "Iemand die video's maakt op TikTok." },
        { w: "onlogisch", u: "Het klopt niet met wat je verstand zegt." },
        { w: "huidverzorging", u: "Goed zorgen voor je huid." },
        { w: "vergelijking", u: "Twee dingen naast elkaar leggen om te zien wat anders is." },
        { w: "bedekkende kleding", u: "Kleding die je armen en benen bedekt." },
        { w: "betrouwbare", u: "Je kunt erop vertrouwen dat het klopt." },
        { w: "KWF Kankerbestrijding", u: "Een bekende organisatie die onderzoek naar kanker betaalt en voorlichting geeft." }
      ],
      brillen: {
        cs: { t: "Jongeren nemen gedrag over van influencers die ze bewonderen (identificatie en imitatie). Sociale media zijn zo een socialiserende institutie geworden. Ook het schoonheidsideaal verandert: vroeger wilden mensen juist niet bruin worden.", b: ["identificatie", "imitatie", "socialiserende instituties", "waarden en normen", "tijd- en plaatsgebonden regels"] },
        sv: { t: "Influencers verdienen geld aan views en soms aan producten: een eigen belang. De samenleving heeft een collectief belang bij minder huidkanker, ook omdat zorg duur is en iedereen daaraan meebetaalt.", b: ["belangen", "individuele/collectieve belangen", "status"] },
        mz: { t: "Een huidarts heeft gezag door kennis en functie. Een influencer heeft informele macht door het aantal volgers. Kennis tegenover aantal: twee verschillende machtsmiddelen. De overheid en KWF kunnen voorlichting geven.", b: ["gezag", "informele macht", "machtsmiddelen", "overheidsbeleid"] },
        bs: { t: "Op sociale media zie je vooral video's die passen bij wat je al bekijkt. Influencers brengen hun mening alsof het een feit is. Wie al twijfelt, gelooft de video sneller: selectieve waarneming. Artsen raden aan om informatie te checken bij betrouwbare bronnen zoals KWF.", b: ["sociale media", "feit", "mening", "selectie", "selectieve waarneming", "beeldvorming"] }
      },
      vragen: [
        { t: "R", n: ["bb", "kb", "gt"], q: "Hoeveel Nederlanders krijgen huidkanker?", a: "1 op de 6. Huidkanker is de meest voorkomende vorm van kanker in Nederland." },
        { t: "R", n: ["bb", "kb", "gt"], q: "Wat doet huidarts Galimont tegen verkeerde informatie?", a: "Ze maakt zelf video's op TikTok en Instagram om verkeerde informatie te verbeteren. Ze raadt aan om informatie te checken bij KWF Kankerbestrijding." },
        { t: "T", n: ["bb", "kb", "gt"], q: "Geef een feit en een mening uit de tekst.", a: "Feit: 'Huidkanker is de meest voorkomende vorm van kanker in Nederland.' Mening: 'Het is onlogisch dat de zon gevaarlijk zou zijn' (TikTokker Fakili).", b: ["feit", "mening"] },
        { t: "T", n: ["bb", "kb", "gt"], q: "Leg met identificatie uit waarom jongeren het advies van influencers volgen.", a: "Jongeren bewonderen een influencer en willen op hem of haar lijken. Daarom nemen ze ook diens gewoonten en meningen over, zoals niet insmeren.", b: ["identificatie", "imitatie"] },
        { t: "T", n: ["kb", "gt"], q: "Waarom klopt de vergelijking 'vroeger smeerde niemand zich in en was er minder huidkanker' niet?", a: "Vroeger wilden mensen niet bruin worden. Ze zaten minder lang in de zon en beschermden zich met parasols en kleding. Bovendien ontstaat huidkanker pas na veel jaren." },
        { t: "T", n: ["kb", "gt"], q: "Wie heeft meer invloed op wat jongeren geloven: de arts of de influencer? Gebruik de woorden gezag en informele macht.", a: "De arts heeft gezag door kennis en functie. De influencer heeft informele macht door veel volgers. Bij jongeren is die informele macht soms groter, omdat ze de influencer vaker zien en meer vertrouwen.", b: ["gezag", "informele macht"] },
        { t: "I", n: ["bb", "kb", "gt"], q: "Moet de overheid influencers verbieden om onjuiste gezondheidsinformatie te verspreiden?", a: "Eigen mening. Voor: het beschermt de gezondheid van jongeren. Tegen: vrijheid van meningsuiting staat in de Grondwet, en wie bepaalt wat onjuist is?", b: ["grondwet"] },
        { t: "I", n: ["gt"], q: "Leg uit dat het ideaal 'bruin is mooi' tijd- en plaatsgebonden is.", a: "Vroeger was een lichte huid een teken van status: je hoefde niet buiten te werken. Nu staat bruin voor vakantie en gezondheid. In sommige andere landen is een lichte huid nog steeds het ideaal.", b: ["tijd- en plaatsgebonden regels", "status", "waarden en normen"] }
      ]
    },
    {
      nr: 4, kort: "Sociale media onder 15", hoofd: "mz",
      titel: "Geen sociale media onder 15 jaar, smartphone vanaf groep 8",
      bron: { medium: "NOS", url: "https://nos.nl/artikel/2571382-kabinet-geen-sociale-media-onder-15-jaar-smartphone-vanaf-groep-8" },
      probleem: "Kinderen krijgen steeds jonger een smartphone. Ouders, artsen en wetenschappers maken zich zorgen over hun lichamelijke en mentale gezondheid. Het kabinet geeft een advies, maar maakt er geen wet van.",
      verder: [
        { t: "Rijksoverheid", u: "https://www.rijksoverheid.nl" },
        { t: "Nederlands Jeugdinstituut", u: "https://www.nji.nl" }
      ],
      woorden: [
        { w: "kabinet", u: "De regering: de minister-president en de ministers samen." },
        { w: "richtlijn", u: "Een advies. Je bent niet verplicht het te volgen." },
        { w: "schermgebruik", u: "Hoeveel tijd je naar een scherm kijkt: telefoon, tablet, tv of computer." },
        { w: "wetenschappers", u: "Mensen die onderzoek doen." },
        { w: "deskundigen", u: "Mensen die veel weten over een onderwerp." },
        { w: "mentale gezondheid", u: "Hoe het gaat met je gevoel en je gedachten." },
        { w: "wettelijk", u: "In een wet vastgelegd, en dus verplicht." },
        { w: "beïnvloeding", u: "Proberen het gedrag van mensen te veranderen zonder ze te dwingen." },
        { w: "voorlichting", u: "Informatie geven, zodat mensen zelf een betere keuze kunnen maken." },
        { w: "juridisch", u: "Te maken met de wet en het recht. Een juridisch verbod staat in de wet." },
        { w: "verbod", u: "Een regel dat iets niet mag." },
        { w: "Tweede Kamer", u: "Het deel van het parlement dat we om de vier jaar kiezen. Het controleert de regering en maakt mee wetten." },
        { w: "Kamermeerderheid", u: "Meer dan de helft van de leden van de Tweede Kamer." },
        { w: "weren", u: "Tegenhouden, niet toelaten." },
        { w: "minimumleeftijd", u: "De leeftijd die je minstens moet hebben om iets te mogen." },
        { w: "houvast", u: "Iets waar je op kunt bouwen; duidelijkheid." }
      ],
      brillen: {
        cs: { t: "Het gezin is de belangrijkste socialiserende institutie: ouders blijven verantwoordelijk. De richtlijn probeert een nieuwe norm te maken. Kinderen voelen druk als 'iedereen' al een telefoon heeft. Sociale media zelf voeden ook op.", b: ["socialiserende instituties", "waarden en normen", "sociale controle", "normbesef", "socialisatieproces", "sociale media"] },
        sv: { t: "Ouders willen rust en veiligheid voor hun kind. Kinderen willen contact met vrienden en erbij horen. Techbedrijven verdienen aan veel gebruikers. Scholen willen dat leerlingen zich kunnen concentreren.", b: ["belangen", "individuele/collectieve belangen"] },
        mz: { t: "Het kabinet kiest voor een richtlijn (advies) en niet voor een wet: ouders krijgen geen straf als ze het advies niet volgen. 1400 artsen en wetenschappers zetten druk met een brief, met kennis en aantal als machtsmiddelen. Een meerderheid van de Tweede Kamer wil smartphones op school weren.", b: ["wet", "overheidsbeleid", "machtsmiddelen", "politieke agenda", "democratie", "parlementaire democratie", "liberalisme", "christendemocratie"] },
        bs: { t: "In de media wordt veel gesproken over 'schermverslaving'. Het artikel spreekt over mógelijke negatieve gevolgen. Het is belangrijk om feiten uit onderzoek te scheiden van meningen en zorgen.", b: ["massamedia", "beeldvorming", "feit", "mening"] }
      },
      vragen: [
        { t: "R", n: ["bb", "kb", "gt"], q: "Wat adviseert het kabinet over sociale media en smartphones?", a: "Geen sociale media voor kinderen onder de 15 jaar, en pas vanaf groep 8 een eigen smartphone." },
        { t: "R", n: ["bb", "kb", "gt"], q: "Wat stellen de 1400 artsen, wetenschappers en deskundigen voor?", a: "Een eigen smartphone pas vanaf 14 jaar en sociale media pas vanaf 16 jaar." },
        { t: "T", n: ["bb", "kb", "gt"], q: "Wat is het verschil tussen een richtlijn en een wet?", a: "Een wet is een verplichte regel van de overheid; als je je er niet aan houdt, kun je straf krijgen. Een richtlijn is een advies: ouders mogen zelf kiezen of ze het volgen.", b: ["wet", "geschreven/ongeschreven regels"] },
        { t: "T", n: ["bb", "kb", "gt"], q: "Welke machtsmiddelen gebruiken de 1400 artsen en wetenschappers?", a: "Kennis (ze zijn deskundigen) en aantal (met veel mensen samen één brief). Zo proberen ze het onderwerp op de politieke agenda te krijgen.", b: ["machtsmiddelen", "politieke agenda"] },
        { t: "T", n: ["bb", "kb", "gt"], q: "Welke rol speelt het gezin als socialiserende institutie bij schermgebruik?", a: "Ouders leren hun kinderen wat normaal is, bijvoorbeeld geen telefoon aan tafel. Het kabinet legt de verantwoordelijkheid bij de ouders: zij beslissen.", b: ["socialiserende instituties", "socialisatieproces"] },
        { t: "T", n: ["gt"], q: "Het kabinet kiest voor 'beïnvloeding en voorlichting, in plaats van een juridisch verbod'. Leg uit wat dat betekent.", a: "De overheid probeert gedrag te veranderen door informatie en advies te geven en zo een norm te stellen, maar verplicht niets via de wet. Ouders krijgen dus geen straf.", b: ["overheidsbeleid", "wet"] },
        { t: "I", n: ["bb", "kb", "gt"], q: "Moet er een wet komen die sociale media onder de 15 jaar verbiedt?", a: "Eigen mening. Voor: het beschermt de gezondheid en geldt voor iedereen, dus minder groepsdruk. Tegen: ouders moeten zelf kunnen kiezen, en een verbod is moeilijk te controleren." },
        { t: "I", n: ["gt"], q: "Waarom past een advies in plaats van een wet bij het liberalisme? En hoe kijkt de christendemocratie ertegen aan?", a: "Liberalisme: de overheid bemoeit zich zo weinig mogelijk met het gezin; ouders zijn zelf verantwoordelijk. Christendemocratie: opvoeden is vooral een taak van het gezin, maar de overheid mag normen stellen om kinderen te beschermen. Een richtlijn past bij allebei.", b: ["liberalisme", "christendemocratie", "politieke stromingen"] }
      ]
    },
    {
      nr: 5, kort: "Te weinig bewegen", hoofd: "sv",
      titel: "Helft van jongeren beweegt te weinig",
      bron: { medium: "NU.nl", url: "https://www.nu.nl/nujij/6401784/helft-van-jongeren-beweegt-te-weinig-zo-wordt-sporten-aantrekkelijker.html" },
      probleem: "Ongeveer de helft van de jongeren beweegt minder dan een uur per dag. De elektrische fiets en de fatbike maken dat erger. Jongeren uit gezinnen met minder geld bewegen gemiddeld minder.",
      verder: [
        { t: "Gezondheidsraad", u: "https://www.gezondheidsraad.nl" },
        { t: "RIVM", u: "https://www.rivm.nl" },
        { t: "Jeugdfonds Sport & Cultuur", u: "https://www.jeugdfondssportencultuur.nl" }
      ],
      woorden: [
        { w: "matig tot intensief", u: "Bewegen waarbij je hart sneller klopt en je sneller ademt, zoals stevig fietsen of sporten." },
        { w: "aanbevolen", u: "Aangeraden." },
        { w: "Gezondheidsraad", u: "Een groep deskundigen die de regering advies geeft over gezondheid." },
        { w: "RIVM", u: "Rijksinstituut voor Volksgezondheid en Milieu: onderzoekt hoe gezond Nederlanders zijn." },
        { w: "fatbike", u: "Een elektrische fiets met hele dikke banden." },
        { w: "inspanning", u: "De moeite die je lichaam doet." },
        { w: "helmplicht", u: "Een regel dat je verplicht een helm moet dragen." },
        { w: "minimumleeftijd", u: "De leeftijd die je minstens moet hebben om iets te mogen." },
        { w: "financiële", u: "Met geld te maken. Een financiële bijdrage is geld dat je krijgt, bijvoorbeeld om sport te betalen." },
        { w: "tegemoetkoming", u: "Geld dat je krijgt om een deel van de kosten te betalen." },
        { w: "prioriteiten", u: "De dingen die je het belangrijkst vindt en als eerste doet." },
        { w: "gedragsverandering", u: "Mensen gaan zich anders gedragen." },
        { w: "leefomgeving", u: "De buurt en de plekken waar je woont en leeft." }
      ],
      brillen: {
        cs: { t: "De beweegrichtlijn is een norm: een uur per dag bewegen. Waarden als gezondheid, gemak en vrijheid botsen. Ouders kunnen kinderen jong laten kennismaken met verschillende sporten. Wie vrienden met een fatbike heeft, doet dat snel na.", b: ["waarden en normen", "socialiserende instituties", "imitatie", "subcultuur"] },
        sv: { t: "Jongeren uit gezinnen met een lager inkomen bewegen minder: sporten kost geld. Een financiële tegemoetkoming kan helpen. De fatbike kan bestaande verschillen groter maken, omdat juist jongeren die al weinig bewegen er vaker een kiezen.", b: ["sociale verschillen/ongelijkheid", "sociaal milieu", "maatschappelijke positie", "belangen"] },
        mz: { t: "Het kabinet wil fatbikes beperken met een helmplicht, fatbikevrije zones en een minimumleeftijd: geschreven regels. Onderzoekers vinden verbieden alleen niet genoeg. Vraag jongeren zelf wat hen motiveert.", b: ["overheidsbeleid", "wet", "geschreven/ongeschreven regels", "rechten en plichten", "gezag"] },
        bs: { t: "Volgens onderzoekers wordt te vaak gezegd wat jongeren fout doen. Zo ontstaat een negatief beeld van 'de jongere op een fatbike', terwijl het om een deel van de jongeren gaat.", b: ["beeldvorming", "stereotype", "vooroordelen"] }
      },
      vragen: [
        { t: "R", n: ["bb", "kb", "gt"], q: "Hoeveel moeten kinderen en jongeren volgens de richtlijn bewegen?", a: "Iedere dag ongeveer een uur matig tot intensief." },
        { t: "R", n: ["bb", "kb", "gt"], q: "Met welke maatregelen wil het kabinet het gebruik van fatbikes beperken?", a: "Een helmplicht, fatbikevrije zones en een minimumleeftijd." },
        { t: "T", n: ["bb", "kb", "gt"], q: "Leg uit hoe het sociaal milieu invloed heeft op hoeveel jongeren bewegen.", a: "Jongeren uit gezinnen met minder geld bewegen gemiddeld minder. Een sportclub kost geld (contributie, kleding) en ouders hebben soms andere zorgen. Zo ontstaan sociale verschillen.", b: ["sociaal milieu", "sociale verschillen/ongelijkheid"] },
        { t: "T", n: ["bb", "kb", "gt"], q: "Noem een maatregel van de overheid die de verschillen tussen jongeren kan verkleinen.", a: "Een financiële tegemoetkoming (subsidie) voor sport, of veilige sport- en speelplekken in de wijk.", b: ["overheidsbeleid"] },
        { t: "T", n: ["kb", "gt"], q: "Is een helmplicht een geschreven of een ongeschreven regel? Leg uit.", a: "Een geschreven regel: hij wordt in een wet vastgelegd en je kunt een boete krijgen als je je er niet aan houdt.", b: ["geschreven/ongeschreven regels", "wet"] },
        { t: "I", n: ["bb", "kb", "gt"], q: "Wat werkt volgens jou beter: fatbikes verbieden of bewegen leuker maken?", a: "Eigen mening. Verbieden werkt snel en is duidelijk. Leuker maken zorgt dat jongeren zelf gaan bewegen en dat blijven doen; volgens de onderzoekers lost een verbod alleen het niet op." },
        { t: "I", n: ["gt"], q: "'Er wordt te vaak gezegd wat jongeren fout doen.' Leg uit hoe dat de beeldvorming over jongeren beïnvloedt.", a: "Als media en beleid vooral negatief over jongeren praten, ontstaat een stereotype ('jongeren zijn lui en ongezond'). Door selectieve waarneming zien mensen dan vooral voorbeelden die dat beeld bevestigen.", b: ["beeldvorming", "stereotype", "selectieve waarneming"] }
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* GAMES. t = uitspraak, a = goed antwoord, c = casusnummer, u = uitleg */
  /* ------------------------------------------------------------------ */
  feitOfMening: [
    { t: "Huidkanker is de meest voorkomende vorm van kanker in Nederland.", a: "feit", c: 3, u: "Dit kun je controleren met cijfers, bijvoorbeeld van KWF." },
    { t: "Generatie Z is lui.", a: "mening", c: 2, u: "Dit is een oordeel over een hele groep: een stereotype. Het onderzoek onder 88.000 werknemers laat juist zien dat veel jongeren méér willen werken." },
    { t: "Maar 53 procent van de jongeren onder de 30 heeft een fulltime contract.", a: "feit", c: 2, u: "Dit komt uit onderzoek en is te controleren." },
    { t: "Meer dan twee derde van de jongeren onder de dertig wil een fulltime contract.", a: "feit", c: 2, u: "Dit blijkt uit een onderzoek onder 88.000 werknemers." },
    { t: "Jongeren moeten blij zijn met elk contract dat ze krijgen.", a: "mening", c: 2, u: "Het woord 'moeten' laat zien dat iemand vindt hoe het hoort. Daar kun je het mee oneens zijn." },
    { t: "Het is onlogisch dat de zon gevaarlijk zou zijn.", a: "mening", c: 3, u: "TikTokker Fakili zegt wat zij vindt. Artsen zeggen het tegendeel, en kunnen dat met onderzoek onderbouwen." },
    { t: "Zonnebrandcrème is gif voor je huid.", a: "mening", c: 3, u: "Sommige influencers beweren dit, maar het is niet bewezen. Volgens huidartsen is zonnebrand veilig als je het normaal gebruikt." },
    { t: "In 2024 veranderden 61.000 mensen hun keuze in het Donorregister.", a: "feit", c: 1, u: "Een getal uit een registratie: dat kun je nagaan." },
    { t: "Mannen geven bijna anderhalf keer zo vaak geen keuze door in het Donorregister.", a: "feit", c: 1, u: "Dit blijkt uit onderzoek van het CBS." },
    { t: "Iedereen zou automatisch donor moeten zijn.", a: "mening", c: 1, u: "Woorden als 'zou moeten' laten zien dat iemand iets vindt. Een ander kan daar anders over denken." },
    { t: "Mensen die geen keuze maken, zijn gewoon lui.", a: "mening", c: 1, u: "Een oordeel over een hele groep, zonder bewijs. Er kunnen veel redenen zijn: twijfel, uitstel of te weinig informatie." },
    { t: "Het kabinet adviseert om kinderen onder de 15 jaar geen sociale media te laten gebruiken.", a: "feit", c: 4, u: "Dát het kabinet dit adviseert, is een feit. Of het een goed advies is, is een mening. Let goed op dat verschil." },
    { t: "Ruim 1400 artsen, wetenschappers en deskundigen stuurden een brief naar het kabinet.", a: "feit", c: 4, u: "Dit is gebeurd en kun je controleren." },
    { t: "Kinderen onder de 15 horen niet op sociale media te zitten.", a: "mening", c: 4, u: "Dit is een oordeel over wat hoort: een mening of norm. Niet iedereen is het ermee eens." },
    { t: "Smartphones maken kinderen dom.", a: "mening", c: 4, u: "Een stellige uitspraak zonder bewijs. Het artikel spreekt alleen over mógelijke negatieve gevolgen." },
    { t: "Een fatbike is veel leuker dan een gewone fiets.", a: "mening", c: 5, u: "'Leuk' is persoonlijk. Wat de een leuk vindt, vindt de ander saai." },
    { t: "Op een elektrische fiets kost fietsen meestal minder inspanning.", a: "feit", c: 5, u: "Dit is te meten, bijvoorbeeld aan je hartslag. Daarom maakt het RIVM zich zorgen." },
    { t: "Jongeren uit gezinnen met minder geld bewegen gemiddeld minder.", a: "feit", c: 5, u: "Dit blijkt uit onderzoek. 'Gemiddeld' betekent: niet iedereen, maar de groep als geheel." }
  ],

  welkeBril: [
    { t: "Het kabinet kiest voor een advies en niet voor een wet.", a: "mz", c: 4, u: "Het gaat over wie regels maakt en hoe streng die zijn: macht en zeggenschap." },
    { t: "De Tweede Kamer steunt een plan om smartphones op school te weren.", a: "mz", c: 4, u: "Het parlement beslist mee met een meerderheid van stemmen: macht en zeggenschap." },
    { t: "1400 artsen en wetenschappers sturen samen een brief naar het kabinet.", a: "mz", c: 4, u: "Ze gebruiken machtsmiddelen (kennis en aantal) om de politiek te beïnvloeden." },
    { t: "Een huidarts heeft gezag door haar kennis; een influencer heeft macht door haar volgers.", a: "mz", c: 3, u: "Gezag, informele macht en machtsmiddelen horen bij macht en zeggenschap." },
    { t: "Iedereen houdt het recht om zelf ja of nee te zeggen in het Donorregister.", a: "mz", c: 1, u: "Rechten en plichten die in een wet staan, horen bij macht en zeggenschap." },
    { t: "Jongeren uit gezinnen met minder geld bewegen gemiddeld minder.", a: "sv", c: 5, u: "Verschillen in inkomen zorgen voor verschillen in kansen: sociale verschillen." },
    { t: "Werkgevers willen kleine contracten, jongeren willen zekerheid.", a: "sv", c: 2, u: "Tegengestelde belangen vanuit een andere maatschappelijke positie: sociale verschillen." },
    { t: "Zonder vast contract is het lastig om een huis te huren.", a: "sv", c: 2, u: "Je maatschappelijke positie bepaalt je kansen, bijvoorbeeld op een woning: sociale verschillen." },
    { t: "De vakbond CNV komt op voor jonge werknemers.", a: "sv", c: 2, u: "Een vakbond is een belangengroep; dat hoort bij sociale verschillen. Gaat het om hoe de vakbond druk zet, bijvoorbeeld met een staking, dan kijk je ook door de machtsbril." },
    { t: "Een financiële tegemoetkoming helpt jongeren uit gezinnen met weinig geld om te sporten.", a: "sv", c: 5, u: "Een maatregel om sociale ongelijkheid kleiner te maken. Dat hoort bij sociale verschillen." },
    { t: "Op Urk laten mensen vaker de familie beslissen over orgaandonatie.", a: "cs", c: 1, u: "Hier spelen waarden en normen die je leert in gezin en geloof: cultuur en socialisatie." },
    { t: "Vroeger wilden mensen juist niet bruin worden.", a: "cs", c: 3, u: "Wat mensen mooi of normaal vinden, verandert door de tijd: waarden en normen zijn tijdgebonden." },
    { t: "Jongeren doen hun favoriete influencer na en smeren zich niet meer in.", a: "cs", c: 3, u: "Imitatie en identificatie zijn manieren waarop je gedrag leert: cultuur en socialisatie." },
    { t: "Ouders laten hun kinderen al jong verschillende sporten proberen.", a: "cs", c: 5, u: "Het gezin is een socialiserende institutie: daar leer je gewoonten aan." },
    { t: "Op TikTok zie je vooral video's die passen bij wat je al gelooft.", a: "bs", c: 3, u: "Selectie en selectieve waarneming bepalen welk beeld je krijgt: beeldvorming." },
    { t: "In krantenkoppen heet Generatie Z lui.", a: "bs", c: 2, u: "De media maken een beeld van een hele groep: beeldvorming en stereotypering." },
    { t: "Het nieuws laat vooral jongeren zien die met een fatbike door rood rijden.", a: "bs", c: 5, u: "De media kiezen wat ze laten zien. Zo ontstaat een eenzijdig beeld van een groep: beeldvorming." },
    { t: "Veel kijkers geloven een TikTokker meer dan een arts.", a: "bs", c: 3, u: "Het gaat over hoe mensen hun beeld vormen via (sociale) media: beeldvorming." }
  ],

  /* ------------------------------------------------------------------ */
  /* GATENTEKSTEN per casus. Een gat schrijf je als [[antwoord]].        */
  /* Hoort het antwoord bij een begrip met een andere naam, schrijf dan  */
  /* [[antwoord=begripnaam]], bijvoorbeeld [[kennis=machtsmiddelen]].    */
  /* Afleiders zijn foute woorden in de woordbank: op Basis worden ze    */
  /* niet getoond, op Kader twee, op GL/TL allemaal.                     */
  /* ------------------------------------------------------------------ */
  gatenteksten: [
    { c: 1, n: ["bb", "kb"], afleiders: ["dictatuur", "richtlijn", "status"],
      tekst: "Sinds 2020 geldt in Nederland een nieuwe [[wet]]: de Donorwet. Wie geen keuze maakt, staat in het Donorregister met 'geen bezwaar'. Mensen denken hier verschillend over, omdat ze andere [[waarden en normen]] hebben. Zelf beslissen over je lichaam is een individueel belang. Genoeg organen voor alle patiënten is een [[collectief belang=individuele/collectieve belangen]]. Op Urk laten mensen de keuze vaker aan de familie over. Wat je belangrijk vindt, leer je van je gezin en je geloof. Dat heet het [[socialisatieproces]]. Omdat het veel mensen raakt en er verschillende meningen over zijn, is dit een [[maatschappelijk probleem]].",
      uitleg: "Een wet is verplicht en geldt voor iedereen. Waarden en normen verklaren waarom mensen er verschillend over denken. Het socialisatieproces laat zien waar je die waarden leert." },
    { c: 1, n: ["gt"], afleiders: ["informele macht", "liberalisme", "stereotype", "dictatuur"],
      tekst: "De Donorwet werd in 2016 in de Tweede Kamer aangenomen met 75 tegen 74 stemmen. Zo werkt besluitvorming in een [[parlementaire democratie]]: de meerderheid beslist. Veel Kamerleden uit de [[christendemocratie]] stemden tegen, omdat doneren volgens hen een bewuste gift moet zijn. De overheid gebruikt hier haar [[formele macht]]: zij stelt de regels vast. Tegelijk probeert ze mensen met [[voorlichting=overheidsbeleid]] over te halen om zelf een keuze te maken. Op Urk speelt het geloof een grote rol. Een gemeenschap met eigen waarden en normen binnen de samenleving noem je een [[subcultuur]].",
      uitleg: "Let op het verschil tussen formele macht (vastgelegd in wetten) en informele macht (door bijvoorbeeld populariteit). Voorlichting is een vorm van overheidsbeleid zonder dwang." },

    { c: 2, n: ["bb", "kb"], afleiders: ["mening", "actiegroep", "gezag"],
      tekst: "Veel mensen denken dat Generatie Z lui is. Zo'n vast beeld over een hele groep heet een [[stereotype]]. Onderzoek onder 88.000 werknemers laat iets anders zien. Dat is een [[feit]]. Werkgevers willen kleine contracten, jongeren willen zekerheid. Ze hebben dus tegengestelde [[belangen]]. Het CNV komt op voor werknemers. Een vakbond is een [[belangengroep]]. De werkgever bepaalt hoeveel uur je mag werken. Hij heeft dus meer [[macht]].",
      uitleg: "Een stereotype is een vast beeld over een groep. Een feit kun je controleren. Een vakbond komt langdurig op voor een groep: dat is een belangengroep, geen actiegroep." },
    { c: 2, n: ["gt"], afleiders: ["sociale mobiliteit", "christendemocratie", "informele macht", "stereotype"],
      tekst: "Het beeld dat jongeren lui zijn, wordt steeds herhaald in media en gesprekken. Zo ontstaat [[beeldvorming]]. Wie dat beeld al heeft, ziet vooral voorbeelden die erbij passen: [[selectieve waarneming]]. Zonder vast contract is het moeilijk om een huis te huren. Je [[maatschappelijke positie]] bepaalt dus je kansen. Vanuit het [[socialisme]] vindt men dat de overheid werknemers moet beschermen met regels. Vanuit het [[liberalisme]] moeten werkgevers en werknemers zelf afspraken maken. De Wet meer zekerheid flexwerkers schaft oproepcontracten af, maar maakt uitzonderingen voor scholieren en studenten. Een besluit waarbij beide kanten iets krijgen, heet een [[compromis]].",
      uitleg: "Beeldvorming en selectieve waarneming horen bij elkaar: het beeld ontstaat, en daarna zie je vooral wat erbij past. Socialisme en liberalisme verschillen in hoeveel de overheid moet regelen." },

    { c: 3, n: ["bb", "kb"], afleiders: ["imitatie", "wet", "massamedia"],
      tekst: "Een influencer zegt: 'Zonnebrandcrème is slecht voor je.' Dat is een [[mening]] en geen feit. Artsen weten veel over de huid. Daardoor hebben ze [[gezag]]. Toch geloven veel jongeren de influencer. Ze willen op hun idool lijken. Dat heet [[identificatie]]. Influencers bereiken jongeren via [[sociale media]]. 'Huidkanker is de meest voorkomende vorm van kanker in Nederland.' Dat is een [[feit]], want je kunt het controleren.",
      uitleg: "Bij identificatie wil je zijn zoals iemand die je bewondert. Bij imitatie doe je alleen gedrag na. Gezag is macht die mensen accepteren, bijvoorbeeld door kennis." },
    { c: 3, n: ["gt"], afleiders: ["formele macht", "imitatie", "discriminatie", "subcultuur"],
      tekst: "Een influencer met veel volgers heeft [[informele macht]]: die staat niet in regels, maar komt door populariteit. Een dermatoloog heeft [[gezag]] door kennis en functie. Op sociale media zie je vooral video's die passen bij wat je al bekijkt. Wie al twijfelt, gelooft zo'n video sneller. Dat heet [[selectieve waarneming]]. Vroeger was een lichte huid mooi, nu een bruine. Dat laat zien dat [[waarden en normen]] tijdgebonden zijn. De overheid kiest vooral voor voorlichting, omdat een verbod botst met de vrijheid van meningsuiting uit de [[grondwet]].",
      uitleg: "Informele macht en gezag zijn verschillende vormen van macht. De vrijheid van meningsuiting is een grondrecht: daarom kan de overheid meningen niet zomaar verbieden." },

    { c: 4, n: ["bb", "kb"], afleiders: ["geld", "dictatuur", "subcultuur"],
      tekst: "Het kabinet geeft ouders een advies: geen sociale media onder de 15 jaar. Het is geen [[wet]], dus je krijgt geen straf. Thuis leren kinderen wat normaal is. Het [[gezin=socialiserende instituties]] is daarom een socialiserende institutie. Leren hoe je je hoort te gedragen, heet het [[socialisatieproces]]. Ruim 1400 artsen stuurden samen een brief. Ze gebruikten [[kennis=machtsmiddelen]] en [[aantal=machtsmiddelen]] als machtsmiddelen. Zo kwam het onderwerp op de [[politieke agenda]].",
      uitleg: "Een advies of richtlijn is geen wet. Kennis en aantal zijn twee van de vijf machtsmiddelen: aantal, geweld, functie, kennis en geld." },
    { c: 4, n: ["gt"], afleiders: ["socialisme", "dictatuur", "informele macht", "sociale mobiliteit"],
      tekst: "Het kabinet kiest voor een richtlijn in plaats van een wet. Dat past bij het [[liberalisme]], waarin de overheid zich weinig met het gezin bemoeit. Een meerderheid van de Tweede Kamer wil smartphones op school weren. In een [[parlementaire democratie]] beslist de meerderheid. In 2026 steunde het kabinet een Europees voorstel voor een minimumleeftijd van 15 jaar, maar het maakt zich zorgen over privacy en [[grondrechten=grondwet]]. In Australië geldt al een wettelijke leeftijdsgrens. Zo zie je dat regels [[plaatsgebonden=tijd- en plaatsgebonden regels]] zijn. Als media steeds over 'schermverslaving' praten, beïnvloedt dat de [[beeldvorming]] over jongeren.",
      uitleg: "Een richtlijn past bij een terughoudende overheid. Grondrechten staan in de Grondwet. Regels verschillen per land: ze zijn plaatsgebonden." },

    { c: 5, n: ["bb", "kb"], afleiders: ["waarde", "gezag", "status"],
      tekst: "Volgens de richtlijn moeten jongeren elke dag een uur bewegen. Zo'n regel over wat hoort, is een [[norm=waarden en normen]]. Jongeren uit gezinnen met weinig geld sporten minder. Dat komt door hun [[sociaal milieu]]. Zo ontstaan [[sociale verschillen=sociale verschillen/ongelijkheid]]. Het kabinet wil een helmplicht voor jongeren op e-bikes. Die komt in de [[wet]]. Een plan van de overheid om een probleem aan te pakken, heet [[overheidsbeleid]].",
      uitleg: "Een norm is een regel over hoe je je hoort te gedragen. Een waarde is wat je belangrijk vindt, zoals gezondheid. Sociaal milieu is een oorzaak van sociale verschillen." },
    { c: 5, n: ["gt"], afleiders: ["positieve actie", "vooroordelen", "informele macht", "emancipatie"],
      tekst: "Het kabinet wil met een helmplicht het aantal ernstige ongelukken verminderen. Dat is [[overheidsbeleid]]. Jongeren die al weinig bewegen, kiezen vaker voor een fatbike. Zo kan de fatbike de [[sociale ongelijkheid=sociale verschillen/ongelijkheid]] vergroten. Geld voor de contributie van een sportclub helpt jongeren uit gezinnen met een laag inkomen. Zo'n bijdrage van de overheid heet een [[subsidie=overheidsbeleid]]. Al sinds de jaren zeventig moeten bromfietsers een helm dragen. Regels zijn dus [[tijdgebonden=tijd- en plaatsgebonden regels]]. Volgens onderzoekers wordt vaak gezegd wat jongeren fout doen. Zo'n vast, negatief beeld van een hele groep is een [[stereotype]].",
      uitleg: "Subsidie en voorlichting zijn voorbeelden van overheidsbeleid tegen sociale ongelijkheid. Positieve actie is iets anders: voorrang bij gelijke geschiktheid." }
  ]
};
