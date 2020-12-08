import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const styles ={
    foot :{
        
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor:"gray",
        color: "white",
        textAlign: "center",
    }
}

function Footer() {

    return (
        <footer className="mx-auto" style={styles.foot} >
            <Container fluid={true}>
                <Row className="border-top p-3">
                    <Col className="">
                    <a href="https://github.com/cristinaruiz21/ThoughtBubble" style={{color:"white"}}>Github</a>
                    </Col>
                    <Col className="">
                    Thought Bubble ©2020 
                    </Col>
                </Row>
    
            </Container>
    
    
        </footer>
    );
    
    }
    
    export default Footer;