import ReactLoading from "react-loading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = ({ data, loading }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <b className="label">{`${payload[0].value} %`}</b>
          <p className="label">{`${label}`} </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {loading ? (
        <div
          className="loading"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ReactLoading
            type={"spin"}
            color={"rgb(0, 114, 188)"}
            height={40}
            width={40}
          />
        </div>
      ) : (
        <div className="graph-result-container">
          <BarChart
            width={950}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              tick={{ fontFamily: "Segoe UI", fill: "#000" }}
              dataKey="name"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis tick={{ fontFamily: "Segoe UI", fill: "#000" }} />
            <Tooltip content={CustomTooltip} cursor={{ fill: "transparent" }} />

            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="shots"
              fill="rgb(0, 114, 188)"
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </div>
      )}
    </div>
  );
};

// <Legend />

export default Graph;
