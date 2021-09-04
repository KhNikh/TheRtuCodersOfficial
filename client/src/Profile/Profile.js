import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from "./Avatar";
import Codeforces from "./Codeforces";
import Basic from "./Basic"

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "80vh",
    margin: 0,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          label={
            <Avatar img="https://userpic.codeforces.org/1444203/title/9896ae3b00ca2aba.jpg" />
          }
          {...a11yProps(0)}
        />
        <Tab label="Codechef" {...a11yProps(1)} />
        <Tab label="CodeForces" {...a11yProps(2)} />
        <Tab label="Leetcode" {...a11yProps(3)} />
        <Tab label="InterviewBit" {...a11yProps(4)} />
        <Tab label="Hackerrank" {...a11yProps(5)} />
        <Tab label="Hackerearth" {...a11yProps(6)} />
      
      </Tabs>
      <Basic value={value} index={0} user={props.user}/>
      <Codeforces value={value} index={2} handle="khNikh" maxRank="Master" city="Alwar" rating="992" organisation="Rajasthan technical University" friendOfCount={19} contribution={0}/>
      {/* <TabPanel value={value} index={1}>
        <h3> TwoItem TwoItem </h3>
        <h3>Item Two</h3>
        <h3>Item Two</h3>
        <h3>Item Two</h3>
        <h3>Item Two</h3>
        <h3>Item Two</h3>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
