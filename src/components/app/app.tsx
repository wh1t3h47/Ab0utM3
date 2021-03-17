import React from 'react';

import Presentation from '../homePage/presentation';
import Skills from '../homePage/skills';

// const LazyAtom = lazy(() => import('../first-modal/atom'));

export const App = (): React.ReactElement => (
    <div>
        <Presentation />
        <Skills />
    </div>
);
