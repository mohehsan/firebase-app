export default function Button({ loading, onClick, title }) {
  if (loading) {
    return (
      <div className="flex justify-center">
        <button className="mt-8 p-3 text-sm border rounded-lg min-w-[200px] bg-gray-500 text-white font-bold hover:cursor-not-allowed uppercase">
          WAIT A MINUTE...
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <button
        className="mt-8 p-3 text-sm border rounded-lg min-w-[200px] bg-[#2196f3] text-white font-bold hover:bg-blue-400 uppercase"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}
