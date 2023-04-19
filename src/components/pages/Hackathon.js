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
      <h1>Innovatieroute Low Code</h1>
      <p>blablabla</p>

      <ImageWrapper>
        <Image src={Outsystems} alt='outsystems' />
        <Image src={Mendix} alt='mendix' />
      </ImageWrapper>

    </>
  )
}

export default Innovatieroute;