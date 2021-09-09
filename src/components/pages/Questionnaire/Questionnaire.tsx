import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { InnerBox } from '../../InnerBox/InnerBox';
import { Header } from '../../Header/Header';
import { ArrowButton } from '../../ArrowButton/ArrowButton';
import { StepQuestions } from '../../StepQuestions/StepQuestions';

import './Questionnaire.css';

interface Props {}
export interface IQuestion {
    text: string;
    id: string;
};

const b = cn('Questionnaire');
const HEADER = 'Есть ли у тебя на лице постоянные покраснения, сосудистая сетка, высыпания?';
const QUESTIONS: IQuestion[] = [
    {
        text: `У меня матовая кожа (мало кожного сала)`,
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

    const handleLeftArrowClick = useCallback(() => {}, []);
    const handleRightArrowClick = useCallback(() => {}, []);

    return (
        <InnerBox cls={b('Box')}>
            <div className={b('Quiz')}>
                <Header text={HEADER} />
                <StepQuestions
                    questions={QUESTIONS}
                    onAnswerSet={handleAnswerSet}
                    answer={answer}
                />
                <div className={b('Buttons')}>
                    <ArrowButton direction="left" onClick={handleLeftArrowClick} />
                    <Link to="/upload-demo">
                        <ArrowButton direction="right" onClick={handleRightArrowClick} />
                    </Link>
                </div>
            </div>
        </InnerBox>
    )
};
