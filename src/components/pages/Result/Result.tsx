import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { InnerBox } from '../../InnerBox/InnerBox';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { Logo } from '../../Logo/Logo';
import { Modal } from '../../Modal/Modal';
import { EmailForm } from '../../EmailForm/EmailForm';

import './Result.css';

enum SkinTypes {
    NORMAL = 'нормальная'
}
interface Props {
    skinType?: SkinTypes
}

const b = cn('Result');

export const Result: React.FC<Props> = ({ skinType = SkinTypes.NORMAL }) => {
    const [isModalShown, setModalShown] = useState(false);
    const handleModalClose = useCallback(() => {
        setModalShown(false);
    }, []);
    const handleModalOpen = () => {
        setModalShown(true);
    }

    return (
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
            <Link to="/thanks-demo" className={b('DELETE_THIS')}>
            <div className={b('Skin')}>
                {skinType}
            </div>
            </Link>
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
                onClick={handleModalOpen} 
            />
            <Modal position="bottom" isVisible={isModalShown} onClose={handleModalClose}>
                <EmailForm />
            </Modal>
        </InnerBox>
    );
};
