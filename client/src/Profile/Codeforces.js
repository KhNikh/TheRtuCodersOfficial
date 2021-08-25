import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TocRoundedIcon from "@material-ui/icons/TocRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import "./TabPanel.css";
function Codeforces(props) {
  const { handle, value, index, ...other } = props;

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
            {props.maxRank}
            <br />
          </Typography>
          <Typography className="handle" variant="h7">
            {handle}
          </Typography>
          <p className="para">
            From <a href="">{props.organisation}</a>
          </p>
          <div className="rating">
            <TocRoundedIcon fontSize="medium" color = "secondary" />
            <Typography className="contest" variant="h6">
              Contest Rating: <a className = "color">{props.rating}</a>
            </Typography>
          </div><br/>
          <div className="rating">
            <StarRoundedIcon fontSize="medium" color = "primary" />
            <Typography className="contest" variant="h6">
              Friend of: <a className = "color">{props.friendOfCount}</a>
            </Typography>
          </div>
          <br/>
          <div className="rating">
            <StarRoundedIcon fontSize="medium" color = "action" />
            <Typography className="contest" variant="h6">
              Contributions: <a className = "color">{props.contribution} </a>
            </Typography>
          </div>
          <br/>
          <div className="rating">
            <LocationCityIcon fontSize="medium" color = "primary" />
            <Typography className="contest" variant="h6">
              City: <a className = "color">{props.city}</a>
            </Typography>
          </div>
        </Box>
      )}
    </div>
  );
}

//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };
export default Codeforces;
