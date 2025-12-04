//essa primeira parte tem como objetivo selecionar e armazenar referências a elementos específicos//
const carouselSlide = document.querySelector('.carousel-slide'); // encontra o contêiner principal do carrossel
const carouselImages = document.querySelectorAll('.carousel-slide img'); //seleciona todas as imagens dentro do contêiner 
const prevBtn = document.querySelector('#prevBtn'); //encontra o botao de voltar //
const nextBtn = document.querySelector('#nextBtn'); //encontra o botao de avancar //

let counter = 0; //Esta variável rastreia qual slide (imagem) está visível no momento (começa no primeiro slide, índice 0) //
let size = carouselSlide.clientWidth; // A largura exata da caixa principal, para saber o quanto deslizar//
const totalImages = carouselImages.length; //O número total de imagens dos slides. //
const animationDuration = 500; // duracao de 0.5 segundo de animação
const autoPlayInterval = 3000; // 3 segundos entre as trocas automáticas

//essa terceira parte define como o carrossel se move visualmente. Ele configura uma transição CSS suave e calcula a distância exata em pixels que o contêiner principal precisa se deslocar horizontalmente para exibir a imagem correta na tela.
// Função para mover o slide
function moveSlide() { //Inicia a função para deslizar o carrossel//
    carouselSlide.style.transition = `transform ${animationDuration}ms ease-in-out`; //Define que o movimento será suave//
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; //Move a caixa inteira para a esquerda horizontalmente// //Ela multiplica a largura de um slide (size) pelo índice do slide atual (counter). O sinal de negativo (-) garante que ele se mova para a esquerda (para mostrar o próximo slide).
}

let autoSlide = setInterval(moveToNextSlide, autoPlayInterval); //Inicia um cronômetro para trocar a imagem a cada 3 segundos ou Inicia um temporizador que chama a função moveToNextSlide repetidamente a cada 3000ms (3 segundos)//
function moveToNextSlide() { //Inicia a função de avanço automático//
    // Se for a última imagem, resetamos o contador para 0
    if (counter >= totalImages - 1) { //Verifica se é a última imagem//
        counter = 0; //Se sim, reseta o contador para 0//
        carouselSlide.style.transition = 'none'; //Remove a suavidade para o salto ser instantâneo ou Quando chega ao último slide (altura >= totalImages - 1), ele remove a transição (transition = 'none') e move instantaneamente de volta ao primeiro slide, e depois de um pequeno atraso (setTimeout), move para o segundo slide com a transição ativada. Isso cria um efeito de "loop infinito" sem o usuário notar o pulo//
        carouselSlide.style.transform = 'translateX(0px)'; //Volta instantaneamente para o início//
        // Forçamos um pequeno delay para que o CSS entenda que a transição foi removida
        setTimeout(() => { //Cria um pequeno atraso para o navegador processar a mudança//
            counter = 1; // Prepara para ir para a segunda imagem na próxima chamada no caso a prox foto//
            moveSlide(); //Chama a função para mover, iniciando a animação novamente//
        }, 50); // Delay de 50 milissegundos
    } else { //Caso não seja a última imagem//
        counter++; //Avança o contador em 1//
        moveSlide(); //Chama a função para mover//
    }
}
//essa quarta parte Inicia um temporizador automático que, a cada 3 segundos, tenta avançar a imagem. Ele gerencia a lógica de loop do carrossel: quando chega ao fim, ele "teleporta" de volta para a primeira imagem instantaneamente e continua a animação a partir dali.

// --- quinta parte ---
nextBtn.addEventListener('click', () => { //Espera um clique no botão "Avançar"//
    // Para o autoplay quando o usuário clica manualmente
    clearInterval(autoSlide); //Para o cronômetro automático//

    if (counter >= totalImages - 1) { //Verifica se é a última foto//
         // Lógica simplificada para clique manual (sem loop infinito imediato)
         counter = 0; //Se sim, reseta o contador//
    } else { //Se não for a última//
        counter++; //Avança o contador em 1//
    }
    moveSlide(); //Chama a função para mover o carrossel//
});
prevBtn.addEventListener('click', () => { //Espera um clique no botão "Voltar"//
    // Para o autoplay quando o usuário clica manualmente
    clearInterval(autoSlide); //Para o cronômetro automático//

    if (counter <= 0) { //Verifica se é a primeira foto//
        // Lógica simplificada para clique manual (vai para a última imagem)
        counter = totalImages - 1; //Se sim, vai para a última foto//
    } else { //Se não for a primeira//
        counter--; //Diminui o contador em 1//
    }
    moveSlide(); //Chama a função para mover o carrossel//
});

//quinta parte Configura os botões de navegação ele ouve os cliques do usuário, atualiza o counter para a direção desejada (próximo ou anterior), para o autoplay automático e move o carrossel para a nova posição//

// Opcional: Ajustar o tamanho se a janela for redimensionada
window.addEventListener('resize', () => { //Espera que a janela do navegador mude de tamanho//
    size = carouselSlide.clientWidth; //Recalcula a largura da caixa (size).//
    moveSlide(); //Reposiciona o carrossel corretamente com a nova largura//
}); //Fecha o bloco de ação do redimensionamento//

//sexta parte Garante a responsividade. Se a largura da tela mudar (por exemplo, ao girar um celular ou redimensionar a janela do navegador), ele recalcula o tamanho (size) de uma imagem e ajusta a posição do carrossel para que a imagem atual continue centralizada corretamente//