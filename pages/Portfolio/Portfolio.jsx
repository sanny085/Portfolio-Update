import React, { useState } from 'react';
import './Portfolio.css';

import {
    Card,
    CardActionArea,
    Grid,
    Grow,
    Tabs,
    Typography
} from "@material-ui/core";
import Tab from '@material-ui/core/Tab';
import ResumeData from "../../utils/resumeDate";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,  Button } from 'react-bootstrap';

 
 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent'; 
import DialogTitle from '@material-ui/core/DialogTitle';
import Gallery from '../../components/ImageGallery/Gallery';
 


function Portfolio() {
    const [tabvalue, setTabvalue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);

    return (
  <Grid container className="section p_30 pb_45">


{/*Portfolio*/}
<Grid item className="section_title top_30">
    <span></span>
    <h6 className="section_title_text">Portfolio</h6>
</Grid>
{/*End Portfolio*/}


{/*Tabs*/}
<Grid item xs={12}>
    <Tabs value={tabvalue} indicatorColor="white" className="customTabs" 
        onChange={(event, newValue) =>{setTabvalue(newValue) }}>

        <Tab label="All" value="All" 
            className={ tabvalue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />   
        {/*Set method remove Duplicate value from listing*/}
        { [...new Set(ResumeData.projects.map((items) => items.tag ))].map( (n)=>  (
            <Tab label={n}  value={n} className={tabvalue === n ? 'customTabs_item active' : 'customTabs_item'} />
          ) )
        }
    </Tabs>
</Grid>
{/*End Tabs*/}


{/*Project*/}
 <Grid item xs={12}>
    <Grid container spacing={2}>
      {ResumeData.projects.map( (pro) => (
        <> 
        {tabvalue === "All" || tabvalue === pro.tag ? (
         <Grid item key={pro} xs={12} sm={6} md={4} >
           <Grow in timeout={1000} key={pro}>
             <Card className="CustomCard" onClick={ ()=> setProjectDialog(pro) }>
                <CardActionArea>
                <div className="media-custom">
                    <CardMedia
                    key={pro}
                    className='CustomCard_image'
                    image={pro.image[0]}
                    title={pro.title}
                    />
                    </div>
                 <CardContent>
                    <Typography variant={"body2"} classname="CustomCard_title">
                        {pro.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="CustomCard_caption">
                       {pro.caption}
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
            </Grow>
         </Grid>

        ) : null}
        
        </>
      ))}

    </Grid>
 </Grid>
{/*End Project*/}
<Dialog style={{width:'70wh'}}   fullWidth className="projectDialog" open={projectDialog} onClose={ ()=> setProjectDialog(false)}>
        <DialogTitle onClose={ ()=> setProjectDialog(false)}>
         {projectDialog.title}
        </DialogTitle>
        
        <DialogContent  className="projectDialog_Dcontent"> 
         {projectDialog.image && (
             <Gallery images={projectDialog.image}/>
         )}

          <Typography className="projectDialog_description"> {projectDialog.description}</Typography>
        </DialogContent>

        <DialogActions className="projectDialog_actions"  >
        { projectDialog?.links?.map( (key,x) => (
            <Nav.Link href={key.link} to={key.link}  target="_blank" className="projectDialog_icon">
                   
                  <Button variant={ x===0? "danger" : "dark"} >{key.icon}</Button>  
                   
            </Nav.Link>
        )) }
         
        </DialogActions>
    </Dialog>
     </Grid>
    )
}
export default Portfolio;
