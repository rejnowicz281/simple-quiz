const verdictSection = document.getElementById("verdict-section");
const getVerdictButton = document.getElementById("get-verdict-button");

const question1answer = {
  yes: document.getElementById("question1-yes"),
  no: document.getElementById("question1-no")
}

const question2answer = {
  yes: document.getElementById("question2-yes"),
  no: document.getElementById("question2-no")
}

const question3answer = {
  yes: document.getElementById("question3-yes"),
  no: document.getElementById("question3-no")
}

getVerdictButton.addEventListener("click", function () {
  getVerdictButton.remove();
  const verdict = document.createElement("p");
  verdict.style.fontWeight = 800;
  let verdictContent;
  if (question1answer.yes.checked && question2answer.yes.checked && (question3answer.yes.checked || question3answer.no.checked)) {
    verdictContent = document.createTextNode("Officiis hic perspiciatis sunt similique ratione.");
  } else if (question1answer.no.checked && question2answer.no.checked && question3answer.no.checked) {
    verdictContent = document.createTextNode("Placeat totam assumenda optio.");
  } else {
    verdictContent = document.createTextNode("Deleniti ad voluptatum facilis.");
  }
  verdict.appendChild(verdictContent);
  verdictSection.appendChild(verdict);
});
