/* ------------------------------------
   BASE DE DADOS DOS PETS
------------------------------------ */
const PETS = {
  "luke": {
    especie: "Cachorro",
    idade: "1 ano",
    sexo: "Macho",
    porte: "Médio",
    peso: "11 kg",
    saude: "OK/ Castrado",
    brincadeira: "Correr atrás da bolinha",
    imagem: "https://images.unsplash.com/photo-1612502169027-5a379283f9c0?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  "garfield": {
    especie: "Gato",
    idade: "3 anos",
    sexo: "Macho",
    porte: "Pequeno",
    peso: "5 kg",
    saude: "OK/ Castrado",
    brincadeira: "Se esconder em caixas",
    imagem: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800"
  },
  "sofia": {
    especie: "Cachorro",
    idade: "7 anos",
    sexo: "Fêmea",
    porte: "Grande",
    peso: "25 kg",
    saude: "OK/ Castrada",
    brincadeira: "Passear no parque",
    imagem: "https://images.unsplash.com/photo-1682952644281-f9235cb79d11?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
};

/* ------------------------------------
   VARIÁVEIS GLOBAIS
------------------------------------ */
const cadNome = document.getElementById("cadNome");
const cadEmail = document.getElementById("cadEmail");
const cadSenha = document.getElementById("cadSenha");
const msgCadastroOk = document.getElementById("msgCadastroOk");
const msgCadastroErro = document.getElementById("msgCadastroErro");

const loginEmail = document.getElementById("loginEmail");
const loginSenha = document.getElementById("loginSenha");
const msgLoginErro = document.getElementById("msgLoginErro");


/* ------------------------------------
   FUNÇÕES AUXILIARES DE NAVEGAÇÃO
------------------------------------ */

// Função que esconde todas as subpáginas/conteúdo da home, exceto o header e o container #home
function hideSubsections() {
  document.getElementById("adotePage").style.display = "none";
  document.getElementById("apadrinhePage").style.display = "none";
  document.getElementById("quemSomosNosPage").style.display = "none";
  document.getElementById("detalhesPage").style.display = "none"; // Garante que a página de detalhes esteja sempre escondida
  document.getElementById("mainContent").style.display = "none";

  // Esconde banner e features
  const banner = document.querySelector(".hp-banner");
  const features = document.querySelector(".hp-features");
  if (banner) banner.style.display = "none";
  if (features) features.style.display = "none";
}

function abrirCadastro() {
  document.getElementById("login").style.display = "none";
  document.getElementById("cadastro").style.display = "flex";
  document.getElementById("home").style.display = "none";

  msgCadastroOk.style.display = "none";
  msgCadastroErro.style.display = "none";
}

function abrirLogin() {
  document.getElementById("login").style.display = "flex";
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("home").style.display = "none";

  msgLoginErro.style.display = "none";
}

function showHome() {
  document.getElementById("login").style.display = "none";
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("home").style.display = "block";
  voltarParaHomePrincipal(); // Garante que a tela inicial seja carregada
  carregarThumbs();
}

function voltarParaHomePrincipal() {
  // 1. Esconde TODAS as subpáginas
  hideSubsections();

  // 2. LIMPA E RESTAURA o conteúdo original de boas-vindas na seção principal (#mainContent)
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = `
        <h3 id="welcomeText">Bem-vindo(a)!</h3>
        <p id="homeHint">A sua visita faz toda a diferença. Aqui você vai mudar a vida de algum animal que precisa de amor e um lar definitivo. Conheça nossos bichinhos, marque uma visita ou comece hoje mesmo a apadrinhar!</p>
    `;

  // 3. Mostra o conteúdo inicial da Home (o texto de boas-vindas)
  mainContent.style.display = "block";

  // 4. Mostra as seções escondidas anteriormente (Banner e Faixa Lilás)
  document.querySelector(".hp-banner").style.display = "flex";
  document.querySelector(".hp-features").style.display = "flex";
}

/* ------------------------------------
   SEÇÕES DE NAVEGAÇÃO PRINCIPAL
------------------------------------ */

function showSection(sec) {
  hideSubsections(); // Esconde todas as subseções primeiro

  if (sec === "adote") {
    abrirAdote();
  } else if (sec === "apadrinhe") {
    abrirApadrinhe();
  } else if (sec === "sobre") {
    abrirQuemSomosNos();
  }
}

function abrirAdote() {
  hideSubsections();
  document.getElementById("adotePage").style.display = "block";
}

function abrirApadrinhe() {
  hideSubsections();
  document.getElementById("apadrinhePage").style.display = "block";
}

function abrirQuemSomosNos() {
  hideSubsections();
  document.getElementById("quemSomosNosPage").style.display = "block";
}


/* ------------------------------------
   LÓGICA DETALHES DO PET (CORRIGIDO)
------------------------------------ */

// FUNÇÃO ESSENCIAL: Permite voltar da tela de Detalhes para a tela de Adote
function voltarParaAdote() {
  document.getElementById("detalhesPage").style.display = "none";
  document.getElementById("adotePage").style.display = "block";
}

function abrirDetalhesPet(petId) {
  hideSubsections();

  const pet = PETS[petId];

  if (!pet) return;

  // Estrutura HTML revisada para incluir o link no botão "FORMULÁRIO"
  const detalhesHTML = `
        <div style="
            background: #f3ebff; 
            color: #222; 
            padding: 30px; 
            border-radius: 12px; 
            width: 100%; 
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        ">
            <h2 style="text-align: center; margin-bottom: 20px; color:#5a0ea1;">CONHEÇA O(A) ${petId.toUpperCase()}</h2>
            
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 30px;">
                
                <div style="flex-shrink: 0; width: 300px; text-align: center;">
                    <img src="${pet.imagem}" alt="Foto de ${petId}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
                    
                    <a href="https://forms.gle/KVy1sKb4mPVKVcGi8" target="_blank" style="text-decoration: none;">
                        <div style="
                            background: #7a1cc4; 
                            color: white; 
                            padding: 25px 15px;
                            border-radius: 12px; 
                            font-size: 24px; 
                            font-weight: bold; 
                            cursor: pointer;
                            margin-top: 10px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                        ">
                            FORMULÁRIO
                        </div>
                    </a>
                    
                    <p style="margin: 5px 0 0; font-size: 14px; color:#7a1cc4; font-weight:600;">Preencha o formulário para adoção!</p>
                </div>

                <div style="flex-grow: 1; font-size: 18px; line-height: 1.8;">
                    <p><strong>ESPÉCIE:</strong> ${pet.especie}</p>
                    <p><strong>IDADE:</strong> ${pet.idade}</p>
                    <p><strong>SEXO:</strong> ${pet.sexo}</p>
                    <p><strong>PORTE:</strong> ${pet.porte}</p>
                    <p><strong>PESO:</strong> ${pet.peso}</p>
                    <p><strong>SAÚDE:</strong> ${pet.saude}</p>
                    <p><strong>GOSTA DE:</strong> ${pet.brincadeira}</p>
                </div>
            </div>
        </div>
    `;

  document.getElementById("detalhesContent").innerHTML = detalhesHTML;
  document.getElementById("detalhesPage").style.display = "block";
}

/* ------------------------------------
   LÓGICA DE USUÁRIOS
------------------------------------ */
function cadastrar() {
  let nome = cadNome.value.trim();
  let email = cadEmail.value.trim();
  let senha = cadSenha.value.trim();

  msgCadastroOk.style.display = "none";
  msgCadastroErro.style.display = "none";

  if (!nome || !email || !senha) {
    msgCadastroErro.style.display = "block";
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  usuarios.push({ nome, email, senha });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  msgCadastroOk.style.display = "block";

  cadNome.value = "";
  cadEmail.value = "";
  cadSenha.value = "";

  // Abre login automaticamente
  abrirLogin();
}

function fazerLogin() {
  let email = loginEmail.value.trim();
  let senha = loginSenha.value.trim();

  msgLoginErro.style.display = "none";

  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  let encontrado = usuarios.find(u => u.email === email && u.senha === senha);

  if (!encontrado) {
    msgLoginErro.style.display = "block";
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(encontrado));

  showHome();
}

function logout() {
  localStorage.removeItem("usuarioLogado");
  abrirLogin();
}

function openPerfil() {
  hideSubsections();
  const user = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");

  if (!user.nome) return;

  document.getElementById("mainContent").innerHTML = `
        <h2 style="color:#7a1cc4; margin-bottom:15px;">👤 Meu Perfil</h2>
        <p style="font-size:18px;"><b>Nome:</b> ${user.nome}</p>
        <p style="font-size:18px;"><b>Email:</b> ${user.email}</p>
    `;
  document.getElementById("mainContent").style.display = "block";
}

/* ------------------------------------
   THUMBS
------------------------------------ */
function carregarThumbs() {
  const imgs = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1690335466277-7968a05daa74?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1611170078485-6c1c9ca31936?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1710346963816-9f2e6fb4b768?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const thumbsDiv = document.getElementById("thumbsRow");
  thumbsDiv.innerHTML = "";

  imgs.forEach(src => {
    let div = document.createElement("div");
    div.className = "thumb";

    let img = document.createElement("img");
    img.src = src + "&w=200&h=200&fit=crop";

    div.appendChild(img);
    thumbsDiv.appendChild(div);
  });
}

/* ------------------------------------
   INÍCIO DA APLICAÇÃO
------------------------------------ */
(function init() {
  // Garante que todos comecem na tela de login
  localStorage.removeItem("usuarioLogado");
  abrirLogin();
})();