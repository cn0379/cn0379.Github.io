import React, { useState, useEffect } from 'react'
const MyApi = {
    num: 0,
    sub(cb) {
        this.intervalId = setInterval(() => {
            this.num += 1
            cb(this.num)
        }, 1000)
    },
    unSub() {
        clearInterval(this.intervalId);
        this.reset()
    },
    reset() {
        this.num = 0
    }
}
type PropsType = {}
const useEffectCom: React.FC<PropsType> = props => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('bob')
    /* *
    * 第二个参数：
    *    [], 相当于 生命周期的 componentDidMount
    *    没有第二个参数相当于 生命周期 函数componentMount componentDidUpdate
    *    [xxx] 某个值发生变化改变
     * */
    useEffect(() => {
        MyApi.sub(cur => {
            setCount(cur)
        })

        return () => {
            MyApi.unSub()
        }
    }, [])

    return (
        <div>
            <h4>Effect 优化 跳出页面清除定时器</h4>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }} >click</button>
            <button onClick={() => { setName('bob.zhang') }} >click</button>
        </div>
    )
}

export default useEffectCom