# Custom Radio Button

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/feliciovcm/custom-radio-button?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/feliciovcm/custom-radio-button?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/feliciovcm/custom-radio-button?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/feliciovcm/custom-radio-button?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/feliciovcm/custom-radio-button?style=for-the-badge)

<img src="/public/layout.png" alt="Exemplo Layout">

> This repository is an example of a custom radio button component using React.js, styled-components, and typescript.

### Enhancements

This project is still in development and is open to ideas. The next updates will be focused on making it more generic.

- [x] Accept an array of strings of any length.
- [x] Accept and onChange function to access the chosen choice.
- [ ] Implement props to choose the button color schema.

## 💻 Prerequisites

Before start installation, make sure you attend the following requirements:

<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->

- In order to run the project in your local machine you need to have `<node.js 10.15.3>` or above installed

## 🚀 Installing

To install the <Custom-radio-button>, follow the instructions below:

Clone the repository in a directory of your preference.

Install node dependencies needed to the project execute:

```
yarn intall
```

## ☕ Using <Custom-radio-button>

To start using <Custom-radio-button>, follow the steps:

```
yarn start
```

This project is a front-end only application, that runs on port 3000.


## API

### Select props

| name | description | type | default |
| --- | --- | --- | --- |
| buttonPadding | vertical padding applied to the button component | String or Number | '' |
| choices | array of choices to be listed | Array<{id: String or Number, name: String}> | [{ id: 1, name: "Corretivo" },{ id: 2, name: "Preventivo" }] |
| color | color attribute applied to the colored button | String | "#7758C7" |
| containerPadding | padding applied to the component wrapper | String or Number | "0.25rem" |
| gridGap | grid-gap attribute applied to the component wrapper | String or Number | "0.375rem" |
| maxWidth | max-width attribute applied to the component wrapper | String or Number | "33.875rem" |
| minWidth | min-width attribute applied to the component wrapper | String or Number | "22.1875rem" |
| onChange | called when select an option or input value change(combobox) | function(value, option:Option/Array<Option>) | - |


| nome | descrição | tipo | padrão |
| --- | --- | --- | --- |
| buttonPadding | atributo padding vertical aplicado ao componente do botão | String ou Number | '' |
| choices | conjunto de opções a serem listadas | Array <{id: String ou Number, nome: String}> | [{id: 1, name: "Corretivo"}, {id: 2, name: "Preventivo"}] |
| color | atributo de cor aplicado ao botão colorido | String | "# 7758C7" |
| containerPadding | atributo padding aplicado ao container do componente | String ou Number | "0.25rem" |
| gridGap | atributo grid-gap aplicado ao container do componente | String ou Number | "0.375rem" |
| maxWidth | atributo max-width aplicado ao container do componente | String ou Number | "33.875rem" |
| minWidth | atributo min-width aplicado ao container do componente | String ou Number | "22.1875rem" |
| onChange | chamado ao selecionar uma opção ou alteração do valor de entrada (combobox) | function(value, option: Option / Array <Option>) | - |


## 📫 Contributing for <Custom-radio-button>

<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->

For contributions <Custom-radio-button>, follow the steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch>`.
3. Make your updates and commit: `git commit -m '<commit_message>'`
4. Merge the branch: `git push origin <Custom-radio-button> / <master>`
5. Create a pull request.

As an alternative, see Github documentation on [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


[⬆ Voltar ao topo](#Custom-radio-button)<br>
