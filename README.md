
# Desafio 1

Esse projeto é um clone do protótipo do Figma enviado pela Compass. O objetivo é reproduzir o design do protótipo inicial adicionando funcionalidades aos elementos e navegabilidade entre as páginas.

## Funcionalidades

- Navegação
- Imagens e botões interativos
- PopUp de validação de email
- Validação de formulário
- Armazenamento no LocalStorage

Menu (página principal, página de contato, página de erro e página de sucesso): 
Ao clicar no logo e no item Home volta para a página inicial, o botão Contact Us redireciona para a página de contato e os botões restantes redirecionam para a página de erro.

Container2 da página principal:
Botão "Get More Details" redireciona para página de erro

Container 3 da página principal:
Ao clicar nos botões ou nas imagens redireciona para a página de erro

Container 6 da página principal:
Ao clicar em qualquer elemento do c6-group (imagem, texto ou flecha) redireciona para a página de erro

Container 7 da página principal:
Botões e imagens enviam usuário para a página de erro

Container 8 da página principal e Container 4 da página de contato:
Validação do email inserido pelo usuário. Caso seja um email inválido ao clicar no botão aparece um PopUp de erro, caso contrário aparece um PopUp de sucesso e armazena o valor pelo LocalStorage

Footer da página principal e página de contato: 
O logo redireciona para a página principal, o Contact Us redireciona para a página de contato e os ícones das redes sociais vão para suas respectivas páginas (Facebook, X, Instagram e Linkedin). Todos os outros links do About Us redirecionam para a página de erro

Menu da página de contato:
O botão Contact Us redireciona para o formulário

Container 2 da página de contato:
Os ícones das redes sociais redirecionam o usuário para a página da rede social em questão (Facebook, Instagram, X e Linkedin)

Container 3 (formulário):
Faz a validação dos campos Name, Last Name, Email Address e Message. Se algum campo estiver vazio e o usuário tentar enviar aparece um PopUp solicitando que o usuário preencha todas as informações. O nome e último nome não podem conter números ou caracteres especiais (!@#$%&*), o email é validado com estrutura própria de email e a mensagem não pode conter menos que 10 caracteres. Se o usuário faltar com alguma dessas regras o campo fica vermelho, mostra uma mensagem e o botão fica inativo. Quando todas as informações estiverem corretas o usuário é redirecionado para a página de sucesso e as informações são armazenadas no LocalStorage

Página de erro:
Contém header, uma mensagem centralizada, botão que redireciona para a página principal e um footer. Todo o conteúdo do site aparece com uma transição suave após o carregamento do vídeo de fundo. Os links do footer redirecionam o usuário para a rede social desejada

Página de sucesso: 
Parecido com a página de erro mas a mensagem é diferente, resgata o nome e último nome do usuário armazenado pelo LocalStorage


## Aprendizados

Coloquei em prática os aprendizados dos cursos feitos na Udemy me familiarizando mais com o uso de HTML, CSS, JavaScript e DOM.
Tive muita dificuldade com o alinhamento dos elementos sem poder usar BootStrap por isso voltei algumas vezes no curso de Flexbox para entender melhor. Também me orientei por alguns vídeos no YouTube e documentações online. 

## Melhorias

Criar uma réplica idêntica alinhando os elementos exatamente como os do protótipo inicial e deixar a página responsiva.


## Autores

- [@aliek57](https://www.github.com/aliek57)


## Referência

 - [Desafio 1 - Semana 4](https://swift-jute-307.notion.site/Desafio-1-Semana-4-0ac2e8997c0e468e846b0742b0bde301)

- [How to Create a WebSite with Background Video](https://www.youtube.com/watch?v=-unASUgYtVI)

- [Gravar itens e recuperar valores com LocalStorage](https://pt.stackoverflow.com/questions/371520/gravar-items-e-recuperar-valores-com-localstorage)