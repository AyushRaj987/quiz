#!  /usr/bin/env node

import  inquirer from 'inquirer';

// Define the interface for a question
interface Question {
  type: 'list'; // Use 'list' type for multiple choice
  name: string;
  message: string;
  choices: string[];
  correctAnswer: number; // Index of the correct answer in choices
}

// Define some example questions
const questions: Question[] = [
  {
    type: 'list',
    name: 'question1',
    message: 'What is the capital of pakistan?',
    choices: ['Islamabad', 'Sindh', 'Punjab', 'Blocistan'],
    correctAnswer: 0,
  },
  {
    type: 'list',
    name: 'question2',
    message: 'What is the largest planet in our solar system?',
    choices: ['Earth', 'Jupiter', 'Mars', 'Venus'],
    correctAnswer: 1,
  },
];

let score = 0;

async function main() {
  // Loop through each question
  for (const question of questions) {
    const answer = await inquirer.prompt([question]);
    const userChoice = answer[question.name];

    if (userChoice === question.choices[question.correctAnswer]) {
      console.log('Correct!');
      score++;
    } else {
      console.log(`Incorrect. The correct answer is: ${question.choices[question.correctAnswer]}`);
    }
  }

  // Display the final score
  console.log(`You scored ${score} out of ${questions.length} questions.`);
}

main();
