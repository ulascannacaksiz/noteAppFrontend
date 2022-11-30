import {useState,useEffect} from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import NoteGrid from "../../components/NoteGrid";
import axios from "axios";
function Notes() {
  const { isLoggedIn, token } = useSelector((state) => state.login);
  const [noteData,setNoteData] = useState([])
  let config = {
   headers: {
      Authorization: token
   }
}
useEffect(() => { 
  axios
  .get("https://localhost:7224/Note/Notes",config)
  .then(function (response) {
    setNoteData(response.data)
  })
  .catch(function (error) {
    console.log(error.response.data);
  });

}, []);
  return (
    <div>
      <Grid container spacing={2} mt={2}>        
        {
          noteData.map((data,index)=>(
            <NoteGrid title={data.noteTitle} id={data.noteId} content={data.noteDescription} key={index}/>
          ))
        }
        
      </Grid>
    </div>
  );
}

export default Notes;
