import { createElement, Fragment } from "react";
import "./style.scss";

function App() {
  function Button(props) {
    return <button>{props.text}</button>;
  }

  const todos = ["todo1", "todo2", "todo3"];

  const searchFunction = () => {
    alert("Hello Melis");
  };
  const melis = "Melis";

  const h1 = createElement("h1", null, "MELIS.KG");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );
  const button = createElement(
    Button,
    {
      text: "Button Text",
    },
    null
  );
  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    h1,
    ul,
    button
  );

  return (
    <>
      <Button />
    </>
  );
}

export default App;
