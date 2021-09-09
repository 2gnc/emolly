import React from 'react';
import { cn } from '@bem-react/classname';
import { InnerBox } from '../../InnerBox/InnerBox';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { Logo } from '../../Logo/Logo';

import './Result.css';

enum SkinTypes {
    NORMAL = 'нормальная'
}
interface Props {
    skinType?: SkinTypes
}

const b = cn('Result');

export const Result: React.FC<Props> = ({ skinType = SkinTypes.NORMAL }) => (
    <InnerBox cls={b()}>
        <Logo cls={b('Logo')} />
        <Text>
            Прости! Не хотела разочаровывать
            тебя, но я только учусь магии
            распознавания составов. Через
            несколько месяцев я буду уметь все и
            точно тебя не подведу!
            Но у меня есть для тебя и хорошие
            новости.
        </Text>
        <Text>
            Во-первых, твой тип кожи: 
        </Text>
        <div className={b('Skin')}>
            {skinType}
        </div>
        <Text cls={b('Extender')}>
            А во-вторых, как только я буду готова,
            я подарю тебе бесплатную подписку
            на мой премиум-аккаунт – там
            будет много всего полезного. Можешь
            оставить свой e-mail – я подключу к
            нему и пришлю уведомление.
        </Text>
        <Button
            text="Оставить e-mail"
            onClick={() => null} 
        />
    </InnerBox>
);
