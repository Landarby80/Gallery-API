import json
import os
from pydantic import BaseModel

class ImgModel(BaseModel):
    id : int
    title : str
    prompt : str
    img : str


Data_File = "data.json"
Data= {}

if os.path.exists(Data_File):
    with open(Data_File, 'r') as f:
        Data = json.load(f)