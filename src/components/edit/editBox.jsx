

export default function EditBox({ data, onValueChange }) {

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);
        onValueChange(imageUrl)
    }

    return (
        <div className="inputBox">
            <label>{data.label}: </label>
            {data.type === "textarea" ? (
                <textarea defaultValue={data.value} onChange={(e) => onValueChange(e.target.value)}></textarea>
            ) : data.type === "file" ? (
                <input type={data.type} defaultValue={null} onChange={(e) => handleFileChange(e)}/>
            ) : <input type={data.type} defaultValue={data.value} onChange={(e) => onValueChange(e.target.value)}/>}
        </div>
    )
}