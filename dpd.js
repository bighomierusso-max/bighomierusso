// Login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // TO DO: Add login API call
    console.log('Login submitted:', username, password);
    alert('Login successful!');
});

// Register form submission
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // TO DO: Add register API call
    console.log('Register submitted:', name, email, password);
    alert('Registration successful!');
});

// Payment form submission
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const paymentMethod = document.getElementById('payment-method').value;
    const amount = document.getElementById('amount').value;
    // TO DO: Add payment API call
    console.log('Payment submitted:', paymentMethod, amount);
    alert('Payment successful!');
});