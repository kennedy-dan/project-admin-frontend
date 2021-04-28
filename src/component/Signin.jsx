import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions";
import { Redirect, Link } from "react-router-dom";


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
  btn: {
    width: "25ch",
    margin: theme.spacing(1),
  },
}));

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
   
  }, [])
const dispatch = useDispatch()  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const userSignin = (e) => {
    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(signin(user))
  }
  if(auth.authenticate){
    return <Redirect to = {'/'}/>
  }else{
    console.log('object');
  }
  const notLogged =() => {
    <Redirect to={"/signup"}/>
  }

  return (
    <React.Fragment>
      <Grid container direction="column">
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            labelWidth={40}
          />
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button color="primary" variant="contained" className={classes.btn} onClick={userSignin}>
          Sign In
        </Button>
        <Typography>Not signed in, <Button color='primary'component={Link} to="/signup">Sign up</Button> </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Signin;
