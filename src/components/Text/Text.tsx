import React from 'react';
import { cn } from '@bem-react/classname';
import { IWithCls } from '../../typings';

import './Text.css';

interface Props extends IWithCls {}

const b = cn('Text');

export const Text: React.FC<Props> = ({cls, children }) => <p className={b(null, [cls])}>{children}</p>
