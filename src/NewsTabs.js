import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PhotoOfDay from "./PhotoOfDay";
import RocketLaunches from "./RocketLaunches";
import MarsRover from "./MarsRover";
import AsteroidTracker from "./AsteroidTracker";

import "./styles/News.css";

export default function NewsTabs() {
  return (
    <Tabs>
      <div className="tabs">
        <TabList className="all-tabs">
          <Tab>Photo of the day</Tab>
          <Tab>Rocket Launches</Tab>
          <Tab>Mars Rover</Tab>
          <Tab>Asteroid tracker</Tab>
        </TabList>
      </div>
      <div className="panel">
        <TabPanel>
          <PhotoOfDay />
        </TabPanel>
        <TabPanel>
          <RocketLaunches />
        </TabPanel>
        <TabPanel>
          <MarsRover />
        </TabPanel>
        <TabPanel>
          <AsteroidTracker />
        </TabPanel>
      </div>
    </Tabs>
  );
}
