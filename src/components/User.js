import React from 'react';
import {
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';

class User extends React.Component {
    render () {
        return (<div className="row">
            <div className="col-3">
                <div className="nav flex-column text-align">
                    <li className="nav-item">
                        <NavLink to="/user/list" className="nav-link" 
                            activeClassName="bg-primary text-light">学生列表</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user/add" className="nav-link"
                            activeClassName="bg-primary text-light">添加学生</NavLink>
                    </li>
                </div>
            </div>
            <div className="col-9">
                <Switch>
                    <Route path="/user/list" component={UserList}></Route>
                    <Route path="/user/add" component={UserAdd}></Route>
                    <Route path="/user/detail/:id" component={UserDetail}></Route>
                    <Redirect from="/user" to="/user/list"></Redirect>
                </Switch>
            </div>
        </div>);
    }
}

export default User;