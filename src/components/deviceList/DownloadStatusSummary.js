import { Card, Stack } from 'react-bootstrap';
import { ColorCodes } from '../utils/ColorCodes';

// DownloadStatusSummary component displays a summary of download status counts.
export const DownloadStatusSummary = ({ applianceStatusByCount }) => {
    return (
        <Card className='m-3 border-0' style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <Stack direction="horizontal" className='m-3 border-0'>
                {applianceStatusByCount && Object.entries(applianceStatusByCount).map(([status, count]) => (
                    <div key={status} className='ms-3'>
                        <div className={`${ColorCodes[status]} colored-label-display`}></div>
                        <span className='ms-1 text-no-wrap fw-500 fs-12'>{count}</span>
                        <span className='ms-1 text-no-wrap fw-400 fs-14'>{status}</span>
                    </div>
                ))}
            </Stack>
        </Card>
    )
}