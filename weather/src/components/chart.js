import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'


export default (props) => {
    return (
        <div>
            <Sparklines height={70} width={100} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
    )
}



