import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Button } from 'react-bootstrap'
import { _axios } from '../../utils/api'
import AddForm from '../add-form/AddForm'
import AddModal from '../add-modal/AddModal'
import SearchForm from '../search-form/SearchForm'
import UsersList from '../users-list/UsersList'

function CustTab() {
    const [show, setShow] = useState(false)
    const [customers, setCustomers] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [formData, setFormData] = useState(null)

    function getCustomers() {
        _axios.get('').then((v: any) => {
            setCustomers(v.data)
        })
    }

    useEffect(() => {
        getCustomers()
    }, [])

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    ;(document as any).addEventListener('EditModalForm', ({ detail }: any) => {
        handleShow()
        setEditMode(true)
        setFormData(detail)
    })

    return (
        <div className="p-3 mt-3">
            <AddModal
                show={show}
                editMode={editMode}
                formData={formData}
                handleClose={handleClose}
            />

            <Tabs defaultActiveKey="list" id="listId" className="mb-3">
                <Tab eventKey="list" title="List">
                    <Button variant="primary" onClick={handleShow}>
                        Add
                    </Button>{' '}
                    <Button variant="primary" disabled={!customers.length}>
                        Export
                    </Button>{' '}
                    <Button variant="primary" disabled={!customers.length}>
                        Refresh
                    </Button>{' '}
                    <SearchForm />
                    {show ? '' : <AddForm getCustomers={getCustomers} />}
                    <UsersList data={customers} />
                </Tab>
                {customers.length ? (
                    <Tab eventKey="profile" title="History">
                        <h1>History Tab</h1>
                    </Tab>
                ) : (
                    ''
                )}
            </Tabs>
        </div>
    )
}

export default CustTab
