import React from 'react';
import { cn } from '@bem-react/classname';
import { IWithCls } from '../../typings';

import './InnerBox.css';

interface Props extends IWithCls {}

const b = cn('InnerBox');

export const InnerBox: React.FC<Props> = ({ children, cls }) => <div className={b(null, [cls])}>{children}</div>;
