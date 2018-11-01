import React from 'react';
import { withRouter } from 'react-router-dom';
import auth from '../auth';

class TipButton extends React.Component {

    handleClick = () => {
        let { history } = this.props;
        console.log(history);
        auth.loginout(() => {
            auth.isLogin = false;
            localStorage.removeItem('admin');
            history.replace('/home');
        });
    }

    render () {
        return auth.isLogin ? <p style={{textAlign: 'center', color: 'white', cursor: 'pointer'}}>
            <a className="nav-link" onClick={this.handleClick}>欢迎回来，退出登录</a>
        </p> : <p style={{textAlign: 'center', color: 'white', cursor: 'pointer'}}>您未登录，只能访问部分页面</p>
    }
}

// withRouter可以帮助普通组件即和路由无相关的组件获取到路由相关的信息，存放在props中
// export default withRouter((props) => {
//     console.log(props);
//     let { history } = props;
//     return auth.isLogin ? <p style={{textAlign: 'center', color: 'white', cursor: 'pointer'}}>
//         <a className="nav-link" onClick={() => {
//             auth.loginout(() => {
//                 history.replace('/home');
//             });
//         }}>欢迎管理员回来，退出登录</a>
//     </p> : <p style={{textAlign: 'center', color: 'white', cursor: 'pointer'}}>
//         您未登录，只能访问部分页面
//     </p>;
// });
export default withRouter(TipButton);