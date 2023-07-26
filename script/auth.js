const loginForm = document.querySelector('#login-form');
let err = document.querySelector('#error');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

//signup

const passwordConfirmInput = document.querySelector('#confirmPassword');
const nameInput = document.querySelector('#name');
const termsAndConditionsInput = document.querySelector('#check');
const fileInput = document.querySelector('#file');
const signupForm = document.querySelector('#signup-form');
let photo;

const url = 'https://tourism-9eqc.onrender.com';
var token = localStorage.getItem('token');
var currentUrl = window.location.href;
let base = 'http://127.0.0.1:5500/';
if (currentUrl === `${base}login.html` || currentUrl === `${base}signup.html`) {
	if (token) {
		window.location.replace('/homepage.html');
	} else {
		window.location.replace('/login.html');
	}
}

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

const signup = () => {
	fileInput.addEventListener('change', (event) => {
		const file = event.target.files[0];
		photo = file;
	});
	signupForm.addEventListener('submit', async (event) => {
		event.preventDefault();

		try {
			const formdata = new FormData();
			formdata.append('name', nameInput.value);
			formdata.append('email', emailInput.value);
			formdata.append('password', passwordInput.value);
			formdata.append('confirmPassword', passwordConfirmInput.value);
			formdata.append('termsAndConditions', termsAndConditionsInput.checked);
			formdata.append('photoPath', photo);
			const response = await fetch(`${url}/users`, {
				method: 'POST',
				/* 	headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}, */
				body: formdata,
			});
            if (response.status === 201) {
                window.location.replace('/signup2.html');
            }else{
                err.textContent = 'Something went wrong';
            }
		} catch (error) {
			err.textContent = error.message;
		}
	});
};

//call functions

/* login(); */
signup();
