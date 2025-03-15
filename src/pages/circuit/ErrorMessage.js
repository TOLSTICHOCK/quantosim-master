import ReactLoading from "react-loading";

const ErrorMessage = ({ data, loading }) => {
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
        <div className="graph-result-container">{data} </div>
      )}
    </div>
  );
};

// <Legend />

export default ErrorMessage;
