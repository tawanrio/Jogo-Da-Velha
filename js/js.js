
var a = document.querySelectorAll('.table'); //insere o tabuleiro no vetor 'a';

var marcadorJ1;
var marcadorJ2;
var vez = true;
var pontoJ1 = 0;
var pontoJ2 = 0;
var j1 = '';
var retConfirm;
var j2 = '';




chamadaEventos();


//adiciona os nomes dos jogadores caso desejado
function inicio(){
	//capMarcador();
	capNome();
	vezJogador();
	inseNomeJ();
	
}

//função que contem todos os eventos
function chamadaEventos(){
	
	let primeiraTela = document.querySelector('#principal');
	let segundaTela = document.querySelector('#personalizar');
	let terceiraTela = document.querySelector('#jogo');
	let textoJogodaVelha = document.querySelector('h1');

	//Adiciona o evento click , verifica a vez do jogador , insere o marcadorJ1 ou marcadorJ2 e chama a função verificador()
	a.forEach(quad =>{quad.addEventListener('click', insereJogada)});

	//Adiciona o evento click e limpa o tabuleiro
	document.querySelector('#limpar').addEventListener('click', limpar);

	//Adiciona o evento click , e reseta o jogo 
	document.querySelector('#novoJogo').addEventListener('click', reset);

	//Adiciona evento click ao botao Jogar na tela 1 para passar para tela 2
document.querySelector('#btnJogar').addEventListener('click', function(){
		textoJogodaVelha.style.direction = 'none'
		primeiraTela.style.display = 'none';
		segundaTela.style.display = 'block';
		terceiraTela.sty
	})
	
document.querySelector('#btnVoltarT2').addEventListener('click', function(){
		document.querySelector('h1').style.direction = 'block'
		primeiraTela.style.display = 'block';
		segundaTela.style.display = 'none';
	})

document.querySelector('#btnInicioT2').addEventListener('click', function(){
		inicio();
		if(j1 != '' && j2 != ''){
			segundaTela.style.display = 'none';
			terceiraTela.style.display = 'block';
		}else{
			Alert.cod('Por favor, Insira os nomes dos Jogadores!')
		}
	
	  	   
	})

document.querySelector('#btnVoltarT3').addEventListener('click', function(){
		confirm.cod("Tem certeza que deseja voltar ao Menu?")
		
		if(retConfirm == true){
		textoJogodaVelha.style.direction = 'block'
		primeiraTela.style.display = 'block';
		terceiraTela.style.display = 'none';
		}
		limpar();
	})

}
//captura o nome dos jogadores
function capNome(){
	j1 = document.querySelector('#player1').value;
	j2 = document.querySelector('#player2').value;
}
//captura o marcador dos jogadores
function capMarcador(){
	marcadorJ1 = document.querySelector('input[name="tipoMarcadorJ1"]:checked').value
	marcadorJ2 = document.querySelector('input[name="tipoMarcadorJ2"]:checked').value
}

function inseNomeJ(){
	document.getElementById('nomeJ1').innerText = j1;
	document.getElementById('nomeJ2').innerText = j2;
}
//Mostra de quem é a vez de jogar
function vezJogador(){
	console.log(marcadorJ1 + marcadorJ2)
	if(vez == true){
		document.getElementById('mostraJ').innerText = marcadorJ1
	}else{
	
		document.getElementById('mostraJ').innerText = marcadorJ2
	}
}

//verifica a vez do jogador , insere o marcadorJ1 ou marcadorJ2 e chama a função verificador
function insereJogada(){
	if(a[this.id].innerText == ''){	
		if(vez == true){	
			this.innerText = marcadorJ1;
			vez = false;		
		}else{			
			this.innerText = marcadorJ2;
			vez = true;
		}					
	}
	verificador();
	vezJogador();
}

//verifica se há algum vencedor ou velha
function verificador(){
	//verifica se X venceu e chama função vencedor
	if(a[0].innerText == marcadorJ1 && a[1].innerText == marcadorJ1 && a[2].innerText == marcadorJ1){ vencedor()};
	if(a[3].innerText == marcadorJ1 && a[4].innerText == marcadorJ1 && a[5].innerText == marcadorJ1){ vencedor()};
	if(a[6].innerText == marcadorJ1 && a[7].innerText == marcadorJ1 && a[8].innerText == marcadorJ1){ vencedor()};
	if(a[0].innerText == marcadorJ1 && a[3].innerText == marcadorJ1 && a[6].innerText == marcadorJ1){ vencedor()};
	if(a[1].innerText == marcadorJ1 && a[4].innerText == marcadorJ1 && a[7].innerText == marcadorJ1){ vencedor()};
	if(a[2].innerText == marcadorJ1 && a[5].innerText == marcadorJ1 && a[8].innerText == marcadorJ1){ vencedor()};
	if(a[0].innerText == marcadorJ1 && a[4].innerText == marcadorJ1 && a[8].innerText == marcadorJ1){ vencedor()};
	if(a[6].innerText == marcadorJ1 && a[4].innerText == marcadorJ1 && a[2].innerText == marcadorJ1){ vencedor()};
	
	//verifica se O venceu e chama função vencedor
	if(a[0].innerText == marcadorJ2 && a[1].innerText == marcadorJ2 && a[2].innerText == marcadorJ2){ vencedor()};
	if(a[3].innerText == marcadorJ2 && a[4].innerText == marcadorJ2 && a[5].innerText == marcadorJ2){ vencedor()};
	if(a[6].innerText == marcadorJ2 && a[7].innerText == marcadorJ2 && a[8].innerText == marcadorJ2){ vencedor()};
	if(a[0].innerText == marcadorJ2 && a[3].innerText == marcadorJ2 && a[6].innerText == marcadorJ2){ vencedor()};
	if(a[1].innerText == marcadorJ2 && a[4].innerText == marcadorJ2 && a[7].innerText == marcadorJ2){ vencedor()};
	if(a[2].innerText == marcadorJ2 && a[5].innerText == marcadorJ2 && a[8].innerText == marcadorJ2){ vencedor()};
	if(a[0].innerText == marcadorJ2 && a[4].innerText == marcadorJ2 && a[8].innerText == marcadorJ2){ vencedor()};
	if(a[6].innerText == marcadorJ2 && a[4].innerText == marcadorJ2 && a[2].innerText == marcadorJ2){ vencedor()};


	
	//função velha
	velha();
}
	
//imprime o nome do vencedor , adiciona a pontuação e limpa o tabuleiro
function vencedor(){
	if(vez == false){
		Alert.cod('Vencedor: ' + j1);
		pontoJ1 = pontoJ1 + 1;     
        vez = true;       
        
		document.getElementById('pontoJ1').innerText = pontoJ1;
	}
    else{
		Alert.cod('Vencedor: ' + j2)
		pontoJ2 = pontoJ2 + 1;      
        vez = false;       
		document.getElementById('pontoJ2').innerText = pontoJ2;
	}
	limpar()
}

// Verifica se deu velha e limpa o tabuleiro
function velha(){
    if(a[0].innerText != '' && a[1].innerText != '' && a[2].innerText != '' && a[3].innerText != '' && a[4].innerText != '' 
	&& a[5].innerText != '' && a[6].innerText != '' && a[7].innerText != '' && a[8].innerText != '' ){
		Alert.cod('Velha');
        limpar()	
    }
}
//limpa o tabuleiro
function limpar(){
	for(var i = 0; i<=8 ; i++){
		a[i].innerText = '';
	}		
}
function reset(){
	confirm.cod('Tem certeza que deseja iniciar novo jogo? <br> Obs: Isso Resetara os Pontos ' , callback)
	if(retConfirm == true){	
		pontoJ1 = 0;
		pontoJ2 = 0;
		document.getElementById('pontoJ1').innerText = pontoJ1;
		document.getElementById('pontoJ2').innerText = pontoJ2;
		limpar();
		inicio();
		}	
}
var Alert = new novoAlert(); // Cria novo alerta
var confirm = new novoConfirm();



// nova caixa de alerta
function novoAlert(){
	this.cod = function(texto){
		novoAlert = document.querySelector('#box');
		novoAlert.style.left = (window.innerWidth/2) - (569 * .5)+"px";
		novoAlert.style.top = '250px';
		novoAlert.style.display = 'block';
		document.querySelector('#boxHead').innerHTML = "Atenção";
		document.querySelector('#boxBody').innerHTML = texto;
		document.querySelector('#boxFoot').innerHTML = '<div class="botaoBox" onclick="Alert.ok()">OK</div>'	
		
	}

	this.ok = function(){
		document.querySelector('#box').style.display = 'none';
	}
}

function novoConfirm(){
	this.cod = function(texto){
		const btnConfirmar = document.createElement("button");
		btnConfirmar.textContent = 'Confirmar';
		btnConfirmar.addEventListener('click',	function(){confirm.confirmar()})
		btnConfirmar.className = 'botaoBox';

		const btnCancelar = document.createElement("button");
		btnCancelar.textContent = 'Cancelar';
		btnCancelar.addEventListener('click', () => {confirm.cancelar()})
		btnCancelar.className = 'botaoBox';

		novoConfirm = document.querySelector('#box');
		novoConfirm.style.left =  (window.innerWidth/2) - (569 * .5)+"px";
		novoConfirm.style.top = '250px';
		novoConfirm.style.display = 'block';
		document.querySelector('#boxHead').innerHTML = "Atenção";
		document.querySelector('#boxBody').innerHTML = texto;
		document.querySelector('#boxFoot').innerHTML = '';
		document.querySelector('#boxFoot').insertAdjacentElement("beforeend",btnConfirmar);
		document.querySelector('#boxFoot').insertAdjacentElement("beforeend",btnCancelar);
		
		callback();

		//document.querySelector('#boxFoot').innerHTML = '<div class="botaoBox" onclick="confirm.confirmar()">Confirmar</div> <div class="botaoBox" onclick="confirm.cancelar()">Cancelar</div>'  		
	
					
	}

	this.confirmar = function(){
		retConfirm = true;
		document.querySelector('#box').style.display = 'none';
		
	}
	this.cancelar = function(){
		retConfirm = false;
		document.querySelector('#box').style.display = 'none';
	
	}
}


	/*function newbutton(text){
		const $body = document.querySelector('body');
		const $button = document.createElement("button");
		$button.textContent = text;

		$body.insertAdjacentElement("beforeend", $button);
 
		return $button;
	}

	const login = newbutton("login");

	login.addEventListener('click', function(){
		alert('teste')
	
	})*/












	