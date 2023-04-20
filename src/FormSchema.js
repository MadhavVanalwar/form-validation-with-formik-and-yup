import * as Yup from "yup"

export const FormSchema = Yup.object({
	name: Yup.string()
		.min(3, "Too Short")
		.max(20, "Too Long")
		.required("Name Is Must"), //function chaning
	email: Yup.string().email("Invalid Email").required("Email Is Must"),
	age: Yup.number().min(10).max(50).required("Number Is Must"),
	pass: Yup.string()
		.required("Password Is Must")
		.matches(
			// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
			// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
			/^[a-zA-Z0-9!@#$%^&*]{8,16}$/,
			"Enter Strong Password"
		),
	cpass: Yup.string()
		.required("Confirm Password Is Must")
		.oneOf([Yup.ref("pass"), null], "Both Password Must Match....."),
})
