import React from 'react';
import { Pagination, Form } from 'react-bootstrap';
import '../../css/PaginationCSS.css'

// CustomPagination component renders a pagination control with options for records per page.
const CustomPagination = ({ currentPage, totalPages, onPageChange, recordsPerPage, onRecordsPerPageChange }) => {

    // Function to render individual page numbers
    const renderPageNumbers = () => {
        const pageItems = [];
        for (let number = 1; number <= totalPages; number++) {
            pageItems.push(
                <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }
        return pageItems;
    };

    // Handler for changing records per page
    const handleRecordsPerPageChange = (e) => {
        const selectedRecordsPerPage = parseInt(e.target.value, 10);
        onRecordsPerPageChange(selectedRecordsPerPage);
    };

    return (
        <div className="pagination-parent-element">
            <div className="d-flex align-items-center">
                <span className='mx-2 text-secondary fw-500 fs-12'>Show</span>
                <Form.Select
                    className="records-per-page-dropdown fw-400 fs-14"
                    value={recordsPerPage}
                    onChange={handleRecordsPerPageChange}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </Form.Select>
                <Pagination className="m-4">
                    <Pagination.Prev
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="prev-next-button"
                    />
                    {renderPageNumbers()}
                    <Pagination.Next
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="prev-next-button"
                    />
                </Pagination>
            </div>
        </div>
    );
};

export default CustomPagination;
