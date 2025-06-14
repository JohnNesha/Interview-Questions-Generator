function generateQuestion(event) {
  event.preventDefault();

  new Typewriter("#question_type", {
    strings: "Question goes here",
    autoStart: true,
    delay: 1,
  });
}

let questionFormElement = document.querySelector("#question_generator_form");
questionFormElement.addEventListener("submit", generateQuestion);
