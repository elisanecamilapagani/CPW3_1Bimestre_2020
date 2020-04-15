import PlacarJogo  from '../entity/PlacarJogo';
import * as db from '../../db/placar.json';

export default class placarJogo {

    recuperarTodosOsJogos() {
        let jogos =
            db.jogos.map(
                jogos => new PlacarJogo(
                    jogos.Campeão,
                    jogos.Ano,
                    jogos.Técnico,
                    jogos.Vice,
                    jogos.Placar,
                ));  

        return jogos;
    }
}