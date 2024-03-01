// api.js

import axios from 'axios';

// Define a constant for the base URL
const BASE_URL = 'http://localhost:8080'; // Change this to your actual backend URL

// Create an Axios instance with the base URL
const api = axios.create({
    baseURL: BASE_URL,
});

// Define your API calls as functions
export const getAppliances = async (deviceStatus = '', downloadStatus = '') => {
    try {
        const response = await api.get('/api/v1/appliances', {
            params: {
                ...(deviceStatus && { deviceStatus }),
                ...(downloadStatus && { downloadStatus }),
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const getApplianceInfo = async (applianceId) => {
    try {
        const response = await api.get(`/api/v1/appliance/${applianceId}/info`);
        return response;
    } catch (error) {
        return error;
    }
};
