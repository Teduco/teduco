import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { CardActionArea } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import InfoIcon from '@mui/icons-material/Info';

import './cardInt.css'


export default function CardInt({ title, text, sponsored, uni, clr }) {
    

    let sponsorcontent=""
    if(sponsored==="true"){ 
        { sponsorcontent=
         <div className='icon-box'>
            <InfoIcon fontSize='small'/>
             <span className='sponsor-text'>  Sponsored </span>
             </div>
          }
        
           }
   
    return (
        <div className="cardInt">
            <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                    <CardContent style={{ backgroundColor: '' + clr, color: "white", padding: "0", paddingBottom: "15px"}}>

                   
                        <CardMedia
                            component="img"
                            height="187"
                            maxWidth="300"
                            src={require('' + uni)}
                        />

                        <Typography variant="body1" style={{
                            fontFamily: "poppins",
                            fontSize: "12px",
                            marginTop: "40px",
                            marginRight:"10px",
                            float:"right"
                        }}>
                            {sponsorcontent}
                        </Typography>
                        
                    

                        <Typography gutterBottom variant="h4" style={{
                            marginTop: "15px",
                            fontFamily: "poppins",
                            fontSize: "18px",
                            marginLeft: "10px",
                            lineHeight: "110%"
                        }}>
                            {title}
                        </Typography>

                     
                                

                        <Typography variant="body3" style={{
                            fontFamily: "poppins",
                            fontSize: "12px",
                            marginLeft: "10px",
                            lineHeight: "110%",
                            
                        }}>
                            {text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}