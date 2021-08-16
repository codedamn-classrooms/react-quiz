import React from 'react'

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]

	// Define function body to increment the question index variable
	function handleAnswerClick() {}

	// Define a state variable here to track question status

	return (
		<div className="app">
			{false ? (
				<div className="score-section">
					You scored 1 out of {questions.length}
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Question 1</span>/{questions.length}
						</div>
						{/* You should change the "0" here to a state variable */}
						<div className="question-text">
							{questions[0].questionText}
						</div>
					</div>
					{/* You should change the "0" here to a state variable */}
					<div className="answer-section">
						{questions[0].answerOptions.map((answer) => {
							// Add onClick listener to this button
							return (
								<button key={answer.answerText}>
									{answer.answerText}
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}
