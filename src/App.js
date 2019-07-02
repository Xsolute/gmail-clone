import React, { Component } from 'react';
import MailListTemplate from './components/MailListTemplate';
import Search from './components/Search';
import MailList from './components/MailList';

class App extends Component {
  id = 2
  state = {
    query: '',
    mails: [
      { id: 0, title: 'New mail from Swichee', from: 'minkey@swichee.me', important: true, read: false, favorite: false, checked: false },
      { id: 1, title: '4 Games are on sale!', from: 'Steam', important: false, read: true, favorite: true, checked: false },
    ]
  }
  render() {
    const { query, mails } = this.state;
    return (
      <MailListTemplate search={(
        <Search
          query={query}
        />
      )}>
        <MailList mails={mails}/>
      </MailListTemplate>
    );
  }
}

export default App;
