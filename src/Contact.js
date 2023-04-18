import React from "react"
import { useNavigate } from "react-router-dom"

const Contact = () => {
	const navigate = useNavigate()
	const GotoHomepage = () => {
		navigate("/")
	}
	return (
		<div>
			<section>
				<h1>This is the contact page</h1>
				<button onClick={() => GotoHomepage()}>go to home page</button>
				<br />
				<br />
				<button onClick={() => navigate(-1)}>go to back</button>
			</section>
		</div>
	)
}

export default Contact
