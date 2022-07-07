<h1>1.  |    Descrição da solicitação de teste</h1>
<h3>Teste enviado por e-mail<h3>

>   OBS.: Caso deseje já executar, vá para o passo (3.)

<h5>
Para aplicar os cenários solicitados, por favor acesse:
https://wj-qa-automation-test.github.io/qa-test/

Levando em consideração a página que foi especificada:

<strong>[OKAY - CHECKED] 1) </strong>Crie um cenário onde clicamos nos botões "One", "Two, e "Four", depois verifique a ausência dos mesmos.

<strong>[OKAY - CHECKED] 2) </strong>Dentro da mesma página, clique nos botões "One", "Two" e "Four" que encontram-se dentro do painel "IFRAME BUTTONS" e valide a não-presença dos mesmos.

<strong>[OKAY - CHECKED] 3) </strong>No cenário final, iremos preencher o campo "YourFirstName" com um texto qualquer. Clique no botão "One", cheque a opção "OptionThree", selecione a opção "ExampleTwo" dentro da select box, e valide a presença da imagem do logo do "Selenium Webdriver".

<strong>[OKAY - CHECKED] 4) </strong>Documente as versões das ferramentas utilizadas (O.S, Ruby, Firefox, Geckodriver, Chromedriver, etc.) e crie um step-by-step informando como configurar e utilizar esse ambiente, levando em conta a possibilidade de alguma pessoa iniciante dar continuidade em um projeto feito por você.
Optou por fazer o exercício de Automação Web?

<strong>OBS.: </strong>Caso opte por fazer a automação, por favor, envia o link do repositório para: carreira@webjump.com.br, com os seus dados.
<h5>
<h1>2.  |    Configuração de ambiente</h1>
<h3>Instalar o Node</h3>

>   Versão utilizada: v14
>   
>   Para instalar utilize o instalador na pasta de NodeInstall, que está dentro do próprio projeto. Exemplo de path -> "{local}\WEBJUMP\NodeInstall\node-v14.18.2-x64.msi"
>   
>   Para outros sistemas != de Windows, baixar em: https://nodejs.org/en/download/
>   
>   Seguir o passo a passo e concluir a instalação.

>   Para conferir a instalação execude os comandos >node -v; e o
>   npm -v, eles retornaram a versão atual vx.yz

<br>
<pre><code>
C:\Users\Usuário\WEBJUMP>node -v
v14.18.2
C:\Users\Usuário\WEBJUMP>npm -v
6.14.15
</code></pre>
<br><br>

>   Na pasta do projeto, inicie o npm (node), exemplo de comando:


<br>
<pre><code>
C:\Users\Usuário\WEBJUMP>npm init --yes
</code></pre>
<br><br>

>   após iniciar o NPM limpe o cache e installe o Cypress, depois o execute para fazer as automações desejadas.
<br>
<pre><code>
C:\Users\Usuário\WEBJUMP>npm cache clean --force
C:\Users\Usuário\WEBJUMP>npm install cypress --save-dev
</code></pre>
<br><br>

<h1>3.  |    Executar a automação</h1>
<h3>Script do questionario</h3>

<br>
<pre><code>
C:\Users\Usuário\WEBJUMP>npx cypress open
</code></pre>
<br><br>

>  Local: e2e\pj_webjump
>   
