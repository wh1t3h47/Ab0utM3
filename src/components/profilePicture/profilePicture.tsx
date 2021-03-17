import React from 'react';

import {fallbackContainer} from '@styles/components/profilePicture/profilePictureContainer.module.scss';

class ProfilePicture extends React.PureComponent {
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

        return (
            <div
                className={fallbackContainer}
                style={{...normalizeAltText, ...this.state.style}}
            >
                <img
                    src={this.state.src}
                    alt={
                        'Me smiling with my Super Mario mug and some drum cymbals' +
                        ' on the background.'
                    }
                />
            </div>
        );
    }
}

export default ProfilePicture;
