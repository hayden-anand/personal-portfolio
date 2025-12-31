(function () {
  emailjs.init("_Dyw_9aSjtSg9R-py");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.style.color = "#555";
  status.textContent = "Sending message...";

  emailjs
    .sendForm(
      "service_3upzjw6",
      "template_2ig2hrl",
      this
    )
    .then(
      function () {
        status.style.color = "green";
        status.textContent = "Message sent successfully! ✅";
        document.getElementById("contact-form").reset();

        // auto-hide after 4 seconds
        setTimeout(() => {
          status.textContent = "";
        }, 4000);

      },
      function (error) {
        status.style.color = "red";
        status.textContent = "Failed to send message. Please try again.";
        console.error("EmailJS Error:", error);
      }
    );
});
