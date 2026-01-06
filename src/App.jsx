import { useState } from 'react'
import sectionsData from './assets/sections'
import LoadEditor from './components/edit/loadEditor'
import LoadPreview from './components/preview/loadPreview'
import './App.css'
import './styles/layout.css'
import './styles/edit/edit.css'

function App() {
  const [status, setStatus] = useState("edit");
  const [savedSections, setSavedSections] = useState(sectionsData);
  const [draftSections, setDraftSections] = useState(savedSections)

  function handleValueChange(sectionKey, fieldsetIndex, fieldName, newValue) {
    const newSections = {
      ...draftSections,
      [sectionKey]: {
        ...draftSections[sectionKey],
        fields: 
          draftSections[sectionKey].fields.map((fieldset, index) => {
            return index !== fieldsetIndex 
              ? fieldset
              : fieldset.map(field => {
                return field.label !== fieldName
                  ? field
                  : {...field, value: newValue}
              })
          })
        
      }
    }
    setDraftSections(newSections);
  }

  function handleAddFieldset(sectionKey) {
    const newFieldset = sectionsData[sectionKey].fields[0].map(field => ({
      ...field,
      value: ""
    }));

    const newSections = {
      ...draftSections,
      [sectionKey]: {
        ...draftSections[sectionKey],
        fields: [
          ...draftSections[sectionKey].fields,
          newFieldset
        ]
      }
    }
    setDraftSections(newSections)
  }

  function handleRemoveFieldset(sectionKey) {
    const newFieldset = draftSections[sectionKey].fields.length > 1 ? draftSections[sectionKey].fields.slice(0, -1) : draftSections[sectionKey].fields;

    const newSections = {
      ...draftSections,
      [sectionKey]: {
        ...draftSections[sectionKey],
        fields: newFieldset
      }
    }

    setDraftSections(newSections);
  }

  function saveChanges() {
    setSavedSections(draftSections);
  }

  function switchToPreview() {
    setStatus("preview")
  }


  function switchToEdit() {
    setStatus("edit");
  }

  return (
    
    <>
      {status === "edit" 
        ? <LoadEditor sections={draftSections} handlers={{handleValueChange, handleAddFieldset, handleRemoveFieldset, saveChanges, switchToPreview}} /> 
        : <LoadPreview sections={savedSections} handlers={{switchToEdit}}/>}
    </>
  )

}
export default App
