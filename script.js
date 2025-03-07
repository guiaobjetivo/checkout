// Configuração do tempo (em segundos)
let timeLeft = 600; // 10 minutos

// Função para atualizar o cronômetro
function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    // Formatação para dois dígitos
    const formattedTime = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        alert("Tempo esgotado! Faça o Pagamento ou perderá o desconto.");
    } else {
        timeLeft--;
    }
}

// Atualiza o cronômetro a cada segundo
const timerInterval = setInterval(updateTimer, 1000);

// Função para gerar QR Code PIX
document.getElementById('pix-button').addEventListener('click', () => {
    const qrcodeDiv = document.getElementById('qrcode');
    qrcodeDiv.innerHTML = ''; // Limpa o conteúdo anterior

    // Dados do PIX (exemplo)
    const pixData = {
        chave: '59.339.636/0001-05', // Chave PIX (CPF, e-mail, telefone, etc.)
        valor: 36.90, // Valor da transação
        descricao: 'Promocao por Tempo Limitado', // Descrição opcional
    };

    // Gera o QR Code (usando uma biblioteca como QRCode.js)
/*    
const qrcode = new QRCode(qrcodeDiv, {
        text: `PIX:${pixData.chave}?amount=${pixData.valor}&description=${pixData.descricao}`,
        width: 200,
        height: 200,
    });
*/

document.getElementById('qrcodeinfos').innerHTML = '<b>Nome:</b> 59.339.636 MARCOS VINICIUS DA SILVA CNPJ <br><br> Chave Pix Nubank:<br> <br><b>59.339.636/0001-05 </b> <br><br> O Material sera entregue no seu Whatsapp.'
});
