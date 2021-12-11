import { Fragment } from "react";
import User from "components/Task-1";
import Statistics from "components/Task-2";
import FriendList from "components/Task-3";
import TransactionHistory from "components/Task-4";
import Template from "components/Template";
import baseUser from "./base/user.json";
import baseStatic from "./base/data.json";
import baseFriends from "./base/friends.json";
import baseTransactions from "./base/transactions.json";

const { username, tag, location, avatar, stats } = baseUser;

export default function App() {
  return (
    <Fragment>
      <Template>
        <User
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Template>
      <Template>
        <Statistics title="Static" stats={baseStatic} />
      </Template>
      <Template>
        <FriendList friends={baseFriends} />
      </Template>
      <Template>
        <TransactionHistory items={baseTransactions} />
      </Template>
    </Fragment>
  );
}
