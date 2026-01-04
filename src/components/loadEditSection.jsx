import EditBox from "./editBox";


export default function LoadEditSection({ section }) {
    return (
        <div>
            {section.fields.map((field) => (
                field.map((input, index) => (
                    <div key={index}>
                        <EditBox data={input} />
                    </div>
                )              
            )))}
        </div>
    )
}