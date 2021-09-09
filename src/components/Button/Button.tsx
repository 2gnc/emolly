import React from 'react';
import { cn } from '@bem-react/classname';
import { IWithCls } from '../../typings';

import './Button.css';

interface Props extends IWithCls {
    text: string; // контент кнопки
    onClick?: (e: React.MouseEvent) => void; // обработчик клика если компонент используется как кнопка
    link?: string; // урл если компонент должен являться ссылкой
    disabled?: boolean;
}

const b = cn('Button');

export const Button: React.FC<Props> = ({ text, onClick, link, cls, disabled = false }) => {
    if (link) {
        return (
            <a href={link} className={b({ isLink: true }, [cls])}>
                {text}
            </a>
        )
    } else if (onClick) {
        return (
            <button onClick={onClick} className={b(null, [cls])} disabled={disabled}>
                {text}
            </button>
        )
    } else {
        return null;
    }
}
