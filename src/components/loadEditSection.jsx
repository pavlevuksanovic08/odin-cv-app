import EditBox from "./editBox";


export default function LoadEditSection({ section, sectionKey, onValueChange }) {

    function handleChange(fieldsetIndex, fieldName, newValue) {
        onValueChange(sectionKey, fieldsetIndex, fieldName, newValue)
    }

    return (
        <div>
            {section.fields.map((fieldset, fieldsetIndex) => (
                fieldset.map((field, index) => (
                    <div key={index}>
                        <EditBox data={field} onValueChange={(newValue) => handleChange(fieldsetIndex, field.label, newValue)}/>
                    </div>
                )              
            )))}
            {section.addMore && 
                <div>
                    <button>Remove</button>
                    <button>Add</button>
                </div>
            }
        </div>
    )
}