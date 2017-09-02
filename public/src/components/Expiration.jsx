import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';

class Expiration extends React.Component {
  constructor() {
    super();
    this.state = { none: '' };
  }

  render() {
    return (
      <DatePicker
        label="Expiration Date"
        sundayFirstDayOfWeek
        onChange={this.props.handleChange.bind(this, 'date')}
        value={this.props.date}
      />
    );
  }
}

export default Expiration;
