import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amountArray = props.dataPoints.map((dp) => dp.value);
  const maxAmount = Math.max(...amountArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          value={dp.value}
          maxValue={maxAmount}
        />
      ))}
    </div>
  );
};

export default Chart;
