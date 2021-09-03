import React, { useEffect, useState } from 'react'

type PropsType = {

}

const inputValueHook: React.FC<PropsType> = props => {
    const useInputvalue = <T extends string>(initiaValue: T) => {
        const [value, setValue] = useState<string>(initiaValue)
        return {
            value,
            onChange: (e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
        }
    }
    const text = useInputvalue('test')
    useEffect(()=>{
    },[text])
    return (
        <div>
            <h4>自定义hook</h4>
            <form>
                <input type="text" {...text} />
            </form>
        </div>
    )
}

export default inputValueHook