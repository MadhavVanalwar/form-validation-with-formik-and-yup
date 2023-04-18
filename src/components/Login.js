import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const login = () => {
		localStorage.setItem("login", true)
		navigate("/")
	}
	const navigate = useNavigate()

	useEffect(() => {
		let login = localStorage.getItem("login")
		if (login) {
			navigate("/")
		}
	})
	return (
		<div>
			<h1>This is the Login Page</h1>
			<input type="text" /> <br />
			<br />
			<input type="text" /> <br />
			<br />
			<button onClick={login}>Login</button>
		</div>
	)
}

export default Login
