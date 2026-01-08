import defaultImg from "../../assets/default.png"
import LoadPreviewSection from "./loadPreviewSection"

export default function LoadPreview({sections, handlers}) {
    
    return (
        <main>
            <h1>Your CV</h1>
            <div className="grid-template">
                <div className="img-cell section">
                    {sections.bio.fields[0][0].value 
                        ? <img src={sections.bio.fields[0][0].value} alt="Profile"></img>
                        : <img src={defaultImg} alt="Default profile"></img>
                    }
                    
                </div>
                <div className="section">
                    <h2>{sections.bio.title}</h2>
                    <LoadPreviewSection section={sections.bio}></LoadPreviewSection>
                </div>
                {Object.keys(sections).map((key) => {
                    if (key !== "bio") {
                        return (
                            <div key={key} className="section">
                                <h2>{sections[key].title}</h2>
                                <LoadPreviewSection section={sections[key]}></LoadPreviewSection>
                            </div>
                        )
                    }
                    
                })}
            </div>
            <div>
                <button onClick={() => handlers.switchToEdit()} className="preview-btn">Edit</button>
            </div>
        </main>
    )

}