import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import NoteGrid from "../../components/NoteGrid";
function Notes() {
  /*const { isLoggedIn, token } = useSelector((state) => state.login);
  console.log(isLoggedIn);*/
  return (
    <div>
      <Grid container spacing={2} mt={2}>
        {/*Burda Map yapıp o şekilde doldurcaz*/}
        <NoteGrid title={"Deneme"} content={"lorem ipsm"} />
      </Grid>
    </div>
  );
}

export default Notes;
