import styled from 'styled-components';
import Outsystems from '../images/outsystems.png'
import Mendix from '../images/mendix.png'

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

function Innovatieroute() {
  return (
    <>
      <h2>Innovatieroute Low Code</h2>
      <p>In het kader van de innovatieroute konden derdejaarsstudenten kiezen uit vijf verschillende innovatieroutes. Ik koos voor de innovatieroute Low Code omdat ik mijn kennis op het gebied van applicatieontwikkeling wilde vergroten. Het doel van deze innovatieroute was om ons uit te leggen wat low-code is en hoe we met behulp van verschillende low-code platformen gemakkelijk applicaties kunnen ontwikkelen.
        <br></br><br></br>De innovatieroute vond plaats gedurende drie achtereenvolgende donderdagen in oktober 2022 in gebouw G, lokaal G515 van PXL. Tijdens deze sessies kwamen vertegenwoordigers van verschillende bedrijven praten over hoe ze low-code hebben gebruikt, welke platformen ze hiervoor gebruiken en welke projecten ze hebben gerealiseerd.
        <br></br><br></br>Op donderdag 6 oktober 2022 kwamen gastsprekers Martijn Warson en Hans Conings van Aziri hun verhaal doen rond no-code en low-code. Aziri is een bedrijf dat toepassingen ontwikkelt voor andere bedrijven om business processen te optimaliseren. Dit doen ze met behulp van twee low-code platformen, namelijk Betty Blocks en Zoho. Tijdens de voormiddag gaven de gastsprekers een aantal voorbeelden van hun ontwikkelde oplossingen waaronder een crowdfunding platform genaamd WinWinner. Vervolgens gaven ze een aantal voordelen van low-code. Het ontwikkelen van een applicatie gaat veel sneller dan traditioneel coderen en alles is visueel, wat het gemakkelijker maakt om de uiteindelijke applicatie te visualiseren. Daarnaast is low-code niet alleen geschikt voor complexe applicaties, maar biedt ook het voordeel van cloud hosting, waardoor de applicaties altijd en overal beschikbaar zijn. Bovendien zijn er automatische back-ups en kunnen rollen en rechten automatisch worden beheerd. Na het bespreken van de voordelen gaven de sprekers een korte introductie tot Betty Blocks, waarbij ze uitlegden dat er twee onderdelen zijn: Backoffice en Frontoffice. Backoffice is voor interne gebruikers, zoals beheerders, waar alle benodigde data voor het platform wordt opgeslagen. Frontoffice is de voorkant van de applicatie, gebruikt door de gewone gebruiker. Daarna hebben we enkele oefeningen gemaakt om kennis te maken met Betty Blocks. Vervolgens kwam er nog een korte demo over ontwikkelen in Zoho.
        <br></br><br></br>Op donderdag 13 oktober was het de beurt aan Brightfox en Harmony Group. Deze bedrijven werken respectievelijk met de low-code platformen SalesForce en OutSystems. In de voormiddag kregen we meer informatie over low-code en SalesForce van gastsprekers Tom Jansen en Yannis De Cuyper van Brightfox. Vervolgens kregen we een demo te zien van hoe SalesForce werkt en hoe je snel en gemakkelijk een applicatie kan ontwikkelen. Na de demo gingen we zelf aan de slag en maakten we een applicatie waar we tv-series een rating konden geven. Hierbij werden we begeleid door de gastsprekers.
        <br></br><br></br>In de namiddag van donderdag 13 oktober was het de beurt aan Harmony Group en OutSystems. De gastsprekers, Jimmy Vankerkhove en Nash Muylle van Harmony Group en Stef Vermeulen van OutSystems, begonnen met het uitleggen van wat low-code is en wat OutSystems te bieden heeft. Vervolgens ontwikkelden we zelf een productencatalogus voor elektronische spullen.
        <br></br><br></br>Op donderdag 20 oktober was de laatste sessie van de innovatieroute. De voormiddag stond in het teken van Mendix, gepresenteerd door Aqsa Intizar en Raf Swiggers van Apvine. Mendix is een low-code platform dat zich richt op applicaties voor ondernemingen en grote organisaties. We leerden hoe we met behulp van Mendix een applicatie konden maken die sponsors aan evenementen kon linken. We leerden hoe we entiteiten en pagina's konden maken en hoe we deze konden koppelen aan elkaar. Ook hier was het opvallend hoe snel we een werkende applicatie konden maken zonder programmeerkennis.
        <br></br><br></br>In de namiddag kregen we een presentatie over Oracle Apex van Olivier Van de Perre van iAdvise. Oracle Apex is een low-code platform dat zich richt op het ontwikkelen van webapplicaties en bedrijfsoplossingen. Olivier legde ons uit hoe we met behulp van Apex een applicatie konden ontwikkelen. Hij liet ons ook enkele voorbeelden zien van applicaties die met Oracle Apex waren ontwikkeld.
        <br></br><br></br>De innovatieroute over low-code platforms was zeer leerrijk en gaf een goede introductie tot de verschillende low-code platformen die momenteel op de markt zijn. Het was interessant om te zien hoe snel je een werkende applicatie kon maken zonder programmeerkennis. De gastsprekers van elk bedrijf gaven een duidelijk overzicht van de voordelen van hun platform en lieten ons zien hoe je snel en efficiënt applicaties kon ontwikkelen. Ik had eerder al een seminarie over OutSystems gevolgd, dus het was interessant om ook andere platformen te ontdekken en te vergelijken.
        <br></br><br></br>Een minpuntje was echter dat de introductie tot low-code bij elk deel hetzelfde was. Ook beweerde elk bedrijf dat hun gebruikt platform het beste was. Dit kan begrijpelijk zijn vanuit een commercieel perspectief, maar voor mij als deelnemer voelde het soms als een herhaling.
        <br></br><br></br>Het was waardevol om deze innovatieroute te volgen, aangezien het steeds belangrijker wordt om op de hoogte te zijn van de nieuwste technologieën en ontwikkelingen in de IT-sector. Hoewel ik de voordelen van low-code zeker zie, moet ik persoonlijk bekennen dat ik nog steeds leuker vind om traditioneel te coderen. Het creëren van een applicatie vanaf nul geeft mij meer voldoening en uitdaging dan het werken met een kant-en-klaar platform.
        <br></br><br></br>Ik heb besloten om de innovatieroute op te nemen in mijn portfolio, omdat het mijn bestaande kennis van programmeren verder heeft uitgebreid. Deze techniek hebben we niet behandeld tijdens de lessen in de opleiding Toegepaste Informatica, waardoor ik het interessant vond om meer te leren en kennis te maken met nieuwe technieken.
      </p>

      <ImageWrapper>
        <Image src={Outsystems} alt='outsystems' />
        <Image src={Mendix} alt='mendix' />
      </ImageWrapper>

    </>
  )
}

export default Innovatieroute;