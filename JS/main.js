$(document).ready(function() {
    // Configuração do carrossel
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false
    });

    // Função para mostrar/ocultar o menu ao clicar no ícone do menu
    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    });

    // Máscara para o campo de telefone
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    // Validação do formulário
    $('form').validate({
        // Regras de validação
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        // Mensagens de erro personalizadas
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        // Função chamada quando o formulário é enviado com sucesso
        submitHandler: function(form) {
            console.log(form);
        },
        // Função chamada quando o formulário é inválido
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    // Função para preencher o campo de interesse ao clicar nos botões dos planos
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });

    // Configuração do redirecionamento ao clicar nos botões de planos
    $('.btn-plan').click(function() {
        const dataPlan = $(this).data('plan');
        let redirectLink;

        // Determinar o link correspondente com base no plano selecionado
        switch (dataPlan) {
            case 'Mensal':
                redirectLink = "https://app.tecnofit.com.br/ng/online-sale/MzQ4ODk/checkout/NjI2NTA5/forms";
                break;
            case 'Quadrimestral':
                redirectLink = "https://app.tecnofit.com.br/ng/online-sale/MzQ4ODk/checkout/NDg2MzMw/forms";
                break;
            case 'Semestral':
                redirectLink = "https://app.tecnofit.com.br/ng/online-sale/MzQ4ODk/checkout/NDg2MzM2/forms";
                break;
            case 'Semestral 3x Semana':
                redirectLink = "https://app.tecnofit.com.br/ng/online-sale/MzQ4ODk/checkout/NjI3NTYw/forms";
                break;
            case 'Anual':
                redirectLink = "https://app.tecnofit.com.br/ng/online-sale/MzQ4ODk/checkout/NDg2ODAw/forms";
                break;
            case 'Aulas Fundamentais':
                redirectLink = "https://app.tecnofit.com.br/ng/online-sale/MzQ4ODk/checkout/NzA0NDc3/forms";
                break;
            case 'Drop In':
                redirectLink = "https://app.tecnofit.com.br/ng/online-sale/MzQ4ODk/checkout/NjE0NjE3/forms";
                break;
            default:
                redirectLink = "#"; // Link padrão caso não haja correspondência
        }

        // Redirecionar o usuário para o link correspondente
        window.location.href = redirectLink;
    });

    // Redirecionamento ao clicar no botão AGENDAR
    $('.btn-center').click(function() {
        window.location.href = "https://app.tecnofit.com.br/tfRedirect?u=B27E65DE282C";
    });

    // Redirecionamento ao clicar nos ícones do rodapé
    $('footer ul li:nth-child(1) a').click(function() {
        window.location.href = "https://www.facebook.com/watch/?v=1449556859311890";
    });

    $('footer ul li:nth-child(2) a').click(function() {
        window.location.href = "https://www.instagram.com/cf.chacara/";
    });

    $('footer ul li:nth-child(3) a').click(function() {
        window.location.href = "https://www.youtube.com/channel/UCOPaGnTibV9tMbc8dFPSkJQ";
    });

    // Redirecionamento ao clicar no botão Team_DisnaR
    $('#linkedin-btn').click(function() {
        window.location.href = "https://www.linkedin.com/in/d%C3%A1rio-disnar-a397b779/";
    });

    // Redirecionamento e efeito hover para a imagem do WhatsApp
    $('#zap img').click(function() {
        window.location.href = "https://api.whatsapp.com/send?phone=5511944908317&text=Fale%20Conosco";
    });

    $('#zap img').hover(function() {
        $(this).css('cursor', 'pointer');
        // Adicione aqui qualquer efeito visual que você queira quando passar o mouse
    }, function() {
        // Adicione aqui qualquer ação a ser realizada quando o mouse sai da imagem
    });
});