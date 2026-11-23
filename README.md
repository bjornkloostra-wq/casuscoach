# Casuscoach

Oefensite voor het examen maatschappijleer vmbo 2027. Leerlingen kiezen hun niveau (Basis, Kader of GL/TL) en oefenen met:

- de vijf casussen van 2027, in de tekstversie van hun niveau, met voorlezen en uitleg bij moeilijke woorden;
- per casus een achtergrondpagina per niveau, met gecontroleerde video's (YouTube, Schooltv, de Schatkamer van Beeld & Geluid) en bronnen, elk met een kritische noot en een kijkvraag;
- per casus de analyse door vier brillen (de vier exameneenheden) en de bijbehorende begrippen;
- R/T/I-vragen met modelantwoord en zelfcontrole;
- de begrippenlijst (59 begrippen voor BB en KB, 62 voor GL/TL) met flitskaarten;
- begrippen koppelen (slepen of tikken) en gatenteksten per casus;
- twee games: *Feit of mening?* en *Welke bril?*

## Bestanden

| Bestand | Inhoud |
| --- | --- |
| `index.html` | De website |
| `style.css` | De opmaak |
| `app.js` | De werking (hoef je niet aan te passen) |
| `inhoud.js` | Begrippen, moeilijke woorden, brillen, vragen, gatenteksten en de uitspraken van de games |
| `achtergrond.js` | Achtergrondtekst per niveau en de video's en bronnen per casus |
| `teksten.js` | De casusteksten per niveau (`bb`, `kb`, `gt`) |

Er is geen build-stap, server of database nodig: het zijn gewone bestanden.

## Online zetten met Vercel

1. Ga naar [vercel.com](https://vercel.com) en meld je aan met je GitHub-account.
2. Kies **Add New… → Project** en importeer deze repository.
3. Kies bij *Framework Preset* voor **Other**. Laat de andere instellingen leeg.
4. Klik op **Deploy**. Na ongeveer een halve minuut staat de site online.

Elke wijziging die je hierna in deze repository opslaat, zet Vercel vanzelf online.

## Inhoud aanpassen

Open `inhoud.js` of `teksten.js` op GitHub, klik op het potloodje, pas de tekst aan en kies **Commit changes**. Laat aanhalingstekens, komma's en haakjes staan. Begrippen in de casussen moeten precies zo geschreven zijn als in de begrippenlijst bovenaan `inhoud.js`.

**Nieuw schooljaar:** vervang de vijf casussen in `teksten.js` (teksten per niveau) en in `inhoud.js` (titel, bron, moeilijke woorden, brillen en vragen), en pas `jaar` bovenaan `inhoud.js` aan.

## Privacy

Er is geen account en er wordt niets verstuurd. YouTube-video's worden pas geladen als een leerling op *Video laden* klikt (via youtube-nocookie.com). Niveau, antwoorden en voortgang blijven in de browser van de leerling. Wissen kan via *Voor de docent* onderaan de site.

## Bronnen en controle

De casusteksten komen uit de vakinformatie staatsexamen 2027 Maatschappijleer vmbo BB, KB en GL-TL van het College voor Toetsen en Examens. De uitleg van begrippen, de analyses per bril, de vragen en de modelantwoorden zijn een eerste versie: controleer ze met je eigen lesmethode voordat leerlingen ermee werken.
