import React from 'react';

export default class UserDetail extends React.Component {

    state = {
        user: {}
    }

    componentWillMount () {
        console.log(this.props.match)
        let usersStr = localStorage.getItem('users');
        let users = usersStr ? JSON.parse(usersStr) : [];
        let user = users.find(item => item.id === this.props.match.params.id);
        console.log(user);
        this.setState({user});
    }

    goBack () {
        this.props.history.goBack();
    }

    render () {
        let { user } = this.state;
        return (<table className="table">
            <thead>
                <tr>
                    <th>UID</th>
                    <th>学生名字</th>
                    <th>联系方式</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <button className="btn btn-default"
                            onClick={this.goBack.bind(this)}>返 回</button>
                    </td>
                </tr>
            </tbody>
        </table>);
    }
}