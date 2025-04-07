//use this enum
enum QuestionCategory {
  GeneralKnowledge = 'GeneralKnowledge',
  Math = 'Math',
  Science = 'Science',
  Programming = 'Programming'
}

//create a type Question
type Question = {
  category: QuestionCategory;
  questionText: string;
  correctAnswer: boolean;
}

//create the array of questions. Make it type safe
const questions: Question[] = [
  {
    category: QuestionCategory.GeneralKnowledge,
    questionText: 'Is the answer to the universe and everything 42?',
    correctAnswer: true
  }
];

//use the checkAnswer function. Make it type safe
function checkAnswer(question: Question, userAnswer: boolean): boolean {
  return question.correctAnswer === userAnswer;
}

console.log(checkAnswer(questions[0], false));
