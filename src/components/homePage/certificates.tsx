import React from 'react';

import {stylesBackgroundFallback} from '@styles/components/homePage/certificate.module.scss';

import LazyBackground from './lazyBackground';

class Certificate extends React.PureComponent {
    async componentDidMount(): Promise<void> {
        return;
    }

    render(): React.ReactNode {
        const lazyStyleSheet = import(
            '@styles/components/homePage/certificateBackground.module.less'
        );
        return (
            <LazyBackground
                fallbackStyles={stylesBackgroundFallback}
                lazyStyleSheet={lazyStyleSheet}
            />
        );
    }
}

export default Certificate;
