import React from 'react';
import { cn } from '@bem-react/classname';

import './InnerBox.css';

interface Props {}

const b = cn('InnerBox');

export const InnerBox: React.FC<Props> = ({ children }) => <div className={b()}>{children}</div>;
