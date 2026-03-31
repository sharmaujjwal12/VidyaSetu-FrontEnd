import Banner from "../Components/Banner.jpeg"
import styles from "./Sliding.module.css"
function Sliding(){
  return (
    <>
      <div id={`carouselExampleSlidesOnly ${styles.sliding}`} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Banner} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Banner} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Banner} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </>
  )
}

export default Sliding;