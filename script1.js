window.addEventListener('load', function() {
    const userResponse = confirm("Você tem algum conteúdo para agregar sobre Java?");

    if (userResponse) {
        const email = prompt("Deixe seu e-mail que entraremos em contato:");
        
        if (email) {
            alert(`Agradecemos sua contribuição! Você forneceu o e-mail: ${email}. Entraremos em contato em breve.`);
        } else {
            alert("Não recebemos seu e-mail. Mas agradecemos seu interesse!");
        }
    } else {
        alert("Aqui você encontra tudo sobre esse assunto!");
    }
});
