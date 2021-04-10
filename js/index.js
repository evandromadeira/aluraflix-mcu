var lastOrder = "";
var multiverse = false;
var movies = [];

function buildMovie(id, nomeFilme, anoLanc, imagem, anoCron, linkPag, linkTrailer) {
  var movie = {
    id: id,
    nome: nomeFilme,
    anoLancamento: anoLanc,
    linkImagem: imagem,
    anoCronologico: anoCron,
    linkPagina: linkPag,
    linkTrailer: linkTrailer
  }

  return movie;
}

movies.push(buildMovie(0,
  "Ant-Man",
  2015,
  "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2015,
  "https://www.imdb.com/title/tt0478970?ref_=nv_sr_srsg_0",
  "pWdKf3MneyI"));

movies.push(buildMovie(1,
  "Ant-Man and the Wasp",
  2018,
  "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2017,
  "https://www.imdb.com/title/tt5095030?ref_=nv_sr_srsg_0",
  "UUkn-enk2RU"));

movies.push(buildMovie(2,
  "The Incredible Hulk",
  2008,
  "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2011,
  "https://www.imdb.com/title/tt0800080/?ref_=nv_sr_srsg_0",
  "xbqNb2PFKKA"));

movies.push(buildMovie(3,
  "Iron Man",
  2008,
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2010,
  "https://www.imdb.com/title/tt0371746/?ref_=nv_sr_srsg_0",
  "8ugaeA-nMTc"));

movies.push(buildMovie(4,
  "Iron Man 2",
  2010,
  "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2011,
  "https://www.imdb.com/title/tt1228705?ref_=nv_sr_srsg_0",
  "qsRZghNciIo"));

movies.push(buildMovie(5,
  "Iron Man 3",
  2013,
  "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
  2012,
  "https://www.imdb.com/title/tt1300854?ref_=nv_sr_srsg_0",
  "YLorLVa95Xo"));

movies.push(buildMovie(6,
  "Thor",
  2011,
  "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2011,
  "https://www.imdb.com/title/tt0800369?ref_=nv_sr_srsg_6",
  "JOddp-nlNvQ"));

movies.push(buildMovie(7,
  "Thor: The Dark World",
  2013,
  "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
  2013,
  "https://www.imdb.com/title/tt1981115?ref_=nv_sr_srsg_0",
  "npvJ9FTgZbM"));

movies.push(buildMovie(8,
  "Thor: Ragnarok",
  2017,
  "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2017,
  "https://www.imdb.com/title/tt3501632?ref_=nv_sr_srsg_0",
  "v7MGUNV8MxU"));

movies.push(buildMovie(9,
  "Captain America: The First Avenger",
  2011,
  "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  1943,
  "https://www.imdb.com/title/tt0458339/?ref_=nv_sr_srsg_0",
  "JerVrbLldXw"));

movies.push(buildMovie(10,
  "Captain America: The Winter Soldier",
  2014,
  "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY268_CR1,0,182,268_AL_.jpg",
  2014,
  "https://www.imdb.com/title/tt1843866?ref_=nv_sr_srsg_3",
  "tbayiPxkUMM"));

movies.push(buildMovie(11,
  "Captain America: Civil War",
  2016,
  "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2016,
  "https://www.imdb.com/title/tt3498820?ref_=nv_sr_srsg_0",
  "dKrVegVI0Us"));

movies.push(buildMovie(12,
  "Guardians of the Galaxy",
  2014,
  "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL_.jpg",
  2014,
  "https://www.imdb.com/title/tt2015381?ref_=nv_sr_srsg_0",
  "d96cjJhvlMA"));

movies.push(buildMovie(13,
  "Guardians of the Galaxy 2",
  2017,
  "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2014,
  "https://www.imdb.com/title/tt3896198?ref_=nv_sr_srsg_3",
  "dW1BIid8Osg"));

movies.push(buildMovie(14,
  "Doctor Strange",
  2016,
  "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2016,
  "https://www.imdb.com/title/tt1211837?ref_=nv_sr_srsg_3",
  "Lt-U_t2pUHI"));

movies.push(buildMovie(15,
  "Black Panther",
  2018,
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2017,
  "https://www.imdb.com/title/tt1825683?ref_=nv_sr_srsg_0",
  "dxWvtMOGAhw"));

movies.push(buildMovie(16,
  "Captain Marvel",
  2019,
  "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  1995,
  "https://www.imdb.com/title/tt4154664?ref_=nv_sr_srsg_0",
  "Z1BCujX3pw8"));

movies.push(buildMovie(17,
  "Spider-Man: Homecoming",
  2017,
  "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2016,
  "https://www.imdb.com/title/tt2250912?ref_=nv_sr_srsg_0",
  "39udgGPyYMg"));

movies.push(buildMovie(18,
  "Spider-Man: Far from Home",
  2019.2,
  "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2024,
  "https://www.imdb.com/title/tt6320628?ref_=nv_sr_srsg_0",
  "LFoz8ZJWmPs"));

movies.push(buildMovie(19,
  "The Avengers",
  2012,
  "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2012,
  "https://www.imdb.com/title/tt0848228?ref_=nv_sr_srsg_0",
  "eOrNdBpGMv8"));

movies.push(buildMovie(20,
  "Avengers: Age of Ultron",
  2015,
  "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2015,
  "https://www.imdb.com/title/tt2395427?ref_=nv_sr_srsg_0",
  "tmeOjFno6Do"));

movies.push(buildMovie(21,
  "Avengers: Infinity War",
  2018,
  "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2017,
  "https://www.imdb.com/title/tt4154756?ref_=nv_sr_srsg_0",
  "6ZfuNTqbHE8"));

movies.push(buildMovie(22,
  "Avengers: End Game",
  2019.1,
  "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2018,
  "https://www.imdb.com/title/tt4154796?ref_=nv_sr_srsg_0",
  "TcMBFSGVi1c"));

movies.push(buildMovie(23,
  "Spider-Man: No Way Home",
  2022,
  "https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  2024,
  "https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0",
  "pSre_w5I8ZE"));

ordenar();

function ordenar() {
  var ordem = document.getElementById("ordenarFilmes").value;

  if (ordem == "anoCronologico") { arraySort(movies, "anoLancamento"); }

  arraySort(movies, ordem);

  imprime();
}

function arraySort(vet, x) {
  vet.sort(function compare(a, b) {
    return a[x] < b[x] ? -1 : a[x] > b[x] ? 1 : 0;
  });

  return vet;
}

function imprime() {
  var ordem = document.getElementById("ordenarFilmes").value
  var filtro = ordem == "anoCronologico" ? "Cronologia: " : "Lançamento: "
  var div = document.querySelector('.container-total') //Mapeia o HTML em busca de um elemento com a classe '.container-total'
  div.innerHTML = ""

  for (movie of movies) {
    // Criação dos elementos
    var tagDivFilme = document.createElement('div')
    var tagA = document.createElement('a')
    var tagH2 = document.createElement('h2')
    var tagImage = document.createElement('img')

    // Anexando os elementos filhos aos elementos pais
    tagDivFilme.appendChild(tagH2)
    tagDivFilme.appendChild(tagImage)
    tagA.appendChild(tagDivFilme)
    div.appendChild(tagA)

    tagA.addEventListener('click', printTrailer)
    // Cria um atributo "data-linktrailer" com o trailer do filme
    tagA.dataset.linktrailer = movie.linkTrailer
    tagA.dataset.linkpagina = movie.linkPagina

    tagDivFilme.classList.add('container-movies') //Adiciono uma classe ao elemento

    tagH2.classList.add("center");
    tagH2.innerHTML = movie.nome + "<br>" + filtro + parseInt(ordem == "anoCronologico" ? movie.anoCronologico : movie.anoLancamento)

    tagImage.src = movie.linkImagem
    tagImage.alt = movie.nome
  }
}

function habilitaContainerCadastro() {
  document.querySelector('.container-cadastro').classList.add('ativo')
}

function desabilitaContainerCadastro() {
  let divCadastro = document.querySelector('.container-cadastro')

  divCadastro.classList.remove('ativo')
  limparCamposCadastro()
}

function salvarFilme() {
  var nomeFilme = document.querySelector('#nomeFilme').value
  var anoLancamento = document.querySelector('#anoLancamentoFilme').value
  var imagem = document.querySelector('#linkImagemFilme').value
  var anoCronologico = document.querySelector('#anoCronologiaFilme').value
  var linkPagina = document.querySelector('#linkImdbFilme').value
  var linkTrailer = document.querySelector('#linkTrailerFilme').value

  var validacao = validaDadosCadastro(nomeFilme, anoLancamento, imagem, anoCronologico, linkPagina, linkTrailer)

  if (validacao.status) {
    var trailerLinkEdited = linkTrailer.substr(linkTrailer.indexOf("watch?v=", 0), 19).substr(8, 11)

    movies.push(buildMovie(0, nomeFilme, anoLancamento, imagem, anoCronologico, linkPagina, trailerLinkEdited))
    tocarSom()
    desabilitaContainerCadastro()
    ordenar()
  } else {
    imprimeErro(validacao.mensagem)
  }
}

function limparCamposCadastro() {
  document.querySelector('#nomeFilme').value = ""
  document.querySelector('#anoLancamentoFilme').value = ""
  document.querySelector('#linkImagemFilme').value = ""
  document.querySelector('#anoCronologiaFilme').value = ""
  document.querySelector('#linkImdbFilme').value = ""
  document.querySelector('#linkTrailerFilme').value = ""
}

function validaDadosCadastro(nome, anoLancamento, enderecoImagem, anoCronologico, enderecoResumo, enderecoTrailer) {
  var validacao = {
    status: true,
    mensagem: ""
  }

  if (nome == "") {
    validacao.status = false
    validacao.mensagem = "Informe o nome do filme"
    return validacao
  }
  if (isNaN(parseFloat(anoLancamento))) {
    validacao.status = false
    validacao.mensagem = "Ano de lançamento inválido"
    return validacao
  }
  if (isNaN(parseFloat(anoCronologico))) {
    validacao.status = false
    validacao.mensagem = "Ano cronológico inválido"
    return validacao
  }
  let strSize = enderecoTrailer.substr(enderecoTrailer.indexOf("watch?v=", 0), 19).substr(8, 11).length

  if (!isValidHttpUrl(enderecoTrailer) || (strSize < 11)) {
    validacao.status = false
    validacao.mensagem = "Endereço do trailer inválido"
    return validacao
  }
  if (!isValidHttpUrl(enderecoImagem)) {
    validacao.status = false
    validacao.mensagem = "Endereço da imagem inválido"
    return validacao
  }
  if (!(enderecoImagem.endsWith(".jpg") ||
    enderecoImagem.endsWith(".png") ||
    enderecoImagem.endsWith(".jfif"))) {
    validacao.status = false
    validacao.mensagem = "Imagem com formato inválido"
    return validacao
  }
  if (!isValidHttpUrl(enderecoResumo)) {
    validacao.status = false
    validacao.mensagem = "Endereço resumo inválido"
    return validacao
  }

  return validacao
}

function isValidHttpUrl(endereco) {
  let url

  try {
    url = new URL(endereco)
  } catch (_) {
    return false
  }

  return url.protocol === "http:" || url.protocol === "https:"
}

function tocarSom() {
  var audio = new Audio("https://protettordelinks.com/wp-content/baixar/mario_moeda_efeito_sonoro_toquesengracadosmp3.com.mp3")
  audio.play();
}

function imprimeErro(mensagem) {
  let tagBody = document.querySelector("body")

  // Criação dos elementos
  let tagSpan = document.createElement("span")
  let tagDiv = document.createElement("div")

  // Anexando os elementos filhos aos elementos pais
  tagDiv.appendChild(tagSpan)
  tagBody.appendChild(tagDiv)

  tagDiv.classList.add("modal-erro")
  tagDiv.classList.add("center");

  tagSpan.innerHTML = mensagem
  tagSpan.classList.add("animate__animated")
  tagSpan.classList.add("animate__tada")
  tagSpan.classList.add("center");
  // tagDiv.addEventListener('click', fechaModalErro)

  setTimeout(() => {
    tagDiv.remove()
  }, 2750)
}

function printTrailer(e) {
  let tagBody = document.querySelector("body");
  // Busca o conteúdo do atributo "data-linktrailer" referente a tag "a" mais próxima
  let movie = e.target.closest('a')
  console.log(movie)
  // Criação dos elementos
  let tagDivGeral = document.createElement("div");
  let tagDivTrailer = document.createElement("div");
  let tagIFrame = document.createElement("iframe");
  let tagButton = document.createElement("button");

  tagDivGeral.innerHTML = "";

  // Anexando os elementos filhos aos elementos pais
  // tagA.appendChild(tagButton)
  tagDivTrailer.appendChild(tagButton);
  tagDivTrailer.appendChild(tagIFrame);
  tagDivGeral.appendChild(tagDivTrailer);
  tagBody.appendChild(tagDivGeral);

  tagDivGeral.classList.add("modal-video-geral");
  tagDivGeral.classList.add("center");
  tagDivGeral.addEventListener("click", closeTrailer);

  tagDivTrailer.classList.add("modal-video-trailer");

  tagIFrame.classList.add("modal-video-iframe");
  tagIFrame.setAttribute("src", "https://www.youtube.com/embed/" + movie.dataset.linktrailer);
  tagIFrame.setAttribute("title", "YouTube video player");
  tagIFrame.setAttribute("frameborder", 0);
  tagIFrame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
  tagIFrame.setAttribute("allowfullscreen", "");

  tagButton.dataset.href = movie.dataset.linkpagina
  tagButton.addEventListener("click", goTo)
  tagButton.innerHTML = "Resumo"
}

function closeTrailer() {
  document.querySelector(".modal-video-geral").remove();
}

function goTo(e) {
  // Para a propagação do evento (Neste caso, o click)
  e.stopPropagation()
  var linkPagina = e.target.closest("button").dataset.href
  window.open(linkPagina)
}