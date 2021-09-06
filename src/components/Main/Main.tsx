import React from 'react';
import { cn } from '@bem-react/classname';
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
                    Я проанализирую его состав и скажу, насколько оно тее подходит. 
                    А еще я расскажу, на что тебе обращать внимание при выборе косметики.
                </p>
                <p className={b('Text')}>
                    Но для начала давай познакомимся.
                </p>

                <Button
                    text="Познакомиться"
                    // onClick={() => console.log(123)}
                    link="ya.ru"
                    cls="customClass"
                />
            </div>
        </div>
    </InnerBox>
);
