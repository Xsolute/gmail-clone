import React, { Component } from 'react';
import MailItem from './MailItem';

class MailList extends Component {
  render() {
    const { mails } = this.props;
    
    const mailList = mails.map(
      (mail) => (
        <MailItem
          {...mail}
        />
      )
    )
    return(
      <div>
        {mailList}
      </div>
    );
  }
}

export default MailList;