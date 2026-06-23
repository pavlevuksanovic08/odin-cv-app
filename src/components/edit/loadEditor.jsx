import LoadEditSection from "./loadEditSection";
import EditBox from "./editBox";
import defaultImg from "../../assets/default.png"

export default function LoadEditor({ sections, handlers }) {
    const bioFieldset = sections.bio.fields[0];
    const imageField = bioFieldset.find(field => field.type === "file");
    const bioWithoutImage = {
        ...sections.bio,
        fields: [bioFieldset.filter(field => field.type !== "file")]
    };

    return (
        <main>
            <h1>Edit your CV</h1>
            <form>
                <div className="grid-template">
                    <div className="content-column">
                        <div className="section bio-section">
                            <div className="img-cell">
                                {sections.bio.fields[0][0].value
                                    ? <img src={sections.bio.fields[0][0].value} alt="Profile"></img>
                                    : <img src={defaultImg} alt="Default Profile"></img>
                                }
                            </div>
                            {imageField && (
                                <div className="image-upload">
                                    <EditBox
                                        data={imageField}
                                        onValueChange={(newValue) => handlers.handleValueChange("bio", 0, imageField.label, newValue)}
                                    />
                                </div>
                            )}
                            <h2>{sections.bio.title}</h2>
                            <LoadEditSection section={bioWithoutImage} sectionKey={"bio"} handlers={handlers} />
                        </div>
                        <div className="section-grid">
                            {Object.keys(sections).map((key) => {
                                if (key !== "bio") {
                                    return (
                                        <div key={key} className="section">
                                            <h2>{sections[key].title}</h2>
                                            <LoadEditSection section={sections[key]} sectionKey={key} handlers={handlers} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </form>
            <div className="edit-btns">
                <button type="button" className="secondary" onClick={() => handlers.switchToPreview()}>Cancel</button>
                <button type="button" onClick={() => {handlers.saveChanges(); handlers.switchToPreview()}}>Save</button>
            </div>
        </main>
    )
} 