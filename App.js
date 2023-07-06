const heading = React.createElement(
    "h1",
     {id:"heading"},
     "hello world vipin chauhan!"
      );
//
const parent=React.createElement("div",
 {id:"parent"},
 React.createElement("div",
  {id:"child-1"},
[React.createElement("h1",{},"i am an h1 tag"),
 React.createElement("h2",{},"i am an h2 tag")]),
 React.createElement("div",
  {id:"child-2"},
[React.createElement("h1",{},"i am an h1 tag"),
 React.createElement("h2",{},"i am an h2 tag")]));
//const root =ReactDOM .createRoot(document.getElementById('root'));
const root =ReactDOM .createRoot(document.getElementById('root'));
root.render(parent);