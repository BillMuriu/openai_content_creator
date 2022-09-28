import React from "react";
import { Component } from 'react'
import { Button, Card, Container, Form, FormGroup } from "react-bootstrap";

const { Configuration, OpenAIApi } = require("openai");
 
class ProductDescription extends Component{
    constructor() {
        super()
        this.state = {
            heading: 'The AI response will be shown here',
            response: '... await the response'
        }
    }

    onFormSubmit = e => {
        //Start by Preventing the Default

        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.productName)

        ////Openai API

        const configuration = new Configuration({
            apiKey: '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',
          });
          const openai = new OpenAIApi(configuration);
          
           openai.createCompletion("text-davinci-002", {
            prompt: "Generate a comprehensive and concise product description for: ${formDataObj.productName};",
            temperature: 0.79,
            max_tokens: 370,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
        
        .then((response) => {
            this.setState({
                    heading: `AI Product Descritpion for : ${formDataObj.productName}`,
                    response: `${response.data.choices[0].text}`
            })
        });

    }



    render() {
        return (
            <div>
                <Container>
                <br/>
                <br/>
                <h1>Generate Product Descriptions</h1>
                <br/>
                <h4> Generate product descriptions for any type of product</h4>
                <br/>
                <br/>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className="mb-3" controlled="formBasicEmail">
                        <Form.Label>What product would you like a description for?</Form.Label>
                            <Form.Control
                            type="text"
                            name="productName"
                            placeholder="Enter Product Name"/>
                            <Form.Text className="text-muted">
                                Enter as much informations as posiible for a more accurate description
                            </Form.Text>
                    </Form.Group>

                    <Button variant="primary" size="lg" type="submit">
                        Get AI suggestions
                    </Button>
                </Form>

                <br/>
                <br/>

                <Card>
                    <Card.Body>
                        <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                        <br/>
                        <br/>
                        <Card.Text>
                            <h4>
                                {this.state.response}
                            </h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
export default ProductDescription;




