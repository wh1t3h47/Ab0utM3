import React, {Suspense, lazy} from 'react';

import FirstModalFallback from '../greeting-page/firstModal';

const LazyAtom = lazy(() => import('../greeting-page/atom'));

export const App = (): React.ReactElement => (
    <div>
        <FirstModalFallback />
    </div>
);
