import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions ,Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState } from 'react';


function Story() {

    const [storyVisible, setStoryVisible] = useState(false);

    const handleCardClick = () => {
      setStoryVisible(true);
    };
  
    const handleCloseStory = () => {
      setStoryVisible(false);
    };


  return (

    <div className='StoryContainer' style={{"padding":"0 10px","width":"10vw"}}>
         <Card sx={{ maxWidth: 160 }} onClick={handleCardClick}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Lizard
                        </Typography>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>B</Avatar>
                    </CardContent>
                </CardActionArea>
                
         </Card>

            <Dialog open={storyVisible} onClose={handleCloseStory}>
                    <DialogContent>
                        <img style={{"width":"30vw","height":"80vh"}} 
                        src="https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0" alt="image in the story"/>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseStory} color="primary">
                            Close
                        </Button>
                    </DialogActions>
            </Dialog>
        
    </div>
  )
}

export default Story;