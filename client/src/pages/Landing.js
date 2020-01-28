import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Landing extends Component {
    state = {
        books: [],
        query: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.query)
            .then(res =>
                this.setState({
                    books:res.data
                })
            );
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    }

    handleBookSave = title => {
        const book = this.state.books.find(book => book.title === title);

        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }).then(() => this.getBooks());
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                Book Search Powered by React and Google
                            </h1>
                            <h2 className="text-center">Search for and Save your favorite books!</h2>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        <Card title="Search Form">
                            <Form handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} query={this.state.query} />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Search Results">
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <Book
                                        title={book.title}
                                        authors= {book.authors.join(", ")}
                                        description={book.description}
                                        image={book.image}
                                        link={book.link}
                                        Button={() => (
                                            <button onClick={()=>
                                            this.handleBookSave(book.title)} className="btn">
                                                Save
                                            </button>
                                        )} />
                                    ))}
                                </List>
                            ):(<h2 className="text-center">No Searched Books</h2>)}
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Landing;