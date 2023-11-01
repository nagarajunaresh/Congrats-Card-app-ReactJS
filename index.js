const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h3 className="name">Kiran V</h3>
      <p className="para">
        Vishnu Institute of Computer Education and Technology.
        <br />
        Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
