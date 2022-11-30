import {useState,useEffect} from "react";
import { TextField, Container, Grid, Button,Alert } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom'

function EditNote() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const { isLoggedIn, token } = useSelector((state) => state.login);
    let config = {
        headers: {
           Authorization: token
        }
     }    
     useEffect(()=>{
      axios
      .get(`https://localhost:7224/Note/Notes/${id}`,config)
      .then(function (response) {
        setDescription(response.data.noteDescription)
        setTitle(response.data.noteTitle)
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
     },[])
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .put("https://localhost:7224/Note/Notes", {
            id:id,
            title: title,
            description: description,
          },config)
          .then(function (response) {
            console.log(response);
            setResponseMsg(response.data);
          })
          .catch(function (error) {
            setResponseMsg(error.response.data);
          });
      };

  return (
    <div>
      <Container maxWidth="xl">
        <form onSubmit={handleSubmit}>
        

          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop={12}
          >
            {
              responseMsg&&(
                <Grid item xs={8}>
                <Alert severity="info">{responseMsg}</Alert>
                </Grid>
              )
            }

            
            <Grid item xs={8}>
              <TextField
                fullWidth 
                id="standard-multiline-static"
                label="Not Başlığı"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-multiline-static"
                label="Not İçeriği"
                multiline
                rows={12}
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
         </Grid>
            <Grid item xs={8}>
              <Button type="submit" variant="outlined" id="btnkaydet">
                Güncelle
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

export default EditNote