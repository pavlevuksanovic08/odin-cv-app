let sections = {
    "bio": {
        "title": "Bio",
        "addMore": false,
        "fields": [
            [
                {"label": "Image", "type": "file", "key": "image", "value": null},
                {"label": "Name", "type": "text", "key": "name", "value": "", "required": true },
                {"label": "Email", "type": "email", "key": "email", "value": "", "required": true },
                {"label": "Phone", "type": "tel", "key": "phone", "value": ""},
                {"label": "Address", "type": "text", "key": "address", "value": ""},
                {"label": "Description", "type": "textarea", "key": "description", "value": ""} 
            ]
        ]
    },
    "education": {
        "title": "Education",
        "addMore": true,
        "fields": [
            [
                {"label": "School Name", "type": "text", "key": "schoolName", "value": ""},
                {"label": "Degree", "type": "text", "key": "degree", "value": ""},
                {"label": "Field of Study", "type": "text", "key": "fieldOfStudy", "value": ""},
                {"label": "Start Date", "type": "date", "key": "startDate", "value": ""},
                {"label": "End Date", "type": "date", "key": "endDate", "value": ""},
                {"label": "Description", "type": "textarea", "key": "description", "value": ""} 
            ]      
        ]
    },
    "experience": {
        "title": "Experience",
        "addMore": true,
        "fields": [
            [
                {"label": "Company Name", "type": "text", "key": "companyName", "value": ""},
                {"label": "Position", "type": "text", "key": "position", "value": ""},
                {"label": "Start Date", "type": "date", "key": "startDate", "value": ""},
                {"label": "End Date", "type": "date", "key": "endDate", "value": ""},
                {"label": "Description", "type": "textarea", "key": "description", "value": ""} 
            ]
        ]
    },
    "skills": {
        "title": "Skills",
        "addMore": true,
        "fields": [
            [
                {"label": "Skill", "type": "text", "key": "skill", "value": "" }
            ]
        ]
    },
    "socials": {
        "title": "Socials",
        "addMore": true,
        "fields": [
            [
                {"label": "Platform", "type": "text", "key": "platform", "value": "" },
                {"label": "URL", "type": "text", "key": "url", "value": "" }
            ]
        ]
    }
}

export default sections;