import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Productlist.css';



function Productlist() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            );

            setProducts(response.data);

            console.log(response.data);


        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }




    return (
        <div >
            <Container>
                <h1 className="text-center">All products</h1>
                <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                    {products.map((product) => (
                        <Col key={product.id} className="d-flex">

                            <Card className="h-100 w-100 card">
                                <Card.Img style={{ maxHeight: '200px', objectFit: 'contain' }} variant="top" src={product.image} alt={product.title} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{product.title}</Card.Title> 

                                    <Card.Text>
                                        <strong>Price:</strong> ${product.price}
                                    </Card.Text>
                                    <Link to={`/product/${product.id}`} className="view-button mt-auto">View</Link>


                                </Card.Body>
                            </Card>


                        </Col>
                    ))}
                </Row>
            </Container>




        </div>
    )
}

export default Productlist