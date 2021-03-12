import classNames from 'classnames';
import React, {ReactNode} from 'react';

import {stylesContainer} from './firstModal.module.less';

class FirstModal extends React.PureComponent {
    state = {
        classNames: classNames([stylesContainer]),
    };

    /** carrega a imagem de fundo depois que os estilos criticos de css
     * que sao mais leves ja foram carregados
     */
    async componentDidMount(): Promise<void> {
        /** Estilos que nao contem nenhum arquivo de imagem. */
        const criticalStyles = this.state.classNames;
        /** Carrega uma imagem de background leve de baixa resolucao para
         * que o usuario veja uma imagem de fundo mais rapido.
         */
        const lowResolutionBackgroundImage = await import(
            './firstModalBackgroundLowRes.module.less'
        );
        this.setState({
            classNames: [
                classNames(
                    criticalStyles,
                    lowResolutionBackgroundImage.stylesContainer,
                ),
            ],
        });
        /** Carrega a imagem final completa, de alta definicao. */
        const backgroundImage = await import(
            './firstModalBackground.module.less'
        );
        this.setState({
            classNames: [
                classNames(criticalStyles, backgroundImage.stylesContainer),
            ],
        });
    }

    render(): ReactNode {
        console.log(this.state.classNames);
        return <div className={this.state.classNames}>It werks!</div>;
    }
}

export default FirstModal;
