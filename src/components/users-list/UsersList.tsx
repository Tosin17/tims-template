import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

function UsersList() {
    const rowData: any = []

    return (
        <div
            className="ag-theme-alpine border p-3 mt-5"
            style={{ height: 400 }}
        >
            <legend>LIST</legend>

            <AgGridReact rowData={rowData}>
                <AgGridColumn field="edit"></AgGridColumn>
                <AgGridColumn field="name"></AgGridColumn>
                <AgGridColumn field="active"></AgGridColumn>
                <AgGridColumn field="date"></AgGridColumn>
                <AgGridColumn field="status"></AgGridColumn>
                <AgGridColumn field="type"></AgGridColumn>
                <AgGridColumn field="archived"></AgGridColumn>
                <AgGridColumn field="date added"></AgGridColumn>
                <AgGridColumn field="user id"></AgGridColumn>
                <AgGridColumn field="date updated"></AgGridColumn>
            </AgGridReact>
        </div>
    )
}

export default UsersList
