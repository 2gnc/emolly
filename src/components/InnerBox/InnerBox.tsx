import React from 'react';
import { cn } from '@bem-react/classname';

import './InnerBox.css';

interface Props {
    cls?: string;
}

const b = cn('InnerBox');

export const InnerBox: React.FC<Props> = ({ children, cls }) => <div className={b(null, [cls])}>{children}</div>;
