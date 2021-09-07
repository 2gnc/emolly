import React from 'react';
import { cn } from '@bem-react/classname';

import './QuestionItem.css';

interface Props {
    id: string;
    text: string;
    isChecked?: boolean;
    onAnswerSet: (id: string) => void;
}

const b = cn('QuestionItem');

export const QuestionItem: React.FC<Props> = ({ text, id, isChecked, onAnswerSet }) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        onAnswerSet(id);
    };
    console.log('ITEM', id, isChecked)
    return (
        <div className={b()} onClick={handleClick}>
            <div className={b('Radio', {checked: isChecked})} />
            <div className={b('Text')}>
                {isChecked}
                {text}
            </div>
        </div>
    );
};
