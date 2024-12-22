import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  const cardData = [
    {
      title: "Card Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      imgSrc: "https://via.placeholder.com/500x325",
      buttonLabel: "Find Out More!",
      buttonLink: "#",
    },
    {
      title: "Card Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempora debitis.",
      imgSrc: "https://via.placeholder.com/500x325",
      buttonLabel: "Find Out More!",
      buttonLink: "#",
    },
    {
      title: "Card Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempora debitis.",
      imgSrc: "https://via.placeholder.com/500x325",
      buttonLabel: "Find Out More!",
      buttonLink: "#",
    },
    {
      title: "Card Title 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      imgSrc: "https://via.placeholder.com/500x325",
      buttonLabel: "Find Out More!",
      buttonLink: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container my-4">
        <div className="row g-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              buttonLabel={card.buttonLabel}
              buttonLink={card.buttonLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;