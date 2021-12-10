import { Fragment } from "react";
import User from "components/Task-1";
import Statistics from "components/Task-2";
import baseUser from "./base/user.json";
import baseStatic from "./base/data.json";

const { username, tag, location, avatar, stats } = baseUser;
export default function App() {
  return (
    <Fragment>
      <User
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="First" stats={baseStatic} />
      <Statistics stats={baseStatic} />
    </Fragment>
  );
}
