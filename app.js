/**
 * <div id='parent'>
 *      <div id='child'>
 *          <h1>I am an H1 tag.</h1>
 *      </div>
 * </div>
 */

// const heading = React.createElement("h1", {id:'heading'}, "Hello world from React!");
const heading = React.createElement("div", {id:'parent'}, 
        React.createElement("div", {id:'child'}, [React.createElement("h1", {}, "I am an H1 tag"), React.createElement("h2", {}, "I am an H2 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading)
root.render(heading);