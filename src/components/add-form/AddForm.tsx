import { Formik } from 'formik'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './AddForm.css'
import { _axios } from '../../utils/api'

const schema = yup.object().shape({
    name: yup.string().required(),
    date: yup.string(),
    active: yup.bool(),
    status: yup.string().required(),
    type: yup.string().required(),
    archived: yup.bool(),
})

function AddForm(props: any) {
    const isEditMode = !!props.formData
    const date: any = props.formData?.date
        ? new Date(props.formData?.date)
        : null
    const [startDate, setStartDate] = useState(date)
    const status: any = {
        'Status A': '2',
        'Status B': '1',
        'N/A': 0,
    }

    const type: any = {
        'Type A': '2',
        'Type B': '1',
    }

    function addCustomer(values: any, handleReset: Function) {
        _axios.post('add-customer', values).then((_) => {
            props.getCustomers()
            handleReset()
            setStartDate(null as any)
        })
    }

    function editCustomer(values: any) {
        _axios.put('edit-customer', values).then((_) => {
            props.getCustomers()
        })
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                name: props.formData?.name || '',
                date: '',
                active: props.formData?.active || false,
                status: status[props.formData?.status] || '',
                type: type[props.formData?.type] || '',
                archived: props.formData?.archived || false,
                dateAdded: props.formData?.dateAdded || '',
                dateUpdated: props.formData?.dateUpdated || '',
                note: props.formData?.note || '',
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleReset,
                values,
                touched,
                errors,
            }) => (
                <>
                    <Form
                        autoComplete="off"
                        noValidate
                        onSubmit={(e) => {
                            e.preventDefault()

                            const _values = {
                                id: props.formData?.id || null,
                                userId: props.formData?.userId || null,
                                ...values,
                            }

                            if (startDate) {
                                _values.date = (
                                    startDate as unknown as Date
                                ).toDateString()
                            }
                            handleSubmit(e)

                            if (Object.values(errors).length || !_values.name) {
                                return
                            }

                            isEditMode
                                ? editCustomer(_values)
                                : addCustomer(_values, handleReset)
                        }}
                        className={props.isModal ? '' : 'pt-4'}
                    >
                        <fieldset
                            className={
                                props.isModal
                                    ? 'form-group p-3'
                                    : 'form-group border p-3'
                            }
                        >
                            {props.isModal ? (
                                ''
                            ) : (
                                <legend className="w-auto">Add</legend>
                            )}

                            <Row
                                className={
                                    props.isModal
                                        ? 'mb-3 mr-3 pb-3 modal-layout'
                                        : 'mb-3 mr-3 pb-3'
                                }
                            >
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="addForm.validationFormik0Name"
                                >
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="addForm.validationFormikUsername"
                                >
                                    <div className="d-flex flex-column">
                                        <Form.Label>Date</Form.Label>
                                        <DatePicker
                                            placeholderText="DD-MMM-YYYY"
                                            selected={startDate}
                                            onChange={(date) => {
                                                setStartDate(date as any)
                                            }}
                                            customInput={
                                                <Form.Control
                                                    type="text"
                                                    name="date"
                                                    value={startDate}
                                                />
                                            }
                                        ></DatePicker>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <div className="checkboxfield-active">
                                        <Form.Label>Active</Form.Label>
                                        <Form.Check
                                            required
                                            name="active"
                                            onChange={handleChange}
                                            checked={values.active}
                                            isInvalid={
                                                !!(
                                                    touched.active &&
                                                    errors.active
                                                )
                                            }
                                            feedback={errors.active}
                                            id="addForm.validationFormik07"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="addForm.validationFormikStatus"
                                >
                                    <Form.Label>Status*</Form.Label>
                                    <Form.Select
                                        name="status"
                                        value={values.status}
                                        onChange={handleChange}
                                        isInvalid={
                                            !!(touched.status && errors.status)
                                        }
                                    >
                                        <option value="">None</option>
                                        <option value="2">Status A</option>
                                        <option value="1">Status B</option>
                                        <option value="3">
                                            Status Inactive
                                        </option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.status}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    style={{ width: '12.5rem' }}
                                >
                                    <Form.Label>Type*</Form.Label>
                                    <div className="d-flex justify-content-between">
                                        <Form.Check
                                            type="radio"
                                            label="Type A"
                                            name="type"
                                            checked={values.type === '2'}
                                            value="2"
                                            onChange={handleChange}
                                            id="Addform.formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Type B"
                                            checked={values.type === '1'}
                                            name="type"
                                            value="1"
                                            onChange={handleChange}
                                            id="addForm.formHorizontalRadios3"
                                        />
                                    </div>
                                    <Form.Control.Feedback
                                        type="invalid"
                                        style={{
                                            display: !!(
                                                touched.type && errors.type
                                            )
                                                ? 'block'
                                                : 'none',
                                        }}
                                    >
                                        {errors.type}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <div
                                        className={
                                            props.isModal
                                                ? 'checkboxfield-archived'
                                                : '_pl-5'
                                        }
                                    >
                                        <Form.Label>Archived</Form.Label>
                                        <Form.Check
                                            required
                                            name="archived"
                                            checked={values.archived}
                                            onChange={handleChange}
                                            isInvalid={
                                                !!(
                                                    touched.archived &&
                                                    errors.archived
                                                )
                                            }
                                            feedback={errors.archived}
                                            id="addform.validationFormik02"
                                        />
                                    </div>
                                </Form.Group>
                                {props.isModal ? (
                                    <Form.Group>
                                        <Form.Label>Note</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="note"
                                            value={values.note}
                                            onChange={handleChange}
                                            placeholder="Leave a note here"
                                            style={{ height: '100px' }}
                                        />
                                    </Form.Group>
                                ) : (
                                    ''
                                )}
                            </Row>
                            <Button
                                className={
                                    props.isModal ? 'move-submitbtn' : ''
                                }
                                type="submit"
                            >
                                {isEditMode ? 'Edit' : 'Add'}
                            </Button>
                        </fieldset>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default AddForm
