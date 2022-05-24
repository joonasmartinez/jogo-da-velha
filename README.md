## Jogo da velha em HTML/CSS/JS

Um clássico que você provavelmente já jogou rabiscando no papel durante a aula no colégio ou no recreio fazendo desenho na areia. 

<div align="center">
  
  <img src="https://user-images.githubusercontent.com/84146200/169704654-7d14b2db-870e-4db1-a4cc-1e343f16abb2.png" height="400px"/>
 
</div>
 <br>
 
> ### Descrição Projeto

Jogo da velha arquitetado em HTML e CSS cujas funções foram implementadas com a linguagem JavaScript.

> ### Lógica aplicada

'X' sempre inicia o game. Após a primeira jogada, o turno é invertido e então é a vez da 'BOLINHA' jogar. Somente depois de realizar uma jogada válida o sistema analisa se houve uma vitória, caso não tenha, inverte o turno e segue o jogo até alguém ganhar ou dar EMPATE!


<div align="center">
  
  <img src="https://user-images.githubusercontent.com/84146200/169704604-7f9e77d0-8ff8-4fff-a018-2f5c4091f223.png" height="400px"/>
  <img src="https://user-images.githubusercontent.com/84146200/169704528-56ff88c6-2f9d-4422-ad15-a86b7f410422.png" height="400px"/>
 
</div>
 <br>
 
 ### WINNER or EMPATE
 
 Sempre que acontecer um ou outro, surgirá um botão logo abaixo para restartar o game. Após pressionar, ele irá sumir.
 
> OBS: Implementado IA em 20/05/2022.

## IA deste projeto
O que acontece aqui é o seguinte: Após uma jogada do Player X, é disparada a execução da IA que irá analisar quais as jogadas possíveis de vitória do player 'X', baseado na jogada inicial. Destas, a IA irá jogar em alguma das casas em que X pode ganhar. Após a próxima jogada do Player 'X', a IA irá analisar:
- Player 'X' está prestes a ganhar? Se sim, IA irá bloquear a vitória jogando na casa restante.
Caso esta condição acima seja negativa, IA irá jogar na casa disponível para formar sua vitória. 

OBS: Caso IA veja que há tanto a possibilidade do Player 'X' vencer quanto de IA vencer, o que você acha que ela fará? Como se é esperado, ela vai marcar onde é sua vitória. IA gosta de vencer. 😜

> É POSSÍVEL GANHAR DA IA? Sim, você pode ganhar. Mas é bem provável que você empate mais do que ganhe.

## Contato
Caso você tenha se interessado neste projeto e esteja com alguma dúvida, manda um email pra mim: mz-martinez@live.com

## Considerações finais
Para fins de informação, este projeto foi desenvolvido apenas para aplicação de conhecimento.
