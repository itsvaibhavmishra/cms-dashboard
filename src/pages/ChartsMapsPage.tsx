import LineGraph from '../components/ChartsMaps/LineGraph';
import { MapComponent } from '../components/ChartsMaps/MapComponent';

export default function Charts() {
  return (
    <div className="charts flex flex-col w-full items-center">
      <h2 className="font-bold mb-9">Charts View</h2>
      <div className="mb-9">
        <LineGraph />
      </div>
      <div className="mb-9">
        <MapComponent />
      </div>
    </div>
  );
}
