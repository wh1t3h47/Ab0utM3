import React, { createRef, RefObject, useRef } from 'react';

import {fallbackContainer} from '@styles/components/profilePicture/profilePictureContainer.module.scss';
import Modal from '../modal/modal';
import ModalContentAboutMe from '../modal/modalContentAboutMe';

type propsType = {
    includesModal: boolean,
};

class ProfilePicture extends React.PureComponent<propsType> {
    readonly state = {
        src: '',
        /** Styles for the image alt text before loading it. */
        style: {
            overflow: 'visible',
            zIndex: 1000,
        },
    };

    async componentDidMount(): Promise<void> {
        const profilePictureLowRes = await import(
            '@images/profilePicture/profile-picture-low-resolution.jpeg'
        );
        this.setState({
            src: profilePictureLowRes.default,
            /** The overflow is only visible when the image is not loaded,
             * this is so alt text gets displayed properly
             */
            style: undefined,
        });

        const profilePicture = await import(
            '@images/profilePicture/profile-picture.jpeg'
        );
        this.setState({src: profilePicture.default});
    }

    render(): React.ReactNode {
        const normalizeAltText = ({
            lineHeight: '25px',
            textAlign: 'center',
            wordBreak: 'break-word',
            fontSize: 'large',
            fontVariantPosition: 'sub',
        } as unknown) as React.CSSProperties;
        const modalRef = React.createRef() as RefObject<Modal>;
        const {includesModal} = this.props;

        return (<>
            { includesModal && <Modal renderContent={<ModalContentAboutMe
              title="Oi, sou o Antônio!"
              text={`Sou desenvolvedor full-stack JavaScript e estudante de pentest.
              O que me move é a paixão por estudar e a busca pelo entendimento dos mecanismos internos da lógica.
              Atualmente estou disponível para contratação e também para free lances, não hesite em mandar uma mensagem!`}
              closeCallback={(_ev) => {
                (modalRef.current || {hide: () => undefined}).hide();
                return undefined;
            }}
            />} ref={modalRef} /> }
            <div
                onClick={
                    () => {
                        (modalRef.current || {show: () => undefined}).show();
                    }
                }
                className={fallbackContainer}
                style={{...normalizeAltText, ...this.state.style}}
            >
                <img
                    src={this.state.src}
                    alt={
                        'Me smiling with my Super Mario mug and some drum cymbals' +
                        ' on the background.'
                    }
                    style={this.props.includesModal? { cursor: 'pointer' }: {}}
                />
            </div>
            { includesModal && <a style={{ background: 'rgba(255, 255, 255, 0.7)',
              cursor: 'pointer',
              marginTop: '5px',
              borderRadius: '8px',
            }}
            onClick={
                () => {
                    (modalRef.current || {show: () => undefined}).show();
                }
            }>Clique para saber mais...</a>}
          </>);
    }
}

export default ProfilePicture;
