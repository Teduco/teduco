import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { CardActionArea } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Icon } from '@material-ui/core'

import './cardInt.css'


export default function CardInt({ title, text, uni, clr }) {

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
                        <Typography gutterBottom variant="h4" style={{
                            marginTop: "15px",
                            fontFamily: "poppins",
                            fontSize: "18px",
                            marginLeft: "5px",
                            lineHeight: "110%"
                        }}>
                            {title}
                        </Typography>

                        <Typography variant="body3" style={{
                            fontFamily: "poppins",
                            fontSize: "12px",
                            marginLeft: "5px",
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