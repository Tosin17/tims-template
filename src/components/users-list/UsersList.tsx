import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import { Form } from 'react-bootstrap'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import * as dateFns from 'date-fns'
import { formats as f } from '../../utils/date-utils'
import { ICellRendererParams } from 'ag-grid-community'

function mapFn(data: any[]) {
    const status: any = {
        2: 'Status A',
        1: 'Status B',
        0: 'N/A',
    }

    const type: any = {
        2: 'Type A',
        1: 'Type B',
    }

    return data.map((v, i) => ({
        edit: ++i,
        active: v.Active,
        archived: v.Archived,
        name: v.Name,
        status: status[v.CustomerStatusID],
        type: type[v.CustomerTypeID],
        date: dateFns.format(new Date(v.Date), f._short),
        dateAdded: dateFns.format(new Date(v.DateAdded), f._long),
        dateUpdated: dateFns.format(new Date(v.DateUpdated), f._long),
        userId: v.UserID,
        note: v.Note,
    }))
}

const EditLink = (props: ICellRendererParams) => (
    <a href="#" onClick={(e) => e.preventDefault} className="text-primary">
        {props.value}
    </a>
)

const ActiveCheckBox = (props: ICellRendererParams) => (
    <Form.Check
        required
        name="active"
        onChange={() => {
            props.node.data.active = !props.value
            props.refreshCell?.()
        }}
        checked={props.node.data.active}
    />
)

const ArchivedCheckBox = (props: ICellRendererParams) => (
    <Form.Check
        required
        name="active"
        onChange={() => {
            props.node.data.archived = !props.value
            props.refreshCell?.()
        }}
        checked={props.node.data.archived}
    />
)

const frameworkComponents = {
    EditLink,
    ActiveCheckBox,
    ArchivedCheckBox,
}

function UsersList(props: any) {
    const rowData: any = mapFn(props.data)

    return (
        <div
            className="ag-theme-alpine border p-3 mt-5"
            style={{ height: 400 }}
        >
            <legend>LIST</legend>

            <AgGridReact
                frameworkComponents={frameworkComponents}
                rowData={rowData}
            >
                <AgGridColumn
                    field="edit"
                    cellRenderer="EditLink"
                ></AgGridColumn>
                <AgGridColumn field="name"></AgGridColumn>
                <AgGridColumn
                    field="active"
                    cellRenderer="ActiveCheckBox"
                ></AgGridColumn>
                <AgGridColumn field="date"></AgGridColumn>
                <AgGridColumn field="status"></AgGridColumn>
                <AgGridColumn field="type"></AgGridColumn>
                <AgGridColumn
                    field="archived"
                    cellRenderer="ArchivedCheckBox"
                ></AgGridColumn>
                <AgGridColumn field="dateAdded" width={300}></AgGridColumn>
                <AgGridColumn field="userId"></AgGridColumn>
                <AgGridColumn field="dateUpdated" width={300}></AgGridColumn>
                <AgGridColumn field="Note"></AgGridColumn>
            </AgGridReact>
        </div>
    )
}

export default UsersList
