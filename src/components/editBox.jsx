

export default function EditBox({ data }) {
    return (
        <div>
            <label>{data.label}: </label>
            {data.type === "textarea" ? (
                <textarea defaultValue={data.value}></textarea>
            ) : (
                <input type={data.type} defaultValue={data.value} />
            )}
        </div>
    )
}