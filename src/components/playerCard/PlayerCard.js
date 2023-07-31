import {Card} from "react-bootstrap";
import { useState } from "react";


const PlayerCard = ({name,img,statistics}) => {

    const [image,SetImage] = useState(true)

    return(
        <Card
            className="rounded-2 m-auto player-card"
            role="button"
            onClick={()=> {SetImage(!image)}}
            >
            {image ?
                <Card.Img  variant="top" className="player-logo" src={img}  />
                :
                <ul>
                    {statistics.map((stats,index)=>{
                        return <li key={index} className="h5 text-start list-unstyled">🏀 {stats}</li>
                    })}
                </ul>
            }
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    )
}

export default PlayerCard;