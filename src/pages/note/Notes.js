import React from "react";
import { Card, Stack, Typography, Box, Grid } from "@mui/material";
import {useSelector,useDispatch} from "react-redux";
function Notes() {

  const {isLoggedIn,token} = useSelector(state=>state.login);
  console.log(isLoggedIn);
  return (
    <div>

<Grid container spacing={2} mt={2}>
      <Grid item  md={4}>
        <Card>
          <Box sx={{ p: 2, display: "flex" }}>
            <Stack spacing={0.5}>
            <Typography variant="h6" color="text.header" sx={{textAlign:"center"}}>Başlık</Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card>
          <Box sx={{ p: 2, display: "flex" }}>
            <Stack spacing={0.5}>
            <Typography variant="h6" color="text.header" sx={{textAlign:"center"}}>Başlık</Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card>
          <Box sx={{ p: 2, display: "flex" }}>
            <Stack spacing={0.5}>
            <Typography variant="h6" color="text.header" sx={{textAlign:"center"}}>Başlık</Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card>
          <Box sx={{ p: 2, display: "flex" }}>
            <Stack spacing={0.5}>
            <Typography variant="h6" color="text.header" sx={{textAlign:"center"}}>Başlık</Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card>
          <Box sx={{ p: 2, display: "flex" }}>
            <Stack spacing={0.5}>
            <Typography variant="h6" color="text.header" sx={{textAlign:"center"}}>Başlık</Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Grid>
    </Grid>

    </div>
  );
}

export default Notes;
