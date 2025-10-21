// Array global usado na seção "Arrays" para armazenar frutas
let frutasArray = ["maçã","banana","laranja"];



/* showSection(sectionId, event)
   - Fecha todas as seções (adiciona classe 'hidden') e mostra a seção com id = sectionId
   - Atualiza o estilo do item de navegação clicado (marca como ativo)
   - Recebe o evento para acessar event.target (elemento clicado) */
function showSection(sectionId,event){
  const sections=document.querySelectorAll('.section');
  sections.forEach(s=>s.classList.add('hidden')); // esconde todas as seções
  document.getElementById(sectionId).classList.remove('hidden'); // mostra a seção desejada
  
  const navItems=document.querySelectorAll('.nav-item');
  // Remove classes de ativo de todos os itens e aplica cor cinza padrão
  navItems.forEach(i=>{i.classList.remove('bg-blue-100','text-blue-700','font-semibold');i.classList.add('text-gray-600');});
  // Marca o item clicado como ativo (remove cinza e adiciona destaque)
  event.target.classList.remove('text-gray-600');
  event.target.classList.add('bg-blue-100','text-blue-700','font-semibold');
}




/* processarVariaveis()
   - Lê valores dos inputs da seção "Variáveis" e escreve uma string resumo no elemento resultadoVariaveis
   - Usa typeof para mostrar o tipo do valor (exibe número como string se input em branco) */
function processarVariaveis(){
  const nome=document.getElementById('inputNome').value||"Não informado";
  const idade=document.getElementById('inputIdade').value||"Não informado";
  document.getElementById('resultadoVariaveis').textContent=`Nome: ${nome} (${typeof nome})\nIdade: ${idade} (${typeof (idade?Number(idade):idade)})`;
}




/* Funções de manipulação do array de frutas:
   - adicionarFruta: adiciona valor do input ao array e atualiza a visualização
   - removerFruta: remove o último item do array
   - limparArray: zera o array
   - atualizarArrayDisplay: atualiza o <pre> e o contador de tamanho */
function adicionarFruta(){ 
  const f=document.getElementById('inputFruta').value.trim(); 
  if(f){
    frutasArray.push(f);
    atualizarArrayDisplay(); 
    document.getElementById('inputFruta').value='';
  }
}
function removerFruta(){
  if(frutasArray.length>0){
    frutasArray.pop();
    atualizarArrayDisplay();
  }
}
function limparArray(){
  frutasArray=[];
  atualizarArrayDisplay();
}
function atualizarArrayDisplay(){
  document.getElementById('arrayFrutas').textContent=JSON.stringify(frutasArray);
  document.getElementById('tamanhoArray').textContent=frutasArray.length;
}




/* calcular()
   - Lê dois números, realiza operações básicas (+ - * / % **) e coloca o resultado no elemento resultadosCalculo
   - Trata divisão e módulo por zero exibindo 'Erro' quando aplicável */
function calcular(){
  const n1=parseFloat(document.getElementById('num1').value)||0;
  const n2=parseFloat(document.getElementById('num2').value)||0;
  const res=`${n1}+${n2}=${n1+n2}\n${n1}-${n2}=${n1-n2}\n${n1}*${n2}=${n1*n2}\n${n1}/${n2}=${n2!==0?(n1/n2).toFixed(2):'Erro'}\n${n1}%${n2}=${n2!==0?n1%n2:'Erro'}\n${n1}**${n2}=${Math.pow(n1,n2)}`;
  document.getElementById('resultadosCalculo').textContent=res;
}




/* testarIfElse()
   - Lê a idade do input e escreve "Maior de idade" ou "Menor de idade" no resultado correspondente */
function testarIfElse(){
  const idade=parseInt(document.getElementById('idadeIf').value)||0;
  const resultado=(idade>=18)?"Maior de idade":"Menor de idade";
  document.getElementById('resultadoIfElse').textContent=resultado;
}




/* executarFuncao()
   - Lê nome, aplica uma função de saudação simples e exibe o resultado na seção Funções */
function executarFuncao(){
  const nome=document.getElementById('nomeFuncao').value||"Visitante";
  const saudacao=(n)=>`Olá, ${n}!`; // função interna de exemplo
  document.getElementById('resultadoFuncao').textContent=saudacao(nome);
}




/* Listener DOMContentLoaded
   - Marca o primeiro item de navegação como ativo ao carregar a página
   - Inicializa a exibição do array de frutas */
document.addEventListener('DOMContentLoaded',()=>{
  const homeNavItem=document.querySelector('.nav-item'); // primeiro nav-item é "Início"
  homeNavItem.classList.add('bg-blue-100','text-blue-700','font-semibold');
  homeNavItem.classList.remove('text-gray-600');
  atualizarArrayDisplay();
});