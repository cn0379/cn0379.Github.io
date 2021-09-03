import React from 'react'
import {
    SyncOutlined,
  } from '@ant-design/icons';

import Test from './comTset'

const LazyComponent = React.lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            default: () => <Test />
        })
    }, 2000)
}))

class index extends React.Component {
    render() {
        return <div className="context_box" style={{ marginTop: '50px' }}   >
            <React.Suspense fallback={<div className="icon" ><SyncOutlined spin /></div>} >
                <LazyComponent />
            </React.Suspense>
        </div>
    }
}


export default index