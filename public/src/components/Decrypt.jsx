import React from 'react';
import axios from 'axios';
import Dialog from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

class Decrypt extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const actions = [
      { label: 'Cancel', onClick: this.handleToggle },
      { label: 'Save', onClick: this.handleToggle },
    ];
    return (
      <div>
        <Button label="Show my dialog" onClick={this.handleToggle} />
        <Dialog
          actions={actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title="My awesome dialog"
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
      </div>
    );
  }
}

export default Decrypt;
