import React from 'react';
import { cn } from '@bem-react/classname';
import { Layout, LayoutIllustrationTypes } from '../Layout/Layout';
import { Main } from '../Main/Main';

import './App.css';

const b = cn('App');

export const App: React.FC = () => {
  return (
    <div className={b()}>
      <Layout illustrationType={LayoutIllustrationTypes.TOP}>
        <Main />
      </Layout>
    </div>
  );
}
