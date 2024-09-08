


function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById  ("campo-pesquisa").value
    if (!campoPesquisa ) {
      section.innerHTML=  "<p> Nada foi encontrado. você precisa digitar algo  </p>" 
      return
    }      
  
campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
  let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado e constrói o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ) {

        dado.titulo.includes(campoPesquisa)
        // Cria um novo item de resultado formatado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank"> ${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
      }

      
    }

    if (!resultados) {
resultados = "<p> Nada foi encontrado </p>"
       
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
  }



