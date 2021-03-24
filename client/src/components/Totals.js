import React, { useState, useEffect, useMemo, useRef } from "react";
import ClientDataService from "../services/ClientService";
import { useExpanded, useGroupBy, useTable } from "react-table";


const Totals = (props) => {
    const [clients, setClients] = useState([]);
    const clientsRef = useRef();

    clientsRef.current = clients;

    useEffect(() => {
        retrieveClients();
    }, [])

    const retrieveClients = () => {
        ClientDataService.getAll()
            .then((response) => {
                setClients(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };


    const columns = useMemo(
        () => [
            {
                Header: 'Project',
                accessor: 'project'
            },
            {
                Header: 'Client',
                accessor: 'client',
                aggregate: 'count',
                Aggregated: ({ value }) => `${value} Unique Names`
            },
            {
                Header: 'Billable Hours',
                accessor: 'hours',
                aggregate: 'sum',
                Aggregated: ({ value }) => `${value} (total)`,
            },
            {
                Header: 'Billable Amount',
                accessor: 'billable_rate',
                aggregate: 'sum',
                Aggregated: ({ value }) => `${value} (total)`,
            }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { groupBy, expanded },
    } = useTable(
        {
        columns,
        data: clients
        }, 
        useGroupBy,
        useExpanded
    );


    return (
        <div className="col-md-12 list">
            <pre>
                <code>{JSON.stringify({ groupBy, expanded }, null, 2)}</code>
            </pre>
            <table
            className="table table-striped table-bordered"
            {...getTableProps()}
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                            {column.canGroupBy ? (
                                // If the column can be grouped, let's add a toggle
                                <span {...column.getGroupByToggleProps()}>
                                {column.isGrouped ? '🛑 ' : '👊 '}
                                </span>
                            ) : null}
                            {column.render("Header")}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return (
                            <td {...cell.getCellProps()}>
                                {cell.isGrouped ? (
                                    // If it's a grouped cell, add an expander and row count
                                    <>
                                        <span {...row.getToggleRowExpandedProps()}>
                                            {row.isExpanded ? '👇' : '👉'}
                                        </span>{' '}
                                        {cell.render('Cell')} ({row.subRows.length})
                                    </>
                                ) : cell.isAggregated ? (
                                    // If the cell is aggregated, use the Aggregated
                                    // renderer for cell
                                    cell.render('Aggregated')
                                ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                                    // Otherwise, just render the regular cell
                                    // {cell.render("Cell")}
                                    cell.render("Cell")
                                )}
                            </td>
                            );
                        })}
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Totals;