import { Formik } from 'formik'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './SearchForm.css'

const schema = yup.object().shape({
    customerId: yup.string().required(),
    name: yup.string().required(),
    date: yup.string().required(),
    active: yup.string().required(),
    status: yup.string().required(),
    type: yup.string().required(),
    archived: yup.bool().required().oneOf([true], 'Archived'),
})

function SearchForm(props: any) {
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
                archived: false,
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
                <Form noValidate onSubmit={handleSubmit} className="pt-4">
                    <fieldset className="form-group border p-3">
                        <legend>Search</legend>
                        <Button
                            variant="primary"
                            disabled={!props.customers.length}
                        >
                            Refresh
                        </Button>{' '}
                        <br />
                        <br />
                        <Row className="mb-3 mr-3 pb-3">
                            <Form.Group
                                as={Col}
                                md="1"
                                controlId="validationFormik01CustId"
                            >
                                <Form.Label>CustomerId</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="customerId"
                                    value={values.customerId}
                                    onChange={handleChange}
                                    isValid={
                                        touched.customerId && !errors.customerId
                                    }
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="2"
                                controlId="searchFormModal.validationFormik0Name"
                            >
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
                            <Form.Group
                                as={Col}
                                md="2"
                                controlId="searchForm.validationFormikUsername"
                            >
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
                            <Form.Group as={Col} md="1">
                                <Form.Label>Active</Form.Label>
                                <Form.Check
                                    required
                                    name="active"
                                    label="ignored"
                                    onChange={handleChange}
                                    isInvalid={!!errors.active}
                                    feedback={errors.active}
                                    id="searchFormModal.validationFormik07"
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="2"
                                controlId="searchForm.validationFormikStatus"
                            >
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
                            <Form.Group as={Col} md="2">
                                <Form.Label>Type</Form.Label>
                                <div
                                    className="d-flex justify-content-between"
                                    style={{ width: '110%' }}
                                >
                                    <Form.Check
                                        type="radio"
                                        label="Blank"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Type A"
                                        name="formHorizontalRadios"
                                        id="searchForm.formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Type B"
                                        name="formHorizontalRadios"
                                        id="searchForm.formHorizontalRadios3"
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} md="1">
                                <div className="_pl-5">
                                    <Form.Label>Archived</Form.Label>
                                    <Form.Check
                                        required
                                        name="archived"
                                        label="Unchecked"
                                        onChange={handleChange}
                                        isInvalid={!!errors.archived}
                                        feedback={errors.archived}
                                        id="SearchForm.ValidationFormik02"
                                    />
                                </div>
                            </Form.Group>
                        </Row>
                        {/* <Button type="submit">Submit form</Button> */}
                    </fieldset>
                </Form>
            )}
        </Formik>
    )
}

export default SearchForm
