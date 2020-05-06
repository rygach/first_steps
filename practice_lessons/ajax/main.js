let servResponse = document.querySelector('#response');

document.forms.ourForm.onsubmit = function(e) {
    e.preventDefault();

    let userInput = document.forms.ourForm.ourForm__inp.value;
    userInput = encodeURIComponent(userInput);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'form.php');

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            servResponse.textContent = xhr.responseText;
        }
    }

    xhr.send('ourForm__inp=' + userInput);
};