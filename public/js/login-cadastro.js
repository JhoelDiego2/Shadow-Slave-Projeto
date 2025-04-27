// procedimento para quando ele digitar mudar a cor mas sera mudado
function digitando_cad(x) {
    var texto_x = document.getElementById(`texto_${x}`);
    var ipt_x = document.getElementById(`ipt_${x}`);
    texto_x.style.color = "#7aa7a4";
    texto_x.style.position = "relative";
    texto_x.style.transform = "translate(-2.4vw, -6vh)";
    texto_x.style.transition = "0.7s ease-in-out";
    ipt_x.style.borderBottom = "solid 4px #7aa7a4";
}
function digitando_login(x) {
    var texto_x = document.getElementById(`texto_${x}`);
    var ipt_x = document.getElementById(`ipt_${x}`);
    texto_x.style.color = "black";
    texto_x.style.position = "relative";
    texto_x.style.transform = "translate(-2.4vw, -6vh)";
    texto_x.style.transition = "0.7s ease-in-out";
    ipt_x.style.borderBottom = "solid 4px black";
}

var senha = '';
var email = '';
var senha_login = '';
var email_login = ''



  
// efeitos da navbar  para as novas pagiams na qual eu agrego uma clase

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.menu');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// efeito de aparecer aos poucos aso descer
document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.fade-in-scroll');

    const observer = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('estado_visivel');
                observer.unobserve(entrada.target);
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px', // Ajuste conforme necessário
    });

    elementos.forEach(el => observer.observe(el));
});


// funções do cadastro

function cadastrar() {
    // variaveis das input
    var nome_usuario = ipt_nome_usuario.value
    var email = ipt_email.value    
    var senha = ipt_senha.value
    var conf_senha = ipt_conf_senha.value

    // Variaveis booleanas para  validar a senha
    var valido = false;
    var contem_Maiuscula = false;
    var contem_Minuscula = false;
    var contem_Numero = false;
    var contem_Especial = false;

    // regras para a senha 
    var caracteresEspeciais = "!@#$%^&*()_+-=[]{};':|,.<>/?";
    var numeros = "0123456789";
    var letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    var letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // variaveis para o for
    var i = 0
    var caracter = 0


    // varre a string 'senha' aplicando a verificação de todas as regras da senha 
    for (i; i < senha.length; i++) {
        caracter = senha[i];

        if (letrasMaiusculas.includes(caracter)) {
            contem_Maiuscula = true;

        } 
        if (letrasMinusculas.includes(caracter)) {
            contem_Minuscula = true;

        } 
         if (numeros.includes(caracter)) {
            contem_Numero = true;

        } 
         if (caracteresEspeciais.includes(caracter)) {
            contem_Especial = true;

        }
    }

    while (valido == false) {
        if (senha == '' || nome_usuario == '' || cnpj == '' || telefone == '') {
            alert("Todos os campos devem ser preenchidos")
            break
        }
         if (senha.length < 10) {
            alert("A senha necessita ter 10 ou mais caracteres")
            break

        }
         if (!contem_Maiuscula) {
            alert('A senha deve conter pelo menos uma letra maiúscula.');
            break
        } 
        if (!contem_Minuscula) {
            alert('A senha deve conter pelo menos uma letra minúscula.');
            break
        } 
        if (!contem_Numero) {
            alert('A senha deve conter pelo menos um número.');
            break
        }
         if (!contem_Especial) {
            alert('A senha deve conter pelo menos um caractere especial (ex: !@#$%).');
            break
        }
         if (ipt_senha.value!=ipt_senha2.value){
            alert('A senha e a confirmação devem coincidir')
            break
        }
         if (contem_Maiuscula && contem_Especial && contem_Minuscula && contem_Numero && (senha == conf_senha)) {
             valido = true
        }
        


    }


    //verifica se os inputs estao vazios
   


    if (valido) {


        senha_global = ipt_senha.value;
        email_global = ipt_email.value;

        // armazena localmente:
        localStorage.setItem('medsense_email', email_global);
        localStorage.setItem('medsense_password', senha_global);

        window.location.href = 'login.html'; 
    }

}

// Login


function login(){
    var senhalogin = ipt_senhaLogin.value;
    var emaillogin = ipt_emailLogin.value; 
    
    var storedEmail = localStorage.getItem('usuario_email');
    var storedPassword = localStorage.getItem('usuario_password'); 

    console.log("Tentando logar com:");
    console.log("Email digitado:", emaillogin);
    console.log("Senha digitada:", senhalogin);
    console.log("Email armazenado:", storedEmail);
    console.log("Senha armazenada:", storedPassword);




    if (!storedEmail || !storedPassword) {
        alert('Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.');
    }    


    if (senhalogin != storedPassword) { 
        alert('Senha incorreta');
    } else if (emaillogin != storedEmail) { 
        alert('Email incorreto');
    } else {
        alert('login feito')
        //window.location.href = 'game.html';
    }
}

