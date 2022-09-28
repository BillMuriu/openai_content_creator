import React from "react";
import { Component } from 'react'
import Display from "./Dislplay";
import { Container, Row, Col, Carousel} from 'react-bootstrap'


class Home extends Component{
    render() {
        return (
            <div>
               <br/>
                    <Container>
                        <Carousel>
                            <Carousel.Item>
                                <img className="" src="" alt=""/>
                            </Carousel.Item>
                        </Carousel>
                        <br/>
                        <br/>
                        <h1>Online Content Generator using OpenAi(API)</h1>
                        <p>Start by Picking any of the use cases below to start Generating content</p>
                        <br/>
                        <br/>
                    <Row>
                        <Col>
                        <Display
                            header="Product Description"
                            title="Generate Product Description"
                            text="Generate product descritpions for any types of products"
                            theLink="/product-descritpion" />
                        </Col>

                        <Col>
                        <Display
                            header="Marketing Emails"
                            title="Cold Email Template"
                            text="This is perfect for marketing agents or companies who need fresh ideas daily on cold email content"
                            theLink="/cold-emails" />
                        </Col>
                       
                        <Col>
                        <Display
                            header="Creating Tweets"
                            title="Generate Tweets"
                            text="Start generating tweets for your online brand using hashtags"
                            theLink="tweets" />
                        </Col>
                    </Row>

                    </Container>
            </div>
        )
    }
}
export default Home;
