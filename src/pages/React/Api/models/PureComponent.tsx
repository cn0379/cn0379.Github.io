/*
 * @Author: your name
 * @Date: 2021-09-01 18:38:28
 * @LastEditTime: 2021-09-01 19:15:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-react-master\src\pages\React\Api\models\PureComponent.tsx
 */
import React from 'react'

class ApiPureComponent extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                name: 'bob',
                age: 21,
            }
        }
    }

    handerClick = () => {
        const { data } = this.state
        data.age++
        this.setState({ data })
    }
    render() {
        const { data } = this.state
        return <div className="box" >
            <div className="show" >
                <div> 你的姓名是: {data.name} </div>
                <div> 年龄： {data.age}</div>
                <button onClick={this.handerClick} >按钮1</button>
                <button onClick={() => this.setState({ data: { ...data } })} >按钮2 浅克隆了一层</button>
            </div>
        </div>
    }
}

export default ApiPureComponent
