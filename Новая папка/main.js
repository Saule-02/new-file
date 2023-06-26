const quizDB = [
  {
    question: "JS те канча типы даных бар?",
    variants: [6, 7, 8, 5],
    correctAnswer: 8,
  },
  {
    question: "JS тин биринчи аты?",
    variants: ["LiveScript", "Mocha", "Ecmascript", "Java"],
    correctAnswer: "Mocha",
  },
  {
    question: "Who`s Guliza?",
    variants: ["girl", "boy", "me"],
    correctAnswer: "me",
  },
];

let correctAnswerCount = 0;
let index = 0;
const rootDiv = document.querySelector("#quiz");
function renderQuiz() {
  rootDiv.innerHTML = `
  <h2 class="text-center"> ${quizDB[index].question} </h2>
    <ul class="list-group">
    ${quizDB[index].variants.map(
        (v) => `
    <li class="list-group-item" onclick="nextQuiz(event)"> ${v} </li>
    <br/> `
      )
      .join("")}
    </ul>
`;
}
renderQuiz();

function nextQuiz(e) {
  const answer = e.target.textContent;
  result ()
  if (index == quizDB[index].length) {
    return ;
  } else {
    if (answer == quizDB[index].correctAnswer) {
      ++correctAnswerCount;
    }
    index++;
    renderQuiz();
  }
}

function result () {
  rootDiv.innerHTML =  `<h2 class="text-center">Правильные ответы: ${correctAnswerCount} / ${quizDB.length} </h2>`
}
