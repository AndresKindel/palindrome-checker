const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');
const outputText = document.getElementById('output-text');

function formatString(string) {
    return string.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s/g, '');
}

function isPalindrome(string) {
    let formattedString = formatString(string);
    let reversedString = formattedString.split('').reverse().join('');
    return formattedString === reversedString;
}

button.addEventListener('click', () => {
    if (input.value === '') {
        outputText.textContent = 'Please enter a value!';
        output.style.display = 'flex';
        return;
    } else {
        let string = input.value;
        if (isPalindrome(string)) {
            outputText.textContent = `${string} is a palindrome!`;
        } else {
            outputText.textContent = `${string} is not a palindrome!`;
        }
        output.style.display = 'flex';
        return;
    }
});