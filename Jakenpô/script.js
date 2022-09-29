const label_venc = document.getElementById('venc_label');
const pedra_btn = document.getElementById('pedra');
const papel_btn = document.getElementById('papel');
const tesoura_btn = document.getElementById('tesoura');
const reiniciar_btn = document.getElementById('reinicia')

var vencedor = '_';
var jogador = 3 ;
var computador = Math.floor(Math.random() *(3 - 0) + 0)
 
    pedra_btn.addEventListener('click',(event)=>{
        if( vencedor == '_'){
        jogador = 0;
        vencedor = vitoria();
        if(vencedor != '_'){
            if(vencedor == 'empatou'){
                label_venc.innerHTML=`O jogo Empatou clique em Reiniciar`;
            }else if(vencedor == 'Jogador'){
                label_venc.innerHTML=`Parabéns o vencedor é o <span id="jg">${vencedor}</span>! &#x1F3C6`;
            }else if(vencedor == 'Computador'){
            label_venc.innerHTML=`Parabéns o vencedor é o <span id="com">${vencedor}</span>! &#x1F3C6`;
            }
        }
    }
    });
    papel_btn.addEventListener('click',(event)=>{
        if( vencedor == '_'){
        jogador = 1;
        vencedor = vitoria();
        if(vencedor != '_'){
            if(vencedor == 'empatou'){
                label_venc.innerHTML=`O jogo Empatou clique em Reiniciar`;
            }else if(vencedor == 'Jogador'){
                label_venc.innerHTML=`Parabéns o vencedor é o <span id="jg">${vencedor}</span>! &#x1F3C6`;
            }else if(vencedor == 'Computador'){
            label_venc.innerHTML=`Parabéns o vencedor é o <span id="com">${vencedor}</span>! &#x1F3C6`;
            }
        }
    }
    });
    tesoura_btn.addEventListener('click',(event)=>{
        if( vencedor == '_'){
        jogador = 2;
        vencedor = vitoria();
        if(vencedor != '_'){
            if(vencedor == 'empatou'){
                label_venc.innerHTML=`O jogo Empatou clique em Reiniciar`;
            }else if(vencedor == 'Jogador'){
                label_venc.innerHTML=`Parabéns o vencedor é o <span id="jg">${vencedor}</span>! &#x1F3C6`;
            }else if(vencedor == 'Computador'){
            label_venc.innerHTML=`Parabéns o vencedor é o <span id="com">${vencedor}</span>! &#x1F3C6`;
            }
        }
    }
    });
    reiniciar_btn.addEventListener('click',(event)=>{
        jogador = 3;
        vencedor = '_';
        computador = Math.floor(Math.random() *(3 - 0) + 0);
        label_venc.innerHTML=null;
        console.log(computador);
        
    })
   

var vitoria = function(){
    if(jogador == 0 && computador == 2){
        return vencedor = 'Jogador'
    }else if(jogador == 1 && computador == 0){
        return vencedor = 'Jogador'
    }else if(jogador == 2 && computador == 1){
        return vencedor = 'Jogador'
    }else if(jogador == 0 && computador == 1){
        return vencedor = 'Computador'
    }else if(jogador == 1 && computador == 2){
        return vencedor = 'Computador'
    }else if(jogador == 2 && computador == 0){
        return vencedor = 'Computador';
    }else if(jogador == computador){
        return vencedor = 'empatou';

    }
}

function teste(){
    
    console.log(computador)
}
