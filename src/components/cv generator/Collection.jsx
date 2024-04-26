import React from "react";
import { Link } from "react-router-dom";
import b1 from "../../assets/img/cv1.png";

export default function Collection() {
  // Define data for cards
  const cardsData = [
    {
      id: 1,
      imgSrc: b1,
      title: "Card 1",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 2,
      imgSrc: b1,
      title: "Card 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
      id: 3,
      imgSrc: b1,
      title: "Card 3",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
  ];

  return (
    <>
      <div style={{ margin: "20px" }}>
        <div className="card-group">
          {cardsData.map((card) => (
            <div
              className="card"
              style={{ margin: "20px" }}
              id={`cv${card.id}`}
              key={card.id}
            >
              <Link
                to={`/generate/${card.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={card.imgSrc}
                  className="card-img-top"
                  alt="..."
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
