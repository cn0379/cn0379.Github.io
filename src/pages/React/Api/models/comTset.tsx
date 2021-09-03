import React from 'react'

class Test extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('--componentDidMount--')
    }
    render() {
        return <div>
            done
        </div>
    }
}

export default Test