
const sonhos = [
"DAR A BUNDA PARA O RENE",
"ME ASSUMIR GAY",
"MAMAR MUITOS PINTOS",
"ME TORNAR UM YOUTUBER",
"GANHAR MINHA GUITARRA",
"ME CASAR",
"TER FILHOS",
"TER CARRO",
"TER MOTO",
"TER MINHA MANSÃO",
"MUDAR MINHA FAMÍLIA DE VIDA",
"CONHECER MEUS ÍDOLOS",
"CHEGAR A 100K DE INSCRITOS",
"CHEGAR A 1M DE INSCRITOS",
"SER RICO",
"TER MEU SETUP GAMER",
"APRENDER A LUTAR",
"FAZER ACADEMIA",
"APRENDER CALISTENIA",
"NAMORAR",
"TER UM JETSKI",
"TER UM GALGO ARGENTINO OU AMERICANO",
"VIAJAR PARA OUTROS PAÍSES",
"TER UMA FAZENDA",
"TER UMA LANCHA",
"TER UMA KATANA DE VERDADE"
];

const lista = document.getElementById("lista");
let dados = JSON.parse(localStorage.getItem("sonhos")) || [];

function salvar() {
    localStorage.setItem("sonhos", JSON.stringify(dados));
    atualizarProgresso();
}

function atualizarProgresso() {
    const feitos = dados.filter(v => v).length;
    document.getElementById("progresso").innerText = 
        `Progresso: ${feitos} / ${sonhos.length} sonhos realizados`;
}

sonhos.forEach((sonho, i) => {
    const li = document.createElement("li");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = dados[i] || false;

    if(check.checked) li.classList.add("checked");

    check.addEventListener("change", () => {
        dados[i] = check.checked;
        li.classList.toggle("checked");
        salvar();
    });

    li.appendChild(check);
    li.appendChild(document.createTextNode(sonho));
    lista.appendChild(li);
});

atualizarProgresso();
