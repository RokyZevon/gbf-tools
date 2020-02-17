import React from "react";
import {
  Card,
  CardHeader,
  TextField,
  Typography,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  header: {
    padding: theme.spacing(1)
  },
  devider: {
    marginBottom: theme.spacing(1.5)
  },
  input: {
    margin: theme.spacing(1)
  }
}));

export default function BoxInput({ current, onChange }) {
  const classes = useStyles();
  const onValueChange = e => {
    onChange(e.target.name, Number(e.target.value));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title="数据输入"
        titleTypographyProps={{ variant: "subtitle1" }}
      />
      <Divider className={classes.devider} />

      <TextField
        name="targetBox"
        label="目标箱数"
        variant="outlined"
        className={classes.input}
        onChange={onValueChange}
        value={current.targetBox === null ? "" : current.targetBox}
      />
      <TextField
        name="drewBox"
        label="已刷箱数"
        variant="outlined"
        className={classes.input}
        onChange={onValueChange}
        value={current.drewBox === null ? "" : current.drewBox}
      />

      <TextField
        name="currentToken"
        label="持有战货数"
        variant="outlined"
        className={classes.input}
        onChange={onValueChange}
        value={current.currentToken === null ? "" : current.currentToken}
      />
      <TextField
        name="currentHonor"
        label="累计贡献"
        variant="outlined"
        className={classes.input}
        onChange={onValueChange}
        value={current.currentHonor === null ? "" : current.currentHonor}
      />
      <TextField
        name="currentMeat"
        label="持有肉数"
        variant="outlined"
        className={classes.input}
        onChange={onValueChange}
        value={current.currentMeat === null ? "" : current.currentMeat}
      />
    </Card>
  );
}