
from fastapi import FastAPI, HTTPException
from shema   import Data



app = FastAPI(
     title= "Gallery-API",
     description="The Gallery-API is a web service designed to deliver a combination of images and associated prompts to inspire creativity, learning, and idea generation. It serves as a valuable resource for a wide range of applications, including education, art, writing, brainstorming, and more.",
     version="1.0"
)

# data = [
#     {
#         "id": 1,
#         "title": "abstract vortex",
#         "prompt": "abstract_vortex_swallowing_a_beautiful_scenery",
#         "img":"https://cdn.midjourney.com/10724f8d-986e-4537-9e0d-41a6917a3ac1/0_3_384_N.webp"
#     }
# ]

@app.get('/')
def welcomepage():
    return {"message": 'Welcome to the Galery API.'}
         

#API to get all the data
@app.get('/api/v1/data')
def get_all_data():
    return {"data": Data }

#API to get all the pictures
@app.get('/api/v1/pictures')
def get_all_pictures(img=None):
    result = Data
    if img:
            result = [picture['img'] for picture in result if picture.get('img') == img]
    else:
            result = [picture['img'] for picture in result if 'img' in picture]
    return {"images":result}
    
#API to search by id
@app.get('/api/v1/{id}')
def search_by_id(id: int):
    result = Data
    if id is not None and id > 0 and id <= len(result):
         result = result[id-1]
    else :
         raise HTTPException(status_code=404,
                             detail=f"No picture with id={id} found")                                 
    return {"result":result}           


#API to search by title
@app.get('/api/v1/')
def search_by_title(title:str|None=None):
    if title:
        result = [item for item in Data if item.get('title') == title]
        if result == []:
            raise HTTPException(status_code=404,
                             detail=f"No picture with title={title} found")
    return {"result": result}   