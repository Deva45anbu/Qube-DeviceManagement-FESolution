

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrumbs from "./Breadcrumb";
import Loader from "../utils/Loader";
import ErrorDetails from "../utils/Error";
import DeviceDetail from "./DeviceDetail";
import DeviceSummary from "./DeviceSummary";
import { getApplianceInfo } from "../../api/Client";


// DeviceDetailScreen component fetches and displays detailed information for a specific device.
const DeviceDetailScreen = () => {
    // Access the applianceId from the URL parameters
    const { applianceId } = useParams();

    // State variables for managing data, loading state, and errors
    const [applianceData, setapplianceData] = useState([])
    const [error, setError] = useState(false)
    const [errorData, setErrorData] = useState(false)
    const [loading, setLoading] = useState(true);

    // useEffect to fetch device details based on the applianceId
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await getApplianceInfo('JTD-412431');
                if (response.status === 200) {
                    setapplianceData(response.data)
                    setLoading(false)
                } else if (response.status === 204) {
                    setError(true)
                    setLoading(false)
                    setErrorData(response)
                }
            } catch (error) {
                setError(true)
                setErrorData(error)
                setLoading(false)
            }
        };

        fetchData();
    }, [])

    return (
        <div className='bg-body-tertiary h-100'>
            {loading ? (
                <Loader></Loader>
            ) : error ? (
                <div className="m-3">
                    <ErrorDetails error={errorData}></ErrorDetails>
                </div>
            ) : (
                <div>
                    <Breadcrumbs applianceData={applianceData}></Breadcrumbs>
                    <DeviceSummary deviceData={applianceData} />
                    <DeviceDetail deviceData={applianceData} />
                </div>
            )}
        </div>
    );
}



export default DeviceDetailScreen;