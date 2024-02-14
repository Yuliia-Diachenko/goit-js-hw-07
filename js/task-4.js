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
