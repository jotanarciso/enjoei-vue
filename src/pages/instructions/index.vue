<template>
  <div class="l-container">
    <span class="l-emoji -hand-wave">👋</span>

    <h1 class="l-title">
      instruções
    </h1>

    <div class="l-block">
      <h2 class="l-subtitle">
        <strong>1.</strong> escolha um desafio com sabedoria
      </h2>

      <p>
        desenhamos uma página para você nos mostrar o que sabe, mas queremos que você defina o tamanho do seu desafio.
      </p>

      <p>
        a página em sua forma mais simples é uma listagem de produtos, mas ela pode ser incrementada com duas funcionalidades extras: uma paginação dos resultados e um campo para filtrar resultados por texto.
      </p>

      <p>
        esperamos que desenvolvedores mais experientes entreguem mais do que o básico, mas quem está apenas começando pode se sair bem só com o básico feito com muito carinho. não esqueça do prazo combinado e não tente abraçar o mundo.
      </p>

      <p>
        você pode encontrar o desenho da página no diretório <em>screens</em>, já nomeado por complexidade: (1) carregamento e listagem dos produtos, (2) paginação dos resultados e (3) um campo de busca para filtrar por texto. o editável está em formato <em>sketch</em>, mas se você não tem acesso à ferramenta, recomendamos subir o arquivo no <a href="https://www.figma.com/" target="_blank">figma</a> para inspecionar detalhes como cores e espaçamentos.
      </p>

      <p>
        um detalhe: se você não possui a fonte <em>proxima nova</em> instalada, o figma pode sumir com os textos do arquivo—mas eles estão lá, viu! em caso de dúvida, use as imagens exportadas que estão na pasta <em>screens</em> como a fonte da verdade.
      </p>
    </div>

    <div class="l-block">
      <h2 class="l-subtitle">
        <strong>2.</strong> analise o código do projeto com olhos de águia
      </h2>

      <p>
        você já deve ter notado que o projeto do teste vem com um pouco de código na bagagem. antes de sair batendo teclas, queremos que você dê aquela espiada no que já está aí.
      </p>

      <p>
        existem alguns padrões que você pode assimilar e reproduzir no código que irá escrever para manter consistência. mas, se encontrar algo que não está legal, não se acanhe. você tem toda liberdade para refatorar o que quiser e melhorar o resultado final.
      </p>

      <p>
        a API que você vai usar é pública e é a mesma utilizada na busca do site e dos apps do enjoei. sabemos que nem todo mundo está familiarizado com APIs GraphQL e por isso deixamos uma requisição simples pronta para você. brinque com ela para entender seu funcionamento e refatore o que achar necessário.
      </p>
    </div>

    <div class="l-block">
      <h2 class="l-subtitle">
        <strong>3.</strong> execução nível Space X pousando foguetes
      </h2>

      <p>
        definido o escopo da sua entrega considerando o prazo combinado e percebendo bem os padrões do código que entregamos a você, é hora de colocar a mão na massa. você irá encontrar no <em>README</em> alguns comandos para rodar o projeto enquanto desenvolve.
      </p>

      <p>
        faça com carinho, dê atenção aos detalhes: pra gente um layout bem feito é tão importante quanto um código organizado. imagine que o que você está fazendo vai ser usado por milhões de pessoas. nesse caso, pra deixar claro, não vai: o código do seu teste só será usado para a sua avaliação. mas, se você se juntar a gente, esse vai ser o seu dia a dia.
      </p>

      <p>
        como já comentamos, fique livre para mudar o que você acha que pode ser melhor. você também pode instalar os packages que achar necessário, sem restrições.
      </p>
    </div>

    <div class="l-block">
      <h2 class="l-subtitle">
        <strong>4.</strong> empacote tudo e manda um zap (digo, zip)
      </h2>

      <p>
        com a página brilhando e tudo finalizado, faça um zip do projeto (sem as pastas <em>node_modules</em> e <em>screens</em>, pra ficar levinho) e manda pra gente.
      </p>

      <p>
        fique à vontade para escrever uma mensagem no <em>README</em> se quiser comentar algum ponto da execução, do próprio teste ou só para dar um alô mesmo.
      </p>

      <p>
        ficamos gratos pelo seu esforço e desejamos muita sorte. <router-link to="/busca">abrir página do teste e começar.</router-link>
      </p>
    </div>

    <div class="l-block -text-right">
      <span class="l-emoji -clover">🍀</span>
    </div>
  </div>
</template>

<script>
  export default {
    pageTitle() {
      return 'Instruções'
    }
  }
</script>