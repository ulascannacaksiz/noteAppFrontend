import React from 'react'
import { Card, Stack, Typography, Box, Grid } from "@mui/material";
function NoteGrid({title,content}) {
  return (
    <>
       <Grid item  md={4}>
        <Card>
          <Box sx={{ p: 2, display: "flex" }}>
            <Stack spacing={0.5}>
            <Typography variant="h6" color="text.header" sx={{textAlign:"center"}}>{title}</Typography>
              <Typography variant="body2" color="text.secondary">
                    {content}
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Grid>
      </>
  )
}

export default NoteGrid