import React, { useState } from "react"

const Sixth = () => {
	const [val, setVal] = useState("")

	const handelChane = (e) => {
		setVal(e.target.value)
	}

	let arr = val.split(",").map(Number)

	const handelBlur = () => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				for (let j = 0; j < arr[i]; j++) {
					if (j % 2 === 0) {
						console.log(j)
					}
				}
			} else if (arr[i] % 2 !== 0) {
				for (let k = 0; k < arr[i]; k++) {
					if (k % 2 !== 0) {
						console.log(k)
					}
				}
			}
		}
	}
	return (
		<>
			<input onChange={handelChane} onBlur={handelBlur} />
			{arr.map((crr, id) => {
				return (
					<>
						<h4 key={id}>{crr}</h4>
					</>
				)
			})}
			<p>show the ans in console</p>
		</>
	)
}

export default Sixth
