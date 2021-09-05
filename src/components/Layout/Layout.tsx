import React from 'react';
import { cn } from '@bem-react/classname';

import './Layout.css';

export enum LayoutIllustrationTypes {
    TOP = 'top',
    LEFT_BIG = 'left-big',
    LEFT_SMALL = 'left-small',
    LEFT_SMALL_CENTRED = 'left-small-centred',
    RIGHT_BIG = 'right-big',
    RIGHT_SMALL = 'right-small',
    BOTTOM = 'bottom',
    TOP_AND_LEFT = 'top-and-left',
    TOP_AND_RIGHT = 'top-and-right'
}

interface Props {
    illustrationType: LayoutIllustrationTypes;
}

const b = cn('Layout');

export const Layout: React.FC<Props> = ({ illustrationType, children }) => (
    <div className={b({illustration: illustrationType})}>
        {children}
    </div>
);
