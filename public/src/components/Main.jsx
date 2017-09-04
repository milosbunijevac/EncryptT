import React from 'react';
import axios from 'axios';
import { Button } from 'react-toolbox/lib/button';

import Name from './Name';
import Message from './Message';
import Expiration from './Expiration';
import Passphrase from './Passphrase';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
    this.encryptAction = this.encryptAction.bind(this);
  }

  handleChange(item, value) {
    this.setState({ [item]: value });
  }

  encryptAction() {
    console.log(this.state.date);
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: '/graphql',
      data: {
        query: `{secretMessage(passphrase:"test", name:"${this.state.name}", message:"${this.state.message}", expirDate:"${this.state.date}") {passphrase, name, message, expirDate}}`,
      },
    }).then((response) => {
      console.log('This is the response from the axios call: ', response);
    }).catch((error) => {
      console.log('This is the error from the main axios call: ', error);
    });
  }

  render() {
    return (
      <div className="container mainFrame">
        <h2>Enigma Program</h2>
        <Name handleChange={this.handleChange.bind(this)} />
        <Message handleChange={this.handleChange.bind(this)} />
        <Expiration handleChange={this.handleChange.bind(this)} date={this.state.date} />
        <Button label="ENCRYPT" onClick={this.encryptAction} />
        <Button label="DECRYPT" />
        <div className="footer">
          <Passphrase handleChange={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Main;
