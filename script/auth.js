const url = 'https://tourism-9eqc.onrender.com';
var token = localStorage.getItem('token');
var currentUrl = window.location.href;
let base = 'http://127.0.0.1:5500/';
if (currentUrl === `${base}login.html` || currentUrl === `${base}signup.html`) {
	if (token) {
		window.location.replace('/homepage.html');
	}
}
if (!token) {
	window.location.replace('/login.html');
}

const verify = async () => {
	try {
		const res = await fetch(`${url}/login/verify`, {
			method: 'POST',
			headers: {
				jwt_token: `${token}`,
			},
		});
		const parseRes = await res.json();

		if (parseRes === true) {
			//window.location.replace('/homepage.html');
		} else if (parseRes === false) {
			localStorage.clear();
		} else {
			localStorage.clear();
		}
	} catch (err) {
		console.error(err.message);
	}
};
