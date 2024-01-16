import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is my initial state values
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/Anurag2499');
    const json = await data.json();

    // this.timer = setInterval(() => {
    //   console.log('timer is running.');
    // }, 1000);

    this.setState({ userInfo: json }); //here iam updating the state.
  }

  componentDidUpdate() {}
  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Bio : {bio}</h3>
        <h4>Contact: @anurag015</h4>
      </div>
    );
  }
}

export default UserClass;
