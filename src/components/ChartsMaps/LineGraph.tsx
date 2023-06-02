import { useQuery } from '@tanstack/react-query';
import { getFluctuationData } from './APIs.js';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from 'recharts';

export default function LineGraph() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['fluctuation'],
    queryFn: getFluctuationData,
  });

  if (isLoading) {
    return <span className="font-bold text-green-600">Loading Line Graph</span>;
  }

  if (isError) {
    return (
      <span className="font-bold text-red-700">Error Fetching Graph Data</span>
    );
  }

  return (
    <div className="line-plot w-full sm:w-1/2 lg:w-[560px]">
      <ResponsiveContainer aspect={4 / 3} width="100%">
        <LineChart
          margin={{ top: 5, bottom: 5, right: 5, left: 10 }}
          data={Object.keys(data.cases).map((item) => ({
            date: item,
            num: data.cases[item] / 1_000_000, // Normalize Y-Axis
          }))}
        >
          <Line type="monotone" dataKey="num" stroke="cyan" />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <XAxis dataKey="date">
            <Label value="Date" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis dataKey="num">
            <Label
              value="Cases (in M)"
              offset={-5}
              position="insideLeft"
              angle={-90}
              textAnchor="middle"
            />
          </YAxis>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
