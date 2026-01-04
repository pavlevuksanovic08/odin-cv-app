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
    setSections(newSections);
  }

  return (
    
    <>
      {status === "edit" ? <LoadEditor sections={sections} onValueChange={handleValueChange} /> : <LoadPreviewer sections={sections} />}
    </>
  )

}
export default App
