import EditBox from "./editBox";


export default function LoadEditSection({ section }) {
    return (
        <div>
            {section.fields.map((field, index) => (
                <div key={index}>
                    <EditBox data={field} />
                </div>
            ))}
        </div>
    )
}