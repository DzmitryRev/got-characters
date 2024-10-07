import React from "react";
import "./styles.css";

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    setPage: (value: number) => void;
};

export function Pagination({ totalPages, currentPage, setPage }: PaginationProps) {
    const getPageNumbers = (): number[] => {
        const pages: number[] = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="pagination">
            {getPageNumbers().map((page, index) => (
                <div
                    key={index}
                    className={`pagination__page-btn ${currentPage === page ? "active" : ""}`}
                    onClick={() => setPage(page)}
                >
                    {page}
                </div>
            ))}
        </div>
    );
}
