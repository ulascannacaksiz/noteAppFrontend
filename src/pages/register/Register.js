import React from "react";
import {
  TextField,
  Container,
  Grid,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
function Register() {
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
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Ad" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Soyad" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Kullanıcı Adı" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" type="email" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" type="password" label="Şifre" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              type="password"
              label="Şifre Tekrar"
              variant="outlined"
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
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined">Kayıt Ol!</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Register;
