import React from 'react'
import { Card } from 'antd';
import ApiPureComponent from './models/PureComponent'
type PropProps = {

}

const ReactApiCom: React.FC<PropProps> = props => {
    return (
        <Card title="PureComponent" bordered={true}>
            <strong>会浅比较，props和state是否相同，来决定是否重新渲染组件</strong><br />
            <strong>点击按钮1，没有任何反应，因为PureComponent会比较两次data对象，都指向同一个data,没有发生改变，所以不更新视图。</strong>
            <ApiPureComponent />
        </Card>
    )
}

export default ReactApiCom