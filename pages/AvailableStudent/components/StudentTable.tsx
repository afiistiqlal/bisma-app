import React, { useState } from "react";
import { useTable, usePagination } from "react-table";

type Props = {
  data: any;
  columns: any;
};

const StudentTable = ({ data, columns }: Props) => {
  const [pageNumber, setPageSize] = useState(0);
  const {
    // getTableProps, getTableBodyProps, headerGroups, page, rows, prepareRow
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page, // Updated to use the 'page' state
    prepareRow,
    // Add pagination-related properties and functions
    pageOptions,
    pageCount,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    usePagination
  );

  const pageSizeOptions = [10, 20, 30, 40, 50];
  return (
    <div>
      <table {...getTableProps()} className="table table-zebra w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="">
        <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={pageIndex === pageCount - 1}
        >
          {">>"}
        </button>
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
      </div>

      <div>
        <span>Show:</span>
        <select
          value={pageSize} // Set the selected value to the current pageSize
          onChange={(e) => {
            setPageSize(Number(e.target.value)); // Update the page size on selection change
          }}
        >
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span>items per page</span>
      </div>
    </div>
  );
};

export default StudentTable;
