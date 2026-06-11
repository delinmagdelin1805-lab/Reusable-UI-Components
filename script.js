/* Buttons */

const buttons =
  document.querySelectorAll("button");

/* Animation */

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    button.style.transform =
      "scale(0.95)";

    setTimeout(() => {

      button.style.transform =
        "";

    }, 150);

  });

});