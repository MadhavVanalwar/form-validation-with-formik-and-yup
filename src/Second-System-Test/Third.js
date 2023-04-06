import { useState } from "react"

const Third = () => {
	const [inputValue, setInputValue] = useState("")
	const [vowels, setVowels] = useState([])

	const handleChange = (event) => {
		const value = event.target.value
		setInputValue(value)
		const vowelsArray = findVowels(value)
		setVowels(vowelsArray)
	}

	const findVowels = (str) => {
		const vowels = ["a", "e", "i", "o", "u"]
		const words = str.split(" ")
		const vowelsArray = []
		for (let i = 0; i < words.length; i++) {
			const word = words[i]
			const wordVowels = []
			for (let j = 0; j < word.length; j++) {
				if (vowels.includes(word[j].toLowerCase())) {
					wordVowels.push(word[j])
				}
			}
			vowelsArray.push(wordVowels)
		}
		return vowelsArray
	}

	return (
		<>
			<div className="third_container">
				<input type="text" value={inputValue} onChange={handleChange} />
				{vowels.map((wordVowels, index) => (
					<p key={index}>
						Vowels in word {index + 1}: {wordVowels.join(", ")}
					</p>
				))}
			</div>
		</>
	)
}

export default Third

// import React, { useState } from "react";

// function VowelCount() {
//   const [word, setWord] = useState("");
//   const [count, setCount] = useState(0);

//   function countVowels() {
//     let vowelCount = 0;
//     const vowels = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < word.length; i++) {
//       if (vowels.includes(word[i].toLowerCase())) {
//         vowelCount++;
//       }
//     }
//     setCount(vowelCount);
//   }

//   return (
//     <div>
//       <label>
//         Enter word:{" "}
//         <input
//           type="text"
//           value={word}
//           onChange={(e) => setWord(e.target.value)}
//           onBlur={countVowels}
//         />
//       </label>
//       {/* <button onClick={countVowels}>Count vowels</button> */}
//       <p>Vowel count: {count}</p>
//     </div>
//   );
// }

// export default VowelCount;
