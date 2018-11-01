import React from 'react';
import Uuid from 'uuid';

class Regist extends React.Component {

    state = {
        admins: []
    }

    regist = (ev) => {
        ev.preventDefault();
        console.log(this.props);
        let { history } = this.props;
        // 获取信息
        let name = this.nameInput.value;
        let age = this.ageInput.value;
        let tel = this.telInput.value;
        let password = this.passwordInput.value;
        // 从本地存储中获取已注册的管理员
        let adminStr = localStorage.getItem('admins');
        let admins = adminStr ? JSON.parse(adminStr) : [];
        admins.push({
            id: Uuid(),
            name,
            age,
            tel,
            password
        });
        this.setState({ admins }); // ????
        console.log(this.state);
        localStorage.setItem('admins', JSON.stringify(admins));
        alert('注册成功');
        // 跳转登录页面
        history.push('/login');
    }

    render () {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <div className="card text-white">
                        <div className="card-header bg-primary">
                            注 册
                        </div>
                        <div className="card-body">
                            <form className="form" onSubmit={this.regist}>
                                <div className="form-group">
                                    <input type="text" placeholder="请输入学生姓名" className="form-control"
                                        ref={(input) => this.nameInput = input}  />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="请输入学生年龄" className="form-control"
                                        ref={(input) => this.ageInput = input} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="请输入联系方式" className="form-control"
                                         ref={(input) => this.telInput = input} />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="请输入密码" className="form-control"
                                         ref={(input) => this.passwordInput = input} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">提 交</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regist;