import React from 'react';
import { cn } from '@bem-react/classname';
import { Logo } from '../Logo/Logo';
import { Header } from '../Header/Header';

import './Main.css';
const b = cn('Main');

interface Props {};

export const Main: React.FC<Props> = () => (
    <div className={b()}>
        <Logo />
        <Header
            text="сканер для подбора косметики"
            isMain
        />
        <div className={b('Content')}>
            dldld;ddl
        </div>
    </div>
);
