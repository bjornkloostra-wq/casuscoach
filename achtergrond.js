/*
  ACHTERGROND PER CASUS
  ---------------------
  Per casus: een achtergrondtekst per niveau (bb, kb, gt) en een lijst met beeldmateriaal en bronnen.

  Tekst: elke regel is een alinea. "## " wordt een tussenkop, "! " wordt een opvallend kader ("Laatste nieuws").

  Bronnen (media):
    type   youtube | schatkamer | web
    id     YouTube-video-ID (alleen bij youtube)
    url    webadres (bij schatkamer en web)
    soort  Uitleg | Nieuws | Overheid | Onderzoek | Mening | Satire | Archief | Voorlichting | Let op
    n      niveaus waarop de bron getoond wordt
    waarom waarom deze bron erin staat (kritische noot)
    kijk   kijkvraag of leesvraag voor de leerling

  Alle bronnen zijn gecontroleerd op 23 november 2026 (YouTube-titel en -kanaal via YouTube zelf,
  Schatkamer-items via schatkamer.beeldengeluid.nl, websites via de site zelf).
  YouTube-video's worden pas geladen als de leerling op 'Video laden' klikt (privacyvriendelijk).
*/
window.ACHTERGROND = {

  1: {
    tekst: {
      bb: [
        "## Wat is orgaandonatie?",
        "Bij orgaandonatie geef je na je dood een orgaan, zoals je nieren of je hart, aan iemand die heel ziek is. Zo kun je een leven redden.",
        "## Het Donorregister",
        "Iedereen in Nederland van 18 jaar en ouder staat in het Donorregister. Daarin staat wat jij wilt. Je hebt 4 keuzes: ja, nee, mijn partner of familie beslist, of één persoon die ik kies beslist.",
        "## De Donorwet",
        "Sinds 1 juli 2020 geldt de Donorwet. Vul je niets in? Dan krijg je twee brieven. Reageer je niet, dan staat er 'geen bezwaar' bij je naam. Dat betekent: je bent donor.",
        "Je kunt je keuze altijd veranderen, online of met een formulier.",
        "## Waarom is dit een maatschappelijk probleem?",
        "Veel zieke mensen wachten op een orgaan. Maar niet iedereen vindt het goed dat je automatisch donor bent als je niets zegt. Mensen denken er dus verschillend over."
      ],
      kb: [
        "## Wat is orgaandonatie?",
        "Bij orgaandonatie geef je na je dood organen of weefsels aan een patiënt. Denk aan nieren, een hart, longen of hoornvliezen. Veel patiënten wachten op een donororgaan.",
        "## Van donorcodicil naar Donorregister",
        "Vroeger moest je zelf actie ondernemen om donor te worden, bijvoorbeeld met een donorcodicil of een formulier. Veel mensen deden dat nooit. Daarom kwam er een nieuwe wet.",
        "## De Donorwet (sinds 1 juli 2020)",
        "Iedereen van 18 jaar en ouder staat in het Donorregister. Er zijn 4 keuzes: ja, nee, mijn partner of familie beslist, of één persoon die ik aanwijs beslist. Wie na twee brieven niets invult, wordt geregistreerd als 'geen bezwaar'. Jongeren van 12 tot 18 jaar mogen hun keuze al vrijwillig doorgeven.",
        "De wet werd in de Tweede Kamer aangenomen met de kleinst mogelijke meerderheid. Dat laat zien hoe verdeeld Nederland erover is.",
        "## Verschillende meningen",
        "Voorstanders zeggen: zo komen er meer organen en worden er levens gered, en je kunt altijd 'nee' zeggen. Tegenstanders zeggen: niets zeggen is geen toestemming. Ook het geloof speelt mee. In gemeenten als Urk en Neder-Betuwe laten mensen de keuze vaker aan de familie over."
      ],
      gt: [
        "## Wat is orgaandonatie?",
        "Bij orgaandonatie worden na het overlijden organen of weefsels gebruikt voor een patiënt. Omdat er minder donororganen zijn dan patiënten die erop wachten, is de vraag wie donor is een politieke vraag geworden.",
        "## Van opt-in naar actieve donorregistratie",
        "Tot 2020 gold een opt-in-systeem: je was alleen donor als je dat zelf had vastgelegd. De Donorwet van D66-Kamerlid Pia Dijkstra veranderde dat. Sinds 1 juli 2020 staat iedereen van 18 jaar en ouder in het Donorregister. Wie na twee brieven geen keuze maakt, wordt geregistreerd als 'geen bezwaar'.",
        "## Een nipte beslissing",
        "De Tweede Kamer nam de wet op 13 september 2016 aan met 75 tegen 74 stemmen; één Kamerlid was afwezig. De Eerste Kamer stemde op 13 februari 2018 in met 38 tegen 36 stemmen. Binnen sommige partijen, zoals VVD en CDA, stemden Kamerleden verschillend. Het onderwerp raakt aan persoonlijke en religieuze overtuigingen, en partijen gaven hun leden soms vrijheid om zelf te kiezen.",
        "## Twee waarden tegenover elkaar",
        "Voorstanders benadrukken solidariteit: zoveel mogelijk levens redden, terwijl iedereen vrij blijft om 'nee' te zeggen. Tegenstanders, onder wie christelijke partijen en organisaties, vinden dat doneren een bewuste gift moet zijn: zwijgen is geen toestemming. Nabestaanden kunnen bezwaar maken, maar moeten dan aannemelijk maken dat de overledene echt geen donor wilde zijn.",
        "! Uit onderzoek in opdracht van het ministerie (2022) bleek dat veel mensen niet goed weten wat 'geen bezwaar' betekent. Een deel dacht dat hun familie dan beslist. Duidelijke voorlichting blijft daarom belangrijk."
      ]
    },
    media: [
      { type: "youtube", id: "KtPnP2jrsG4", titel: "Wat is orgaandonatie?", maker: "Clipphanger", soort: "Uitleg", n: ["bb", "kb"],
        waarom: "Een korte uitlegvideo in gewone taal, gemaakt voor jongeren.", kijk: "Leg in één zin uit wat orgaandonatie is." },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030021467131/het-klokhuis/aflevering/2101608150132896331", titel: "Het Klokhuis: Orgaandonatie", maker: "NTR (Het Klokhuis)", jaar: "2013", duur: "14 min", soort: "Uitleg", n: ["bb", "kb"],
        waarom: "Duidelijke uitleg over hoe orgaandonatie werkt. Let op: uit 2013, dus van vóór de Donorwet.", kijk: "Wat moest je in 2013 doen om donor te worden? Wat is er sinds 2020 anders?" },
      { type: "youtube", id: "K7K2MxF4cWc", titel: "Welke organen en weefsels kun je doneren?", maker: "Orgaandonatie en transplantatie", soort: "Voorlichting", n: ["bb", "kb", "gt"],
        waarom: "Feitelijke uitleg van een voorlichtingskanaal over orgaandonatie. Zo'n organisatie wil informeren, maar ook dat mensen een keuze maken.", kijk: "Noem twee organen en één weefsel die je kunt doneren." },
      { type: "web", url: "https://www.rijksoverheid.nl/themas/familie-zorg-en-gezondheid/orgaandonatie-en-weefseldonatie/actieve-donorregistratie", titel: "Orgaan- en weefseldonatie na overlijden", maker: "Rijksoverheid", soort: "Overheid", n: ["bb", "kb", "gt"],
        waarom: "De officiële uitleg van de overheid over het Donorregister.", kijk: "Welke 4 keuzes kun je maken in het Donorregister?" },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030025227231/ip-reclame/aflevering/2101608220214385831", titel: "Overheidsspotje orgaandonatie", maker: "Rijksvoorlichtingsdienst", jaar: "1997", duur: "1 min", soort: "Archief", n: ["kb", "gt"],
        waarom: "Zo probeerde de overheid in de jaren negentig mensen over te halen om donor te worden: met voorlichting in plaats van een wet.", kijk: "Probeert de overheid hier te overtuigen of te verplichten? Vergelijk dat met de Donorwet van nu." },
      { type: "web", url: "https://nos.nl/artikel/2364319-eerste-mensen-die-geen-keuze-maakten-nu-geregistreerd-als-donor", titel: "Eerste mensen die geen keuze maakten nu geregistreerd als donor", maker: "NOS", jaar: "2020", soort: "Nieuws", n: ["kb", "gt"],
        waarom: "Nieuwsbericht van het moment waarop de nieuwe regels echt ingingen.", kijk: "Wat gebeurde er met mensen die op beide brieven niet reageerden?" },
      { type: "youtube", id: "xtCxjxKqfbw", titel: "Uitgelicht! Diederik van Dijk (NPV) over de nieuwe orgaandonatiewet", maker: "Family7", jaar: "2020", soort: "Mening", n: ["gt"],
        waarom: "De NPV is een christelijke patiëntenvereniging die kritisch is over de Donorwet. Family7 is een christelijke zender. Je hoort hier één kant van het verhaal.", kijk: "Welke waarden noemt de spreker? Bij welke politieke stroming past dit standpunt?" },
      { type: "youtube", id: "qbtok7pPHDY", titel: "Donoralarm (Zondag met Lubach)", maker: "VPRO", jaar: "2018", soort: "Satire", n: ["gt"],
        waarom: "Satire: grappig bedoeld, maar met een duidelijke mening van de maker.", kijk: "Wat vindt de maker van het onderwerp? Welke trucs gebruikt hij om jou te overtuigen?" }
    ]
  },

  2: {
    tekst: {
      bb: [
        "## Vast of flexibel?",
        "Als je werkt, heb je een contract met je werkgever. Bij een vast contract heb je zekerheid: je weet hoeveel uur je werkt en wat je verdient. Bij een flexibel contract weet je dat niet altijd. Soms word je alleen opgeroepen als er werk is.",
        "## Waarom kiezen werkgevers voor flex?",
        "Werkgevers kunnen dan makkelijker meer of minder mensen inzetten. Dat is goedkoper en ze lopen minder risico als iemand ziek wordt.",
        "## Waarom willen jongeren meer zekerheid?",
        "Met een vast contract weet je wat je elke maand verdient. Dat heb je nodig om bijvoorbeeld een huis te huren. De vakbond komt op voor werknemers die meer zekerheid willen.",
        "! Nieuwe wet: vanaf 2028 verdwijnt het nulurencontract voor de meeste werknemers. In plaats daarvan spreek je een minimum en een maximum aantal uren af. Voor scholieren met een bijbaan blijft een oproepcontract wel mogelijk."
      ],
      kb: [
        "## Vast, tijdelijk en oproep",
        "Er zijn verschillende soorten contracten. Bij een vast contract heb je geen einddatum. Bij een tijdelijk contract stopt je baan op een afgesproken datum. Bij een oproepcontract, zoals een nulurencontract, werk je alleen als de werkgever je oproept. Het CBS noemt mensen zonder vast contract met vaste uren 'flexwerkers'.",
        "## Twee kanten",
        "Werkgevers willen flexibel zijn: meer personeel als het druk is, minder als het rustig is. Werknemers willen zekerheid over hun inkomen. Zonder vast contract is het lastig om een huis te huren of een hypotheek te krijgen. Daarom is dit ook een probleem van sociale verschillen: je positie op de arbeidsmarkt bepaalt je kansen.",
        "## Wat doet de politiek?",
        "Met de Wet flexibel werken kun je je baas om meer uren vragen, maar veel jongeren durven dat niet. In 2026 namen de Tweede Kamer (mei) en de Eerste Kamer (juli) de Wet meer zekerheid flexwerkers aan. Vanaf 2028 verdwijnen oproepcontracten zoals het nulurencontract voor de meeste werknemers; daarvoor in de plaats komt een contract met een minimum en een maximum aantal uren. Voor scholieren en studenten blijft een oproepcontract mogelijk. Ook wordt het moeilijker om iemand steeds opnieuw een tijdelijk contract te geven."
      ],
      gt: [
        "## Flexibilisering van de arbeidsmarkt",
        "Nederland heeft in vergelijking met andere Europese landen veel flexwerkers. Werkgevers gebruiken tijdelijke contracten, oproepcontracten en uitzendwerk om snel te kunnen inspelen op drukte en om risico's te beperken. De keerzijde: werknemers hebben minder zekerheid over werk en inkomen, wat doorwerkt in hun maatschappelijke positie, bijvoorbeeld bij het huren of kopen van een woning.",
        "## Het stereotype 'lui'",
        "Het beeld dat Generatie Z niet wil werken, wordt vaak herhaald in media en gesprekken. Het onderzoek in de casus laat iets anders zien: veel jongeren willen juist meer uren. Dit is een voorbeeld van hoe beeldvorming en werkelijkheid uit elkaar kunnen lopen.",
        "## Tijdgebonden problemen",
        "Begin jaren tachtig was het probleem omgekeerd: er was zoveel jeugdwerkloosheid dat veel jongeren helemaal geen werk konden vinden. Politieke partijen kwamen toen met plannen om jongeren aan het werk te helpen. Nu is er juist een groot personeelstekort, maar krijgen jongeren vaak kleine of tijdelijke contracten.",
        "## Politieke keuzes",
        "Vanuit het socialisme en de sociaaldemocratie wil men werknemers beschermen met regels en meer vaste contracten. Vanuit het liberalisme wil men dat werkgevers en werknemers zoveel mogelijk zelf afspraken maken. De christendemocratie legt nadruk op samenwerking tussen werkgevers en werknemers; de CNV is van oudsher een christelijke vakbond.",
        "! In 2026 namen Tweede en Eerste Kamer de Wet meer zekerheid flexwerkers aan. Vanaf 2028 worden oproepcontracten (nuluren en min-max) voor de meeste werknemers vervangen door een contract met een minimum en een maximum aantal uren. Uitzonderingen gelden onder meer voor scholieren, studenten en AOW'ers. Na drie tijdelijke contracten mag er drie jaar lang geen nieuw tijdelijk contract volgen. Je kunt deze wet zien als een compromis tussen zekerheid voor werknemers en flexibiliteit voor werkgevers."
      ]
    },
    media: [
      { type: "youtube", id: "M_mzp4QLlds", titel: "Flexwerkers Stadsloket eisen vast contract: 'We worden gewoon gedumpt'", maker: "AT5 (Amsterdamse regionale omroep)", soort: "Nieuws", n: ["bb", "kb", "gt"],
        waarom: "Een concreet voorbeeld: flexwerkers die samen actie voeren voor een vast contract.", kijk: "Wat willen deze flexwerkers? Welk machtsmiddel gebruiken ze?" },
      { type: "youtube", id: "RHZQIgib7-Y", titel: "Werk | Kies Wat #1", maker: "NPO 3", soort: "Uitleg", n: ["bb", "kb", "gt"],
        waarom: "Een NPO 3-programma voor jongeren over werk, zoals flexcontracten en het minimumloon.", kijk: "Welke problemen hebben jongeren met flexwerk? Wat willen politici eraan doen?" },
      { type: "web", url: "https://www.cbs.nl/nl-nl/dossier/dossier-flexwerk/hoofdcategorieen/wat-zijn-flexwerkers-", titel: "Wat zijn flexwerkers?", maker: "CBS", soort: "Onderzoek", n: ["kb", "gt"],
        waarom: "Het Centraal Bureau voor de Statistiek verzamelt betrouwbare cijfers over Nederland.", kijk: "Welke soorten flexwerkers onderscheidt het CBS?" },
      { type: "web", url: "https://www.rijksoverheid.nl/ministeries/ministerie-van-sociale-zaken-en-werkgelegenheid/nieuws/2026/05/12/wetsvoorstel-voor-meer-zekerheid-flexwerkers-aangenomen-in-tweede-kamer", titel: "Wetsvoorstel voor meer zekerheid flexwerkers aangenomen in Tweede Kamer", maker: "Rijksoverheid", jaar: "2026", soort: "Overheid", n: ["kb", "gt"],
        waarom: "Officieel bericht over de nieuwe wet. Let op: dit is de uitleg van de overheid zelf.", kijk: "Wat verandert er voor oproepkrachten? Voor wie gelden uitzonderingen?" },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030027268531/de-monitor/aflevering/2101712190235387131", titel: "De Monitor: Flexwerk", maker: "KRO-NCRV", jaar: "2017", duur: "26 min", soort: "Onderzoek", n: ["gt"],
        waarom: "Onderzoeksjournalistiek over flexwerk. Zulke programma's zoeken vaak naar misstanden.", kijk: "Welke belangen hebben werkgevers bij flexwerk? Is het programma neutraal, of kiest het een kant?" },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030022277831/jeugdwerkloosheid/aflevering/2101608050039176831", titel: "Jeugdwerkloosheid (deel 1)", maker: "NTR", jaar: "1983", duur: "29 min", soort: "Archief", n: ["gt"],
        waarom: "Een tv-programma uit 1983, toen veel jongeren geen werk konden vinden.", kijk: "Wat was het probleem voor jongeren in 1983, en wat is het nu? Wat zegt dat over tijdgebonden problemen?" },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030021688631/politieke-partijen/aflevering/2101608120106022431", titel: "Zendtijd politieke partijen: CDA over jeugdwerkloosheid", maker: "CDA (zendtijd)", jaar: "1983", duur: "10 min", soort: "Mening", n: ["gt"],
        waarom: "Zendtijd voor politieke partijen: de partij maakt zelf het programma en wil je overtuigen.", kijk: "Welke oplossing stelt het CDA voor? Past die bij de christendemocratie?" }
    ]
  },

  3: {
    tekst: {
      bb: [
        "## Zon en je huid",
        "Zonlicht bevat uv-straling. Te veel zon kan je huid laten verbranden. Wie vaak verbrandt, heeft later meer kans op huidkanker. Dat merk je pas na veel jaren.",
        "## Zo bescherm je jezelf",
        "Smeer je in met zonnebrandcrème en doe dat dik genoeg. Zoek tussen 12 en 3 uur 's middags de schaduw op. Draag een pet en kleding die je huid bedekt.",
        "## Wat zeggen influencers?",
        "Op TikTok zeggen sommige influencers dat zonnebrandcrème slecht voor je is. Huidartsen zeggen dat dat niet bewezen is. Zij zeggen: niet insmeren is veel gevaarlijker.",
        "## Wie geloof je?",
        "Kijk altijd wie iets zegt. Een arts weet veel over de huid. Een influencer niet altijd. Twijfel je? Kijk dan bij een betrouwbare organisatie, zoals KWF of het RIVM."
      ],
      kb: [
        "## Uv-straling en huidkanker",
        "Uv-straling uit zonlicht beschadigt de huid. Volgens het RIVM is verbranden door de zon op de lange termijn de belangrijkste oorzaak van huidkanker. Kinderen en jongeren zijn extra gevoelig. Omdat huidkanker pas na jaren ontstaat, zie je de gevolgen niet meteen.",
        "## Verkeerde informatie op sociale media",
        "Op TikTok gaan video's rond waarin influencers zeggen dat zonnebrandcrème giftig of kankerverwekkend is. Huidartsen zeggen dat daar geen bewijs voor is als je de crème gewoon op je huid smeert. Ook smeren jongeren zich vaak te dun in, waardoor de bescherming lager is dan op de verpakking staat.",
        "## Waarom geloven jongeren influencers?",
        "Jongeren zien influencers elke dag en voelen zich met hen verbonden. Daardoor hebben influencers informele macht. Een arts heeft gezag door kennis en functie, maar bereikt jongeren minder makkelijk. Daarom maken artsen nu zelf ook video's.",
        "## Vroeger en nu",
        "Vroeger wilden veel mensen juist niet bruin worden. Nu staat een bruine huid voor vakantie en gezondheid. Wat mensen mooi vinden, verandert dus door de tijd."
      ],
      gt: [
        "## Een gezondheidsprobleem met een media-oorzaak",
        "Huidkanker is de meest voorkomende vorm van kanker in Nederland. Het RIVM noemt zonverbranding op de lange termijn de belangrijkste oorzaak; kinderen en jongeren zijn extra gevoelig. Tegelijk circuleren op sociale media claims dat zonnebrandcrème hormoonverstorend of kankerverwekkend is. Dermatologen wijzen erop dat daar geen bewijs voor is bij normaal gebruik op de huid.",
        "## Waarom misinformatie zich verspreidt",
        "Algoritmes laten vooral zien waar mensen op reageren. Volgens Canadees onderzoek krijgen video's met negatieve claims over zonnebrandcrème gemiddeld meer likes en reacties dan video's met positieve informatie. Door selectieve waarneming geloven kijkers die al twijfelen zulke video's sneller. Zo ontstaat een filterbubbel.",
        "## Gezag tegenover informele macht",
        "Artsen hebben gezag door hun kennis en functie. Influencers hebben informele macht door hun bereik en de band met hun volgers. Daarom kiezen artsen en organisaties als KWF ervoor om zelf op TikTok en Instagram uitleg te geven.",
        "## Wat kan de overheid doen?",
        "De overheid kiest vooral voor voorlichting. Een verbod op onjuiste gezondheidsinformatie botst met de vrijheid van meningsuiting uit de Grondwet. Wel moeten grote platforms volgens Europese regels risico's van misinformatie aanpakken. Hier botsen waarden als gezondheid, vrijheid en eigen verantwoordelijkheid.",
        "! Nieuwe trends blijven opduiken. In mei 2026 berichtte de NOS over zonnebaders op virale luchtbedjes die de uv-index in de gaten houden om sneller bruin te worden. Dermatologen zijn daar niet blij mee."
      ]
    },
    media: [
      { type: "web", url: "https://schooltv.nl/item/wat-doet-zonnen-met-je-huid-story-over-de-impact-van-uv-straling", titel: "Wat doet zonnen met je huid?", maker: "Schooltv", soort: "Uitleg", n: ["bb", "kb"],
        waarom: "Korte uitleg over uv-straling, gemaakt voor het onderwijs.", kijk: "Wat gebeurt er met je huid als je onbeschermd in de zon zit?" },
      { type: "web", url: "https://schooltv.nl/video-item/hoe-werkt-zonnebrandcreme-creme-met-speciale-stoffen-die-zonnestralen-blokkeren", titel: "Hoe werkt zonnebrandcrème?", maker: "Schooltv", soort: "Uitleg", n: ["bb", "kb"],
        waarom: "Legt uit hoe zonnebrandcrème je huid beschermt.", kijk: "Op welke twee manieren beschermen stoffen in zonnebrandcrème je huid?" },
      { type: "youtube", id: "KeARK7z2H_w", titel: "Vlog #22: Hoe zit het met zonnebrandcrème?", maker: "Erasmus MC", soort: "Uitleg", n: ["bb", "kb", "gt"],
        waarom: "Een dermatoloog van een academisch ziekenhuis beantwoordt vragen over zonnebrandcrème.", kijk: "Waarom kun je een arts van een ziekenhuis op dit onderwerp meer vertrouwen dan een influencer?" },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030025227231/ip-reclame/aflevering/2101608220213259431", titel: "Tv-spotje over zonnebrand", maker: "Ideële reclame (archief)", jaar: "1995", duur: "20 sec", soort: "Archief", n: ["bb", "kb", "gt"],
        waarom: "Zo werd er in 1995 op tv voor de zon gewaarschuwd.", kijk: "Zou dit spotje jongeren nu nog overtuigen? Waarom wel of niet?" },
      { type: "web", url: "https://kro-ncrv.nl/programmas/brandpuntplus/zonnebrandcreme-kankerverwekkend", titel: "1 op de 6 Nederlanders krijgt huidkanker, maar Gen Z weigert zich steeds vaker in te smeren", maker: "KRO-NCRV Brandpunt+", soort: "Nieuws", n: ["kb", "gt"],
        waarom: "Het originele artikel waarop deze casus is gebaseerd.", kijk: "Wat is er in de casus weggelaten of korter gemaakt? Mis je iets?" },
      { type: "web", url: "https://nos.nl/artikel/2428630", titel: "Dermatologen na socialmediaberichten: niet insmeren kan leiden tot huidkanker", maker: "NOS", jaar: "2022", soort: "Nieuws", n: ["kb", "gt"],
        waarom: "Laat zien dat dit probleem al sinds 2022 speelt.", kijk: "Wat zeggen dermatologen over de claims op sociale media?" },
      { type: "web", url: "https://www.rivm.nl/uv-en-gezondheid", titel: "Ultraviolette straling: goed en niet goed", maker: "RIVM", soort: "Overheid", n: ["kb", "gt"],
        waarom: "Wetenschappelijke informatie van het Rijksinstituut voor Volksgezondheid en Milieu.", kijk: "Wat zijn de voordelen en de nadelen van uv-straling?" },
      { type: "web", url: "https://nos.nl/l/2616224", titel: "Zonnen op virale luchtbedjes en obsessie met UV-index", maker: "NOS", jaar: "2026", soort: "Nieuws", n: ["gt"],
        waarom: "Een recent voorbeeld van een trend op sociale media.", kijk: "Welke rol spelen sociale media in deze trend? Welke socialiserende institutie zie je hier?" },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030022159231/de-schaduwkant-van-de-zon/aflevering/2101608050037711731", titel: "De schaduwkant van de zon (deel 2)", maker: "TROS", jaar: "1996", duur: "20 min", soort: "Archief", n: ["gt"],
        waarom: "Een reportage uit 1996 over de gevaren van de zon. Dertig jaar later gaat de discussie nog steeds door.", kijk: "Welke argumenten van toen hoor je nu nog steeds? Wat is er veranderd in hoe we informatie krijgen?" }
    ]
  },

  4: {
    tekst: {
      bb: [
        "## Het advies van de overheid",
        "In juni 2025 gaf de overheid ouders een advies: laat je kind pas vanaf 15 jaar sociale media gebruiken, zoals TikTok en Instagram. Chatapps zoals WhatsApp kunnen vanaf de middelbare school.",
        "## Waarom?",
        "Veel schermgebruik kan slecht zijn voor je slaap, je concentratie en hoe je over jezelf denkt. Bijna 13 procent van de jongeren loopt risico op problemen met sociale media.",
        "## Advies, geen wet",
        "Het is een advies. Ouders mogen zelf beslissen. Je krijgt geen straf als je je er niet aan houdt.",
        "## Telefoon uit de klas",
        "Sinds januari 2024 mogen leerlingen op de middelbare school hun telefoon niet meer gebruiken in de klas. Veel scholen zeggen dat leerlingen zich daardoor beter kunnen concentreren."
      ],
      kb: [
        "## De richtlijn van juni 2025",
        "De overheid bracht in juni 2025 richtlijnen uit voor gezond schermgebruik. Het belangrijkste advies: geen sociale media zoals Instagram en TikTok onder de 15 jaar. Chatapps zoals WhatsApp pas vanaf de middelbare school. Volgens de overheid loopt bijna 13 procent van de jongeren risico op problematisch sociale-mediagebruik.",
        "## Richtlijn of wet?",
        "Een richtlijn is een advies. De overheid probeert een norm te stellen, maar ouders blijven zelf verantwoordelijk. Ruim 1400 artsen en wetenschappers wilden strengere regels. Zij gebruikten hun kennis en hun aantal om de politiek te beïnvloeden.",
        "## De mobieltjesafspraak op school",
        "Sinds 1 januari 2024 geldt op middelbare scholen de afspraak dat telefoons niet in de klas worden gebruikt. Het is een afspraak, geen wet. Uit onderzoek van het ministerie (2024) bleek dat 75 procent van de scholen een betere concentratie zag en 59 procent een beter sociaal klimaat.",
        "## Twee kanten",
        "Sociale media hebben ook voordelen: contact met vrienden, informatie en ontspanning. Niet elke jongere heeft er last van. Daarom vinden sommigen een verbod te ver gaan."
      ],
      gt: [
        "## Van advies naar Europese regels?",
        "In juni 2025 presenteerde staatssecretaris Karremans de richtlijnen voor gezond en verantwoord scherm- en sociale-mediagebruik. Kern: een leeftijdsadvies van 15 jaar voor sociale media en chatapps pas vanaf de middelbare school. Het kabinet koos bewust voor een advies en niet voor een wettelijke minimumleeftijd.",
        "## Wat zegt het onderzoek?",
        "Intensief gebruik hangt samen met slaapproblemen, concentratieproblemen en een negatief zelfbeeld. Tegelijk wijzen onderzoekers als Patti Valkenburg erop dat de effecten per jongere sterk verschillen en dat veel jongeren er weinig nadeel van ondervinden. De evaluatie van de mobieltjesafspraak op scholen (2024) liet vooral positieve effecten op concentratie en sociaal klimaat zien; voor leerprestaties was het effect kleiner.",
        "## Macht en belangen",
        "Ouders, scholen, artsen en techbedrijven hebben elk hun eigen belangen. Techbedrijven verdienen aan aandacht en gebruikstijd. De overheid kan kiezen uit voorlichting, afspraken en wetten. Politieke stromingen kijken daar verschillend naar: liberalen leggen de verantwoordelijkheid bij ouders, christendemocraten zien het gezin als eerste verantwoordelijke maar willen de overheid ook normen laten stellen, en anderen willen bedrijven juist harder aanpakken.",
        "## Tijd- en plaatsgebonden",
        "In Australië geldt sinds eind 2025 een wettelijke minimumleeftijd van 16 jaar voor sociale-media-accounts. Nederland koos voor een advies. Zo zie je dat regels plaatsgebonden zijn.",
        "! In oktober 2026 liet het kabinet weten dat het positief is over de EU Kids Act, een voorstel van de Europese Commissie met onder meer een Europese minimumleeftijd van 15 jaar voor sociale media. Het kabinet heeft wel zorgen over privacy, grondrechten en leeftijdscontrole, en wil niet te veel verantwoordelijkheid bij ouders leggen."
      ]
    },
    media: [
      { type: "youtube", id: "SMIQ5NSC7mo", titel: "Advies regering: geen social media onder 15 jaar, telefoon pas in groep 8", maker: "NOS Jeugdjournaal", jaar: "2025", soort: "Nieuws", n: ["bb", "kb", "gt"],
        waarom: "Nieuws voor jongeren, in duidelijke taal.", kijk: "Wat is het advies precies? Is het een wet of een advies?" },
      { type: "youtube", id: "vMddkN5dbhI", titel: "Kinderen krijgen steeds jonger een telefoon, helft praat er niet over met ouders", maker: "NOS Jeugdjournaal", soort: "Nieuws", n: ["bb", "kb"],
        waarom: "Laat zien welke rol het gezin speelt bij telefoongebruik.", kijk: "Welke rol spelen ouders volgens deze video?" },
      { type: "youtube", id: "2T-LneBRP0U", titel: "Zo is het om te leven zonder telefoon", maker: "NOS Jeugdjournaal", soort: "Nieuws", n: ["bb", "kb"],
        waarom: "Ervaringen van jongeren zelf.", kijk: "Wat merken de jongeren als ze geen telefoon hebben? Zijn dat feiten of meningen?" },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030021674731/jeugdjournaal/aflevering/2101608040033463531", titel: "Jeugdjournaal: Mobiele telefoons in trek bij kinderen", maker: "NOS Jeugdjournaal", jaar: "2003", duur: "10 min (hele uitzending)", soort: "Archief", n: ["bb", "kb", "gt"],
        waarom: "In 2003 was een mobieltje voor kinderen nog nieuw.", kijk: "Hoe keek men in 2003 naar kinderen met een telefoon? Wat is er sindsdien veranderd?" },
      { type: "youtube", id: "62Qqe8_EHoQ", titel: "Meerderheid politici wil regels voor kinderen op social media", maker: "NOS Jeugdjournaal", soort: "Nieuws", n: ["kb", "gt"],
        waarom: "Laat zien hoe het onderwerp op de politieke agenda kwam.", kijk: "Wat willen de politici? Waarom is een meerderheid belangrijk?" },
      { type: "web", url: "https://www.rijksoverheid.nl/actueel/nieuws/2025/06/16/duidelijk-advies-voor-ouders-wacht-met-sociale-media-tot-15-jaar", titel: "Duidelijk advies voor ouders: wacht met sociale media tot 15 jaar", maker: "Rijksoverheid", jaar: "2025", soort: "Overheid", n: ["kb", "gt"],
        waarom: "Het officiële bericht van de overheid over de richtlijn.", kijk: "Welk verschil maakt de richtlijn tussen chatapps en sociale media?" },
      { type: "web", url: "https://www.rijksoverheid.nl/actueel/nieuws/2024/07/12/ocw-onderzoek-leerlingen-socialer-en-geconcentreerder-door-mobieltjesafspraak", titel: "OCW-onderzoek: leerlingen socialer en geconcentreerder door mobieltjesafspraak", maker: "Rijksoverheid", jaar: "2024", soort: "Onderzoek", n: ["kb", "gt"],
        waarom: "Cijfers over het effect van telefoons uit de klas. Let op: de scholen gaven zelf antwoord.", kijk: "Hoeveel procent van de scholen zag een betere concentratie? Hoe betrouwbaar is het als scholen dit zelf invullen?" },
      { type: "youtube", id: "FOkVx_ajGH4", titel: "Mirjam Bikker (CU) vierkant achter advies kabinet", maker: "WNL", jaar: "2025", soort: "Mening", n: ["gt"],
        waarom: "Een politicus van de ChristenUnie legt haar standpunt uit.", kijk: "Welke argumenten gebruikt zij? Bij welke politieke stroming past haar standpunt?" },
      { type: "youtube", id: "pQbwAAxqSOM", titel: "Experts luiden noodklok: smartphone-verbod voor kinderen noodzaak!", maker: "PowNews", soort: "Let op", n: ["gt"],
        waarom: "Vergelijk deze titel met die van het Jeugdjournaal. Woorden als 'noodklok' en een uitroepteken maken nieuws spannender.", kijk: "Welke woorden maken deze video sensationeel? Wat doet dat met jouw beeld van het probleem?" },
      { type: "web", url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/10/30/kabinet-steunt-eu-kids-act-maar-uit-zorgen-over-privacy-en-grondrechten", titel: "Kabinet steunt EU Kids Act, maar uit zorgen over privacy en grondrechten", maker: "Rijksoverheid", jaar: "2026", soort: "Overheid", n: ["gt"],
        waarom: "De nieuwste ontwikkeling: een mogelijke Europese leeftijdsgrens.", kijk: "Welke zorgen heeft het kabinet over een Europese minimumleeftijd?" }
    ]
  },

  5: {
    tekst: {
      bb: [
        "## Hoeveel moet je bewegen?",
        "De Gezondheidsraad zegt: kinderen en jongeren moeten elke dag minstens een uur bewegen, waarbij je hart sneller gaat kloppen. Minder dan de helft van de jongeren haalt dat.",
        "## De elektrische fiets",
        "Steeds meer jongeren fietsen elektrisch. In 2025 fietste 29 procent van de fietsende jongeren elektrisch. In 2021 was dat nog 11 procent. Een kwart van hen rijdt op een fatbike. Op een elektrische fiets beweeg je minder.",
        "## Geld en sport",
        "Sporten bij een club kost geld. Jongeren uit gezinnen met weinig geld sporten daarom minder. Organisaties zoals het Jeugdfonds Sport & Cultuur helpen door de contributie te betalen.",
        "! Plan van de overheid: vanaf 1 september 2027 moeten jongeren tot 18 jaar een helm dragen op een elektrische fiets, ook op een fatbike. De Tweede Kamer praat hier nog over."
      ],
      kb: [
        "## De beweegrichtlijn",
        "Volgens de Gezondheidsraad moeten kinderen en jongeren elke dag minstens een uur matig tot intensief bewegen. Van de 12- tot 16-jarigen haalde 41 procent dat.",
        "## E-bikes en fatbikes",
        "Volgens het RIVM steeg het aandeel fietsende jongeren (12 tot en met 17 jaar) dat elektrisch fietst van 11 procent in 2021 naar 29 procent in 2025. Een kwart van hen gebruikt een fatbike. Het RIVM maakt zich zorgen, omdat de gewone fiets voor veel jongeren de belangrijkste dagelijkse beweging is.",
        "## Veiligheid",
        "Er gebeuren ook meer ongelukken. Volgens de minister liepen jongeren in 2024 zes keer zoveel hersenletsel op als in 2020. Daarom wil het kabinet een helmplicht tot 18 jaar op elektrische fietsen, ook op fatbikes. Het doel is dat die op 1 september 2027 ingaat. Later volgt een aparte categorie voor fatbikes, zodat er een minimumleeftijd en fatbikevrije zones kunnen komen.",
        "## Verbieden of verleiden?",
        "Regels kunnen ongelukken voorkomen, maar ze zorgen niet vanzelf dat jongeren meer gaan bewegen. Onderzoekers vinden dat je jongeren zelf moet vragen wat ze leuk vinden, en dat de buurt uitnodigend moet zijn om te sporten en te spelen."
      ],
      gt: [
        "## Een gezondheidsprobleem met veel oorzaken",
        "Volgens de beweegrichtlijn van de Gezondheidsraad moeten kinderen en jongeren dagelijks minstens een uur matig tot intensief bewegen. Ongeveer de helft van de jongeren haalt dat niet. Oorzaken liggen in gedrag (schermtijd, gemak), in de omgeving (veilige speelplekken, de inrichting van de wijk) en in sociale verschillen (geld, sociaal milieu).",
        "## De opkomst van de e-bike",
        "Het RIVM meldt dat het aandeel fietsende jongeren dat elektrisch fietst tussen 2021 en 2025 steeg van 11 naar 29 procent; een kwart daarvan rijdt op een fatbike. Bij 18- tot 24-jarigen steeg het van 8 naar 27 procent. Het RIVM vreest dat jongeren daardoor nog minder bewegen, al is meer onderzoek nodig naar het precieze effect.",
        "## Zo verloopt besluitvorming",
        "In 2024 nam de Tweede Kamer een motie aan voor een helmplicht en een minimumleeftijd van 14 jaar voor fatbikes. Een minister noemde een aparte fatbikeregel daarna onuitvoerbaar. Later kwam er een voorstel voor een helmplicht voor alle minderjarigen op e-bikes. Dit laat zien dat politieke besluiten vaak in stappen gaan: een motie is nog geen wet.",
        "## Tijdgebonden regels",
        "Al sinds de jaren zeventig moeten bromfietsers een helm dragen. Ook toen was er discussie over vrijheid tegenover veiligheid. Zo'n vergelijking laat zien dat regels tijdgebonden zijn en dat nieuwe vervoermiddelen nieuwe regels vragen.",
        "! Op 13 november 2026 stuurde het kabinet de helmplicht tot 18 jaar voor elektrische fietsen en lichte elektrische voertuigen naar het parlement. Het doel is invoering op 1 september 2027. Volgens minister Karremans liepen jongeren in 2024 zes keer zoveel hersenletsel op als in 2020. Een aparte voertuigcategorie voor fatbikes moet later een minimumleeftijd en fatbikevrije zones mogelijk maken."
      ]
    },
    media: [
      { type: "youtube", id: "rMZOcOWU_RQ", titel: "Vanaf 2027 helm verplicht op fatbikes en e-bikes voor jongeren tot 18 jaar", maker: "NOS Jeugdjournaal", soort: "Nieuws", n: ["bb", "kb", "gt"],
        waarom: "Nieuws voor jongeren over het plan voor een helmplicht.", kijk: "Voor wie gaat de helmplicht gelden, en vanaf wanneer?" },
      { type: "youtube", id: "xGdj5blfgjg", titel: "Helmplicht op fatbike: 'Ik denk het niet'", maker: "Omroep Delft (regionaal)", soort: "Nieuws", n: ["bb", "kb"],
        waarom: "Jongeren op straat geven hun mening. Een straatinterview laat meningen zien, geen onderzoek.", kijk: "Wat vinden de jongeren van een helmplicht? Zijn dat feiten of meningen?" },
      { type: "web", url: "https://nos.nl/l/2621296", titel: "Elektrische fiets steeds populairder, vooral onder jongeren", maker: "NOS", jaar: "2026", soort: "Nieuws", n: ["bb", "kb"],
        waarom: "Nieuwsbericht met de nieuwste cijfers over elektrisch fietsen.", kijk: "Waarom maakt het RIVM zich zorgen?" },
      { type: "web", url: "https://www.rivm.nl/nieuws/forse-stijging-van-aantal-jongeren-en-jongvolwassenen-dat-elektrisch-fietst", titel: "Forse stijging van het aantal jongeren en jongvolwassenen dat elektrisch fietst", maker: "RIVM", soort: "Onderzoek", n: ["kb", "gt"],
        waarom: "De bron van de cijfers: het Rijksinstituut voor Volksgezondheid en Milieu.", kijk: "Waarvoor gebruiken jongeren de elektrische fiets vooral?" },
      { type: "web", url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/11/13/helmplicht-voor-jongeren-op-fatbikes-en-andere-e-bikes-gaat-naar-tweede-kamer", titel: "Helmplicht voor jongeren op fatbikes en andere e-bikes gaat naar Tweede Kamer", maker: "Rijksoverheid", jaar: "2026", soort: "Overheid", n: ["kb", "gt"],
        waarom: "Het officiële bericht over de helmplicht, november 2026.", kijk: "Waarom wil de minister een helmplicht? Welke cijfers gebruikt hij?" },
      { type: "schatkamer", url: "https://schatkamer.beeldengeluid.nl/serie/2101608030022513931/verkeersplicht/aflevering/2101608130115630031", titel: "Verkeers(p)licht: de bromfiets en de helm", maker: "NTR", jaar: "1976", duur: "4 min", soort: "Archief", n: ["kb", "gt"],
        waarom: "Verkeersvoorlichting uit 1976, kort na de invoering van de helmplicht voor bromfietsers.", kijk: "Welke overeenkomsten zie je met de discussie over fatbikes nu?" },
      { type: "youtube", id: "uOOd7tIgft4", titel: "Nieuwe regels voor fatbikes: minimaal 14 jaar en helm verplicht", maker: "NOS Jeugdjournaal", jaar: "2024", soort: "Let op", n: ["gt"],
        waarom: "Let op de datum: dit gaat over een wens van de Tweede Kamer uit 2024 (een motie). Die regels zijn er in die vorm niet gekomen.", kijk: "Wat is het verschil tussen een motie en een wet? Waarom is het belangrijk om de datum van een bron te checken?" },
      { type: "youtube", id: "duxxEAp8jW8", titel: "Karremans (VVD): helmplicht voor jongeren gaat in september 2027 in", maker: "BNR Nieuwsradio", soort: "Mening", n: ["gt"],
        waarom: "Een minister verdedigt zijn eigen plan. Hij wil je overtuigen.", kijk: "Welke argumenten geeft de minister? Welke tegenargumenten kun je bedenken?" }
    ]
  }
};
