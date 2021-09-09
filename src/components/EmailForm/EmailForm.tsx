import React from 'react';
import { cn } from '@bem-react/classname';
import { Button } from '../Button/Button';

import './EmailForm.css';

interface Props {}

const b = cn('EmailForm');

export const EmailForm: React.FC<Props> = () => {
const handleFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
}
    return (
        <form className={b()}>
            <Button
                text="Отправить"
                onClick={handleFormSubmit}
            />
        </form>
    );
};
