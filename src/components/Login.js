import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../auth'; 

class Login extends React.Component {

    state = {
        isLoginSuc: false
    }

    login = (ev) => {
        ev.preventDefault();
        let username = this.nameInput.value;
        let password = this.passwordInput.value;
        auth.login(() => {
            // 校验用户和密码
            let adminsStr = localStorage.getItem('admins');
            let adminsArr = adminsStr ? JSON.parse(adminsStr) : [];
            let isHasUser = adminsArr.some(user => user.name === username);
            if (isHasUser) {
                let user = adminsArr.find(user => user.name === username);
                if (user.password === password) {
                    auth.isLogin = true;
                    this.setState({ isLoginSuc: true });
                    // 存储登录的管理员
                    localStorage.setItem('admin', JSON.stringify(user));
                } else {
                    alert('密码错误');
                }
            } else {
                alert('用户未注册');
            }
        });
    }

    render () {
        let { from } = this.props.location.state || { from: { pathname: '/' }};
        console.log(from);
        let { isLoginSuc } = this.state;
        if (isLoginSuc) {
            console.log('isLoginSuc', isLoginSuc);
            return <Redirect to={from} />
        }
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <div className="card text-white">
                        <div className="card-header bg-primary">
                            登 录
                        </div>
                        <div className="card-body">
                            <form className="form" onSubmit={this.login}>
                                <div className="form-group">
                                    <input type="text" placeholder="请输入登录名" className="form-control"
                                        ref={(input) => this.nameInput = input}  />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="请输入登录密码" className="form-control"
                                        ref={(input) => this.passwordInput = input}  />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">登 录</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;