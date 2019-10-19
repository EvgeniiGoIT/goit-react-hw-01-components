import React from 'react';

import Profile from '../Profile';
import Stats from '../Stats';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';

import user from '../../Data/user.json';
import stats from '../../Data/stats.json';
import friends from '../../Data/friends.json';
import transactions from '../../Data/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
export default App;
