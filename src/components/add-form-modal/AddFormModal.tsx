import React from 'react'
import AddForm from '../add-form/AddForm'

function AddFormModal(props: any) {
    return (
        <AddForm
            isModal={true}
            getCustomers={props.getCustomers}
            formData={props.formData}
        />
    )
}

export default AddFormModal
