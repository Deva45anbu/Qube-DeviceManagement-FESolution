import React from "react";
import { useNavigate } from "react-router-dom";

// Breadcrumbs component displays navigation links to navigate back to the device list.
const Breadcrumbs = ({ applianceData }) => {
    const navigate = useNavigate();

    return (
        <div className="m-4 align-items-center ">
            <span className="me-2 text-color-grey fw-500 fs-12 cursor-pointer" onClick={() => { navigate("/devicelist") }}>Devices</span>
            <img className="" src="../images/breadcrumbsseperator-icon.svg" alt="demand icon" />
            <span className="ms-2 fw-400 fs-12">{applianceData?.serialNo}</span>
        </div>
    );
}

export default Breadcrumbs;