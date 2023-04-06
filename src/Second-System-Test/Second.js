import { useState } from "react"

const Second = () => {
	const [ocure, setOcure] = useState("")
	const [value, setValue] = useState([])

	const handleChange = (e) => {
		setOcure(e.target.value)
	}

	const handleArr = () => {
		let arr = ocure.split("").map(Number)
		console.log(arr)
		let listcount = {}
		for (let i = 0; i < arr.length; i++) {
			let element = arr[i]
			if (listcount[element]) {
				listcount[element] = listcount[element] + 1
			} else {
				listcount[element] = 1
			}
		}
		// setValue(listcount)
		console.log(listcount)
		// console.log(arr);
	}
	return (
		<>
			<h1>Find the occurences</h1>
			<input
				type="number"
				onChange={handleChange}
				onBlur={handleArr}
				value={ocure}
			/>
			{/* <h4> :- {ocure}</h4> */}
			<h4>Find Total Occurences :- {value}</h4>
			<p>show the answer in console</p>
		</>
	)
}
export default Second
