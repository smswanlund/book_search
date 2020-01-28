import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({books: res.data})
            )
            .catch(err=>console.log(err));
    };

    handleBookDelete = title => {
        API.deleteBook(title).then(res => this.getSavedBooks());
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
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="saved books">
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <Book
                                        title={book.title}
                                        authors= {book.authors.join(", ")}
                                        description={book.description}
                                        image={book.image}
                                        link={book.Link}
                                        Button={()=> (
                                            <button onClick={()=>
                                            this.handleBookDelete(book.title)}
                                            className="btn">Delete</button>
                                        )}
                                        />
                                    ))}
                                </List>
                            ):(<h2 className="text-center">No Saved Books</h2>)}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Saved;