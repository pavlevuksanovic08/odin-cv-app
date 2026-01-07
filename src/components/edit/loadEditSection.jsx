import EditBox from "./editBox";


export default function LoadEditSection({ section, sectionKey, handlers }) {

    function handleChange(fieldsetIndex, fieldName, newValue) {
        handlers.handleValueChange(sectionKey, fieldsetIndex, fieldName, newValue)
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
                <div className="section-btns">
                    <button onClick={() => handlers.handleRemoveFieldset(sectionKey)}>Remove</button>
                    <button onClick={() => handlers.handleAddFieldset(sectionKey)}>Add</button>
                </div>
            }
        </div>
    )
}