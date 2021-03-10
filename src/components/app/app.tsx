import React, {Suspense, lazy} from 'react';

import {stylesHeader, stylesImage} from './app.module.scss';
import {stylesContainer} from './greetings.module.less';

const LazyAtom = lazy(() => import('./atom'));
export const App = (): React.ReactElement => (
    <div className={stylesContainer}>
        <div className={stylesHeader}>It werks!</div>
        <Suspense fallback={'loading...'}>
            <LazyAtom className={stylesImage} />
        </Suspense>
    </div>
);
