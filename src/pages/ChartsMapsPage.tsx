import { MapComponent } from '../components/ChartsMaps/MapComponent';
import LineGraph from '../components/ChartsMaps/LineGraph';

export default function Charts() {
  return (
    <div className="charts flex flex-col w-full items-center">
      <h2 className="font-bold text-2xl mb-9 text-center hover:text-blue-500 duration-300 cursor-default">
        Charts & Maps View
      </h2>
      <div className="mb-9">
        <LineGraph />
      </div>
      <div className="mb-9">
        <MapComponent />
      </div>
    </div>
  );
}
