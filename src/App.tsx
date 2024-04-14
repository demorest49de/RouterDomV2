import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {Model} from "./components/pages/Model";


export const PATH = {
    PAGE1: {name: 'Adidas', path: '/adidas'},
    PAGE2: {name: 'Puma', path: '/puma'},
    PAGE3: {name: 'Abibas', path: '/abibas'},
    ERROR: {name: 'Error', path: '/error404'},
    MODEL: {name: 'Model', path: '/model/:modelId'},
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1.path}>{PATH.PAGE1.name}</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2.path}>{PATH.PAGE2.name}</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3.path}>{PATH.PAGE3.name}</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1.path}/>}/>

                        <Route path={PATH.PAGE1.path} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2.path} element={<Puma/>}/>
                        <Route path={PATH.PAGE3.path} element={<Abibas/>}/>
                        <Route path={PATH.ERROR.path} element={<Error404/>}/>
                        <Route path={PATH.MODEL.path} element={<Model/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                        {/*<Route path={'/*'} element={<Navigate to={PATH.ERROR.path}/>}/>*/}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

