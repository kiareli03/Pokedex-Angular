# PokedexAngular

"Desenvolvi uma Pokédex utilizando Angular na versão 18.4, com base em um projeto apresentado por Denner Troquatte em seu vídeo tutorial, que utilizava a versão 12 do framework. Durante a recriação, adaptei o projeto para as melhores práticas da versão mais recente do Angular, substituindo os NgModules por componentes standalone, em conformidade com as diretrizes modernas do framework.

O projeto lista os 151 primeiros Pokémon, exibindo na página inicial suas imagens e tipos, além de uma barra de pesquisa no cabeçalho para facilitar a localização dos Pokémon. Ao clicar em um card de Pokémon, o sistema navega para uma rota dedicada à exibição de detalhes, sem recarregar a página, proporcionando uma experiência de navegação fluida. Na página de detalhes, são apresentadas informações adicionais sobre o Pokémon de forma dinâmica, utilizando dados obtidos pela integração com a PokéAPI.

Para implementar essa integração, utilizei serviços para chamadas à API, aplicando métodos de injeção de dependências que garantem modularidade e reutilização do código. Também empreguei Signals para o controle de estado, aproveitando recursos nativos do Angular mais recente.

Essa experiência foi fundamental para o aprimoramento de habilidades no desenvolvimento com Angular, incluindo componentização avançada, consumo de APIs RESTful e gerenciamento de estado. Além disso, reforçou minha capacidade de aplicar tecnologias modernas e de me adaptar rapidamente às inovações do mercado."

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
