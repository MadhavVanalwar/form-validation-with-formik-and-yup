import { useState } from "react"

const Eight = () => {
	const [missingNum, setMissingNum] = useState(0)

	const handleChange = (e) => {
		setMissingNum(e.target.value)
	}

	const output = () => {
		let arr = missingNum.split("").map(Number)
		let arrSort = arr.sort((a, b) => a - b)
		let filarr = arrSort.filter((ele, ind) => {
			return arrSort.indexOf(ele) === ind
		})
		const missArray = []
		const missingValue = (filarr) => {
			const minValue = Math.min(...filarr)
			const maxValue = Math.max(...filarr)
			for (let i = minValue; i < maxValue; i++) {
				if (arr.indexOf(i) < 0) {
					missArray.push(i)
					console.log(missArray)
				}
				return missingValue
			}
		}
	}

	return (
		<>
			<h1>Find The Missing Number</h1>
			<input text="number" onChange={handleChange} onBlur={output} />
			<h1>Answer :- {missingNum}</h1>
		</>
	)
}
export default Eight
