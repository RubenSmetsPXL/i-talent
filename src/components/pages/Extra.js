import '../../App.css';
import styled from 'styled-components';
import Vuelogo from '../images/Vue.png'
import Angularlogo from '../images/angular.png'
import Reactlogo from '../images/react.png'

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

function Extra() {
  return (
    <>
      <h2>Website in React voor I-Talent</h2>
      <p>Voor het creëren van een website zijn er verschillende frameworks beschikbaar, maar binnen deze sector zijn Angular, Vue en React de populairste. Tijdens de lessen Web Advanced en Web Expert heb ik al kennisgemaakt met Vue. Tijdens het IT-Project heeft ons team Angular gebruikt voor een webapplicatie te maken. Het enige framework van deze drie waar ik nog niet mee gewerkt had, was React. Vandaar dat ik deze website in React gemaakt heb. Deze site is gehost op GitHub Pages.</p>
      <ImageWrapper>
        <Image src={Vuelogo} alt='vue' />
        <Image src={Angularlogo} alt='angular' />
        <Image src={Reactlogo} alt='react' />
      </ImageWrapper>
    </>
  )
}

export default Extra;