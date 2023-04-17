import '../../App.css';
import Cards from '../Cards';
import code from "../videos/code.mp4";

function Overview() {
  return (
    <>
      <div className='video-container'>
        <video src={code} autoPlay loop muted />
      </div>
      <Cards></Cards>
    </>
  )
}

export default Overview;