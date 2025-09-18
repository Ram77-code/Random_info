import React from "react";
import ReactDOM from "react-dom";

function Card_1(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} />
      <a href={props.a} target="_blank" rel="noopener noreferrer">
        ...About Tea
      </a>
      <p>{props.email}</p>
      <p>{props.id}</p>
    </div>
  );
}
function Card_2(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} />
      <a href={props.a} target="_blank" rel="noopener noreferrer">
        ...About Laptop
      </a>
      <p>{props.email}</p>
      <p>{props.id}</p>
    </div>
  );
}
function Card_3(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} />
      <a href={props.a} target="_blank" rel="noopener noreferrer">
        ...About Guitar
      </a>
      <p>{props.email}</p>
      <p>{props.id}</p>
    </div>
  );
}
function Card_4(props) {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <h2>{props.Copywright + ":" + currentYear}</h2>
      <h4>{props.footer}</h4>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>Random info</h1>

    <Card_1
      name="Tea"
      img="https://picsum.photos/id/63/300/300"
      alt="Tea"
      email="B@Tea.com"
      id="123-456-789"
      a="https://en.wikipedia.org/wiki/Tea"
    />
    <Card_2
      name="Laptop"
      img="https://picsum.photos/id/0/300/300"
      alt="Laptop"
      email="B@Laptop.com"
      id="123-000-789"
      a="https://en.wikipedia.org/wiki/Laptop"
    />
    <Card_3
      name="Guitar"
      img="https://picsum.photos/id/145/300/300"
      alt="Guitar"
      email="B@Guitar.com"
      id="123-111-789"
      a="https://en.wikipedia.org/wiki/Guitar"
    />
    <Card_4 Copywright="Copywright©" footer="Developed by Ram via React" />
  </div>,
  document.getElementById("root")
);
