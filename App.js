const heading = React.createElement(
  "h1",
  { id: "hello", className: "world", hello: "world" },
  "Hello from React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = React.createElement("h1", { id: "title" }, "Heading 1 from React");
const h2 = React.createElement("h2", { id: "title" }, "Heading 2 from React");
const div = React.createElement("div", { id: "container" }, [h1, h2]);

root.render(div);
