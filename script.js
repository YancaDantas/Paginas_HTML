window.addEventListener('load', function() {
    const email = prompt("Você está no melhor Portal de notícias da Coréia! Deixe seu e-mail para receber atualizações."); 
    // Valida se o usuário forneceu um e-mail
    if (email) {
        console.log("E-mail fornecido:", email);
        
        const emailInput = document.querySelector('input[name="mail"]');
        if (emailInput) {
            emailInput.value = email;
        }
    }
});

//ajustar layout da tela aos dispositivos
document.addEventListener('ajuste', function() {
    function adjustLayout() {
        const container = document.querySelector('.container');
        if (window.innerWidth < 600) {
            container.style.maxWidth = '100%';
        } else {
            container.style.maxWidth = '800px';
        }
    }
    
    adjustLayout();
    window.addEventListener('reajuste', adjustLayout);
});