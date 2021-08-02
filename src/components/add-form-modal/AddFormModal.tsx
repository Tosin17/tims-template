import { Formik } from 'formik'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './AddFormModal.css'

const schema = yup.object().shape({
    name: yup.string().required(),
    date: yup.string().required(),
    active: yup.bool().required().oneOf([true], 'Field is required'),
    status: yup.string().required(),
    type: yup.bool().required().oneOf([true], 'Field is required'),
    addArchived: yup.bool().required().oneOf([true], 'Field is required'),
    notes: yup.string(),
})

function AddFormModal() {
    const [startDate, setStartDate] = useState()

    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                customerId: '',
                name: '',
                date: '',
                active: false,
                status: '',
                type: '',
                addArchived: false,
                notes: '',
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <fieldset className="form-group p-3">
                        <Row className="mb-3 mr-3 pb-3">
                            <Form.Group controlId="validationFormik0Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isValid={touched.name && !errors.name}
                                />

                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationFormikUsername">
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                    placeholderText="DD-MMM-YYYY"
                                    selected={startDate}
                                    onChange={(date) =>
                                        setStartDate(date as any)
                                    }
                                    customInput={
                                        <Form.Control
                                            type="text"
                                            name="date"
                                            value={values.date}
                                            onChange={handleChange}
                                            isValid={
                                                touched.date && !errors.date
                                            }
                                        />
                                    }
                                ></DatePicker>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Active</Form.Label>
                                <Form.Check
                                    required
                                    name="active"
                                    onChange={handleChange}
                                    isInvalid={!!errors.active}
                                    feedback={errors.active}
                                    id="validationFormik07"
                                />
                            </Form.Group>
                            <Form.Group controlId="validationFormikStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    onChange={handleChange}
                                    isValid={touched.status && !errors.status}
                                >
                                    <option>Select status</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Type</Form.Label>
                                <div className="d-flex justify-content-between">
                                    <Form.Check
                                        type="radio"
                                        label="Type A"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Type B"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Archived</Form.Label>
                                <Form.Check
                                    required
                                    name="addArchived"
                                    onChange={handleChange}
                                    isInvalid={!!errors.addArchived}
                                    feedback={errors.addArchived}
                                    id="validationFormik02"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Notes</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={values.notes}
                                    onChange={handleChange}
                                    isValid={touched.notes && !errors.notes}
                                />
                            </Form.Group>
                            <Button style={{ display: 'none' }} type="submit">
                                Submit form
                            </Button>
                        </Row>
                    </fieldset>
                </Form>
            )}
        </Formik>
    )
}

export default AddFormModal
