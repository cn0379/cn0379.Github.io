import React from 'react'
import { Card } from 'antd';
import ApiPureComponent from './models/PureComponent'
import ApiReactMemo from './models/MemoComponent'
import ApiForwardRef from './models/forwardRef'
import ApiLazy from './models/Lazy'

type PropProps = {

}

const ReactApiCom: React.FC<PropProps> = props => {
    return (
        <>
            <Card title="PureComponent" bordered={true}>
                <strong>会浅比较，props和state是否相同，来决定是否重新渲染组件</strong><br />
                <strong>点击按钮1，没有任何反应，因为PureComponent会比较两次data对象，都指向同一个data,没有发生改变，所以不更新视图。</strong>
                <ApiPureComponent />
            </Card>
            <Card title="ReactMemo" bordered={true}>
                <strong>
                    React.memo和PureComponent作用类似，可以用作性能优化，React.memo 是高阶组件，
                    函数组件和类组件都可以使用，
                </strong><br />
                <strong>和区别PureComponent是 React.memo只能对props的情
                    况确定是否渲染，而PureComponent是针对props和state。</strong>
                <p>

                </p>
                <ApiReactMemo />
            </Card>
            <Card title="ForwardRef" bordered={true}>
                <strong>可以获取隔代dom我所理解的是把原先注册到自己身上的ref传递至某一个元素</strong>
                <ApiForwardRef />
            </Card>
            <Card title="Lazy" bordered={true}>
                <strong>React.lazy和Suspense配合一起用，能够有动态加载组件的效果。React.lazy 接受一个函数，这个函数需要动态调用 import()。<br/>
                它必须返回一个 Promise ，该 Promise 需要 resolve 一个 default export 的 React 组件。</strong>
                <ApiLazy />
            </Card>
        </>
    )
}

export default ReactApiCom