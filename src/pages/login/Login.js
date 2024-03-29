import { useState } from "react";
import styles from "./login.module.css";
import { TextField, Container, Grid, Button } from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setToken } from "../../stores/login";
import { redirect } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, token } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isLoggedIn);

    axios
      .post("https://localhost:7224/User/Login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        
        dispatch(setLogin());
        dispatch(setToken(`bearer ${response.data.token}`));
        return redirect("/Note");
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
  return (
    <div>
      <Container maxWidth="xl" columns={6}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={4}
            marginTop={2}
            className={styles.child}
            direction="columns"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <TextField
              fullWidth
                id="outlined-basic"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
              fullWidth
                id="outlined-basic"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Şifre"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={8}>
              <Button type="submit" variant="outlined" id="btngirisyap">
                Giriş yap!
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default Login;
