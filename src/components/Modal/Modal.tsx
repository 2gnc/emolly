import React from 'react';
import { cn } from '@bem-react/classname';
import { IWithCls } from '../../typings';

import './Modal.css';

interface Props extends IWithCls {
    position: 'bottom' | 'center';
    isVisible: boolean;
    onClose: () => void;
}

const b = cn('Modal');

export const Modal: React.FC<Props> = ({ cls, position, children, isVisible, onClose }) => {
    const clickInterception = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }
    return (
        <div className={b({ position, visible: isVisible }, [cls])} onClick={onClose}>
            <div className={b('Content')} onClick={clickInterception}>
                <div className={b('Close')} onClick={onClose} />
                {children}
            </div>
        </div>
    );
}
