import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import { TYPE_PERSONAL } from "../../constants/types";
import { STYLE_PROJECT_BOX } from "../../constants/makeStyles";
import {
  PROJECT_VISIT,
  PROJECT_DEMO,
  PROJECT_GITHUB,
} from "../../constants/lang";
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

const useStyles = makeStyles(STYLE_PROJECT_BOX);

function ProjectBox({
  getType,
  data: { image, title, desc, skillType, demo, github },
}) {
  const classes = useStyles();

  const GithubLink = () => {
    return (
      <a
        href={github}
        className={classes.widthFull}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outlined" className={classes.buttonLink}>
          <GitHubIcon className={classes.iconLink} />
          {PROJECT_GITHUB}
        </Button>
      </a>
    );
  };
  const DemoLink = () => {
    return (
      <a
        href={demo}
        className={classes.widthFull}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outlined" className={classes.buttonLink}>
          <LaunchIcon className={classes.iconLink} />
          {getType === TYPE_PERSONAL ? PROJECT_DEMO : PROJECT_VISIT}
        </Button>
      </a>
    );
  };
  const FrameworksUsed = () => {
    return (
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
    );
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
      <FrameworksUsed />
      <CardActions>
        {demo ? <DemoLink /> : null}
        {github ? <GithubLink /> : null}
      </CardActions>
    </Card>
  );
}
export default ProjectBox;
