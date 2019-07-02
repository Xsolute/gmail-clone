import React, { Component } from 'react';
import './MailItem.css';

class MailItem extends Component {
  render() {
    const { title, from, important, read, favorite, checked, id } = this.props;
    return (
      <div className="mail-item">
        <div className="todo-text">
          {title}
        </div>
      </div>
    );
  }
}

export default MailItem;