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

export default function AddPerson() {
  const classes = useStyles();
  return (
    <form
      className={`${classes.root} addPerson--form`}
      noValidate
      autoComplete="off"
    >
      <h1 className="addPerson--heading">Add Person</h1>
      <TextField id="input-first-name" label="First Name" variant="outlined" />
      <br />
      <TextField id="input-last-name" label="Last Name" variant="outlined" />
      <br />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
