import React from 'react';
import axios from 'axios';
import Tooltip from 'react-toolbox/lib/tooltip';
import Ripple from 'react-toolbox/lib/ripple';
import theme from 'react-toolbox/lib/ripple/theme.css';

class Passphrase extends React.Component {
  constructor() {
    super();
    this.state = { passphrase: '' };
    this.genNewPhrase = this.genNewPhrase.bind(this);
    this.copyClipboard = this.copyClipboard.bind(this);
  }

  componentDidMount() {
    let customphrase = document.location.hash.split('#')[1];
    if (customphrase === undefined) {
      customphrase = 'ab1Zq';
    }
    this.setState({ passphrase: customphrase });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.passphrase !== this.state.passphrase) {
      this.props.handleChange('passphrase', nextState.passphrase);
    }
  }


  copyClipboard() {
    const elem = document.getElementById('pass');
    const tocopy = `#${elem.innerText}`;
    const textArea = document.createElement('textarea'); // Need to create textArea to select text/copy to clipboard
    textArea.style.position = 'fixed';
    textArea.value = tocopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log(`Copying text command was ${msg}`);
    } catch (err) {
      console.log('Oops, unable to copy ', err);
    } finally {
      document.body.removeChild(textArea);
    }
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
    const TooltipLink = Tooltip(Link);
    return (
      <div>
        Your passphrase - <TooltipLink label={this.state.passphrase} tooltip="Click to copy to clipboard"><RippleLink id="pass" onClick={this.copyClipboard} href={`#${this.state.passphrase}`} theme={theme} >
          { this.state.passphrase }
        </RippleLink></TooltipLink>
        <a href="#" className="row" onClick={this.genNewPhrase} > Generate new Passphrase </a>
      </div>
    );
  }
}

export default Passphrase;
