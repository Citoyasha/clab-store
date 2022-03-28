import React from "react";
import clb from "./Clab.png";
import './carousel.css';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, CardContent, CardMedia, Typography, Card} from '@mui/material';
import {Spa} from '@mui/icons-material';
import Sitems from './slide.json';
import Citems from './category.json';


function Slide(props) {
    return (
        <Paper style={{backgroundColor:"#ededed"}} sx={{ borderRadius:4 }} elevation={8}>
            <h2>{props.item.name}</h2>
            <img className="HImg" src={clb} alt="toolazytofetchitems"/>
            <p>{props.item.description}</p>
        </Paper>
    )
}

function Slide2(props) {
  return (
    <Card style={{height: '22vw'}}sx={{backgroundColor:'#f5f5f5',  display: 'flex' }}> 
      <CardMedia
        component="img"
        sx={{ width: '80%' }}
        image= {clb}
        alt="Preview"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.item.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            0.00 TND
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

function Category(props) {
 return (
      <tr>
        <th><Spa/></th>
        <th><a href={props.item.link} target="_self"><h3>{props.item.name}</h3></a></th>
      </tr>
  )
}

export default function App() {
    return (
      <div className="row">
        <div className="column leftie">
        <Card style={{backgroundColor:"#f5f5f5", height:"22vw"}} sx={{textAlign:'left' }}>
            <table>
              <tbody>
               {Citems.map( (item, i) => <Category key={i} item={item} /> )}
              </tbody>
            </table>
        </Card>
        </div>
      
        <Carousel
          autoplay='true'
          interval='1500'
          stopAutoPlayOnHover='true'
          animation='fade'
          className="column rightie"
        >
            {
                Sitems.map( (item, i) => <Slide2 key={i} item={item} /> )
            }
        </Carousel>
      </div>
    )

}

