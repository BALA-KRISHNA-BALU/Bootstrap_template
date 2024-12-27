  const loginButton = document.getElementById('login_btn');
loginButton.addEventListener('click', function() {
    
    const username = document.getElementById('use_name').value;
    const password = document.getElementById('password').value;

    const validUsername = 'bala@gmail.com';
    const validPassword = 'Bala@1234';

    if (username === '' || password === '') {
      alert('Please fill in both username and password.');
      return;
    }
    if (username === validUsername && password === validPassword) {
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });





