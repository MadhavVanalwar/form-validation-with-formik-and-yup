import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as yup from "yup"
import RedErrorMessage from "./RedErrorMessage"

const FormikForm2 = () => {
	const [formData, setFormData] = useState({})
	const NewValidations = yup.object({
		name: yup.string().required("Name Is Must"),
		age: yup.number().min(10).max(50).required("Age Is Must"),
		password: yup
			.string()
			.matches(/^[a-zA-Z0-9!@#$%^&*]{8,16}$/, "Enter Strong Password")
			.required("Password Is Must"),
		gender: yup.string().required("Gender Is Must"),
		hobby: yup.array().min(1, "One Hobby Is Must"),
		country: yup.string().required("Country Is Must"),
		comment: yup.string().max(500).required("Comment Is Must"),
	})
	return (
		<>
			<div>
				<Formik
					validationSchema={NewValidations}
					initialValues={{
						name: "",
						age: "",
						password: "",
						gender: "",
						hobby: [],
						country: "",
						comment: "",
					}}
					onSubmit={(values, action) => {
						console.log(values)
						setFormData(values)
						action().resetForm()
					}}>
					<Form>
						<label htmlFor="">Enter Name:</label>
						<Field type="text" name="name" />
						{/* <ErrorMessage name="name" /> */}
						<RedErrorMessage name="name" />
						<br />
						<br />
						<label htmlFor="">Enter Age:</label>
						<Field type="number" name="age" />
						<RedErrorMessage name="age" />
						<br />
						<br />
						<label htmlFor="">Enter Password:</label>
						<Field type="text" name="password" />
						<RedErrorMessage name="password" />
						<br />
						<br />
						<label htmlFor="Gender">Gender: &nbsp; </label>
						<label htmlFor="Gender">Male </label>
						<Field type="radio" name="gender" value="Male" />
						&nbsp;
						<label htmlFor="Gender">Female</label>
						<Field type="radio" name="gender" value="Female" />
						<RedErrorMessage name="gender" />
						&nbsp;
						<br />
						<br />
						<label htmlFor="">Hobbies:</label>
						<label htmlFor="">Writing</label>
						<Field type="checkbox" name="hobby" value="writing" />
						&nbsp;
						<label htmlFor="">Reading</label>
						<Field type="checkbox" name="hobby" value="reading" />
						&nbsp;
						<label htmlFor="">Sleeping</label>
						<Field type="checkbox" name="hobby" value="sleeping" />
						<RedErrorMessage name="hobby" />
						<br />
						<br />
						<label htmlFor="">Country:</label>
						<Field name="country" as="select">
							<option value="">Select Country</option>
							<option value="Canada">Canada</option>
							<option value="USA">USA</option>
							<option value="UK">UK</option>
						</Field>
						<RedErrorMessage name="country" />
						<br />
						<br />
						<label htmlFor="">Comments:</label>
						<Field as="textarea" name="comment" />
						<RedErrorMessage name="comment" />
						<br />
						<br />
						<button type="submit">Submit</button>
					</Form>
				</Formik>
			</div>
			<h1>{JSON.stringify(formData)}</h1>
			{/* <h1>{formData.name}</h1> */}
			{/* <h1>{formData.age}</h1> */}
		</>
	)
}

export default FormikForm2
