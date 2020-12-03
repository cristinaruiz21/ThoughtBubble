import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const styles ={
    foot :{
        // background: "gray",
        // display :"flex",
        // justifyContent : "center",
        // padding : 10
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor:"gray",
        color: "white",
        
        // textAlign: "center"
    }
}

function Footer() {

    return (
        <footer className="mt-5" style={styles.foot} >
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 md={3} sm={12}">
                    <a href="https://github.com/cristinaruiz21/ThoughtBubble" style={{color:"white"}}>Github</a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    Thought Bubble ©2020 
                    </Col>
                </Row>
    
            </Container>
    
    
        </footer>
    );
    
    }
    
    export default Footer;