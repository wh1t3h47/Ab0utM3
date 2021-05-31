import classNames from 'classnames';
import React from 'react';

import {stylesBackgroundFallback} from '@styles/components/homePage/presentation.module.scss';

import ProfilePicture from '../profilePicture/profilePicture';

class Presentation extends React.PureComponent {
    readonly state = {
        classNames: classNames([stylesBackgroundFallback]),
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
            '@styles/components/homePage/presentationBackgroundLowRes.module.less'
        );
        this.setState({
            classNames: [
                classNames(
                    criticalStyles,
                    lowResolutionBackgroundImage.stylesBackground,
                ),
            ],
        });

        /** Carrega a imagem final completa, de alta definicao. */
        const backgroundImage = await import(
            '@styles/components/homePage/presentationBackground.module.less'
        );
        this.setState({
            classNames: [
                classNames(criticalStyles, backgroundImage.stylesBackground),
            ],
        });
    }

    render(): React.ReactNode {
        return (
            <div className={this.state.classNames}>
                <ProfilePicture />
            </div>
        );
    }
}

export default Presentation;
