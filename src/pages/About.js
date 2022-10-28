import "../CSS/about.css";

function About() {
  return (
    <div id="about-page">
      <h1>About Us</h1>
      <div className="about-grid">
        <h3>
          We believe in the life-changing power of learning. We've been driven
          by the vision of what possible when all people can improve their lives
          through education.It's why our uncompromising commitment to equity and
          fairness is behind everything we do.
        </h3>
        <img src={require("../assets/about2.jpg")} alt="" />
      </div>
    </div>
  );
}

export default About;
