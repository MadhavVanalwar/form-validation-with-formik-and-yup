import React, { useState } from "react"

const Forth4 = () => {
	const [input, setInput] = useState("")
	const [data, setdata] = useState()

	const [secondInput, setSecondInput] = useState("")
	const [high, setHigh] = useState()

	const mouseOutEvent = () => {
		let numberArray = input.split("").map(Number)
		for (let i = 0; i < numberArray.length; i++) {
			if (isNaN(numberArray[i])) {
				alert("please enter valid input")
			}
		}

		let sort = numberArray.sort()
		let originals = sort.filter((value, index) => {
			return sort.indexOf(value) == index
		})
		let duplicates = sort.filter((value, index) => {
			return sort.indexOf(value) !== index
		})

		let out = []
		let zeroes = []
		for (let i = 0; i < originals.length; i++) {
			if (originals[i] == 0) {
				zeroes.push(sort[i])
			} else {
				out.push(originals[i])
			}
		}

		for (let i = 0; i < duplicates.length; i++) {
			zeroes.push(0)
		}
		let finalOutput = [...out, ...zeroes]
		console.log(finalOutput)
		setdata(finalOutput)

		let mynumberArray = secondInput.split("").map(Number)
		for (let i = 0; i < mynumberArray.length; i++) {
			if (isNaN(mynumberArray[i])) {
				alert("please enter valid input")
			}
		}
		let mysort = mynumberArray.sort()
		let myoriginals = mysort.filter((value, index) => {
			return mysort.indexOf(value) == index
		})
		let myduplicates = mysort.filter((value, index) => {
			return mysort.indexOf(value) !== index
		})

		let myout = []
		let myzeroes = []
		for (let i = 0; i < myoriginals.length; i++) {
			if (myoriginals[i] == 0) {
				myzeroes.push(sort[i])
			} else {
				myout.push(myoriginals[i])
			}
		}
		for (let i = 0; i < myduplicates.length; i++) {
			myzeroes.push(0)
		}
		let myfinalOutput = [...myzeroes, ...myout]

		setHigh(myfinalOutput)
	}
	return (
		<div className="GoldernNumber">
			<input
				type="number"
				onChange={(e) => setSecondInput(e.target.value)}
				value={secondInput}
				onMouseOut={mouseOutEvent}
			/>

			<input
				type="number"
				onChange={(e) => setInput(e.target.value)}
				value={input}
				onMouseOut={mouseOutEvent}
			/>
			<h1>
				{high}
				{data}
			</h1>
		</div>
	)
}

export default Forth4
