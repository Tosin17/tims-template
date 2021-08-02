import { Tabs, Tab, Button } from 'react-bootstrap'
import SearchForm from '../search-form/SearchForm'

function CustTab() {
    return (
        <div className="p-3 mt-3">
            <Tabs defaultActiveKey="list" id="listId" className="mb-3">
                <Tab eventKey="list" title="List">
                    <Button variant="primary">Add</Button>{' '}
                    <Button variant="primary" disabled={true}>
                        Export
                    </Button>{' '}
                    <Button variant="primary" disabled={true}>
                        Refresh
                    </Button>{' '}
                    <SearchForm />
                </Tab>
                {/* <Tab eventKey="profile" title="Profile">
                    <h1>Tab 2</h1>
                </Tab> */}
            </Tabs>
        </div>
    )
}

export default CustTab
