import './grid.css';
import { Badge } from '@mui/material';
import clb from "../Carousel/Clab.png"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function Itemcard(props) {
  return (
  <div className="grid-item">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={clb}
        alt="Preview"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{props.item.name}<Badge badgeContent="New" color="error"/></Typography>
        <Typography variant="body2" color="text.secondary">{props.item.price}</Typography>
      </CardContent>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
    </Card>
  </div>
  )
}
export default function App() {
  const items = [
    {
      name: "Item #1",
      description: "Lorem ipsum 1",
      price: "0.00 TND"
    },
    {
      name: "Item #2",
      description: "Lorem ipsum 2",
      price: "0.00 TND"

    },
    {
      name: "Item #3",
      description: "Lorem ipsum 3",
      price: "0.00 TND"

    },
    {
      name: "Item #4",
      description: "Lorem ipsum 4",
      price: "0.00 TND"

    },
  ]
  return (
    <div>    
      <div id="fashion">
        <h2 className="cat-title">Fashion</h2>
      </div>
      <div className="grid-container">
          {
            items.map( (item, i) => <Itemcard key={i} item={item} /> )
          }
      </div>
      <div id="mugs">
        <h2 className="cat-title">Mugs</h2>
      </div>
      <div className="grid-container">
          {
            items.map( (item, i) => <Itemcard key={i} item={item} /> )
          }
      </div>
    </div>

  )
}
