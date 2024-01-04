import User from './User';
import UserClass from './UserClass';
import { UserContext } from '../utils/UserContext';
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
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-lg">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is the about page of Food App.</h2>
        {/* <User name={'Anurag (function)'} /> */}
        <UserClass name={'Anurag (Class)'} />
      </div>
    );
  }
}

export default About;
