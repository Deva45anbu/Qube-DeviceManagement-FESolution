import React from "react";
import { Table, } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { ColorCodes } from "../utils/ColorCodes";

// RenderTable component displays a table of appliance data
const RenderTable = ({ applianceData }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Table responsive borderless>
                <thead className="border-bottom">
                    <tr className="fw-500 fs-14 ">
                        <th>Device Serial</th>
                        <th>Location</th>
                        <th>Bandwidth</th>
                        <th>Status</th>
                        <th>Download Status</th>
                        <th>OS Version</th>
                        <th></th>
                    </tr>
                </thead>

                {applianceData.length > 0 ?
                    <tbody>
                        {applianceData.map((device, index) => (
                            <tr key={index} className="fw-400 fs-12">
                                <td>{device.serialNo}</td>
                                <td>
                                    <div>{device.theatreName}</div>
                                    <div className="text-color-blue">
                                        {device.location.city}, {device.location.state}, {device.location.country}
                                    </div>
                                </td>

                                <td>
                                    <div>{device.bandwidth}</div>
                                    <div className="text-color-grey" >{device.avgBandwidth}    </div>
                                </td>

                                <td>
                                    <div className={`${ColorCodes[device.deviceStatus]} colored-label-display`}></div>
                                    <span className='ms-2 text-no-wrap text-color-blue'>{device.deviceStatus}</span>
                                </td>

                                <td>
                                    <div className={`${ColorCodes[device.downloadStatus]} colored-label-display`}></div>
                                    <span className='ms-2 text-no-wrap text-color-blue'>{device.downloadStatus}</span>
                                </td>

                                <td>{device.osVersion}</td>

                                <td className="fw-500 fs-14" >
                                    <button type="button" className='btn fw-500 fs-12 bg-color-grey '
                                        onClick={() => { navigate(`/devicelist/${device.serialNo}`) }}
                                    >
                                        View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    :
                    null
                }
            </Table>

            {/* Display a message if no records are found */}
            {applianceData.length === 0 ? (
                <div className="text-center">
                    No records Found
                </div>
            ) : null}
        </div>

    );
}



export default RenderTable;