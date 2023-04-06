import { useState } from "react"

function Fifth() {
	const [input, setInput] = useState("")
	const [final, setFinal] = useState({})

	function handleChange(e) {
		setInput(e.target.value)
	}
	function output() {
		let arr = input.split("")
		let vowelArr = {}

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === "a") {
				vowelArr[arr[i]] = vowelArr[arr[i]]
					? (vowelArr[arr[i]] = vowelArr[arr[i]] + 1)
					: (vowelArr[arr[i]] = 1)
			} else if (arr[i] === "e") {
				vowelArr[arr[i]] = vowelArr[arr[i]]
					? (vowelArr[arr[i]] = vowelArr[arr[i]] + 1)
					: (vowelArr[arr[i]] = 1)
			} else if (arr[i] === "i") {
				vowelArr[arr[i]] = vowelArr[arr[i]]
					? (vowelArr[arr[i]] = vowelArr[arr[i]] + 1)
					: (vowelArr[arr[i]] = 1)
			} else if (arr[i] === "o") {
				vowelArr[arr[i]] = vowelArr[arr[i]]
					? (vowelArr[arr[i]] = vowelArr[arr[i]] + 1)
					: (vowelArr[arr[i]] = 1)
			} else if (arr[i] === "u") {
				vowelArr[arr[i]] = vowelArr[arr[i]]
					? (vowelArr[arr[i]] = vowelArr[arr[i]] + 1)
					: (vowelArr[arr[i]] = 1)
			} else {
			}
		}
		setFinal(vowelArr)
	}

	return (
		<>
			<input
				type="text"
				placeholder="enter string"
				onChange={handleChange}
				onBlur={output}
			/>

			<table>
				<thead>
					<th>name</th>
					<th>vowel count</th>
				</thead>
				<tbody>
					{Object.entries(final).map((ele) => {
						return (
							<tr>
								<td>{ele[0]}</td>
								<td>1</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}
export default Fifth

// import { useState } from "react";

// const Fifth = () => {
//   const [ocure, setOcure] = useState("");
//   const [value, setValue] = useState([]);

//   const handleChange = (e) => {
//     setOcure(e.target.value);
//   };

//   const handleArr = () => {
//     let arr = ocure.split("");
//     let listcount = {};
//     for (let i = 0; i < arr.length; i++) {
//       let element = arr[i].toLowerCase();
//       if (listcount[element]) {
//         listcount[element] = 1;
//       } else {
//         listcount[element] = 1;
//       }
//     }
//     // setValue(listcount);
//     console.log(listcount);
//     // console.log(arr);
//   };
//   return (
//     <>
//       <h1>Find the occurences</h1>
//       <input
//         type="text"
//         onChange={handleChange}
//         onBlur={handleArr}
//         value={ocure}
//       />
//       {/* <h4> :- {ocure}</h4> */}
//       <h4>Find Total Occurences :- {value}</h4>
//     </>
//   );
// };
// export default Fifth;
