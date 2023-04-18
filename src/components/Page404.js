import React from "react"
import { Link } from "react-router-dom"

const Page404 = () => {
	return (
		<div>
			<h1>page not found 404....</h1>
			<p>This is URL is not present</p>
			<Link to="/">go to home page</Link>
		</div>
	)
}

export default Page404
