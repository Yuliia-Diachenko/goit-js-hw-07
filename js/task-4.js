const button = document.querySelector("button");
button.style = `border-radius: 8px;
        border: none;
        width: 86px;
        height: 40px;
        background-color: #4e75ff;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.04em;
        color: #fff;`

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
	event.preventDefault();
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    if (email === "" || password === "") {
    return alert("All form fields must be filled in");
    }
    const user = {email: email, password: password};
    console.log(user);
    form.reset();
};
