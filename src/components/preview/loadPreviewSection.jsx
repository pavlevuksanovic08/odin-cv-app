import PreviewBox from "./previewBox"

export default function LoadPreviewSection({ section }) {
    return (
        <>
            {section.fields.map((fieldset, fieldsetIndex) => {
                return (
                    <div key={fieldsetIndex}>
                        {fieldset.map((field, fieldIndex) =>        
                            <PreviewBox key={fieldIndex} data={field}></PreviewBox>
                        )}
                    </div>
                )
            })}
        </>
    )
}