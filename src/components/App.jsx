import { Profile } from './profile/profile';
import user from '../components/user.json';
import data from '../components/data.json';
import friends from '../components/friends.json';
import { Statistics } from '../components/statistics/statistics';
import { FriendList } from './friends/friends';
import { TransactionHistory } from '../components/transactionhistory/transactionhistory'
import transactions from '../components/transactions.json'
export const App = () => {
  return (
        <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 30,
        color: '#010101',
        background: 'white'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
     
  );
};
