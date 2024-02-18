import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";


/*
  - Yarn install
  - Remove App.Restrictmode in index.js
*/
function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "grey";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    };
  }, []);

  const [cards, setCards] = useState([
    {
      title: "อาหารคาว",
      subtitle: "ต้มยำกุ้ง",
      vote: 0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id pretium lacus, vel dapibus sem. Praesent non libero eget augue ullamcorper faucibus sit amet sit amet eros. Integer nec enim sit amet mi varius elementum. Proin velit justo, posuere suscipit vestibulum a, gravida in arcu. Vivamus pretium nulla vestibulum orci consequat, ac venenatis magna tempus. Phasellus nec aliquet ipsum. Curabitur sit amet massa turpis. Integer et odio pulvinar ligula efficitur convallis. Integer blandit porta ex. Proin aliquet ut augue vel malesuada. Phasellus sed aliquet erat.",
      image:
        "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "อาหารหวาน",
      subtitle: "Pancake",
      vote: 0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id pretium lacus, vel dapibus sem. Praesent non libero eget augue ullamcorper faucibus sit amet sit amet eros. Integer nec enim sit amet mi varius elementum. Proin velit justo, posuere suscipit vestibulum a, gravida in arcu. Vivamus pretium nulla vestibulum orci consequat, ac venenatis magna tempus. Phasellus nec aliquet ipsum. Curabitur sit amet massa turpis. Integer et odio pulvinar ligula efficitur convallis. Integer blandit porta ex. Proin aliquet ut augue vel malesuada. Phasellus sed aliquet erat.",
      image:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
  ]);

  const handleVoteChange = (index, newVote) => {
    setCards((cards) =>
      cards.map((card, i) => (i === index ? { ...card, vote: newVote } : card))
    );
  };
  return (
    <div className="App">
      <div className="container" style={containerStyle}>
        <h1 className="heading" style={{ color: "#ffcd0e" }}>
          โหวตอาหาร
        </h1>
      </div>
      <div className="container" style={containerStyle}>
        <div className="row">
          {cards.map((card, index) => (
            <Card
              card={card}
              key={index}
              onChangeVote={(newVote) => handleVoteChange(index, newVote)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ card, onChangeVote }) {
  const { image, title, subtitle, text, vote } = card;

  const handleAddVote = () => {
    if (vote < 10) {
      const newVote = vote + 1;
      onChangeVote(newVote);
    } else {
      alert("Cannot Vote more.");
    }
  };

  const handleRemoveVote = () => {
    if (vote > 0) {
      const newVote = vote - 1;
      onChangeVote(newVote);
    } else {
      alert("Cannot Unvote more.");
    }
  };
  return (
    <div className="card" style={cardStyle}>
      <div style={headerContainer}>
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{text}</p>
        </div>
        <img style={{ maxWidth: "25%" }} src={image} alt={title} />
      </div>

      <div style={voteContainer}>
        <button style={button} onClick={handleAddVote}>
          Click to Vote
        </button>
        <p style={voteLabel}>
          {vote === 0 ? "MIN" : vote === 10 ? "MAX" : vote}
        </p>
        <button style={button} onClick={handleRemoveVote}>
          Click to Unvote
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    vote: PropTypes.number,
  }).isRequired,
};
//style
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  margin: "0 auto",
};
const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  maxWidth: "100%",
  height: "auto",
};
const voteContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  height: "auto",
};
const button = {
  margin: "0px 8px 0px 8px",
  padding: "8px 5px 8px 5px",
};
const voteLabel = {
  border: "3px solid black",
  padding: "8px 5px 8px 5px",
  fontSize: "24px",
  fontWeight: "800",
  color: "#9b44ea",
  backgroundColor: "#78e300",
  borderRadius: "8px",
};
const cardStyle = {
  margin: "10px",
  padding: "20px",
  backgroundColor: "#fdebd7",
  borderRadius: "10px",
  border: "3px solid black",
};
export default App;
