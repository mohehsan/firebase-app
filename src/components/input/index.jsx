export default function Input({ type, placeholder, onChange, id, value }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 rounded-lg border-2 block min-w-[350px] border-blue-300"
      onChange={onChange}
      id={id}
      value={value}
    />
  );
}
