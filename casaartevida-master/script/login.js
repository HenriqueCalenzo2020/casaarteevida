function nextPage()
{
    var text = document.querySelector("input");
    var welcome = document.querySelector("p");

    if(text.value == 0 || text.value == null)
    {
        welcome.innerText = `Falha, digite seu nome para proseguir`;
        return welcome.style.color = '#F00';
    }

    localStorage.setItem('name', text.value);

    welcome.innerText = `Olá ${text.value}, aguarde o carregamento...`;
    welcome.style.color = `#FFF`;
    return window.location.href = "../pages/home.html";
}