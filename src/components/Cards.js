import React, { useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import hackathon from './images/hackathon.png'
import brainjar from './images/logo_brainjar.png'
import cegeka from './images/logo_cegeka.png'
import dataroots from './images/logo_dataroots.jpg'
import io from './images/logo_io.png'
import itlicious from './images/logo_itlicious.png'
import nviso from './images/logo_nviso.png'
import politie from './images/logo_politie.jpg'
import innovatieroute from './images/innovatieroute.jpg'
import pxl from './images/logo_pxl.png'
import brein from './images/brein.jpg'
import popping from './images/popping.jpg'

function Cards() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className='cards'>
      <h1>Innovatie</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={hackathon}
              text='Hackaton fruit at work'
              details={`Tijdens de hackathon AI by Example moesten we automatisch fruit in een fruitmand herkennen en tellen door middel van een foto om voedselverspilling tegen te gaan.
              \n•	Innovatie
              \n•	Bedrijven: AI by Example, Fruit at Work
              \n•	Locatie activiteit: PXL
              \n•	Datum: 29 november 2022
              \n•	Duur: 25 uur
              `}
              index={0}
              expanded={expandedIndex === 0}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={innovatieroute}
              text='Innovatieroute Low Code'
              details={`Tijdens de innovatieroute kwamen verschillende bedrijven spreken over hoe zij low-code/no-code gebruiken in hun bedrijf. Hierbij kregen we ook oefeningen met diverse low-code platformen. 
              \n•	Innovatie
              \n•	Bedrijven: Aziri, Brightfox, OutSystems, Harmony Group, Apvine en iAdvise
              \n•	Locatie activiteit: bedrijf, plaats
              \n•	Datum: 6 oktober 2022 tot en met 20 oktober 2022
              \n•	Duur: 25 uur
              `}

              index={1}
              expanded={expandedIndex === 1}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
          </ul>
        </div>
      </div>

      <h1>Seminaries</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={cegeka}
              text='Cegeka: Business Analysis en Project Management in Applied AI'
              details={`Tijdens het seminarie leren we over het implementeren van AI-oplossingen in bedrijven en overheden. We leren hoe we agile technieken kunnen toepassen om een idee vorm te geven.
              \n•	Seminarie
              \n•	Bedrijf: Cegeka
              \n•	Locatie activiteit: PXL
              \n•	Datum: 22 maart 2022
              \n•	Duur: 3 uur
              `}
              index={2}
              expanded={expandedIndex === 2}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={cegeka}
              text='Cegeka: Low Code'
              details={`Tijdens het seminarie Low Code van Cegeka werd toegelicht wat low-code is. Daarnaast kregen we ook een oefening om bekend te geraken met het low-code platform OutSystems.
              \n•	Seminarie
              \n•	Bedrijf: Cegeka
              \n•	Locatie activiteit: PXL
              \n•	Datum: 29 maart 2022
              \n•	Duur: 3 uur
              `}
              index={3}
              expanded={expandedIndex === 3}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={nviso}
              text='NVISO: Web App testing'
              details={`Tijdens dit seminarie kregen we een introductie tot web application penetration testing en web application penetration testing tools zoals Burp Suite.
              \n•	Seminarie
              \n•	Bedrijf: NVISO
              \n•	Locatie activiteit: PXL
              \n•	Datum: 26 april 2022
              \n•	Duur: 3 uur
              `}
              index={4}
              expanded={expandedIndex === 4}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={politie}
              text='RCCU: Forensics'
              details={`Tijdens het seminarie kwamen twee medewerkers van de politie uitleg doen over wat de RCCU doet en we kregen extra informatie over cybercrime. 
              \n•	Seminarie
              \n•	Bedrijf: Federale gerechtelijke politie Limburg
              \n•	Locatie activiteit: PXL
              \n•	Datum: 10 mei 2022
              \n•	Duur: 3 uur
              `}
              index={5}
              expanded={expandedIndex === 5}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={dataroots}
              text='Dataroots: Data/AI strategy'
              details={`Dit seminarie leert ons hoe we AI use cases kunnen opstellen die gericht zijn op zakelijke doelstellingen.
              \n•	Seminarie
              \n•	Bedrijf: Dataroots
              \n•	Locatie activiteit: PXL
              \n•	Datum: 26 oktober 2022
              \n•	Duur: 3 uur
              `}
              index={6}
              expanded={expandedIndex === 6}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={io}
              text='IO Belgium: Automated Testing and Quality Assurance'
              details={`Dit seminarie vertelt hoe we de kwaliteit van onze code kunnen verbeteren en garanderen en hoe we testen automatiseren. 
              \n•	Seminarie
              \n•	Bedrijf: IO Belgium
              \n•	Locatie activiteit: PXL
              \n•	Datum: 9 november 2022
              \n•	Duur: 3 uur
              `}
              index={7}
              expanded={expandedIndex === 7}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={itlicious}
              text='IT Licious: Flutter'
              details={`In het seminarie van IT Licious kregen we uitleg over Flutter en maakten we een oefening om kennis te maken met dit framework.
              \n•	Seminarie
              \n•	Locatie activiteit: PXL
              \n•	Datum: 7 december 2022
              \n•	Duur: 3 uur
              `}
              index={8}
              expanded={expandedIndex === 8}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={brainjar}
              text='Brainjar: ChatGPT and the future of IT'
              details={`Dit seminarie vertelt ons over ChatGPT en de toekomst van IT met automatiseringen van AI.
              \n•	Seminarie
              \n•	Locatie activiteit: PXL
              \n•	Datum: 11 januari 2023
              \n•	Duur: 3 uur
              `}
              index={9}
              expanded={expandedIndex === 9}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
          </ul>
        </div>
      </div>

      <h1>Persoonlijke ontwikkeling</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={pxl}
              text='Projectweek'
              details={`Tijdens deze week kregen de studenten verschillende workshops, seminaries en POP-sessies om hun op persoonlijk en professioneel vlak te ontwikkelen en voor te bereiden op het Research Project.
              \n •	Persoonlijke ontwikkeling
              \n •	De projectweek 
              \n •	Locatie activiteit: PXL
              \n •	Datum: 14 februari 2022 tot en met 18 februari 2022 
              \n •	Duur: 27 uur`}
              index={10}
              expanded={expandedIndex === 10}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={brein}
              text='POP-sessie: Brein aan het werk'
              details={`Tijdens de POP-sessie keken we welk effect internet en sociale media op onze hersenen heeft en de hoeveelheid tijd die we hieraan spenderen. Daarnaast hebben we gezocht naar tools om ons werk zo efficiënt mogelijk aan te pakken.
              \n •	Persoonlijke ontwikkeling
              \n •	Locatie activiteit: PXL
              \n •	Datum: 22 februari 2022
              \n •	Duur: 3 uur
              `}
              index={11}
              expanded={expandedIndex === 11}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={popping}
              text='POP-sessie: POPping '
              details={`Tijdens de POP-sessie hebben we meer inzicht gekregen in onze eigen vaardigheden en die van onze groepsgenoten voor het Research Project. Bovendien hebben wij geoefend met het geven en ontvangen van feedback.
              \n •	Persoonlijke ontwikkeling
              \n •	Korte omschrijving activiteit (1 tot 2 regels)
              \n •	Locatie activiteit: PXL
              \n •	Datum: 22 februari 2022
              \n •	Duur: 3 uur
              `}
              index={12}
              expanded={expandedIndex === 12}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={pxl}
              text='POP-sessie: My Team and I'
              details={`Deze POP-sessie haalde belangen van een goede groepswerking. Daarnaast waren er oefeningen voorzien voor de samenwerking van onze groep te verbeteren als voorbereiding op het IT-Project.
              \n•	Persoonlijke ontwikkeling
              \n•	Locatie activiteit: iSpace (Corda Campus)
              \n•	Datum: 19 oktober 2022
              \n•	Duur: 3 uur
              `}
              index={13}
              expanded={expandedIndex === 13}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;