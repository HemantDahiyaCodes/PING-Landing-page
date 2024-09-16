const input = document.getElementById('email');
const notifyBtn = document.querySelector('button');
const text = document.querySelector('.errorText');

const verifyEmail = () => {
    let patternOne = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(input.value === "" || !patternOne.test(input.value)) {
        text.textContent = `Please enter a valid email.`
        text.style.border = "2px solid black";
        return false;
    }

    const valid = patternOne.test(input.value);
    text.textContent = `Your will receive the notification when we are live. Thank you`;
    text.style.border = "2px solid black";
}

notifyBtn.addEventListener('click', verifyEmail)