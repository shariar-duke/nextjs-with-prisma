export default async function PinList() {
  const fetchPin = await fetch(`http://localhost:3000/api/pin`, {
    cache: "no-cache",
  });
  const pins = await fetchPin.json();
  console.log(pins);

  return (
    <div className="container mx-auto p-4">
      <ul className="space-y-4">
        {pins.map((pin) => (
          <li
            key={pin?.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              {pin?.title}
            </h2>
            <p className="text-gray-700">{pin?.description}</p>
            <p className="text-sm text-gray-500">{pin?.type}</p>
            <p className="text-sm text-gray-500">{pin?.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
