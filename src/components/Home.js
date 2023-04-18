import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Home = () => {
	const navigate = useNavigate()
	const location = useLocation()
	console.log(location)

	const navToPage = (url) => {
		navigate(url)
	}
	return (
		<div>
			<h1>Home page</h1>
			<p>This is the home page</p>
			<p>we are learning the react router dom</p>
			<Link to="/about">go to about page</Link>
			<br />
			<button onClick={() => navToPage("/about")}>Go To About Page</button>
			<br />
			<button onClick={() => navToPage("/filter")}>Go To Filter Page</button>
		</div>
	)
}

export default Home
