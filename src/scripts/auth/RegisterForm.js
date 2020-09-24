const contentTarget = document.querySelector('.auth--register');
const eventHub = document.querySelector('.container');

eventHub.addEventListener('userAuthenticated', (e) => {
	contentTarget.innerHTML = '';
});

eventHub.addEventListener('click', (e) => {
	if (e.target.id === 'register--button') {
		const username = document.querySelector('#register--username').value;
		const email = document.querySelector('#register--email').value;
		const firstName = document.querySelector('#register--firstName').value;
		const lastName = document.querySelector('#register--lastName').value;
		const dateOfBirth = document.querySelector('#register--DoB').value;

		if (
			username !== '' &&
			email !== '' &&
			firstName !== '' &&
			lastName !== '' &&
			dateOfBirth !== ''
		) {
			// Does the user exist?
			fetch(`http://localhost:8088/users?username=${username}`)
				.then((response) => response.json())
				.then((users) => {
					if (users.length === 0) {
						fetch('http://localhost:8088/users', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								username: username,
								email: email,
								firstName: firstName,
								lastName: lastName,
								dateOfBirth: dateOfBirth,
							}),
						})
							.then((response) => response.json())
							.then((newUser) => {
								sessionStorage.setItem('activeUser', newUser.id);

								eventHub.dispatchEvent(new CustomEvent('userAuthenticated'));
							});
					} else {
						window.alert('Username already exists!  😭 SON OF A WITCH!');
					}
				});
		} else {
			window.alert('Please make sure all fields are completed');
		}
	}
});

const render = () => {
	contentTarget.innerHTML += `
        <section class="register">
            <input id="register--username" type="text" placeholder="Enter your username">
            <input id="register--email" type="text" placeholder="Enter your email address">
            <input id="register--firstName" type="text" placeholder="Enter your first name">
            <input id="register--lastName" type="text" placeholder="Enter your last name">
            <input id="register--DoB" type="date" placeholder="Enter your date of birth">
            <button id="register--button">Register</button>
        </section>
    `;
};

export const RegisterForm = () => {
	render();
};
