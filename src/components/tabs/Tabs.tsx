import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Button } from 'react-bootstrap'
import { _axios } from '../../utils/api'
import { noop } from '../../utils/helpers'
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

    useEffect(() => {
        show ? noop() : setFormData(null)
    }, [show])

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const filterCustomers = (e: any) => {
        console.log(e)
    }

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
                getCustomers={getCustomers}
            />

            <Tabs defaultActiveKey="list" id="listId" className="mb-3">
                <Tab eventKey="list" title="List">
                    <Button variant="primary" onClick={handleShow}>
                        Add
                    </Button>{' '}
                    <SearchForm
                        customers={customers}
                        filterCustomers={filterCustomers}
                    />
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
