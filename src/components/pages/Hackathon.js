import styled from 'styled-components';
import Picture from '../images/hackathon.png'
import Zak from '../images/zak_hackathon.jpg'

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 100px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin:0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
  margin 33.33333px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
    margin: 20px;
`;

function Hackathon() {
  return (
    <>
      <h1>Hackathon Fruit At Work</h1>
      <p>De hackathon Fruit At Work werd georganiseerd op 26 november 2022 door AI by Example en Fruit At Work. Fruit At Work is een bedrijf dat fruitmanden levert aan andere bedrijven. Het doel van de hackathon was om met behulp van artificiële intelligentie voedselverspilling tegen te gaan. Tijdens de hackathon wilde ik mijn kennis over neurale netwerken, die ik tijdens mijn lessen had opgedaan, toepassen en uitbreiden. Dit was eveneens het doel van mijn groepsgenoten Liam Huygen en Wout Struys.
        <br></br><br></br>Bij de start van de hackathon kregen we een inleiding waarin een probleem van Fruit At Work werd uitgelegd. Aangezien sommige bedrijven bepaalde stukken fruit weg moeten gooien, willen ze met behulp van een foto van de fruitmand tellen hoeveel stukken fruit er van elke soort nog in zit. Zo weten zij welk fruit er bij welk bedrijf in de smaak valt en kunnen zij hun manden personaliseren. In deze inleiding werd ook de deliverables van de applicatie verduidelijkt. De input van de applicatie moest een pad naar een folder met afbeeldingen of een upload van collectieve afbeeldingen zijn. De output moest een bestand met voorspellingen per afbeelding zijn. Hierbij werden ook een aantal tips en tricks gegeven. Daarnaast werd de planning van de dag nog vermeld. Er waren drie werksessies, lunch na de eerste werksessie, presentatie van de progressie van de deliverable en diner met pizza en drankjes na de tweede werksessie.
        <br></br><br></br>Onze groep kon helaas niet aanwezig zijn bij de eerste werksessie die 's ochtends plaatsvond vanwege onze lessen. Gelukkig waren we wel op tijd voor de tweede werksessie en zijn we meteen aan de slag gegaan. We zijn begonnen met het trainen van een neuraal netwerk op een online dataset van verschillende soorten fruit. Om dit te doen, moesten we eerst de foto's van de verschillende fruitsoorten inladen en voorbewerken. Preprocessing is namelijk een belangrijke stap om neurale netwerken te kunnen trainen. Tijdens deze stap hebben we eerst alle foto's dezelfde grootte gegeven en vervolgens hebben we onze dataset uitgebreid door transformaties toe te passen op de foto's.
        <br></br><br></br>Daarna hebben we onderzoek gedaan naar verschillende neurale netwerken die we konden gebruiken. We overwogen om Transfer Learning te gebruiken of zelf ons eigen neuraal netwerk te maken. Transfer Learning houdt in dat je een bestaand neuraal netwerk gebruikt en aanpast naar jouw specifieke behoeften. Wout heeft zich hiermee beziggehouden. Liam en ik zijn bezig geweest met het bouwen van een eigen neuraal netwerk. Na het trainen van een eigen neuraal netwerk hadden we een nauwkeurigheid van 60%. Dit hebben we nog proberen te verbeteren tot dat we onze vooruitgang moesten presenteren zonder succes.
        <br></br><br></br> Elke groep moest praten over hun manier van aanpak en de vooruitgang die ze hadden geboekt. Hier hoorden we dat er veel groepen nog niet zo veel hadden, aangezien ze nog geen uitgebreide kennis hadden over artificiële intelligentie en neurale netwerken. Het was interessant om te zien hoe elke groep een andere aanpak had en we hebben veel geleerd van de andere groepen.
        <br></br><br></br>Na de presentaties kregen we pizza en gratis drankjes om ons voor te bereiden op de derde werksessie. Tijdens deze sessie hebben we uiteindelijk een nauwkeurigheid van 70% bereikt op afzonderlijke stukken fruit, maar nog niet op een volledige fruitmand. We moesten dus nog brainstormen over hoe we dit konden aanpakken, wat al snel een grote uitdaging bleek te zijn. Tijdens de derde werksessie hebben we verschillende technieken uitgeprobeerd, maar helaas leverde dit niets op voordat de sessie eindigde. Tot slot kregen we als aandenken nog een zak met verschillende spulletjes en consumpties mee naar huis.
        <br></br><br></br>De Fruit At Work hackathon was een zeer fijne ervaring waarin ik mijn kennis over neurale netwerken van in de les kon toepassen en zelfs uitbreiden. Het was geweldig om samen te werken met Liam en Wout en te zien hoe we ons eigen neuraal netwerk konden trainen om voedselverspilling tegen te gaan. Door het trainen van het neuraal netwerk hebben we veel geleerd over het belang van preprocessing en het kiezen van de juiste architectuur.
        <br></br><br></br>Hoewel we de eerste werksessie niet konden bijwonen, hebben we toch goede vooruitgang geboekt en uiteindelijk een nauwkeurigheid van 70% bereikt op afzonderlijke stukken fruit. Het was echter teleurstellend dat we geen oplossing konden vinden om de nauwkeurigheid op volledige fruitmanden te verbeteren. Dit was een belangrijke les voor mij over het belang van het stellen van haalbare doelen en het nemen van de tijd om na te denken over de beste aanpak.
        <br></br><br></br>Een van de hoogtepunten van de hackathon was het delen van onze vooruitgang met andere groepen en het zien van de verschillende aanpakken. Ik heb veel geleerd van de andere groepen en hun ideeën hebben ons geholpen om ons eigen werk te verbeteren. De pizza en de gratis drankjes waren uiteraard ook een pluspunt. Ik kijk ernaar uit om in de toekomst deel te nemen aan soortgelijke evenementen om mijn kennis verder uit te breiden.
        <br></br><br></br>Ik heb besloten de hackathon op te nemen in mijn portfolio, omdat het een zeer goede leerervaring was waarin ik mijn kennis over neurale netwerken in de praktijk kon toepassen en uitbreiden.
      </p>

      <ImageWrapper>
        <Image src={Picture} alt='outsystems' />
        <Image src={Zak} alt='mendix' />
      </ImageWrapper>

    </>
  )
}

export default Hackathon;