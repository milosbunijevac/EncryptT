import React from 'react';
import axios from 'axios';
import { Button } from 'react-toolbox/lib/button';

import Name from './Name';
import Message from './Message';
import Expiration from './Expiration';
import Passphrase from './Passphrase';
import Decrypt from './Decrypt';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date(), passphrase: 'ab1Zq', activeDiag: false };
    this.encryptAction = this.encryptAction.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(item, value) {
    this.setState({ [item]: value });
    if (item === 'passphrase') {
      parent.location.hash = value;
    }
  }

  handleToggle() {
    this.setState({ activeDiag: !this.state.activeDiag });
  }

  encryptAction() {
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: '/graphql',
      data: {
        query: `{secretMessage(passphrase:"${this.state.passphrase}", name:"${this.state.name}", message:"${this.state.message}", expirDate:"${this.state.date}") {passphrase, name, message, expirDate}}`,
      },
    }).then((response) => {
      this.setState({ encrypted: response.data.data.secretMessage.passphrase });
      this.handleToggle();
    }).catch((error) => {
      console.log('This is the error from the main axios call: ', error);
    });
  }

  render() {
    return (
      <div className="container mainFrame">
        <h2>Enigma Program</h2>
        <Name handleChange={this.handleChange} />
        <Message handleChange={this.handleChange} message={(this.state.message) ? this.state.message : ''} />
        <Expiration handleChange={this.handleChange} date={this.state.date} />

        <Button label="ENCRYPT" onClick={this.encryptAction} />
        <Button label="DECRYPT" onClick={this.handleToggle} />
        <div className="footer">
          <Passphrase
            handleChange={this.handleChange}
            passphrase={this.state.passphrase}
          />
        </div>
        {this.state.activeDiag ?
          <Decrypt
            handleChange={this.handleChange}
            date={this.state.date}
            encrypted={(this.state.encrypted) ? this.state.encrypted : null}
          /> : null}
      </div>
    );
  }
}

export default Main;
