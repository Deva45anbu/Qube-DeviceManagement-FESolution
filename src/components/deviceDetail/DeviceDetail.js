import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';


// DeviceDetail component displays detailed information about a specific device.
const DeviceDetail = ({ deviceData }) => {

    // Destructuring deviceData for easier access to properties
    const {
        serialNo,
        location,
        ispPaymentResponsibility,
        bandwidth,
        avgBandwidth,
        planStartDate,
        billingCycle,
        deviceStatus,
        osVersion,
        storage,
        theatreName,
    } = deviceData;

    // Function to render each row with label and value
    const renderRow = (label, value) => (
        <Col>
            <div className="fw-500 fs-12">{label}</div>
            <div className="fw-400 fs-14">{value}</div>
        </Col>
    );

    return (
        <Card className="m-4 border-0">
            <Card.Body >
                <Stack gap={3}>
                    <Row>
                        {serialNo && (renderRow("Device Serial", serialNo))}
                        {theatreName && (renderRow("Location", theatreName))}
                        {location && location.city && location.state && location.country && (renderRow("City", `${location.city}, ${location.state}, ${location.country}`))}
                        {ispPaymentResponsibility && (renderRow("ISP Payment Responsibility", ispPaymentResponsibility))}
                    </Row>
                    <Row>
                        {bandwidth && (renderRow("Bandwidth", bandwidth))}
                        {avgBandwidth && (renderRow("Average Bandwidth", avgBandwidth))}
                        {planStartDate && (renderRow("Plan Start Date", format(new Date(planStartDate), "do MMM")))}
                        {billingCycle && (renderRow("Billing Cycle", billingCycle))}
                    </Row>
                    <Row>
                        {deviceStatus && (renderRow("Device Status", deviceStatus))}
                        {osVersion && (renderRow("OS Version", osVersion))}
                        {storage && (renderRow("Storage Available", storage))}
                        {renderRow("", "")}
                    </Row>
                </Stack>
            </Card.Body>
        </Card>
    );
}

export default DeviceDetail;