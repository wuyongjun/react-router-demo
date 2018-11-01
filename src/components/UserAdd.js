import React from 'react';
import Uuid from 'uuid';
import { Prompt } from 'react-router-dom'

export default class UserAdd extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isPrompt: false
        }
    }

    addUser (ev) {
        ev.preventDefault();
        // 获取需要添加的数据
        let name = this.username.value;
        let age = this.userage.value;
        let phone = this.phonenumber.value;
        console.log(name, age, phone);
        // 将数据存储在本地存储localStorage中
        console.log(localStorage.getItem('users'));
        let users = localStorage.getItem('users');
        let userArr = users ? JSON.parse(users) : [];
        userArr.push({
            id: Uuid(),
            name,
            age,
            phone
        });
        localStorage.setItem('users', JSON.stringify(userArr));
        // 清空数据
        this.username.value = '';
        this.userage.value = '';
        this.phonenumber.value = '';
        // 跳转路由至学生列表
        this.props.history.push('/user/userList');
    }

    changeContent (ev) {
        let value = ev.target.value;
        this.setState({
            isPrompt: value.length > 0
        });
    }
    
    render () {
        return (<div>
            <Prompt when={this.state.isPrompt}
                message={location => `您确定要跳转${location.pathname}吗？`}></Prompt>
            <form className="form" onSubmit={this.addUser.bind(this)}>
                <div className="form-group">
                    <input type="text" name="userName" ref={input => this.username = input}
                        placeholder="请输入学生姓名" className="form-control"
                        onChange={this.changeContent.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="number" name="userAge" ref={input => this.userage = input}
                        placeholder="请输入学生年龄" className="form-control"
                        onChange={this.changeContent.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="number" name="phone" ref={input => this.phonenumber = input}
                        placeholder="请输入电话号码" className="form-control"
                        onChange={this.changeContent.bind(this)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-info">添 加</button>
                </div>
            </form>
        </div>);
    }
}