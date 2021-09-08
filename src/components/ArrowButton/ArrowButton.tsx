import React from 'react';
import { cn } from '@bem-react/classname';

import './ArrowButton.css';

interface Props {
    direction: 'right' | 'left';
    onClick: () => void;
}

const b = cn('ArrowButton');

export const ArrowButton: React.FC<Props> = ({ direction }) => <div className={b({ direction })} />;
