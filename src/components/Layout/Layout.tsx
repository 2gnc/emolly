import React from 'react';
import { cn } from '@bem-react/classname';

import './Layout.css';

export enum LayoutIllustrationTypes {
    MAIN = 'main',
    LEFT_BIG = 'left-big',
    LEFT_SMALL = 'left-small',
    RIGHT_BIG = 'right-big',
    RIGHT_SMALL = 'right-small',
    BOTTOM = 'bottom',
    TOP_LEFT = 'top-left',
    TOP_RIGHT = 'top-right'
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
