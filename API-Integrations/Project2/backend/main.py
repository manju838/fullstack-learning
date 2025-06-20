import uvicorn
from fastapi import FastAPI, File, HTTPException, UploadFile

from fastapi.middleware.cors import CORSMiddleware
import io
from PIL import Image, UnidentifiedImageError
import cv2
import numpy as np

app = FastAPI()

"""
CORS or "Cross-Origin Resource Sharing" refers to the situations when a frontend running in a browser has JavaScript code that communicates with a backend, and the backend is in a different "origin" than the frontend.

Origin:
An origin is the combination of protocol (http, https), domain (myapp.com, localhost, localhost.tiangolo.com), and port (80, 443, 8080).
Thus, each of these below are different origins: 
http://localhost
https://localhost
http://localhost:8080

Incase of a frontend, a react app (here localhost:3000) sends a HTTP request to the backend(here localhost:8000), the backend should have a list of allowed origins 

"""
origins = [
    # "http://localhost.tiangolo.com",
    # "https://localhost.tiangolo.com",
    # "http://localhost",
    "http://localhost:3000",
]
# localhost:3000 is the place where react app is present

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"Welcome to": "FastAPI" }

@app.post("/upload/")
async def receiveFile(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image_array = np.frombuffer(contents, np.uint8)
        image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

        if image is None:
            raise HTTPException(status_code=400, detail="Invalid image file")

        cv2.imshow("Uploaded Image", image)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image processing error: {e}")
    
    return {"uploadStatus": "Complete"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)