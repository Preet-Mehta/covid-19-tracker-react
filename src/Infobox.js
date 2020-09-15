import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Infobox.css";

function Infobox({
  isRed,
  isBlue,
  isGreen,
  active,
  title,
  cases,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isBlue && "infoBox--blue"
      } ${isGreen && "infoBox--green"} ${isRed && "infoBox--red"}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2
          className={`infoBox__cases ${isRed && "infoBox--cases--red"} ${
            isBlue && "infoBox--cases--blue"
          } ${isGreen && "infoBox--cases--green"}`}
        >
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
