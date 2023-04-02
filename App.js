//  <div id="parent">
// <div id="child">
//     <h1 id="heading">
//         Hi React from parent
//     </h1>
// </div>
// </div> 

const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "Hello From React"),React.createElement("h2", { id: "heading" }, "Hello From React siblings")]
  )
);
const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(element);
