import React from 'react';
import '../App.css'
import './About.css';
import './VideoSection.css';
import ik from "./images/ik.jpg";

function AboutSection() {
  return (
    <>
      <div className='about-container'>
        <h2>Over mij</h2>
        <img src={ik} alt='ik' className='photo' />
        <div className='text'>
          <p>Mijn naam is Ruben Smets. Ik ben 22 jaar oud en studeer Toegepaste Informatica met als afstudeerrichting AI & Robotics. Mijn hobby’s zijn gitaar spelen en zaalvoetballen. Daarnaast spreek ik ook graag af met vrienden om te gaan sporten en daarna een pintje te gaan drinken. Uiteraard liggen mijn interesses ook in de informatica. Ik ben voornamelijk geïnteresseerd in artificiële intelligentie en het ontwikkelen van applicaties.</p>
          <p>Ik ben een leergierig persoon en dat is zeer belangrijk binnen de informatica, omdat deze sector zich voortdurend ontwikkelt. Ik werk graag in teamverband en zet me altijd hard in voor het team, maar ik sta niet graag op de voorgrond.</p>
          <p>In de toekomst zou ik graag als softwareontwikkelaar willen werken aan een project dat de wereld vooruit helpt. Tijdens mijn stage help ik thuisverplegers om afwijkingen in de slaap van patiënten te detecteren. Dit project geeft me motivatie omdat het anderen kan helpen. Bovendien zou ik graag in een team willen werken, zodat ik van anderen kan leren.</p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;