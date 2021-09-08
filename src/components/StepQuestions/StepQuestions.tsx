import React from 'react';
import { cn } from '@bem-react/classname';
import { QuestionItem } from '../QuestionItem/QuestionItem';
import { IQuestion } from '../pages/Questionnaire/Questionnaire';

import './StepQuestions.css';

interface Props {
    questions: IQuestion[];
    onAnswerSet: (answer: string) => void;
    answer?: string;
}

const b = cn('StepQuestions');

export const StepQuestions: React.FC<Props> = (props) => {
    const {questions, answer, onAnswerSet } = props;
    const items: React.ReactNode[] = questions.map(({text, id}) => (
        <QuestionItem
            text={text}
            id={id}
            onAnswerSet={onAnswerSet}
            isChecked={answer === id}
            key={id}
        />
    ));
    return (
        <div className={b()}>
            {items}
        </div>
    )
};
