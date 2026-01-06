import LoadEditSection from "./loadEditSection";
import defaultImg from "../../assets/default.png"

export default function LoadEditor({ sections, handlers }) {
    return (
        <div>
            <h1>Edit your CV</h1>
            <div className="grid-template">
                <div className="img-cell">
                    {sections.bio.fields[0][0].value
                        ? <img src={sections.bio.fields[0][0].value}></img>
                        : <img src={defaultImg}></img>
                    }
                </div>
                <div>
                    <h2>{sections.bio.title}</h2>
                    <LoadEditSection section={sections.bio} sectionKey={"bio"} handlers={handlers} />
                </div>
                {Object.keys(sections).map((key) => {
                    if (key !== "bio") {
                        return (
                            <div key={key}>
                                <h2>{sections[key].title}</h2>
                                <LoadEditSection section={sections[key]} sectionKey={key} handlers={handlers} />
                            </div>
                        )
                    }
                })}
            </div>
            <div>
                <button onClick={() => handlers.switchToPreview()}>Cancel</button>
                <button onClick={() => {handlers.saveChanges(); handlers.switchToPreview()}}>Save</button>
            </div>
        </div>
    )
}