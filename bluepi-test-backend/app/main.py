import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import app.model
from app.routes import router
from app.config import engine

app.model.Base.metadata.create_all(bind=engine, checkfirst=True)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router, prefix="/products", tags=["products"])
