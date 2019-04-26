import CatCard from "../CatCard";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    marginTop: "15vh",
    display: "grid",
    listStyle: "none",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "5%"
  }
};

const CardList = ({ cards, classes, location }) => {
  const filteredCards = location
    ? cards.filter(card => card.location === location)
    : cards;

  return (
    <ul className={classes.root}>
      {filteredCards.map(card => (
        <li>
          <CatCard card={card} />
        </li>
      ))}
    </ul>
  );
};

export default withStyles(styles)(CardList);
