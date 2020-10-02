import React from "react";
import {
  Typography,
  Chip,
  Card,
  Button,
  CardMedia,
  CardActions,
  makeStyles,
  CardContent,
  Hidden,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import {
  PROJECT_VISIT,
  PROJECT_DEMO,
  PROJECT_GITHUB,
} from "../../constants/lang";

const useStyles = makeStyles({
  root: {
    maxWidth: "95%",
    maxHeight: "inherit",
    height: "inherit",
    background: "#000000",
    color: "#ffffff",
  },
  media: {
    height: 300,
    backgroundPosition: "inherit",
  },
  frameworks: {
    display: "block",
  },
  widthFull: {
    width: "100%",
  },
  widthHalf: {
    width: "50%",
  },
  buttonLink: {
    width: "100%",
    color: "#ffffff",
    border: "1px solid #ffffff",
  },
  iconLink: {
    padding: "5px",
  },
});
function ProjectBox({
  getType,
  data: { image, title, desc, skillType, demo, github },
}) {
  const classes = useStyles();
  // console.log(data);
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
      <CardActions className={classes.frameworks}>
        {skillType &&
          skillType.map((data, index) => {
            const content = (
              <span>
                <Hidden only="xs">
                  <i className={data.icon}></i>
                </Hidden>{" "}
                <>{data.name}</>
              </span>
            );
            return <Chip key={index} size="medium" label={content}></Chip>;
          })}
      </CardActions>
      <CardActions>
        {demo ? (
          <a
            href={demo}
            className={classes.widthFull}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outlined" className={classes.buttonLink}>
              {/* <IconButton className="icon-link"> */}
              <LaunchIcon className={classes.iconLink} />
              {/* </IconButton> */}
              {getType === "personal" ? PROJECT_DEMO : PROJECT_VISIT}
            </Button>
          </a>
        ) : null}
        {github ? (
          <a
            href={github}
            className={classes.widthFull}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outlined" className={classes.buttonLink}>
              {/* <IconButton className="icon-link"> */}
              <GitHubIcon className={classes.iconLink} />
              {/* </IconButton> */}
              {PROJECT_GITHUB}
            </Button>
          </a>
        ) : null}
      </CardActions>
    </Card>
  );
}
export default ProjectBox;
