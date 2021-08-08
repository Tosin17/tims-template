import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import AddFormModal from '../add-form-modal/AddFormModal'

function AddModal(props: any) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddFormModal
                    mode={''}
                    data={{}}
                    getCustomers={props.getCustomers}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    style={{ marginRight: '90px' }}
                    onClick={props.handleClose}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddModal
