import React from 'react';
import { cn } from '@bem-react/classname';

import './Button.css';

interface Props {
    text: string; // контент кнопки
    cls?: string; // кастомный css класс
    onClick?: (e: React.MouseEvent) => void; // обработчик клика если компонент используется как кнопка
    link?: string; // урл если компонент должен являться ссылкой
}

const b = cn('Button');

export const Button: React.FC<Props> = ({ text, onClick, link, cls }) => {
    if (link) {
        return (
            <a href={link} className={b({ isLink: true }, [cls])}>
                {text}
            </a>
        )
    } else if (onClick) {
        return (
            <button onClick={onClick} className={b(null, [cls])}>
                {text}
            </button>
        )
    } else {
        return null;
    }
}
