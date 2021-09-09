import React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import { InnerBox } from '../../InnerBox/InnerBox';
import { Logo } from '../../Logo/Logo';
import { Header } from '../../Header/Header';
import { Button } from '../../Button/Button';
import { Text } from '../../Text/Text';

import './Main.css';
const b = cn('Main');

interface Props {};

export const Main: React.FC<Props> = () => (
    <InnerBox cls={b()}>
        <header className={b('Header')}>
            <Logo cls={b('Logo')} />
            <Header
                text="сканер для подбора косметики"
                isMain
            />
        </header>
        <div className={b('Content')}>
            <h3 className={b('Hello')}>Привет!</h3>
            <Text cls={b('Text')}>
                Я Emolly, твой личный косметолог, и я помогу тебе подобрать косметику для ухода за лицом.
                Просто сфотографируй средство, которое собираешься купить, и пришли фото мне.
                Я проанализирую его состав и скажу, насколько оно тебе подходит. 
                А еще я расскажу, на что тебе обращать внимание при выборе косметики.
            </Text>
            <Text cls={b('Text')}>
                Но для начала давай познакомимся.
            </Text>
            <Link to="/form-demo" className="Button_isLink">
                <Button
                    text="Познакомиться"
                    link="ya.ru"
                />
            </Link>
        </div>
    </InnerBox>
);
