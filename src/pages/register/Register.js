import React from "react";
import {
  TextField,
  Container,
  Grid,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
function Register() {
  const [responseMsg, setResponseMsg] = useState("");

  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [sifreT, setSifreT] = useState("");
  const [cinsiyet, setCinsiyet] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://localhost:7224/User/Register",
        {
          name:ad,
          surname:soyad,
          username: userName,
          mail: email,
          password: sifre,
          confrimPassword:sifreT,
          gender:cinsiyet
        }
      )
      .then(function (response) {
        setResponseMsg(response.data);
      })
      .catch(function (error) {
        setResponseMsg(error.response.data);
      });
  };
  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          marginTop={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1>NoteApp Yeni Hesap Oluştur</h1>
          {responseMsg && (
            <Grid item xs={8}>
              <Alert severity="info">{responseMsg}</Alert>
            </Grid>
          )}
          <form  onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Ad"
                variant="outlined"
                value={ad}
                onChange={(e) => setAd(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Soyad"
                variant="outlined"
                value={soyad}
                onChange={(e) => setSoyad(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Kullanıcı Adı"
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                type="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                type="password"
                label="Şifre"
                variant="outlined"
                value={sifre}
                onChange={(e) => setSifre(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                type="password"
                label="Şifre Tekrar"
                variant="outlined"
                value={sifreT}
                onChange={(e) => setSifreT(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Cinsiyet</label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="row-radio-buttons-group"
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  onChange={(e) => setCinsiyet(e.target.value)}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  onChange={(e) => setCinsiyet(e.target.value)}
                />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="outlined">Kayıt Ol!</Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </div>
  );
}

export default Register;
