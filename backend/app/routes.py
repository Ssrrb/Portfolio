from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:3000",
    "https://sebastianrojas.co"  # Add your domain when deployed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data Models


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


# API Routes
@app.get("/api/projects")
async def get_projects():
    return {"projects": projects}


@app.get("/api/projects")
async def get_project(project_id: int):
    project = next((p for p in projects if p["id"] == project_id), None)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


@app.post("/api/contact")
async def contact_form(contact: ContactForm, background_tasks: BackgroundTasks):
    try:
        message = Mail(
            from_email=os.getenv('SENDGRID_FROM_EMAIL'),
            to_emails=os.getenv('CONTACT_EMAIL'),
            subject=f'Portfolio Contact from {contact.name}',
            plain_text_content=f"From: {contact.name}\nEmail: {
                contact.email}\n\n{contact.message}"
        )

        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
        response = sg.send(message)
        return {"message": "Message sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
