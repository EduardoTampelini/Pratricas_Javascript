const casas = document.getElementsByTagName('input');
const b_reiniciar = document.getElementById('reiniciar');
const label_jogador = document.getElementById('jogador');
//essas três contantes aqui em cima servem para pegar os elementos no html
var jogador = '_';
var vencedor = '_';
//essas duas variaveis são variaveis globais que uma dela será para representar o jogador e outra o vencedor
//nessas vairaveis foram colocados como _ para simbolizar neutro



for(var i = 0 ; i < 9;i++){//esse for esta realizando um laço de repetição que que irá se repitir até que todas as casas forem selecionadas
    casas[i].addEventListener('click',(event)=>{//esse campo esta pegando o evento dentro dos input com um clique

        if((event.target.value=='_') && (vencedor=='_')){//esse if esta verificando se o target(ou o botão/casa)esta vazia e o vencedor tambem não saiu
            console.log('clicou')
            event.target.value=jogador; //vai estar informando que quando o jogador clicar no quadrado o valor do quadrado sera o jogador(X ou O)
            event.target.style.color='black';
            event.target.style.backgroundColor='white';//tanto esse quando o style de cima estão aplicando um estilo no quadrado desse botão
            trocarJogador();//após um jogador clicar esse metodo estara chamando para outro jogador jogar 
            vencedor = vitoria();//essa linha informa que o vencedor recebe a vitoria, onde na função vitoria estão as possibilidades de ganhar o jogo.
            if(vencedor!='_'){//nesse espaço esta programando a lógica para ver o vencedor já saiu
                if(vencedor=='X'){
                label_jogador.style.color='red'
                label_jogador.innerHTML=`${vencedor} venceu! &#x1F3C6`;
                }else{
                label_jogador.style.color='blue'
                label_jogador.innerHTML=`${vencedor} venceu! &#x1F3C6`;
                }
            }
        }
    });
    casas[i].addEventListener('mouseover',(event)=>{//evento adicionado para quando o mouse passar em cima ficar da cor do player
        if((event.target.value=='_') && (vencedor=='_')){//nessas validação vai verificar se o valor do campo ainda é _ ou e se não tem vencedor
            if(jogador == 'X'){//essa validação tem o propósito de verificar se é a vex do jogador X ou O e aplicar as devidas cores 
            event.target.style.backgroundColor='red'
            
        }else{
            event.target.style.backgroundColor='blue'
        }
        }
    })
    casas[i].addEventListener('mouseout',(event)=>{//evento adicionaddo para verificar se o mouse saiu do quadrado
        if((event.target.value=='_') && (vencedor=='_')){
            event.target.style.backgroundColor='white'
            
        }
    })
}
b_reiniciar.addEventListener('click',(event)=>{//esse evento foi criado para o botão reiniciar na tela, onde nele vai 
    //voltar as casas a dua configuração original e atribuir o vencedor como _ além de rodar a função sortear jogador
    for(var i=0; i<9;i++){
        casas[i].value='_';
        casas[i].style.color='white';
        casas[i].style.backgroundColor='white';
    }
    vencedor= '_';
    sortearJogador();
});
var sortearJogador = function(){//criação da função sortear jogador, onde o sistemna vai escolher um numero randomico 
    //entre 0 e 1 e se for igual a 0 é o jogador X e se for igual a 1 é o jogador O.
    if(Math.floor(Math.random() * 2)==0){
        jogador = "X";
        label_jogador.innerText="X";
        label_jogador.style.color='#F00';
    }else{
        jogador = "O";
        label_jogador.innerText="O";
        label_jogador.style.color='#00F';
    }
}
sortearJogador();
var trocarJogador = function(){//função criada para trocar o jogador, na teoria é a mesma logia que na função acima 
    //com a diferença que o valor não é escolido aleatóriamente e sim estando dentro de dois valores (X ou O)
    if(jogador == 'X'){
        jogador='O';
        label_jogador.innerText='O';
        label_jogador.style.color='#00F'
    }else{
        jogador='X';
        label_jogador.innerText='X';
        label_jogador.style.color='#F00';
    }
}
var vitoria = function() {//função criada para definir a vitoria do jogador, onde cada if é uma possibilidade de vitória
    //onde caso a condição for verdade as determinadas casas serão pintadas de verde e e retornara o valor da primeira casa.

    if((casas[0].value==casas[1].value)&&(casas[1].value==casas[2].value) && casas[0].value !='_'){
        casas[0].style.backgroundColor='#0F0';
        casas[1].style.backgroundColor='#0F0';
        casas[2].style.backgroundColor='#0F0';

        return casas[0].value;
    }else if((casas[3].value==casas[4].value)&&(casas[4].value==casas[5].value) && casas[3].value !='_'){
        casas[3].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';

        return casas[3].value;  
    }else if((casas[6].value==casas[7].value)&&(casas[7].value==casas[8].value) && casas[6].value !='_'){
        casas[6].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[6].value;  
    }else if((casas[0].value==casas[3].value)&&(casas[3].value==casas[6].value) && casas[0].value !='_'){
        casas[0].style.backgroundColor='#0F0';
        casas[3].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        return casas[0].value;  
    }else if((casas[1].value==casas[4].value)&&(casas[4].value==casas[7].value) && casas[1].value !='_'){
        casas[1].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';

        return casas[1].value;  
    }else if((casas[2].value==casas[5].value)&&(casas[5].value==casas[8].value) && casas[2].value !='_'){
        casas[2].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[2].value;  
    }else if((casas[0].value==casas[4].value)&&(casas[4].value==casas[8].value) && casas[0].value !='_'){
        casas[0].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[0].value;  
    }else if((casas[2].value==casas[4].value)&&(casas[4].value==casas[6].value) && casas[2].value !='_'){
        casas[2].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        return casas[2].value;  
    }

    return '_';
    
}