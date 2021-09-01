import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TocRoundedIcon from "@material-ui/icons/TocRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import "./TabPanel.css";
function Codeforces(props) {
  const [user, setUser] = useState({
    error: null,
    isLoaded: false,
    items: [],
  });
  fetch(
    "https://codeforces.com/api/user.info?handles=KhNikh"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        setUser({
          isLoaded: true,
          items: result.result,
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setUser({
          isLoaded: true,
          error,
        });
      }
      
    );
  const { handle, value, index, ...other } = props;
  if (user.error) {
    return <div>Error: {user.error.message}</div>;
  } else if (!user.isLoaded) {
    return <div>Loading...</div>;
  } else {
    const usert = user.items[0];
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={10}>
            <Typography className="rank" variant="h7">
              {usert.rank}
              <br />
            </Typography>
            <Typography className="handle" variant="h7">
            {usert.handle}
            </Typography>
            <p className="para">
              From <a href="">{usert.organization}</a>
            </p>
            <div className="rating">
              <TocRoundedIcon fontSize="medium" color="secondary" />
              <Typography className="contest" variant="h6">
                Contest Rating: <a className="color">{usert.rating}</a>
              </Typography>
            </div>
            <br />
            <div className="rating">
              <StarRoundedIcon fontSize="medium" color="primary" />
              <Typography className="contest" variant="h6">
                Friend of: <a className="color">{usert.friendOfCount}</a>
              </Typography>
            </div>
            <br />
            <div className="rating">
              <StarRoundedIcon fontSize="medium" color="action" />
              <Typography className="contest" variant="h6">
                Contributions: <a className="color">{usert.contribution} </a>
              </Typography>
            </div>
            <br />
            <div className="rating">
              <LocationCityIcon fontSize="medium" color="primary" />
              <Typography className="contest" variant="h6">
                City: <a className="color">{usert.city}</a>
              </Typography>
            </div>
          </Box>
        )}
      </div>
    );
  }
}

//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };
export default Codeforces;
