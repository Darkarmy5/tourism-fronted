const loginForm = document.querySelector('#login-form');
let err = document.querySelector('#error');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const url = 'https://tourism-9eqc.onrender.com';

const login = () => {
	loginForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(`${url}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: emailInput.value,
					password: passwordInput.value,
				}),
			});
			const token = await response.json();
			localStorage.setItem('token', token);

			if (token) {
				window.location.replace('/homepage.html');
			}
		} catch (error) {
			err.textContent = error.message;
		}
	});
};

login();
