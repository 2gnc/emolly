import React from 'react';
import { cn } from '@bem-react/classname';
import { IWithCls } from '../../typings';

import './Wave.css';

interface Props extends IWithCls {}

const b = cn('Wave');

export const Wave: React.FC<Props> = ({ cls }) => <div className={b(null, [cls])} />;
