import React, { useState } from 'react';
import { cn } from '@bem-react/classname';
import { Header } from '../Header/Header';

import './Questionnaire.css';

interface Props {}

const b = cn('Questionnaire');
const HEADER = 'Расскажи мне о своем лице';
const QUESTIONS = [
    {
        text: 'У меня матовая кожа (мало кожного сала)',
        id: '01'
    },
    {
        text: 'У меня блестящая кожа (много кожного сала)',
        id: '02'
    },
    {
        text: 'У меня блестит только лоб, нос и подбородок',
        id: '03'
    },
    {
        text: 'У меня не матовая и не блестящая кожа (лицо не жирное и не сухое)',
        id: '04'
    }
]

export const Questionnaire: React.FC<Props> = () => {
    const [answer, setAnswer] = useState<string>();
    return (
        <div className={b()}>
            <div className={b('Quiz')}>
                <Header text={HEADER} />
            </div>
            <div className={b('Buttons')}>

            </div>
        </div>
    )
};
