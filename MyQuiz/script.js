let quizQuestions = [];

function addQuestion() {
  const question = document.getElementById('question').value;
  const options = [
    document.getElementById('option1').value,
    document.getElementById('option2').value,
    document.getElementById('option3').value,
    document.getElementById('option4').value,
  ];

  if (question && options.every(option => option)) {
    const questionObject = {
      question,
      options,
    };

    quizQuestions.push(questionObject);
    displayQuizPreview();
    clearInputs();
  } else {
    alert('Please enter both the question and all four options.');
  }
}

function createQuiz() {
  if (quizQuestions.length > 0) {
    // Send quizQuestions to the backend or perform desired actions
    alert('Quiz created successfully!');
    clearInputs();
    quizQuestions = [];
    displayQuizPreview();
  } else {
    alert('Please add at least one question to create the quiz.');
  }
}

function displayQuizPreview() {
  const quizPreview = document.getElementById('quizPreview');
  quizPreview.innerHTML = '<h2>Quiz Preview</h2>';

  quizQuestions.forEach((questionObj, index) => {
    quizPreview.innerHTML += `
      <p><strong>${index + 1}. ${questionObj.question}</strong></p>
      <ul>
        ${questionObj.options.map((option, optionIndex) => `<li>${String.fromCharCode(65 + optionIndex)}. ${option}</li>`).join('')}
      </ul>
    `;
  });
}

function clearInputs() {
  document.getElementById('question').value = '';
  document.getElementById('option1').value = '';
  document.getElementById('option2').value = '';
  document.getElementById('option3').value = '';
  document.getElementById('option4').value = '';
}

