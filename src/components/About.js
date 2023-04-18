import React from "react"
import { Link } from "react-router-dom"

const About = () => {
	return (
		<div>
			<h1>About page</h1>
			<p>This is the about page</p>
			<p>we are learning the react router dom</p>
			<Link to="/">go to home page</Link>
			<li>
				<Link to="/user/madhav" state={{ name: "madhav" }}>
					Madhav
				</Link>
			</li>
			<li>
				<Link to="/user/maddy">Maddy</Link>
			</li>
		</div>
	)
}

export default About
