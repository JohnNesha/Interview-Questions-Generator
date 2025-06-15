function displayQuestion(response) {
  new Typewriter("#question_type", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateQuestion(event) {
  event.preventDefault();

  let careerInput = document.querySelector("#career_question");
  let apiKey = "a723fd412o41a9d1a23tfcb7443f0307";
  let context =
    "You are an AI assistant that helps individuals with common interview questions for any career. ";
  let questionPrompt = `Supply an interview question based on ${careerInput.value} career field and then provide only 2  simple hints on how the question should be answered after supplying the question. Separate interview question from hints.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${questionPrompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuestion);

  let questionElement = document.querySelector("#question_type");
  questionElement.innerHTML = `Generating interview question for ${careerInput.value}...just a sec!`;
}

let questionFormElement = document.querySelector("#question_generator_form");
questionFormElement.addEventListener("submit", generateQuestion);
