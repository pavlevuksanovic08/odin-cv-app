import LoadEditSection from "./loadEditSection";

export default function LoadEditor({ sections }) {
    return (
        <div>
            <h1>Edit your CV</h1>
            <div>
                <div>
                    /*image*/
                </div>
                <div>
                    <h2>{sections.bio.title}</h2>
                    <LoadEditSection section={sections.bio} />
                </div>

            </div>
            {Object.keys(sections).map((key) => {
                if (key !== "bio") {
                    return (
                        <div key={key}>
                            <h2>{sections[key].title}</h2>
                            <LoadEditSection section={sections[key]} />
                        </div>
                    )
                }
            })}
        </div>
    )
}