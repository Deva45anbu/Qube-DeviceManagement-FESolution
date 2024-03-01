import React from "react";
import { Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

// Loader component displays a card with a spinning loader.
const Loader = () => {
    return (
        <Card className="bg-transparent border-0 text-center p-4">
            <Card.Body>
                <Spinner animation="border" variant="secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Card.Body >
        </Card>

    );
}

export default Loader;