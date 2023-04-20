import styled from 'styled-components';
import Zelftest1 from '../images/zelftest1.jpg'
import Zelftest2 from '../images/zelftest2.jpg'
import Prioriteitenmatrix from '../images/brein.jpg'

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
  max-width: 33.33332%;
  height: auto;
  margin 25px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
    margin: 20px;
`;

function Brein() {
  return (
    <>
      <h2>POP-sessie: Brein aan het werk! Niet storen!</h2>
      <p>De derde activiteit die ik opneem in mijn portfolio is de POP-sessie “Brein aan het werk! Niet storen!”. Deze sessie vond plaats de week na de projectweek en bouwde hierop voort. Het doel was om te realiseren hoe digitale apparaten en sociale media onze tijd beïnvloeden en welk effect dit heeft op onze hersenen. We zochten ook naar hulpmiddelen om ons werk zo efficiënt mogelijk aan te pakken. Mijn doel voor deze sessie was om te leren hoe ik productiever te werk kan gaan.
        <br></br><br></br>We moesten onze gsm's aan de kant leggen voordat we aan de POP-sessie begonnen. Daarna kregen we een enquête met vragen over ons dagelijks gebruik van digitale apparaten en sociale media. Na het invullen van de enquête konden we het aantal punten tellen op basis van hoe vaak we ja, nee of soms hebben geantwoord. Als je minder dan vijf punten hebt op deze zelftest, bevind je je in de zone ‘digital control’. Dit wil zeggen dat je bewust omgaat met digitale apparaten en sociale media en beschouwt deze als enkel functioneel in jouw activiteiten. Tussen de zes en de vijftien punten bevind je je in de zone ‘digital danger’. Dit wil zeggen dat digitale apparaten en sociale media een grote plaats in jouw leven innemen. Hierdoor kan het zijn dat je jezelf op bepaalde momenten verliest in technologie. Als je zestien of meer punten hebt, bevind je je in de zone ‘digital damage’. Dit wil zeggen dat je niet meer zonder technologie kan en het een deel van je leven is. Het viel me op dat er maar één persoon zich in de ‘digital control’ zone zat. De meeste, waaronder ook ik, bevonden zich in ‘digital danger’. Er waren ook enkelen die zich in ‘digital damage’ bevonden. Aangezien de meeste mensen binnen de IT-sector vaak verbonden zijn met technologie, lijken deze resultaten wel logisch.
        <br></br><br></br>Na de zelftest gingen we verder met de presentatie. Hierin werden een aantal verbazende nummers getoond van hoeveel berichten op WhatsApp gestuurd worden en hoeveel actieve Facebook- en Instagram-gebruikers er zijn. Vervolgens kwam er een leuke quote die me bijgebleven is: “een smartphone is een wild dier dat getemd moet worden”.
        <br></br><br></br>Vervolgens kregen we de opdracht om een ‘Touchpointanalyse’ te maken. Bij deze analyse verdeel je een blad in drie delen: ’s ochtends, ’s middags en ‘s avonds. Daaropvolgend overloop je een van de afgelopen dagen en noteer je al de activiteiten van die dag op aparte post-it met het gebruikte ‘touchpoint’. Een touchpoint is een virtueel of reëel raakpunt waar we in contact of interactie kunnen treden met de buitenwereld. Daarna noteer je de tijd die je voor elke activiteit spendeerde. Vervolgens maakten we een prioriteitenmatrix van Eisenower dat de activiteiten opdeelt in hoe belangrijk en dringend deze zijn. Dit helpt voor het inzien van wat je onmiddellijk moet doen, wat je moet plannen, wat je moet delegeren en wat je moet dumpen of doseren.
        <br></br><br></br>Verder leerden we ook dat we minder efficiënt werken door multitasking. Altijd online willen zijn zorgt ook voor minder efficiënt werken. Een tip is om tot vijf te tellen wanneer je de drang voelt om je gsm bij je te nemen. Een andere tip om productief te blijven is de Pomodoro-techniek. Bij deze techniek kies je een taak die je wilt voltooien. Dan stel je een timer in op 25 minuten en begin je te werken aan de taak. Als de 25 minuten om zijn neem je een 5 minuten pauze. Dit herhaal je drie keer. Na de vierde keer pauzeer je 25 minuten om dan de cyclus opnieuw te beginnen.
        <br></br><br></br>De POP-sessie "Brein aan het werk! Niet storen!" was voor mij een leerzame ervaring. Het doel van de sessie was om te leren hoe digitale apparaten en sociale media onze tijd beïnvloeden en welk effect dit heeft op onze hersenen. Het viel me op dat de meeste mensen, waaronder ikzelf, zich in de "digital danger" zone bevonden. Dit bevestigde dat ik bewuster moet omgaan met digitale apparaten en sociale media.
        <br></br><br></br>Een van de technieken die we leerden om efficiënter te werken, was de Pomodoro-techniek. Het idee van het werken in blokken van 25 minuten met pauzes van 5 minuten sprak me aan. Ik denk dat deze techniek me zal helpen om meer gefocust te blijven op mijn taken en minder snel afgeleid te worden door mijn telefoon of andere afleidingen.
        <br></br><br></br>Ook vond ik de Touchpointanalyse en de prioriteitenmatrix van Eisenhower nuttige hulpmiddelen om mijn tijd beter te kunnen indelen. Door deze tools te gebruiken, kan ik bepalen wat de belangrijkste en dringendste taken zijn, en welke taken ik kan delegeren, dumpen of doseren.
        <br></br><br></br>Tot slot was de sessie een goede herinnering dat multitasking en altijd online zijn, minder efficiënt werken tot gevolg heeft. Ik denk dat het belangrijk is om regelmatig pauzes te nemen en mijn telefoon even aan de kant te leggen. Door bewuster om te gaan met digitale apparaten en sociale media, hoop ik mijn productiviteit en efficiëntie te verbeteren en meer controle te krijgen over mijn tijd.
        <br></br><br></br>Ik heb besloten om deze POP-sessie op te nemen in mijn portfolio, omdat ik moeite had met productief en efficiënt te werken. Ik heb de Pomodoro-techniek een aantal keer gebruikt om te studeren voor mijn examens. Dit heeft zeker geholpen om gefocust en productief te blijven.
      </p>

      <ImageWrapper>
        <Image src={Zelftest1} alt='zelftest' />
        <Image src={Zelftest2} alt='zelftest' />
        <Image src={Prioriteitenmatrix} alt='prioriteitenmatrix' />
      </ImageWrapper>
    </>
  )
}

export default Brein;