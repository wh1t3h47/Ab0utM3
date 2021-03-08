import React, {CSSProperties} from 'react';

import AtomImage from '@images/atom.svg';

export default ({
    style,
    className,
}: {
    style?: CSSProperties;
    className?: string;
}): React.ReactElement => <AtomImage className={className} style={style} />;
