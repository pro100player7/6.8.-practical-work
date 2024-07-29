const consoleLog = document.querySelector('#consoleLog'),
    Alert = document.querySelector('#alert'),
    Prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', ()=>
{
    alert('console.log - служит для вывода и обработки информации в консоли!');
});

Alert.addEventListener('click', ()=>
{
    alert('alert - служит для вывода информации в всплывающем окне браузера!');
});

Prompt.addEventListener('click', ()=>
{
    alert('prompt - служит для получения информации в всплывающем окне браузера!');
});
     