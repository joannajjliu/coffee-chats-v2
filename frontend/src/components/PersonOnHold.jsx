import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function PersonOnHold() {
  const classes = useStyles();
  return (
    <form
      className={`${classes.root} addPerson--form`}
      noValidate
      autoComplete="off"
    >
      <h1 className="addPerson--heading">Place person on hold</h1>
      <div className="row">
        <TextField id="input-email" label="email" variant="outlined" />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
