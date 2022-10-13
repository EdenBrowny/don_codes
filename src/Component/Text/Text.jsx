import "./Text.scss";

export default function Text() {
  return (
    <>
      <div className="texts">
        <div className="text-container">
          <p>
            Just The Way <span className="Cards">You Want!</span>
          </p>
        </div>

        <div className="text-image">
          <div className="image-container">
            <img src="images/Perfume.jpeg" className="Perfumes" alt="" />
          </div>
          <div className="image-cards">
            <img src="images/Cost.png" className="Cost" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
