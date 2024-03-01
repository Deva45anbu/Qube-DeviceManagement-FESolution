

import React from "react";
import { Button, Card } from "react-bootstrap";

// ErrorDetails component displays error information and provides a refresh button.
const ErrorDetails = (errorData) => {
    return (
        <Card >
            <Card.Header>
                <Card.Title>
                    Error While Loading Page
                </Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
                {/* Handling axios errors */}
                {(errorData.error.code !== null && errorData.error.code !== undefined &&
                    errorData.error.message !== null && errorData.error.message !== undefined) ?


                    <div>
                        Something Went Wrong
                        <div>{errorData?.error?.code} - {errorData?.error?.message}</div>
                        <Button onClick={() => { window.location.reload() }}>Refresh</Button>
                    </div> :
                    (errorData.error.status !== null && errorData.error.status !== undefined &&
                        errorData.error.statusText !== null && errorData.error.statusText !== undefined) ?

                        <div>
                            The Appliance detail is not available
                            <div>{errorData?.error?.status} - {errorData?.error?.statusText}</div>
                            <Button onClick={() => { window.location.reload() }}>Refresh</Button>
                        </div> :
                        <div>
                            Something Went Wrong
                        </div>
                }
            </Card.Body>
        </Card>

    );
}

export default ErrorDetails;