import React from "react"
import { useSearchParams } from "react-router-dom"

const Filter = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	// console.log(searchParams.get("age"))
	// console.log(searchParams.get("city"))

	const age = searchParams.get("age")
	const city = searchParams.get("city")
	return (
		<div>
			<h1>filter page</h1>
			<h1>Age is : {age}</h1>
			<h1>City is : {city}</h1>
			<input
				type="text"
				onChange={(e) =>
					setSearchParams({ text: e.target.value, age: e.target.value })
				}
				placeholder="Set Text in Query Params"
			/>
			<button onClick={() => setSearchParams({ age: 28 })}>
				Set age in query params
			</button>
		</div>
	)
}

export default Filter
