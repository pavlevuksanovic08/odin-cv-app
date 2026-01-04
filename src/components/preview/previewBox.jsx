
export default function PreviewBox({ data }) {
    return (
        <>  
            <h3>{data.label}</h3>
            {data.value ? <p>{data.value}</p> : <p>None</p>}
        </>
    )
}