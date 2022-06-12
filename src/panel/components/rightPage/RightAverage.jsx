import "./rightAverage.css";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  BarChart,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PanelPage from "../PanelPage";

const RightAverage = () => {
  const data = [
    {
      name: "",
      uv: 4000,
      members: 0,
      amt: 2400,
    },
    {
      name: "Jan",
      uv: 4000,
      members: 100,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 4000,
      members: 200,
      amt: 2400,
    },
    {
      name: "March",
      uv: 4000,
      members: 300,
      amt: 2400,
    },
    {
      name: "April",
      uv: 4000,
      members: 200,
      amt: 2400,
    },
    {
      name: "May",
      uv: 4000,
      members: 150,
      amt: 2400,
    },
    {
      name: "June",
      uv: 4000,
      members: 50,
      amt: 2400,
    },
    {
      name: "July",
      uv: 4000,
      members: 100,
      amt: 2400,
    },
    {
      name: "Aug",
      uv: 4000,
      members: 200,
      amt: 2400,
    },
    {
      name: "Sept",
      uv: 4000,
      members: 20,
      amt: 2400,
    },
    {
      name: "Oct",
      uv: 4000,
      members: 30,
      amt: 2400,
    },
    {
      name: "Nov",
      uv: 4000,
      members: 100,
      amt: 2400,
    },
    {
      name: "Dec",
      uv: 4000,
      members: 200,
      amt: 2400,
    },
  ];

  const allData = [
    {
      name: "",

      users: 10,
      movies: 30,
      amt: 2400,
    },
    {
      name: "",

      users: 20,
      movies: 30,
      amt: 2400,
    },
    {
      name: "",

      users: 10,
      movies: 35,
      amt: 2400,
    },
    {
      name: "",

      users: 30,
      movies: 40,
      amt: 2400,
    },
  ];
  return (
    <div className="panel_container">
      <div className="panel_wrapper">
        <PanelPage />
        <div className="getall_container">
          <div className="getall_wrapper">
            <div className="average_container">
              <div className="average_wrapper">
                <div className="average_chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      style={{ borderRadius: "10px", color: "black" }}
                      data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      className="average_area_chart"
                    >
                      <defs>
                        <linearGradient
                          id="colorUv"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#8884d8"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorPv"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#82ca9d"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#82ca9d"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />

                      <Area
                        type="monotone"
                        dataKey="members"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="average_others">
                  <div className="average_percent">
                    <div className="average_percent_chart">
                      <CircularProgressbar
                        value={75}
                        text={"75%"}
                        strokeWidth={3}
                        styles={buildStyles({
                          textColor: "black",
                        })}
                      />
                    </div>
                    <div className="average_card">
                      <div className="average_fact">
                        <h4 className="average_fact_title">Users</h4>
                        <h6 className="average_fact_percent">50%</h6>
                      </div>
                      <div className="average_fact">
                        <h4 className="average_fact_title">Movies</h4>
                        <h6 className="average_fact_percent">20%</h6>
                      </div>
                    </div>
                  </div>
                  <div className="average_calculate">
                    <div className="average_calculate_wrapper">
                      <div className="average_calculate_card">
                        <h5 className="average_calculate_card_title">
                          Incomes
                        </h5>
                        <div className="average_calculate_card_prices">
                          <p className="average_calculate_card_price">+ $500</p>
                          <p className="average_calculate_card_price">- $100</p>
                        </div>
                      </div>
                      <div className="average_calculate_card">
                        <h5 className="average_calculate_card_title">
                          Incomes
                        </h5>
                        <div className="average_calculate_card_prices">
                          <p className="average_calculate_card_price">+ $500</p>
                          <p className="average_calculate_card_price">- $100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAverage;
