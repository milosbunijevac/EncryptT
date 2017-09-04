import React from 'react';
import Ripple from 'react-toolbox/lib/ripple';
import theme from 'react-toolbox/lib/ripple/theme.css';

class Passphrase extends React.Component {
  constructor() {
    super();
    this.state = { passphrase: '' };
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
        Your passphrase - <RippleLink className="col-md-3" href="#" theme={theme}> Here </RippleLink>
        <h5> Generate new Passphrase </h5>
      </div>
    );
  }
}

export default Passphrase;
