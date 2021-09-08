import React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import { InnerBox } from '../InnerBox/InnerBox';
import { Logo } from '../Logo/Logo';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';

import './Main.css';
const b = cn('Main');

interface Props {};

export const Main: React.FC<Props> = () => (
    <InnerBox>
        <div className={b()}>
            <Logo />
            <Header
                text="сканер для подбора косметики"
                isMain
            />
            <div className={b('Content')}>
                <h3 className={b('Hello')}>Привет!</h3>
                <p className={b('Text')}>
                    Я Emolly, твой личный косметолог, и я помогу тебе подобрать косметику для ухода за лицом.
                    Просто сфотографируй средство, которое собираешься купить, и пришли фото мне.
                    Я проанализирую его состав и скажу, насколько оно тебе подходит. 
                    А еще я расскажу, на что тебе обращать внимание при выборе косметики.
                </p>
                <p className={b('Text')}>
                    Но для начала давай познакомимся.
                </p>

                <Link to="/form-demo" className="Button_isLink">
                    <Button
                        text="Познакомиться"
                        link="ya.ru"
                    />
                </Link>
            </div>
        </div>
    </InnerBox>
);
