import React, { useEffect } from 'react';
// роутинг для демо
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { Layout, LayoutIllustrationTypes } from '../Layout/Layout';
import { Main } from '../Main/Main';
import { Questionnaire } from '../Questionnaire/Questionnaire';

import './App.css';

const b = cn('App');

export const App: React.FC = () => {
    useEffect(() => {
        if (Screen && (Screen as any).lockOrientation) {
            (Screen as any).lockOrientation();
        }
    }, []);

    return (
        <BrowserRouter>
            <div className={b()}>
                <Switch>
                    <Route path="/" exact>
                        <Layout illustrationType={LayoutIllustrationTypes.TOP}>
                            <Main />
                        </Layout>
                    </Route>
                    <Route path="/form-demo">
                        <Layout illustrationType={LayoutIllustrationTypes.LEFT_BIG}>
                            <Questionnaire />
                        </Layout>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
