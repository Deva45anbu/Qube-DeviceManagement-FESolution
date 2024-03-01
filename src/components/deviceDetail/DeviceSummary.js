import React from "react";
import { Card } from "react-bootstrap";
import { ColorCodes } from "../utils/ColorCodes";

// DeviceSummary component displays summarized information about a specific device.
const DeviceSummary = ({ deviceData }) => {

    // Destructuring deviceData for easier access to properties
    const {
        serialNo,
        theatreName,
        location,
        deviceStatus,
        storage,
    } = deviceData;

    return (
        <Card className="border-0">

            <div className="mx-3 p-2">
                <div className="clearfix">
                    <header className='float-start d-block'>
                        <div className='fw-400 fs-28'>{serialNo}</div>
                    </header>

                    <div className='float-end'>
                        <button type="button" className='btn m-2 fw-500 fs-12 bg-color-grey' >
                            <img className="me-2" src="../images/demand-icon.svg" alt="demand icon" />
                            Speedtest
                        </button>
                        <button type="button" className='btn m-2 fw-500 fs-12 bg-color-grey'>
                            <img className="me-2" src="../images/logs-icon.svg" alt="logs icon" />
                            Logs
                        </button>
                    </div>
                </div>

                <div>
                    <div className='fw-400 fs-14'>{theatreName}</div>
                    <div className='fw-400 fs-12 text-color-grey '>{location.city}, {location.state}, {location.country}</div>
                </div>

                <div className='my-1'>
                    <div>
                        <button type="button" className='btn me-2 p-1 rounded-pill bg-color-grey'>
                            <div className={`${ColorCodes[deviceStatus]}  ms-1 me-2 circle-colored-label-display`}></div>
                            <span className='me-1 fw-500 fs-12'>{deviceStatus}</span>
                        </button>

                        <button type="button" className='btn fw-500 fs-12 p-1 rounded-pill bg-color-grey' >
                            <img className="me-2" src="../images/piechart-icon.svg" alt="filter icon" />
                            <span className='me-1 fw-500 fs-12'>{storage}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <nav className="nav mrl-20 mtb-2 border-top " >
                    <span className="nav-link disabled fw-500 fs-14 text-color-grey">Details</span>
                    <a className="nav-link disabled fw-500 fs-14 text-color-grey" >Content</a>
                    <a className="nav-link disabled fw-500 fs-14 text-color-grey" >Bandwidth</a>
                </nav>
            </div>
        </Card>
    );
}

export default DeviceSummary;