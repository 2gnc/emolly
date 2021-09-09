import React from 'react';
import { cn } from '@bem-react/classname';
import { LayoutIllustrationTypes } from '../../typings';

import './Layout.css';
interface Props {
    illustrationType: LayoutIllustrationTypes;
}

const b = cn('Layout');

export const Layout: React.FC<Props> = ({ illustrationType, children }) => (
    <div className={b({illustration: illustrationType})}>
        {children}
    </div>
);
