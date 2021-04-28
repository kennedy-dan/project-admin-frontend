import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import crimeAdm from "../assets/crimeadm.jpg";
import { Redirect, Link } from "react-router-dom";

/**
 * @author
 * @function Signup
 **/

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  signup: {
    marginTop: "2em",
  },
}));

const Signup = (props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    pWord: "",
    showPassword: false,
  });

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showP, setShowP] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const user = useSelector(state => state.user)

  if (user.authenticate) {
    return <Redirect to={"/"} />;
  }else{
    console.log('object');
  }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  };
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center">
        <Grid container item xs={6}>
          <img src={crimeAdm} style={{ width: "100%" }} />
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          className={classes.signup}
          xs={6}
          // style={{background:'black'}}
        >
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="filled-adornment-password">
              <EmailIcon />
            </InputLabel>
            <OutlinedInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              labelWidth={20}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="filled-adornment-password">
              <AccountCircleIcon />
            </InputLabel>
            <OutlinedInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              labelWidth={20}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="filled-adornment-password">
              <AccountCircleIcon />
            </InputLabel>
            <OutlinedInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              labelWidth={20}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="filled-adornment-password">
              <LockIcon />
            </InputLabel>
            <OutlinedInput
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={20}
            />
          </FormControl>
          <Button
          component={Link}
          to='/'
            style={{
              background: "#0B72B9",
              color: "white",
              width: "25ch",
              marginTop: "1em",
            }}
            onClick={userSignup}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
