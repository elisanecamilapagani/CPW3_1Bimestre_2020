import CpfCnpjView from './view/CpfCnpjView';

let analisar = new CpfCnpjView();
let mostar = new CpfCnpjView();


//chamando controler cpf
window.verificarCPF = () => {
  mostar.verificarCPF();
  console.log("eli")
}


//chamando o controle do cnpj
window.VerCNPJ = () => {
  analisar.VerCNPJ();
}

//colocando mascara no input 





let maskCpdCnpj = IMask(document.getElementById('validacao'), {

  mask: [

        {
            mask: '000.000.000-00'
        },
   
        {
            mask: '00.000.000/0000-00'

        
        }
    ]
  
})


/*


let masc ;
masc = $("#validacao").value( ) .length;
   
 if(mascj< 11) {
  
   $("#validacao").imask("000.000.000-00");

 }else{
   $("#validacao").imask('00.000.000/0000-00')
 }
*/

