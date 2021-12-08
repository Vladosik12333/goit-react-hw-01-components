import { Fragment } from "react";
import Button from "components/button";
import base from "./base.json";

export default function App() {
  return (
    <Fragment>
      <Button array={base} />
    </Fragment>
  );
}
