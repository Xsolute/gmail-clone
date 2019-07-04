import React, { Component } from 'react';
import './MailItem.css';

class MailItem extends Component {
  render() {
    const { title, from, important, read, favorite, checked, id } = this.props;
    return (
      <div className="mail-item">
        <div className={`checkbox ${checked && 'checked'}`}>
          <input type="checkbox" id={id} name={id} value={checked} />
          <label for={id}></label>
        </div>
        {
          favorite && (<div className={`favorite ${favorite && 'starred'}`}>★</div>)
        }
        <div className="mail-title">
          {title}
        </div>
      </div>
    );
  }
}

export default MailItem;