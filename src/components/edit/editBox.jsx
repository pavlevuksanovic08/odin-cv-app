export default function EditBox({ data, onValueChange }) {
  const inputId = crypto.randomUUID();

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    onValueChange(imageUrl);
  }

  return (
    <div className="inputBox">
      <label htmlFor={inputId}>{data.label}</label>

      {data.type === "textarea" ? (
        <textarea
          id={inputId}
          defaultValue={data.value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      ) : data.type === "file" ? (
        <input
          type="file"
          id={inputId}
          onChange={handleFileChange}
        />
      ) : (
        <input
          type={data.type}
          id={inputId}
          defaultValue={data.value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      )}
    </div>
  );
}
