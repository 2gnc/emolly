import React from 'react';
import { cn } from '@bem-react/classname';

import './Logo.css';

interface Props {
    cls?: string;
}

const b = cn('Logo');

export const Logo: React.FC<Props> = ({ cls }) => <div className={b(null, [cls])} />;
