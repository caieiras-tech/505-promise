let lista = document.querySelector("ol");

let raizes = [
    {nome: "Batata"},
    {nome: "Mandioca"},
    {nome: "Rabanete"}
];

let imprimirComidas = () =>{
    for(let raiz of raizes){
        lista.innerHTML += `<li>${raiz.nome}</li>`
    }
}

let comerComida = () =>{
    for(let raiz of raizes){
        lista.innerHTML += `<li>${raiz.nome}</li>`
    }
}


let adicionarComida = () =>{
    let callback = (resolve, reject) =>{
        setTimeout(() => {
            raizes.push({nome: "Gengibre"});
            resolve();
        }, 1000000000000);
    }
    return new Promise(callback);
}

adicionarComida().then(comercomidas).then(imprimirComidas)


// let diaSemana = "sextou";
// let batatinhaFritaDoMc = (resolve, reject) =>{
//     if(diaSemana == "sextou"){
//         resolve("Acertô mizeravi");
//     }
//     else{
//         reject("ERRRROOUUUUUU");
//     }
// }

//     let promessa = new Promise(batatinhaFritaDoMc);

// promessa
//     .then(console.log)
//     .catch(console.error)
//     .finally(console.log("Função concluida"));