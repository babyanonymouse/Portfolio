document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fields = ["name", "email", "subject", "message"].map((id) =>
        document.getElementById(id)
    );

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let valid = true;

        fields.forEach((field) => {
            if (field.value.trim() === "") {
                setError(field, `${field.placeholder} can't be blank`);
                valid = false;
            } else {
                clearError(field);
            }
        });

        if (valid) {
            sendMail(); // Call sendMail function only if all fields are filled
        }
    });

    fields.forEach((field) => {
        field.addEventListener("input", function () {
            clearError(field);
        });
    });

    function setError(element, message) {
        const field = element.parentElement;
        const errorText = field.querySelector(".error-text");

        field.classList.add("error");
        errorText.textContent = message;
        errorText.style.display = "block";
    }

    function clearError(element) {
        const field = element.parentElement;
        const errorText = field.querySelector(".error-text");

        field.classList.remove("error");
        errorText.style.display = "none";
    }
});

/* === Send Email with EmailJS === */
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
    };

    // Check if all fields are empty before sending the email
    if (
        parms.name.trim() === "" ||
        parms.email.trim() === "" ||
        parms.subject.trim() === "" ||
        parms.message.trim() === ""
    ) {
        alert("Please fill in all required fields before sending the email.");
        return;
    }

    emailjs
        .send("service_yct31dm", "contact_form", parms)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Email sending error:", error);
        });
}