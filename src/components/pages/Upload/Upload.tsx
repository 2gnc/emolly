import React, { useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { InnerBox } from '../../InnerBox/InnerBox';
import { Wave } from '../../Wave/Wave';
import { IconButton } from '../../IconButton/IconButton';
import { Logo } from '../../Logo/Logo';
import { Text } from '../../Text/Text';

import './Upload.css';

interface Props {}

const b = cn('Upload');

export const Upload: React.FC<Props> = () => {
    const handlePhotoClick = useCallback(() => false, []);
    const handleUploadClick = useCallback(() => false, []);

    return (
        <InnerBox cls={b('Box')}>
            <Logo cls={b('Logo')} />
            <Text>
                Отлично! Теперь можем выбрать тебе косметику.
            </Text>
            <Text>
                Возьми любое средство для ухода за лицом, сфотографируй список ингредиентов на упаковке, отправь мне и – вуаля! Я скажу, что тебе от этой косметики ждать. 
            </Text>
            <Text>
                Попробуем?
            </Text>
            <Wave cls={b('Wave')} />
            <div className={b('Icons')}>
                <IconButton type="photo" onClick={handlePhotoClick} />
                <IconButton type="upload" onClick={handleUploadClick} />
            </div>
        </InnerBox>
    )
};
