//MENU LATERAL

const menu = document.querySelector("[data-menu]");
const menuLateral = document.querySelector("[data-menuLateral]");

function toggleMenu() {
  menuLateral.classList.toggle("ativo");
}
menu.addEventListener("click", toggleMenu);

// ATIVAR MENU LATERAL ATUAL

const itens = document.querySelectorAll("[data-menu-lateral-item]");

function ativarItem(event) {
  const url = location.href; // location.href pega qual o enderenço da pagina atual, o url
  const href = event.href; // aqui eu to pegando o href de todos os links
  if (url.includes(href)) {
    // aqui eu comparo, pra saber se na url atual, tem o href de algum dos links, ou seja, se eu to no link correto
    event.classList.add("ativo"); // aqui eu ativo esse link
  }
}

//ATIVAR CONTATOS PERFIL

const perfilSociais = document.querySelector("[data-perfil-sociais]");
const seta = document.querySelector("[data-seta]");

function mostrarPerfilSociais() {
  perfilSociais.classList.toggle("ativo");
}
seta.addEventListener("click", mostrarPerfilSociais);

itens.forEach(ativarItem);

//ATIVAR BARRA DE PESQUISA

const barraPesquisa = document.querySelector("[data-barra-pesquisa]");
const lupa = document.querySelector("[data-lupa");

function mostrarBarraPesquisa() {
  barraPesquisa.classList.toggle("ativo");
}

lupa.addEventListener("click", mostrarBarraPesquisa);

// SCROLL SUAVE

const links = document.querySelectorAll("[data-suave]");

function scrollSuave(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

links.forEach((link) => {
  link.addEventListener("click", scrollSuave);
});
