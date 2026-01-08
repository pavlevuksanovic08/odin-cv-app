import PreviewBox from "./previewBox"

export default function LoadPreviewSection({ section }) {
    return (
        <>
            {section.fields.map((fieldset, fieldsetIndex) => {
                return (
                    <div key={fieldsetIndex} className="previewFieldset">
                        <div className="previewFieldsetCenter">
                        {fieldset.map((field, fieldIndex) =>
                            field.type !== "file" && (
                                <PreviewBox key={fieldIndex} data={field}></PreviewBox>
                            )          
                        )}
                        </div>
                    </div>
                )
            })}
        </>
    )
}