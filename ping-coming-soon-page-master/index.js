
const form = document.querySelector("form");
const regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
const input = document.querySelector("input");
const p = document.querySelector(".p-error");
const button = document.querySelector("button")



function errorChecker() {
  if (input.value === "" || !input.value.match(regex)) {
    input.classList.add("error-input");
    p.classList.remove("error");
  }
}

form.addEventListener("submit", errorChecker);
