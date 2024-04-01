import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Child constructor");

    this.state = {
      userInfo: {
        name: "Dummy Name",
        bio: "Software Enginner",
        login: "@mohitkr.ydv",
        avatar_url: "http://loadphoto.com",
      },
    };
  }

  async componentDidMount() {
    console.log("Child componentDidMount called");
    const data = await fetch("https://api.github.com/users/mohit-ydv");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component DId update called");
  }

  componentWillUnmount() {
    console.log("component Will UnMount is called");
  }

  render() {
    console.log("Child render");
    const { name, bio, login } = this.state?.userInfo;
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
