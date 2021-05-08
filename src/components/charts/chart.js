import React from 'react'
import ChartBar from './chartbar'
import './chart.css'

const Chart = (props) => {
    const datapointvalues = props.datapoints.map(datapoint => datapoint.value);
    const maxdatapoint = Math.max(...datapointvalues);
    return (
        <div className="chart">
            {props.datapoints.map(datapoint => <ChartBar key={datapoint.label} value={datapoint.value} maxvalue={maxdatapoint} label={datapoint.label} />)}

        </div>
    )
}
export default Chart;