const passwordConfirmInput = document.querySelector('#confirmPassword');
const nameInput = document.querySelector('#name');
const termsAndConditionsInput = document.querySelector('#check');
const fileInput = document.querySelector('#file');
const signupForm = document.querySelector('#signup-form');
let photo;

const url = 'https://tourism-9eqc.onrender.com';

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
				
				body: formdata,
			});
			if (response.status === 201) {
				window.location.replace('/signup2.html');
			} else {
				err.textContent = 'Something went wrong';
			}
		} catch (error) {
			err.textContent = error.message;
		}
	});
};


signup();