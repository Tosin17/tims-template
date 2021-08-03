import { Formik } from 'formik'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './AddForm.css'

const schema = yup.object().shape({
    name: yup.string().required(),
    date: yup.string().required(),
    active: yup.bool().required().oneOf([true], 'Field is required'),
    status: yup.string().required(),
    type: yup.string().required(),
    addArchived: yup.bool().required().oneOf([true], 'Field is required'),
})

function AddForm() {
    const [startDate, setStartDate] = useState()

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => console.log(values)}
            initialValues={{
                name: '',
                date: '',
                active: false,
                status: '',
                type: '',
                addArchived: false,
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
                <Form
                    autoComplete="off"
                    noValidate
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (startDate) {
                            values.date = (
                                startDate as unknown as Date
                            ).toDateString()
                        }
                        handleSubmit(e)
                    }}
                    className="pt-4"
                >
                    <fieldset className="form-group border p-3">
                        <legend className="w-auto">Add</legend>
                        <Row className="mb-3 mr-3 pb-3">
                            <Form.Group
                                as={Col}
                                md="2"
                                controlId="addForm.validationFormik0Name"
                            >
                                <Form.Label>Name</Form.Label>
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
                                            isInvalid={
                                                touched.date && !startDate
                                            }
                                        />
                                    }
                                ></DatePicker>
                                <Form.Control.Feedback type="invalid">
                                    {errors.date}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="1">
                                <Form.Label>Active</Form.Label>
                                <Form.Check
                                    required
                                    name="active"
                                    onChange={handleChange}
                                    isInvalid={!!errors.active}
                                    feedback={errors.active}
                                    id="addForm.validationFormik07"
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="2"
                                controlId="addForm.validationFormikStatus"
                            >
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    name="status"
                                    value={values.status}
                                    onChange={handleChange}
                                    isInvalid={!!errors.status}
                                >
                                    <option>Select status</option>
                                    <option value="none">None</option>
                                    <option value="A">Status A</option>
                                    <option value="B">Status B</option>
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
                                <Form.Label>Type</Form.Label>
                                <div className="d-flex justify-content-between">
                                    <Form.Check
                                        type="radio"
                                        label="Type A"
                                        name="type"
                                        value="A"
                                        onChange={handleChange}
                                        id="Addform.formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Type B"
                                        name="type"
                                        value="B"
                                        onChange={handleChange}
                                        id="addForm.formHorizontalRadios3"
                                    />
                                </div>
                                <Form.Control.Feedback
                                    type="invalid"
                                    style={{ display: 'block' }}
                                >
                                    {errors.type}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="2">
                                <div className="_pl-5">
                                    <Form.Label>Archived</Form.Label>
                                    <Form.Check
                                        required
                                        name="addArchived"
                                        onChange={handleChange}
                                        isInvalid={!!errors.addArchived}
                                        feedback={errors.addArchived}
                                        id="addform.validationFormik02"
                                    />
                                </div>
                            </Form.Group>
                        </Row>
                        <Button type="submit">Add</Button>
                    </fieldset>
                </Form>
            )}
        </Formik>
    )
}

export default AddForm
