
import React from 'react'
import InputValueHook from './models/InputValueHook'
import UseEffectCom from './models/UseEffectCom'

type PropsType = {}

const HookCom: React.FC<PropsType> = props => {

    return (
        <>
            <InputValueHook />
            <UseEffectCom />
        </>
    )
}

export default HookCom