from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS from localhost or wherever React is served
origins = [
    "http://localhost:3000",
    # add more origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI backend"}

# You can define other endpoints if you need to process forms,
# handle contact submissions, etc.


@app.post("/contact")
def contact_form(name: str, email: str, message: str):
    # process contact data, send email, store in DB, etc.
    return {"status": "success", "name": name, "email": email}
