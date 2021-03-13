import classNames from 'classnames';
import React, {ReactNode} from 'react';

import {stylesContainer} from '@styles/components/firstModal/firstModal.module.less';

import ProfilePicture from '../profilePicture/profilePicture';

class FirstModal extends React.PureComponent {
    readonly state = {
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
            '@styles/components/firstModal/firstModalBackgroundLowRes.module.less'
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
            '@styles/components/firstModal/firstModalBackground.module.less'
        );
        this.setState({
            classNames: [
                classNames(criticalStyles, backgroundImage.stylesContainer),
            ],
        });
    }

    render(): ReactNode {
        return (
            <div className={this.state.classNames}>
                <ProfilePicture />
            </div>
        );
    }
}

export default FirstModal;
