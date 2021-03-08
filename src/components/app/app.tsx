import React, {Suspense, lazy} from 'react';

import {stylesContainer} from './app.module.less';
import {stylesHeader, stylesImage} from './app.module.scss';

const LazyStrawberryIcon = lazy(() => import('./atom'));
export const App = (): React.ReactElement => (
    <div className={stylesContainer}>
        <div className={stylesHeader}>It werks!</div>
        <Suspense fallback={'loading...'}>
            <LazyStrawberryIcon className={stylesImage} />
        </Suspense>
    </div>
);
