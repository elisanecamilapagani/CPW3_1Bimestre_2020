import JogosView from './view/JogosView';

let view = new JogosView();

/**
 * O evento onload é invocado 
 * automaticamente quando a
 * página é carregada. 
 */

window.onload = () => view.renderizarTabelaJogos();
