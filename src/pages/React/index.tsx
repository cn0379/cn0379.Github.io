/*
 * @Author: your name
 * @Date: 2021-07-17 17:17:16
 * @LastEditTime: 2021-08-07 12:12:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin-main\src\pages\React\index.tsx
 */
import React from 'react'
import LifeCom from './LifeCom'
import HookCom from './HookCom'
import ReactApiCom from './Api'
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
type PropProps = {

}

const ReactCom: React.FC<PropProps> = props => {
  return (
    <PageContainer>
      <Card title="生命周期" bordered={true}>
        <LifeCom />
      </Card>
      <Card title="Hook" bordered={true}>
        <HookCom />
      </Card>
      <Card title="React Api" bordered={true}>
        <ReactApiCom />
      </Card>
    </PageContainer>
  )
}

export default ReactCom