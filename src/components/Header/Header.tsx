import React  from 'react';
import { cn } from '@bem-react/classname';
import { Wave } from '../Wave/Wave';

import './Header.css';

interface Props {
    text: string;
    isMain?: boolean;
}

const b = cn('Header');

export const Header: React.FC<Props> = ({ text, isMain }) => (
    <div className={b({main: isMain})}>
        <h1 className={b('Text')}>
            {text}
        </h1>
        <div className={b('Wave')}>
            <Wave />
        </div>
    </div>
);
