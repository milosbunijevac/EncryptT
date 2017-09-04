import React from 'react';
import axios from 'axios';
import Dialog from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

class Decrypt extends React.Component {
  constructor() {
    super();
    this.state = { active: true, decryptmessage: '' };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ active: !this.state.active });
  }


  handleDecryptMessage(name, value) {
    this.setState({ [name]: value });
  }


  decryptAction() {
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: '/graphql',
      data: {
        query: `{decryptMessage(message: ${this.state.message}) {message}}`,
      },
    }).then((response) => {
      console.log('This is the response from the axios call: ', response);
    }).catch((error) => {
      console.log('This is the error from the main axios call: ', error);
    });
  }

  render() {
    const actions = [
      { label: 'Cancel', onClick: this.handleToggle },
      { label: 'Decrypt', onClick: this.handleToggle },
    ];
    return (
      <div>
        <Dialog
          actions={actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title="De/Encrypt"
        >
          <Input
            type="text"
            label="Message"
            name="name"
            value={this.state.decryptmessage}
            onChange={this.handleDecryptMessage.bind(this, 'decryptmessage')}
          />
        </Dialog>
      </div>
    );
  }
}

export default Decrypt;
