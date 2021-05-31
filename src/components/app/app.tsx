import React from 'react';

import Presentation from '../homePage/presentation';
import Skills from '../homePage/skills';
import Certificates from '../homePage/certificates';

// const LazyAtom = lazy(() => import('../first-modal/atom'));

export const App = (): React.ReactElement => (
    <div>
        <Presentation />
        <Skills />
        <Certificates />
    </div>
);
