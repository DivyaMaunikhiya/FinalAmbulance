import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useEffect, useState} from "react";
import Axios from "axios";

function Home() {
    const [data,setData] = useState([]);
    const searchApi=async()=>{
        const genres = await Axios.get(
            "https://divyamaunikhiya.github.io/TestAPIs/Data/homedata.json"
        );
        setData(genres.data);
    }
    useEffect(()=>{
            searchApi()
        },[]
    )
    console.log(data)
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.isArray(data)?data.map(item => (
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.number}</Card.Title>
                            <Card.Text>
                                {item.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )):<></>}
        </Row>
    );
}

export default Home;