import styled from 'styled-components';
import Xfactor from '../images/x-factor.jpg'

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

function Eindreflectie() {
  return (
    <>
      <h2>Eindreflectie</h2>
      <p>Tijdens mijn middelbare schoolopleiding was ik onzeker over mijn toekomstplannen. Na een jaar de studie kinesitherapie te hebben geprobeerd, kwam ik erachter dat dit niet mijn passie was. Gelukkig heb ik de beslissing genomen om Toegepaste Informatica te gaan studeren. Hoewel ik al geïnteresseerd was in computers en technologie, had ik nog geen kennis van informatica. Hierdoor twijfelde ik om eraan te beginnen, maar de opleiding bood mij vanaf het begin goede ondersteuning. Hierdoor is mijn passie voor technologie alleen maar gegroeid, vooral op het gebied van artificiële intelligentie en programmeren.
        <br></br><br></br>Door de verschillende activiteiten die ik heb ondernomen, heb ik zowel mijn hard skills als mijn soft skills weten te verbeteren. De seminaries en de innovatieroute hebben voornamelijk mijn hard skills aangescherpt doordat ik kennis heb kunnen maken met verschillende technologieën. Hierdoor heb ik ook ingezien hoe snel de technologie zich ontwikkelt en hoe belangrijk het is om bij te blijven leren binnen deze sector. Gelukkig is dit geen probleem voor mij, aangezien ik een leergierig persoon ben en graag in mijn vrije tijd nieuwe technologieën bijleer. Zo heb ik bijvoorbeeld een website gemaakt in React, een framework dat ik nog niet had gebruikt tijdens mijn opleiding Toegepaste Informatica. Dit sluit ook perfect aan met de (em)passie binnen de X-factor.
        <br></br><br></br>Mijn soft skills zijn voornamelijk verbeterd door de verschillende POP-sessies en de hackathon. Tijdens mijn opleiding heb ik vooral geleerd hoe ik mijn tijd beter kan managen, wat een belangrijke vaardigheid is in elke carrière. Ook mijn vaardigheden op het gebied van teamwork zijn tijdens mijn opleiding en de activiteiten aangescherpt. Ik vind persoonlijk dat ik al goed kon samenwerken, maar I-Talent heeft me geholpen om nog beter te worden in het werken in teamverband. De projectweek heeft ons ook leren netwerken. Alhoewel ik dit te weinig gedaan heb in het tweede jaar van de opleiding, heb ik dit wel meer gedaan in het derde jaar. Dit sluit aan bij samen(net)werken van de X-factor.
        <br></br><br></br>Misschien had ik wel wat meer moeten ondernemen tijdens het tweede jaar en aan extra activiteiten moeten deelnemen. Ik vond het moeilijk om tijd te vinden voor extra activiteiten tijdens het eerste semester van het derde jaar. Tijdens dit semester hadden we veel projecten en moest zelfs soms al passen om aan mijn hobby’s deel te nemen.
        <br></br><br></br>Op het gebied van multidisciplinariteit ben ik enorm gegroeid. Ik heb geleerd om samen te werken met mensen met verschillende achtergronden en specialisaties. Ik heb verschillende seminars gevolgd op het gebied van informatica, variërend van business-toepassingen en cybercrime tot het ontwikkelen van applicaties met verschillende technologieën. Door deze ervaringen ben ik in staat om complexe problemen op te lossen door gebruik te maken van verschillende perspectieven en benaderingen.
        <br></br><br></br>Om mij blijvend te ontwikkelen, ben ik van plan om mij te blijven verdiepen in nieuwe technologieën en ontwikkelingen in de informatica. Daarnaast zal ik ook blijven werken aan mijn soft skills door regelmatig feedback te vragen en te reflecteren op mijn eigen gedrag en communicatiestijl. Ook wil ik actief deelnemen aan teamwork-activiteiten en samenwerkingsprojecten, zodat ik mijn vaardigheden op het gebied van samenwerking en leiderschap verder kan ontwikkelen. Door deze aanpak hoop ik niet alleen mijn technische vaardigheden te verbeteren, maar ook mijn algehele professionele groei te bevorderen.
        <br></br><br></br>Al met al denk ik dat ik veel heb geleerd tijdens mijn studie en dat ik goed op weg ben om mijn doelen te bereiken als softwareontwikkelaar. Ik ben gemotiveerd om mijzelf blijvend te ontwikkelen en om te werken aan projecten die een positieve impact hebben op de wereld.
      </p>

      <ImageWrapper>
        <Image src={Xfactor} alt='xfactor' />
      </ImageWrapper>

    </>
  )
}

export default Eindreflectie;