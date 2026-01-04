import { useState } from 'react'
import sectionsData from './assets/sections'
import LoadEditor from './components/loadEditor'
import './App.css'

function App() {
  const [status, setStatus] = useState("edit")
  const [sections, setSections] = useState(sectionsData)

  function handleValueChange(sectionKey, fieldsetIndex, fieldName, newValue) {
    const newSections = {
      ...sections,
      [sectionKey]: {
        ...sections[sectionKey],
        fields: 
          sections[sectionKey].fields.map((fieldset, index) => {
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
    console.log(newSections)
    setSections(newSections);
  }

  function handleAddFieldset(sectionKey) {
    const newFieldset = sectionsData[sectionKey].fields[0].map(field => ({
      ...field,
      value: ""
    }));

    const newSections = {
      ...sections,
      [sectionKey]: {
        ...sections[sectionKey],
        fields: [
          ...sections[sectionKey].fields,
          newFieldset
        ]
      }
    }
    console.log(sections[sectionKey])
    setSections(newSections)
  }

  function handleRemoveFieldset(sectionKey) {
    const newFieldset = sections[sectionKey].fields.length > 1 ? sections[sectionKey].fields.slice(0, -1) : sections[sectionKey].fields;

    const newSections = {
      ...sections,
      [sectionKey]: {
        ...sections[sectionKey],
        fields: newFieldset
      }
    }

    setSections(newSections);
  } 

  return (
    
    <>
      {status === "edit" ? <LoadEditor sections={sections} onValueChange={handleValueChange} /> : <LoadPreviewer sections={sections} />}
    </>
  )

}
export default App
