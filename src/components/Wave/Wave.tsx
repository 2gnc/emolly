import React from 'react';
import { cn } from '@bem-react/classname';

import './Wave.css';

interface Props {
    cls?: string;
}

const b = cn('Wave');

export const Wave: React.FC<Props> = ({ cls }) => <div className={b(null, [cls])} />;
