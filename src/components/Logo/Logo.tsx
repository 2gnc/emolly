import React from 'react';
import { cn } from '@bem-react/classname';
import { IWithCls } from '../../typings';

import './Logo.css';

interface Props extends IWithCls {}

const b = cn('Logo');

export const Logo: React.FC<Props> = ({ cls }) => <div className={b(null, [cls])} />;
