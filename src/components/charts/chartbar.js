import React from 'react'
import './charbar.css'

export const Chartbar = (props) => {
    let fillbar = "0%";
    if (props.maxvalue > 0) {
        fillbar = Math.round((props.value / props.maxvalue) * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: fillbar }}></div>
                <div className="chart-bar__label">{props.label}</div>
            </div>
        </div>
    )
}
export default Chartbar
