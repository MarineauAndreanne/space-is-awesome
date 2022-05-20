import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PhotoOfDay from "./PhotoOfDay";
import RocketLaunches from "./RocketLaunches";
import AsteroidTracker from "./AsteroidTracker";

import "../styles/News.css";

export default function NewsTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="tabs">
        <TabList className="all-tabs">
          <Tab>Photo of the day</Tab>
          <Tab>Rocket Launches</Tab>
          <Tab>Asteroid tracker</Tab>
        </TabList>
      </div>
      <div className="panel" id="go-to-tabs">
        <TabPanel>
          <PhotoOfDay />
        </TabPanel>
        <TabPanel>
          <RocketLaunches />
        </TabPanel>
        <TabPanel>
          <AsteroidTracker />
        </TabPanel>
      </div>
    </Tabs>
  );
}
