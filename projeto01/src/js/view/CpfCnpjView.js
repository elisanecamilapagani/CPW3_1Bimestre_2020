import CpfCnpjController from '../controller/CpfCnpjController';

export default class CpfCnpjView {

    constructor() {

        this.controller = new CpfCnpjController();

        this.$ = document.querySelector.bind(document);

    }
     
    verificarCPF() {
        let cpf = this.$("#validacao").value;

        this.mostrar(this.controller.verificarCPF(cpf));
    }

    mostrar(lerCPF) {
      
        if (lerCPF) {
            this.$('#resultado').innerText = ' CPF Válido';
        } else {
            this.$('#resultado').innerText = " CPF Inválido";
        }

    }

    /// codigo do cnpj

    
    VerCNPJ() {

        let cnpj = this.$('#validacao').value;
        this.verifica(this.controller.VerCNPJ(cnpj));

    }
    verifica(lerCNPJ) {

        if (lerCNPJ) {
            this.$('#resultado').innerText = 'CNPJ Válido'
        } else {

            this.$('#resultado').innerText = "CNPJ Inválido"
        }
    }
 }
    











