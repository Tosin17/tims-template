import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import AddFormModal from '../add-form-modal/AddFormModal'

function AddModal(props: any) {
    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>{!!props.formData ? 'Edit' : 'Add'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddFormModal
                    formData={props.formData}
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
