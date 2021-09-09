import React, { useState } from 'react';
import { cn } from '@bem-react/classname';
import { Button } from '../Button/Button';

import './EmailForm.css';

interface Props {}

const b = cn('EmailForm');

export const EmailForm: React.FC<Props> = () => {
    const handleFormSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    const [isUsernameInputValid, setUsernameInputValid] = useState<boolean | null>(true);
    const [isEmailInputValid, setEmailInputValid] = useState<boolean | null>(true);
    const [usernameInputContent, setUsernameInputContent] = useState('');
    const [emailInputContent, setEmailInputContent] = useState('');
    const [isAgreementChecked, setAgreementChecked] = useState(false);

    const isButtonEnabled = Boolean(isUsernameInputValid !== false &&
        isEmailInputValid !== false &&
        usernameInputContent.length &&
        emailInputContent.length &&
        isAgreementChecked);

    return (
        <form className={b()}>
            <label htmlFor="username">
                Имя
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={usernameInputContent}
                    onChange={(e) => setUsernameInputContent(e.target.value)}
                />
            </label>
            <label htmlFor="email">
                E-mail
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={emailInputContent}
                    onChange={(e) => setEmailInputContent(e.target.value)}
                />
            </label>
            <label htmlFor="confirm">
                <input
                    type="checkbox"
                    name="confirm"
                    id="confirm"
                    checked={isAgreementChecked}
                    onChange={() => setAgreementChecked(!isAgreementChecked)}
                    className={b('CheckboxInput')}
                />
                <div className={b('Checkbox')} />
                Согласие на обработку персональных данных
            </label>
            <Button
                text="Отправить"
                onClick={handleFormSubmit}
                disabled={!isButtonEnabled}
                cls={b('Button')}
            />
        </form>
    );
};
