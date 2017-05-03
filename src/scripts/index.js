import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from 'antd';

class HelloMessage extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>{this.props.name}</h1>
                <Card title="Card Component" style={{ width: 300 }}>
                    <p>
                        <a href="https://ant.design/index-cn" target="_blank">
                            Visit ant-design doc
                        </a>
                    </p>
                    <p>
                        <a href="http://ued.qunar.com/ykit/index.html" target="_blank">
                            Visit ykit doc
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/roscoe054/ykit-config-antd" target="_blank">
                            Visit ykit-config-antd doc
                        </a>
                    </p>
                </Card>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloMessage name="Ykit-Starter-Antd"/>, document.getElementById('app')
);

// hot-reload
if (module.hot) {
    module.hot.accept();
}
