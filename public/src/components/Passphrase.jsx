import React from 'react';
import axios from 'axios';
import Ripple from 'react-toolbox/lib/ripple';
import theme from 'react-toolbox/lib/ripple/theme.css';

class Passphrase extends React.Component {
  constructor() {
    super();
    this.state = { passphrase: 'ab1Zq' };
    this.genNewPhrase = this.genNewPhrase.bind(this);
  }

  genNewPhrase() {
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: '/graphql',
      data: {
        query: `{passPhrase(passphrase:"${this.state.passphrase}") {passphrase}}`,
      },
    }).then((response) => {
      this.setState({ passphrase: response.data.data.passPhrase.passphrase });
    }).catch((error) => {
      console.log('this is the error from passphrase: ', error);
    });
  }

  render() {
    const Link = props => (
      <a {...props} style={{ position: 'relative' }}>
        {props.children}
      </a>
    );
    const RippleLink = Ripple({ spread: 1 })(Link);
    return (
      <div>
        Your passphrase - <RippleLink href="#" theme={theme}> {this.state.passphrase} </RippleLink>
        <a href="#" className="row" onClick={this.genNewPhrase}> Generate new Passphrase </a>
      </div>
    );
  }
}

export default Passphrase;
