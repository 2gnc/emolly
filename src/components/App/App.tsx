import React, { useEffect } from 'react';
// роутинг для демо
import { LayoutIllustrationTypes } from '../../typings';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { Layout } from '../Layout/Layout';
import { Main } from '../pages/Main/Main';
import { Questionnaire } from '../pages/Questionnaire/Questionnaire';
import { Upload } from '../pages/Upload/Upload';
import { Result } from '../pages/Result/Result';
import { Thanks } from '../pages/Thanks/Thanks';

import './App.css';

const b = cn('App');

export const App: React.FC = () => {
    const setViewportHeight = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    useEffect(() => {
        if (Screen && (Screen as any).lockOrientation) {
            (Screen as any).lockOrientation();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', setViewportHeight);
        return () => window.removeEventListener('resize', setViewportHeight);
    }, [])

    return (
        <BrowserRouter>
            <div className={b()}>
                <Switch>
                    <Route path="/form-demo" exact>
                        <Layout illustrationType={LayoutIllustrationTypes.LEFT_BIG}>
                            <Questionnaire />
                        </Layout>
                    </Route>
                    <Route path="/upload-demo" exact>
                        <Layout illustrationType={LayoutIllustrationTypes.BOTTOM}>
                            <Upload />
                        </Layout>
                    </Route>
                    <Route path="/result-demo" exact>
                        <Layout illustrationType={LayoutIllustrationTypes.TOP_HALF}>
                            <Result />
                        </Layout>
                    </Route>
                    <Route path="/thanks-demo" exact>
                        <Layout illustrationType={LayoutIllustrationTypes.BOTTOM}>
                            <Thanks />
                        </Layout>
                    </Route>
                    <Route path="*" >
                        <Layout illustrationType={LayoutIllustrationTypes.TOP}>
                            <Main />
                        </Layout>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
