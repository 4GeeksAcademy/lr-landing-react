import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;