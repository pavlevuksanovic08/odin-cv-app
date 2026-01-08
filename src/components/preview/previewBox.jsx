
export default function PreviewBox({ data }) {
    return (
        <>
            {data.type !== "file" && 
                <div className="previewBox">
                    <h3>{data.label}</h3>
                    {data.value ? <p>{data.value}</p> : <p>None</p>}
                </div>
            }
        </>
    )
}