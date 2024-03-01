import { Routes, Route } from 'react-router-dom';
import DeviceListScreen from '../components/deviceList/DeviceListScreen';
import DeviceDetailScreen from '../components/deviceDetail/DeviceDetailScreen';


// Defining the routes for the application
export function RoutesData() {
    return (

        <Routes>
            <Route path="/" Component={DeviceListScreen} />
            <Route path="/devicelist" Component={DeviceListScreen} />
            <Route path="/devicelist/:applianceId" Component={DeviceDetailScreen} />
        </Routes>
    );
}