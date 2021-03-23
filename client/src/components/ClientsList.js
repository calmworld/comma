import React, { useState, useEffect, useMemo, useRef } from "react";
import ClientDataService from "../services/ClientService";
import { useTable } from "react-table";


const ClientsList = (props) => {
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

    // const refreshList = () => {
    //     retrieveClients();
    // };

    const columns = useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date'
            },
            {
                Header: 'Client',
                accessor: 'client'
            },
            {
                Header: 'Project',
                accessor: 'project'
            },
            {
                Header: 'Project Code',
                accessor: 'project_code'
            },
            {
                Header: 'Hours',
                accessor: 'hours'
            },
            {
                Header: 'Billable?',
                accessor: 'billable',
                Cell: (props) => {
                    return props.value ? 'Yes' : 'No';
                }
            },
            {
                Header: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                accessor: 'last_name'
            },
            {
                Header: 'Billable Rate',
                accessor: 'billable_rate'
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
    } = useTable({
        columns,
        data: clients,
    });


    return (
        <div className="col-md-12 list">
            <table
            className="table table-striped table-bordered"
            {...getTableProps()}
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
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
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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

export default ClientsList;