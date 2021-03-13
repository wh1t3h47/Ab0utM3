import React from 'react';

import FirstModalFallback from '../first-modal/firstModal';

// const LazyAtom = lazy(() => import('../first-modal/atom'));

export const App = (): React.ReactElement => (
    <div>
        <FirstModalFallback />
    </div>
);
