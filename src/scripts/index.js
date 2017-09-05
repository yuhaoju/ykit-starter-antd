import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from 'antd';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <img
                    src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
                    style={{height: 240, width: 240}}
                />
                <h1>{this.props.name}</h1>
                <Card title="Card Component Example" style={{ width: 300 }}>
                    <p>
                        For more information please
                        <a href="https://ant.design/index-cn" target="_blank">
                            visit ant-design doc.
                        </a>
                    </p>
                </Card>
            </div>
        )
    }
}

ReactDOM.render(
    <App name="Ykit-Starter-Antd"/>, document.getElementById('app')
);

// hot-reload
if (module.hot) {
    module.hot.accept();
}
