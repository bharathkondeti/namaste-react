const heading = React.createElement(
  "h1",
  {id: "heading", class: "heading"},
  "Hello world from React!!"
);
console.log(heading); //prints an object
//React.createElement creates an object with all the details we provide.
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(heading);

/**
 * <div id="parent">
 *    <div id="child">
 *        <h1>Iam in h1 tag</h1>
 *        <h2>Iam in h2 tag</h2>
 *    </div>
 * </div>
 * 
 * Let's just create this kind of structure.
 * If we have to create, like shown above as h1 and h2, we have convert 3rd argument as an array.
 * 
 * 
 * ReactElement is an object where render function converts it into HTML which browser understands. This is happening behind the scenes in the React.
 */

const parent = React.createElement("div", {id: "parent"},
  React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "Iam a h1 tag"),
    React.createElement("h2", {}, "Iam a h2 tag"),
  ])
);
console.log(parent); // logs an object here.
//root.render(parent);

/**
 * <div id="parent">
 *    <div id="child">
 *        <h1>Iam in h1 tag</h1>
 *        <h2>Iam in h2 tag</h2>
 *    </div>
 *    <div id="child2">
 *        <h1>Iam in h1 tag</h1>
 *        <h2>Iam in h2 tag</h2>
 *    </div>
 * </div>
 *
 */
const parent1 = React.createElement("div", {id: "parent"},
  React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "Iam a h1 tag"),
    React.createElement("h2", {}, "Iam a h2 tag"),
  ]),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "Iam a h1 tag"),
    React.createElement("h2", {}, "Iam a h2 tag"),
  ]),
);
root.render(parent1);
