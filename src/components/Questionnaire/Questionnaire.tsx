import React, { useState, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { Header } from '../Header/Header';
import { StepQuestions } from '../StepQuestions/StepQuestions';

import './Questionnaire.css';

interface Props {}
export interface IQuestion {
    text: string;
    id: string;
};

const b = cn('Questionnaire');
const HEADER = 'Расскажи мне о своем лице';
const QUESTIONS: IQuestion[] = [
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
];

export const Questionnaire: React.FC<Props> = () => {
    const [answer, setAnswer] = useState<string>();
    const handleAnswerSet = useCallback((answer: string) => {
        setAnswer(answer);
    }, []);
    console.log({answer});
    return (
        <div className={b()}>
            <div className={b('Quiz')}>
                <Header text={HEADER} />
            </div>
            <div className={b('Buttons')}>
                <StepQuestions
                    questions={QUESTIONS}
                    onAnswerSet={handleAnswerSet}
                    answer={answer}
                />
            </div>
        </div>
    )
};
