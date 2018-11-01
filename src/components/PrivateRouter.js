import React from 'react';
import auth from '../auth';
import {
    Route,
    Redirect
} from 'react-router-dom';

class PrivateRouter extends React.Component {
    render () {
        let { component:Component, ...rest } = this.props;
        return (<div>
            {/* 这里进行判断，如果登录了，就进入个人设置组件，否则就跳转登录组件，
                注意，这里应该传递用户本来想要跳转的组件，即个人设置组件，这个组件定义的目的为了代替<Route />
                从而达到添加我们自己要求的结果，******所以返回值应该是<Route />********/}
            {/* render函数和component属性一样，为Route组件返回路由跳转所对应的组件 */}
            {
               <Route {...rest} render={(props) => (
                    auth.isLogin ? <Component {...props} /> : <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
               )} />
            }
        </div>);
    }
}

export default PrivateRouter;