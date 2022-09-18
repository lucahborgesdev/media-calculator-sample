function media() {
 
 var element01 = document.getElementById("nota1")
 var valor01 = element01.value
 var nota01 = parseFloat(valor01)

 var element02 = document.getElementById("nota2")
 var valor02 = element02.value
 var nota02 = parseFloat(valor02)

 var element03 = document.getElementById("nota3")
 var valor03 = element03.value
 var nota03 = parseFloat(valor03)

 var element04 = document.getElementById("nota4")
 var valor04 = element04.value
 var nota04 = parseFloat(valor04)

 var media = (nota01 + nota02 + nota03 + nota04)/4
 media = media.toFixed(2)

 if(media>6){
  var msguser = "Você obteve nota maior que 6, está aprovado!"
 }else{
  var msguser = "Você obteve nota menor que 6, está reprovado!"
 }
 
 var elementomediaCalculada = document.getElementById("mediaCalculada")
 var mediaCalculada = "A média dos valores inseridos é: " + media
 elementomediaCalculada.innerHTML = mediaCalculada

 var elementomsguser = document.getElementById("mediaMaiorMenor")
 elementomsguser.innerHTML = msguser
}
