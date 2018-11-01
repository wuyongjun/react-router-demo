import React from 'react';
import {
    BrowserRouter,
    Route,
    NavLink,
    Redirect,
    Switch
} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Profile from './Profile'; 
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRouter from './PrivateRouter';
import Login from './Login';
import Regist from './Regist'
import TipButton from './TipButton';
import NotFound from './NotFound'

// const NotFound = () => (<h2>你访问的页面不存在！</h2>);

export default (
    <BrowserRouter>
        <div>
            <div className="full-container">
                <nav className="navbar navbar-dark bg-primary">
                    <div className="col-md-2">
                        <div className="navbar-brand">REACT管理系统</div>
                    </div>
                    <div className="col-md-7">
                        <ul className="navbar-nav flex-row">
                            <li className="mx-3">
                                <NavLink className="nav-link" to="/home" activeClassName="active">首 页</NavLink>
                            </li>
                            <li className="mx-3">
                                <NavLink className="nav-link" to="/user" activeClassName="active">学员管理</NavLink>
                            </li>
                            <li className="mx-3">
                                <NavLink className="nav-link" to="/profile" activeClassName="active">个人设置</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="navbar-nav flex-row">
                            <li className="mx-3 mt-2">
                                <TipButton></TipButton>
                            </li>
                            <li className="mx-3 mt-2">
                                <NavLink className="nav-link" to='/regist' activeClassName="active">注 册</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="container mt-3">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/user" component={User} />
                    <Route path="/login" component={Login} />
                    <Route path="/regist" component={Regist} />
                    {/* <Route path="/profile" component={Profile} /> */}
                    {/* 在这里定义一个私有路由，根据auto中的登录或权限情况做相关的逻辑---路由拦截 */}
                    <PrivateRouter path="/profile" component={Profile}></PrivateRouter>
                    <Redirect exact from="/" to="/home"></Redirect>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);