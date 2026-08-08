from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Backpack(BaseModel):
    id: int
    name: str
    price: str
    img: str

class Testimonial(BaseModel):
    id: int
    text: str
    customer: str

@app.get('/api/backpacks', response_model=List[Backpack])
async def get_backpacks():
    return [
        Backpack(id=1, name='Adventure Pack', price='$99.99', img='path/to/image1.jpg'),
        Backpack(id=2, name='Urban Backpack', price='$79.99', img='path/to/image2.jpg'),
        Backpack(id=3, name="Traveler's Choice", price='$109.99', img='path/to/image3.jpg'),
    ]

@app.get('/api/testimonials', response_model=List[Testimonial])
async def get_testimonials():
    return [
        Testimonial(id=1, text="Best backpack I’ve ever owned! Highly recommend.", customer="Alice"),
        Testimonial(id=2, text="Fantastic quality and great design!", customer="Bob"),
        Testimonial(id=3, text="Perfect for my travels, love it!", customer="Charlie"),
    ]