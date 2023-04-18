import React from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"

const User = () => {
	const param = useParams()
	const { name } = param
	console.log(name)

	const location = useLocation()
	console.log(location)
	return (
		<div>
			<h1> This is the {name} Page</h1>
		</div>
	)
}

export default User
