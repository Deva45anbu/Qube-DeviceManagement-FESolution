
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { DownloadStatusSummary } from "./DownloadStatusSummary";
import { Card } from "react-bootstrap";
import CustomPagination from "./Pagination";
import RenderTable from "./RenderTable";
import ErrorDetails from "../utils/Error";
import Loader from "../utils/Loader";
import { getAppliances } from "../../api/Client";

// DeviceListScreen component manages the display of device information, including loader, error handling, pagination, and search functionalities.
const DeviceListScreen = () => {
    // State variables for managing data, loading state, and errors
    const [applianceData, setapplianceData] = useState([])
    const [applianceStatusByCount, setApplianceStatusByCount] = useState([])
    const [error, setError] = useState(false)
    const [errorData, setErrorData] = useState(false)
    const [loading, setLoading] = useState(true);
    const [searchData, setsearchData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [displayedData, setDisplayedData] = useState([]);

    // Function to handle page change in pagination
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // useEffect to Fetch data from the API to render the component
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await getAppliances();
                console.log(response)
                // const response = await axios.get(`http://localhost:8080/api/v1/appliances`);
                if (response.status === 200) {
                    setapplianceData(response.data)
                    GetApplianceStatusData(response.data)
                    setLoading(false)
                } else {
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

    // useEffect to update displayed data based on pagination
    useEffect(() => {
        const startIndex = (currentPage - 1) * recordsPerPage;
        const endIndex = startIndex + recordsPerPage;
        setDisplayedData(applianceData.slice(startIndex, endIndex));
    }, [applianceData, currentPage, recordsPerPage]);


    // Function to calculate appliance status counts
    const GetApplianceStatusData = (data) => {
        const response = {};
        data.forEach((item) => {
            response[item.downloadStatus] = (response[item.downloadStatus] || 0) + 1;
        });

        setApplianceStatusByCount(response)
    }

    // Function to handle search button click
    async function searchButtonClick() {
        try {

            if (searchData !== undefined && searchData !== null && searchData.trim() !== '') {
                setLoading(true)
                const response = await axios.get(`http://localhost:8080/api/v1/appliance/${searchData}/info`);
                if (response.status === 200) {
                    setapplianceData([response.data])
                    setLoading(false)
                } else if (response.status === 204) {
                    setLoading(false)
                    setapplianceData([])
                } else {
                    setError(true)
                    setLoading(false)
                    setapplianceData(response.data)
                    setErrorData(response)
                }
            }
        } catch (error) {
            setError(true)
            setErrorData(error)
            setLoading(false)
        }
    };


    // Function to handle records per page change
    const handleRecordsPerPageChange = (newRecordsPerPage) => {
        setRecordsPerPage(newRecordsPerPage);
        setCurrentPage(1);
    };

    return (
        <div>
            {loading ? (
                <Loader></Loader>
            ) :
                error ? (
                    <div className="m-3">
                        <ErrorDetails error={errorData}></ErrorDetails>
                    </div>
                ) : (
                    <div>
                        <Card className="border-0">

                            <Card.Header className='bg-white border-0'>
                                <span className='fw-500 fs-28'>Devices</span>
                            </Card.Header>
                        </Card>

                        <DownloadStatusSummary applianceStatusByCount={applianceStatusByCount}></DownloadStatusSummary>

                        <Card className="mrl-20 mtb-2 border-0">
                            <Card.Body >
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <div className="float-start">
                                            <div className="input-group search-max-width">
                                                <input
                                                    type="search"
                                                    className="form-control search-form-field border-end-0 search-custom-input"
                                                    placeholder="Search"
                                                    name='searchData'
                                                    id="al-search-grp"
                                                    value={searchData}
                                                    onChange={(event) => { setsearchData(event.target.value); }}
                                                />
                                                <span className="input-group-text" >
                                                    <button className="border-0 bg-light " onClick={() => searchButtonClick()}>
                                                        <img className=" search-custom-icon" src="../images/search-icon.svg" alt="filter icon" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="float-start">
                                            <button type="button" className='btn mx-2 my-1 p-2 filter-custom-input fw-500 fs-12 bg-color-grey'>
                                                <img className="mx-2" src="../images/filter-icon.svg" alt="filter icon" />
                                                Filter
                                            </button>
                                        </div>
                                    </div>

                                    <div className="float-end m-1 p-1">
                                        <CustomPagination
                                            currentPage={currentPage}
                                            totalPages={Math.ceil(applianceData.length / recordsPerPage)}
                                            onPageChange={handlePageChange}
                                            recordsPerPage={recordsPerPage}
                                            onRecordsPerPageChange={handleRecordsPerPageChange} // Pass the handler to the child component
                                        />

                                    </div>

                                </div>
                                <RenderTable applianceData={displayedData} />
                            </Card.Body>
                        </Card>
                    </div>)}
        </div>
    );
}

export default DeviceListScreen;
