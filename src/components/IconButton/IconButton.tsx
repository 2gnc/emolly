import React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

import './IconButton.css';

interface Props {
    type: 'photo' | 'upload';
    onClick: () => void;
}

const b = cn('IconButton');

export const IconButton: React.FC<Props> = ({ type, onClick }) => {
    const  text = type === 'photo' ?
        'Сфотографировать состав' :
        'Загрузить фото состава';
    
    return (
        <div className={b()} onClick={onClick}>
            <p className={b('Text')}>
                {text}
            </p>
            <Link to="/result-demo">
                <div className={b('Icon', { type })} />
            </Link>
        </div>
    )
}
