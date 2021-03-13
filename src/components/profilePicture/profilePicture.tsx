import React, {ReactNode} from 'react';

import {fallbackContainer} from '@styles/components/profilePicture/profilePictureContainer.module.scss';

class ProfilePicture extends React.PureComponent {
    readonly state = {
        src: '',
    };

    async componentDidMount(): Promise<void> {
        const profilePictureLowRes = await import(
            '@images/profilePicture/profile-picture-low-resolution.jpeg'
        );
        this.setState({src: profilePictureLowRes.default});

        const profilePicture = await import(
            '@images/profilePicture/profile-picture.jpeg'
        );
        this.setState({src: profilePicture.default});
    }

    render(): ReactNode {
        return (
            <div className={fallbackContainer}>
                <img
                    src={this.state.src}
                    alt={
                        'Me smiling with my Super Mario mug and some drum cymbals' +
                        ' on the background'
                    }
                />
            </div>
        );
    }
}

export default ProfilePicture;
