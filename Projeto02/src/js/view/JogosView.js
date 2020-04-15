import jogosController from '../controller/jogosController';
import PlacarJogo from '../model/entity/PlacarJogo';


export default class JogosView {

    constructor() {
        this.jogosCtrl = new jogosController();
    }
    renderizarTabelaJogos() {
        let jogos = this.jogosCtrl.recuperarJogos();

        //let tabela = document.createElement('table');

        let cabecalho = this.criarCabecalhoDaTabelaJogos();
        let corpo = this.criarCorpoDaTabelaJogos(jogos);
        
      //  tabela.insertAdjacentHTML('beforeend', cabecalho);
        //tabela.insertAdjacentHTML('beforeend', corpo);
        
        let tabela = `<table>${cabecalho}${corpo}<table>`;
        document.getElementById('visualizarTabela').innerHTML = tabela;
    }

    criarCabecalhoDaTabelaJogos() {
        let cabecalho = `
            <thead>
                <tr>
                    <th>Campeão</th>
                    <th> Ano</th>
                    <th>Técnico</th>
                    <th> Vice</th>
                    <th> Placar</th>
                </tr>
            </thead>
        `;
        return cabecalho;
    }
    criarCorpoDaTabelaJogos(jogos) {
        let corpo = '';

        jogos.forEach(jogos => {
            let jogoStr = `
                <tr>
                    <td>${jogos.Campeão}</td>
                    <td>${jogos.Ano}</td>
                    <td>${jogos.Técnico}</td>
                    <td>${jogos.Vice}</td>
                    <td>${jogos.Placar}</td>
                </tr>
              `;

            corpo += jogoStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`;
        return tbody;
    }
}
