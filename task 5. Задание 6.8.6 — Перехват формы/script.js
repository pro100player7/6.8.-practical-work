// не понимаю почему так(последний символ не видит)
let text = document.querySelector('#duplicateField'),
    consoleText = null;

document.querySelector('input').addEventListener('keydown', function()
{
    text.textContent = this.value;
    consoleText = this.value;
});

document.querySelector('button').addEventListener('click', () =>
{
    console.log(consoleText)
    text.textContent = null;
    document.querySelector('input').value = null;
});