import React from 'react';

import {stylesBackgroundFallback} from '@styles/components/homePage/skills.module.scss';

import LazyBackground from './lazyBackground';

class Skills extends React.PureComponent {
    async componentDidMount(): Promise<void> {
        return;
    }

    render(): React.ReactNode {
        const lazyStyleSheet = import(
            '@styles/components/homePage/skillsBackground.module.less'
        );
        return (
            <LazyBackground
                fallbackStyles={stylesBackgroundFallback}
                lazyStyleSheet={lazyStyleSheet}
            />
        );
    }
}

export default Skills;
