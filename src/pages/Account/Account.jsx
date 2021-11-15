import React from "react";
import AccountProfile from "../../components/AccountProfile/AccountProfile";
import Nav from "../../components/Nav/Nav";
import Plans from "../../components/Plans/Plans";
import { Tab, Tabs } from "../../components/Tabs/Tabs";

import "./styles.scss";
const Account = () => {
  return (
    <div className="account">
      <Nav component="account" />
      <div className="account-tabs">
        <Tabs>
          <Tab label={"profile"} tabName={"Profile"}>
            <AccountProfile />
          </Tab>
          <Tab label={"my-plan"} tabName={"My Plan"}>
            <Plans />
          </Tab>
          <Tab label={"billing"} tabName={"Billing"}>
            console.log('Alignment', Alignment)
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
