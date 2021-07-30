var a = document.querySelectorAll('.table'); //insere o tabuleiro no vetor 'a';

var marcadorJ1;
var marcadorJ2;
var vez = true;
var pontoJ1 = 0;
var pontoJ2 = 0;
var j1 = '';
var retConfirm;
var j2 = '';
var random
var b = [];
var c = random -1;
var time;
var jogoSolo;
var primeiraTela = document.querySelector('#principal');
var segundaTela = document.querySelector('#personalizar');
var terceiraTela = document.querySelector('#jogo');
var textoJogodaVelha = document.querySelector('h1');
var telaCreditos = document.querySelector('#creditos');

var Alert = new novoAlert(); // Cria novo alert personalizado
var confirm = new novoConfirm(); // cria novo confirm personalizado

chamadaEventos();
chamaTela2();
// Captura nome e marcador e insere na tela 3
function inicio2J(){
	capMarcador();
	capNome();
	vezJogador();
	inseNomeJ();
}
function inicio1J(){
	capMarcador1J();
	capNome1J();
	vezJogador();
	inseNomeJ1J();
}

//função que contem todos os eventos
function chamadaEventos(){
	
	
	//Adiciona o evento click , verifica a vez do jogador , insere o marcadorJ1 ou marcadorJ2 e chama a função verificador()
	a.forEach(quad =>{quad.addEventListener('click', function(){
		if(jogoSolo == true){
			insereJogada1J();
		}else{
			insereJogada();
		}
	})});

	//Adiciona o evento click e limpa o tabuleiro
	document.querySelector('#limpar').addEventListener('click', limpar);

	
	//Adiciona evento click ao botao Jogar na tela 1 para passar para tela 2
document.querySelector('#btn1Jogar').addEventListener('click', function(){
		chamaTela2();
		jogoSolo = true;
		console.log(jogoSolo);
		vsCpu();
		marcadorJ2 = 'O';
		j2 = 'CPU'
		document.getElementById('nomeJ2').innerText = j2;
	

		//chamaTela3();
		Alert.cod('Insira seu nome e escolha seu marcadore!')
	})
	//Adiciona evento click ao botao Jogar na tela 1 para passar para tela 2
document.querySelector('#btn2Jogar').addEventListener('click', function(){
	chamaTela2();
	vs2J();
	jogoSolo = false;
	console.log(jogoSolo);
	//chamaTela3();
	Alert.cod('Insira o nome dos jogadores e escolha seus marcadores!')
})
	//volta para a tela 1
document.querySelector('#btnVoltarT2').addEventListener('click', function(){
		chamaTela1();
		//chamaTela3();
	})
	//volta para a tela 1
	document.querySelector('#btnVoltarCreditos').addEventListener('click', function(){
		chamaTela1();
		chamaTela3();
	})
	// abre a tela de creditos
	document.querySelector('#btnCreditos').addEventListener('click', function(){
		chamaTelaCreditos();
		chamaTela3();
	})
	//verifica se os nomes e marcadores foram inseridos e abre a tela 3
document.querySelector('#btnInicioT2').addEventListener('click', function(){
		inicio2J();
		
		if(j1 != '' && j2 != ''){
			chamaTela3();
		}else{
			Alert.cod('Por favor, Insira os nomes dos Jogadores!')
			}
		})
	document.querySelector('#btnInicioT21J').addEventListener('click', function(){
			inicio1J();
			
			if(j1 != ''){
				chamaTela3();
			
				console.log(j2)
				chamaSetInterval();
			}else{
				Alert.cod('Por favor, Insira seu nome!')
				}
			})
		//volta para tela 1 , após confirmação
document.querySelector('#btnVoltarT3').addEventListener('click', function(){
		confirm.cod("Tem certeza que deseja voltar ao Menu?", function(){
			if(retConfirm == true){
				zeraJogo();
				chamaTela1();
				}
			})			
		})
//Adiciona o evento click , e reseta o jogo 
document.querySelector('#novoJogo').addEventListener('click', function(){
	confirm.cod('Tem certeza que deseja iniciar novo jogo? <br> Isto Resetara os Pontos', function(){
		if(retConfirm == true){
			reset();
		}
	});
});		
document.getElementById('ia').addEventListener('click', inteligenciaArt)
}

function vsCpu(){
	document.getElementById('ladoA').style.margin = 'auto';
	document.getElementById('ladoB').style.display = 'none';
	//marcadorJ2 = document.querySelector('input[name="tipoMarcadorJ2"]:checked').value = 'O'
	document.querySelector('#player2').value = 'CPU';
	document.querySelector('#btnInicioT21J').style.display = 'block';
	document.querySelector('#btnInicioT2').style.display = 'none';

}
function vs2J(){
	document.getElementById('ladoA').style.margin = '';
	document.getElementById('ladoB').style.display = 'block';
	document.querySelector('#btnInicioT2').style.display = 'block';
	document.querySelector('#btnInicioT21J').style.display = 'none';
}

function inteligenciaArt(){

	random = Math.floor(Math.random() * 9)
	
	if(b.includes(0) == true && b.includes(1) == true && b.includes(2) == true && b.includes(3) == true && b.includes(4) == true 
	&& b.includes(5) == true && b.includes(6) == true && b.includes(7) == true && b.includes(8) == true){
		

	}else{
		while(b.includes(random) == true){
			random = Math.floor(Math.random() * 9)
		}
		b.push(random)
		console.log(b);
		a[random].innerText = marcadorJ2;
		vez = true;
	verificador();
	vezJogador();
		
	}


	/*
	while(b.includes(random) == true){

		if(b.includes(0) == true && b.includes(1) == true && b.includes(2) == true && b.includes(3) == true && b.includes(4) == true 
		&& b.includes(5) == true && b.includes(6) == true && b.includes(7) == true && b.includes(8) == true){
		break;

	}else{
		random = Math.floor(Math.random() * 9)
	}
}
if(b.includes(0) == true && b.includes(1) == true && b.includes(2) == true && b.includes(3) == true && b.includes(4) == true 
&& b.includes(5) == true && b.includes(6) == true && b.includes(7) == true && b.includes(8) == true){
	
	console.log(b)
}else{
	b.push(random)

		console.log(random);
		console.log(b + 'fora while');
		console.log(b)
}
	*/	


}




function chamaTelaCreditos(){
	textoJogodaVelha.style.display = 'none';
	primeiraTela.style.display = 'none';
	segundaTela.style.display = 'none';
	terceiraTela.style.display = 'none';
	telaCreditos.style.display = 'block';
}
function chamaTela1(){
	textoJogodaVelha.style.display = 'block'
	primeiraTela.style.display = 'block';
	segundaTela.style.display = 'none';
	telaCreditos.style.display = 'none';
	terceiraTela.style.display = 'none';
	}
function chamaTela2(){
		textoJogodaVelha.style.display = 'none';
		primeiraTela.style.display = 'none';
		telaCreditos.style.display = 'none';
		segundaTela.style.display = 'block';
		terceiraTela.style.display = 'none';
	}
function chamaTela3(){
		textoJogodaVelha.style.display = 'none';
		primeiraTela.style.display = 'none';
		segundaTela.style.display = 'none';
		telaCreditos.style.display = 'none';
		terceiraTela.style.display = 'block';
}
//captura o nome dos jogadores
function capNome(){
	j1 = document.querySelector('#player1').value;
	j2 = document.querySelector('#player2').value;
}
function capNome1J(){
	j1 = document.querySelector('#player1').value;
	
}
//captura o marcador dos jogadores
function capMarcador(){
	marcadorJ1 = document.querySelector('input[name="tipoMarcadorJ1"]:checked').value
	marcadorJ2 = document.querySelector('input[name="tipoMarcadorJ2"]:checked').value
	
}
function capMarcador1J(){
	marcadorJ1 = document.querySelector('input[name="tipoMarcadorJ1"]:checked').value
	
}
//insere o nome na tela 3
function inseNomeJ(){
	document.getElementById('nomeJ1').innerText = j1;
	document.getElementById('nomeJ2').innerText = j2;
}
function inseNomeJ1J(){
	document.getElementById('nomeJ1').innerText = j1;
	
}
//Mostra de quem é a vez de jogar
function vezJogador(){
	if(vez == true){
		document.getElementById('mostraJ').innerText = marcadorJ1
		document.getElementById('mVez1').style.display = 'block';
		document.getElementById('mVez2').style.display = 'none';
	}else{
		document.getElementById('mostraJ').innerText = marcadorJ2
		document.getElementById('mVez1').style.display = 'none';
		document.getElementById('mVez2').style.display = 'block';
	}
}
//zera completamente o jogo , nome, marcador e pontuação
function zeraJogo(){
	let m1 = document.getElementsByName("tipoMarcadorJ1");
	let m2 = document.getElementsByName("tipoMarcadorJ2");
	limpar();
	reset();
	marcadorJ1 = undefined;
	marcadorJ2 = undefined;
	j1 = undefined
	j2 = undefined
	document.getElementById('player1').value = '';
	document.getElementById('player2').value = '';

   	for(var i=0;i<m1.length;i++)
    	m1[i].checked = false;
	for(var i=0;i<m2.length;i++)
		m2[i].checked = false;

		clearInterval(time);
}
//verifica a vez do jogador , insere o marcadorJ1 ou marcadorJ2 e chama a função verificador

function chamaSetInterval(){
 time = setInterval(function(){	verificador();
	if(vez == false){
		inteligenciaArt()
	}
}, 3000)
}

function insereJogada(){
	if(a[this.id].innerText == ''){	
		if(vez == true){	
			this.innerText = marcadorJ1;
			b.push(parseInt(this.id))
			vez = false;	
						
		}else{		
			this.innerText = marcadorJ2;
			vez = true;			
		}					
	}
	verificador();
	vezJogador();
}

function insereJogada1J(){
		if(a[this.id].innerText == ''){	
			if(vez == true){	
				this.innerText = marcadorJ1;
				b.push(parseInt(this.id))
				vez = false;	
							
			}else{		
				alert('Por favor, Aguarde a sua vez!');		
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
	}	/*for(var i = 0; i<=8 ; i++){
		b[i] = ;
	}*/
	b = [];	
}
//reseta os pontos
function reset(){
	pontoJ1 = 0;
    pontoJ2 = 0;
	document.getElementById('pontoJ1').innerText = pontoJ1;
    document.getElementById('pontoJ2').innerText = pontoJ2;
	vez = true;
	vezJogador();
	limpar();
}
// novo alert personalizado
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
//novo confirm personalizado
function novoConfirm(){
	this.cod = function(texto, callback){
		const btnConfirmar = document.createElement("button");
		btnConfirmar.textContent = 'Confirmar';
		btnConfirmar.addEventListener('click',	function(){confirm.confirmar(callback)})
		btnConfirmar.className = 'botaoBox';
				
		const btnCancelar = document.createElement("button");
		btnCancelar.textContent = 'Cancelar';
		btnCancelar.addEventListener('click', () => {confirm.cancelar(callback)})
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
	}
	this.confirmar = function(callback){
		document.querySelector('#box').style.display = 'none';
		callback(retConfirm = true);
	}
	this.cancelar = function(callback){
		document.querySelector('#box').style.display = 'none';
		callback(retConfirm = false);
	}
}