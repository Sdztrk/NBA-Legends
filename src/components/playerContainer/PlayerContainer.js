import { useState } from "react";
import {Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {data} from "../../helper/data"
import PlayerCard from "../playerCard/PlayerCard"

//  console.log(data)

const PlayerContainer = () => {
     const [search, setSearch] = useState("")
    //  console.log(search)
     const playerSearch = (e) => {
        setSearch(e.target.value)
     }
    return(
        <>
            <Form.Control
                type="search"
                placeholder="Search by name..."
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="w-50 m-auto"
                onChange={playerSearch}
            />
            <Container  className="rounded-4 my-4 p-3 bg-light card-container">
                <Row  className="g-3 justify-content-center">
                    {data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((item,index)=>{
                        return (
                            <Col key={index} md={6} lg={4} xl={3} >
                                <PlayerCard {...item} />
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </>
    )
}

export default PlayerContainer;
