import { useState } from 'react'
import { Tabs, Tab, Button } from 'react-bootstrap'
import AddForm from '../add-form/AddForm'
import AddModal from '../add-modal/AddModal'
import SearchForm from '../search-form/SearchForm'
import UsersList from '../users-list/UsersList'

function CustTab() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="p-3 mt-3">
            <AddModal show={show} handleClose={handleClose} />
            <Tabs defaultActiveKey="list" id="listId" className="mb-3">
                <Tab eventKey="list" title="List">
                    <Button variant="primary" onClick={handleShow}>
                        Add
                    </Button>{' '}
                    <Button variant="primary" disabled={true}>
                        Export
                    </Button>{' '}
                    <Button variant="primary" disabled={true}>
                        Refresh
                    </Button>{' '}
                    <SearchForm />
                    <AddForm />
                    <UsersList />
                </Tab>
                {/* <Tab eventKey="profile" title="Profile">
                    <h1>Tab 2</h1>
                </Tab> */}
            </Tabs>
        </div>
    )
}

export default CustTab
