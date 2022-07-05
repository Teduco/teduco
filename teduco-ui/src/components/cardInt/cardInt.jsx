import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { CardActionArea } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import './cardInt.css'


export default function CardInt({ title, text, uni, clr }) {

    return (
        <div className="cardInt">
            <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                    <CardContent style={{ backgroundColor: '' + clr, color: "white", padding: "0" }}>

                        <CardMedia
                            component="img"
                            height="200"
                            src={require('' + uni)}
                        />
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2">
                            {text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}