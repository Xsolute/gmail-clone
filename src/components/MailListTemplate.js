import React from 'react';
import './MailListTemplate.css';

const MailListTemplate = ({search, children}) => {
  return (
    <main className="mail-list-template">
      <div className="title">
        GeeMail
      </div>
      <section className="mails-wrapper">
        { children }
      </section>
    </main>
  );
};

export default MailListTemplate;