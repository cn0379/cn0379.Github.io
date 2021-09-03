/*
 * @Author: your name
 * @Date: 2021-09-01 18:38:04
 * @LastEditTime: 2021-09-02 18:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-react-master\src\pages\React\Api\models\MemoComponent.tsx
 */
import React from 'react'

function TextMemo (props) {
    console.log('子组件渲染');
    if(props){
        return  <div>hllow,world</div>
    }
}

const controlIsRender = (pre,next)=>{
    if(pre.number === next.number  ){ // number 不改变 ，不渲染组件
        return true 
    }else if(pre.number !== next.number && next.number > 5 ) { // number 改变 ，但值大于5 ， 不渲染组件
        return true
    }else { // 否则渲染组件
        return false
    }
 }


 const NewTexMemo = React.memo(TextMemo,controlIsRender)

 class ReactMemo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number:1,
            num:1
        }
    }
    render(){
        const { num , number }  = this.state
        return (
            <div>
            <div>
                改变num：当前值 { num }  
                <button onClick={ ()=>this.setState({ num:num + 1 }) } >num++</button>
                <button onClick={ ()=>this.setState({ num:num - 1 }) } >num--</button>  
            </div>
            <div>
                改变number： 当前值 { number } 
                <button onClick={ ()=>this.setState({ number:number + 1 }) } > number ++</button>
                <button onClick={ ()=>this.setState({ number:number - 1 }) } > number -- </button>  
            </div>
            <NewTexMemo num={ num } number={number}  />
        </div>
        )
    }
}

export default ReactMemo
