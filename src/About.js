import React from "react"
import { useNavigate } from "react-router-dom"

const About = () => {
	const navigate = useNavigate()
	const goToContact = () => {
		// alert("Hiii")
		navigate("/contact")
	}
	return (
		<div>
			<section>
				<h1>This is the about page</h1>
				<button onClick={() => goToContact()}>go to Contact Page</button>
				<br />
				<br />
				<button onClick={() => navigate(-1)}>go to back</button>
			</section>
		</div>
	)
}
export default About
