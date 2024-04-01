import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount called");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <div>
          Loggedin User : 
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </div>
        <h2>This is my react project</h2>
        {/* <User name={"Mohit Yadav (function)"} /> */}
        <UserClass name={"Mohit Yadav (class)"} location={"Navi Mumbai"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is my react project</h2>
//       {/* <User name={"Mohit Yadav (function)"} /> */}
//       <UserClass name={"Mohit Yadav (class)"} location={"Navi Mumbai"} />
//     </div>
//   );
// };

export default About;
