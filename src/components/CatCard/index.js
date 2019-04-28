import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

const MediaCard = ({ classes, cat: { url } }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia className={classes.media} image={url} title={url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {`${"name"} from ${"location"}`}
        </Typography>
        <Typography component="p">{"description"}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        details
      </Button>
    </CardActions>
  </Card>
);

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
