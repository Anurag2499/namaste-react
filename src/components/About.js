import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent ComponentDidMount');
  }

  render() {
    // console.log('Parent Render');
    return (
      <div>
        <h1>About Page</h1>
        <h2>This is the about page of Food App.</h2>
        {/* <User name={'Anurag (function)'} /> */}
        <UserClass name={'Anurag (Class)'} />
      </div>
    );
  }
}

export default About;
