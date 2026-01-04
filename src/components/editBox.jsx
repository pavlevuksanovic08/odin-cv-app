

export default function EditBox({ data, onValueChange }) {
    return (
        <div>
            <label>{data.label}: </label>
            {data.type === "textarea" ? (
                <textarea defaultValue={data.value} onChange={(e) => onValueChange(e.target.value)}></textarea>
            ) : (
                <input type={data.type} defaultValue={data.value} onChange={(e) => onValueChange(e.target.value)}/>
            )}
        </div>
    )
}