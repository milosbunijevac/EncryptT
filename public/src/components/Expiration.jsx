import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';

class Expiration extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <DatePicker label="Expiration Date" sundayFirstDayOfWeek />
    );
  }
}

export default Expiration;
