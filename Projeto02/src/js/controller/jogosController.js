import placarDAO from '../model/dao/placarDAO';

export default class jogosController{

constructor(){
    this.JogosDAO = new placarDAO();

}

recuperarJogos(){
    return this.JogosDAO.recuperarTodosOsJogos()
}

}