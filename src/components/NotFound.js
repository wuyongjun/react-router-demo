import React from 'react';

class NotFound extends React.Component {

    state = {
        count: 5
    }

    componentDidMount () {
        this.timer = setInterval(() => {
            let count = this.state.count;
            let {history} = this.props;
            this.setState({
                count: count - 1
            });
            if (count === 0) {
                history.push('/home');
            }
        }, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    render () {
        return (<div>
            <h2>404 您访问的页面不存在！<span style={{color: 'red'}}>{this.state.count}s</span>后跳转至主页。</h2>
        </div>);
    }
}

export default NotFound;