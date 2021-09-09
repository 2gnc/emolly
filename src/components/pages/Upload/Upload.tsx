import React from 'react';
import { cn } from '@bem-react/classname';
import { InnerBox } from '../../InnerBox/InnerBox';
import { Wave } from '../../Wave/Wave';

import './Upload.css';

interface Props {}

const b = cn('Upload');

export const Upload: React.FC<Props> = () => (
    <InnerBox>
        <p className={b('Text')}>
            Отлично! Теперь можем выбрать тебе косметику.
        </p>
        <p className={b('Text')}>
            Возьми любое средство для ухода за лицом, сфотографируй список ингредиентов на упаковке, отправь мне и – вуаля! Я скажу, что тебе от этой косметики ждать. 
        </p>
        <p className={b('Text')}>
            Попробуем?
        </p>
        <Wave />
    </InnerBox>
);
