document.querySelector('a').addEventListener('click', function(el)
{
    el.preventDefault()
    let Prompt = prompt("Введите текст для ссылки!");
    this.textContent = Prompt; 
});