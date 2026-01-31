export default function InspectorPanel({ selected }) {
  if (!selected) {
    return (
      <div className="w-72 bg-white border-l p-4 rounded shadow">
        <h3 className="font-semibold mb-3">Equipment Inspector</h3>
        <p className="text-sm text-gray-600">
          Click any equipment in the visualizer to view live parameters.
        </p>
      </div>
    );
  }

  return (
    <div className="w-72 bg-white border-l p-4 rounded shadow">
      <h3 className="font-semibold mb-3">{selected.name}</h3>
      <p>Temperature: {selected.temp} °C</p>
      <p>Pressure: {selected.pressure} bar</p>
      <p>Flow Rate: {selected.flow} L/s</p>
      <p>Status: {selected.status}</p>
    </div>
  );
}
