import React from 'react';
import {
    Link
} from 'react-router-dom';

export default class UserList extends React.Component {

    state = {
        users: []
    }

    componentWillMount () {
        // 从缓存中取出数据
        let usersStr = localStorage.getItem('users');
        let users = usersStr ? JSON.parse(usersStr) : [];
        this.setState({users});
    }

    render () {
        let { users } = this.state;
        return (<ul className="list-group">
            {
                users.map(item => (<li className="list-group-item" 
                    key={item.id}>
                        <Link to={`/user/detail/${item.id}`}>{item.name}</Link>
                </li>))
            }
        </ul>);
    }
}