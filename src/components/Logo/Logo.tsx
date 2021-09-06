import React from 'react';
import { cn } from '@bem-react/classname';

import './Logo.css';

interface Props {}

const b = cn('Logo');

export const Logo: React.FC<Props> = () => <div className={b()} />;
