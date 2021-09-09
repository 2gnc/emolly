import React  from 'react';
import { cn } from '@bem-react/classname';
import { Wave } from '../Wave/Wave';
import { IWithCls } from '../../typings';

import './Header.css';

interface Props extends IWithCls {
    text: string;
    isMain?: boolean;
    noWave?: boolean;
}

const b = cn('Header');

export const Header: React.FC<Props> = ({ text, isMain, noWave, cls }) => (
    <div className={b({main: isMain}, [cls])}>
        <h1 className={b('Text')}>
            {text}
        </h1>
        {
            !noWave &&
                <div className={b('Wave')}>
                    <Wave />
                </div>
        }
        
    </div>
);
