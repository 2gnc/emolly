import React from 'react';
import { cn } from '@bem-react/classname';
import { InnerBox } from '../../InnerBox/InnerBox';
import { Header } from '../../Header/Header';
import { Logo } from '../../Logo/Logo';
import { Text } from '../../Text/Text';

import './Thanks.css';

const b = cn('Thanks');

export const Thanks: React.FC = () => (
    <InnerBox cls={b()}>
        <Header
            text="Отлично! Будем на связи! Твоя Emolly"
            noWave
            cls={b('Header')}
        />
        <Text cls={b('Text')}>
            Пиши нам: <a href="mailto:info@emolly.ru">info@emolly.ru</a>
        </Text>
        <Text cls={b('Text')}>
            Будем рады услышать твои предложения и ответить на вопросы
        </Text>
        <Logo cls={b('Logo')} />
        <p className={b('About')}>
            <a href="/">
                о проекте
            </a>
        </p>
    </InnerBox>
);
