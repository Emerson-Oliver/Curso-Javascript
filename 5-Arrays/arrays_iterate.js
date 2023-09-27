//Iterar Arrays "Acessar sequencialmente cada um dos elementos que faz parte do array"

const itens = ["Arroz", "Feijão", "Batata", "Macarrão"];

for (let indice = 0; indice < itens.length; indice+=1){ //Com esse for toda vez que eu aumentar um item no array automaticamente esse item entrará na "saida" 
    console.log("-> " + itens[indice]);
}