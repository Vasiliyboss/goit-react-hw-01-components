import { Profile } from './profile/profile';
import {GlobalStyle} from '../components/GlobalStyle'
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'
import { Statistics } from '../components/statistics/statistics';
import { FriendList } from './friends/friends';
import { TransactionHistory } from '../components/transactionhistory/transactionhistory'

export const App = () => {
  return (
        <div>
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
    <GlobalStyle/>
    </div>
     
  );
};
