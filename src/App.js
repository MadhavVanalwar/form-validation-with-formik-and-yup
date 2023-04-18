import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import User from "./components/User"
import Filter from "./components/Filter"
import Contact from "./components/Contact"
import Company from "./components/Company"
import Channel from "./components/Channel"
import Other from "./components/Other"
import Login from "./components/Login"
import Protected from "./components/Protected"
function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Protected Component={Home} />} />
						<Route path="/login" element={<Login />} />
						<Route path="/about" element={<Protected Component={About} />} />
						<Route path="/user/:name" element={<User />} />
						<Route path="/filter" element={<Protected Component={Filter} />} />
						<Route path="/*" element={<Navigate to="/" />} />
						<Route path="/contact/" element={<Protected Component={Contact} />}>
							<Route path="company" element={<Company />} />
							<Route path="channel" element={<Channel />} />
							<Route path="other" element={<Other />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App
