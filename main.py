import os
from io import BytesIO
import shutil
from typing import List, Union
from fastapi import FastAPI, UploadFile, File 
from PIL import Image
import numpy as np
import cv2
import io
from starlette.responses import StreamingResponse
import requests
from io import StringIO
from textbsr_ import textbsr_func
from codeformer_ import codeformer_infer
app = FastAPI()

'''
def read_imagefile(data) -> Image.Image:
    image = Image.open(BytesIO(data))
    return image

def bytes_to_image_opencv(byte_data):
    np_arr = np.frombuffer(byte_data, np.uint8)
    image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    return image

def load_image_into_numpy_array(data):
    return np.array(Image.open(BytesIO(data)))
'''
'''
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/getImg")
def getImage():
    image = cv2.imread('Screenshot from 2022-07-26 14-37-58.png')
    res, im_png = cv2.imencode(".png", image)
    return StreamingResponse(io.BytesIO(im_png.tobytes()), media_type="image/png")

@app.get('/getImgv')
def getImagev():
     #read img from url double check
    
    response = requests.get("http://127.0.0.1:8000/getImg")
    img = Image.open(io.BytesIO(response.content))
    img.save('temp.png')

    print("img from url", type(img))
    return {"image_type": 'saved image'}


@app.post("/uploadImg")
async def upload_image(file: UploadFile = File(...)):
    # save the image
    with open (f'{file.filename}', "wb") as buffer:
        shutil.copyfileobj(file.file , buffer)
        #contents = file.file.read()
        #data = BytesIO(contents)
        #image = bytes_to_image_opencv(data)
        #uploaded_img = load_image_into_numpy_array(contents)
    # read the image locally    
    image = cv2.imread(file.filename)
    #print(type(image), image.shape)
    
    # make an image response 
    res, im_png = cv2.imencode(".png", image)
    os.remove(file.filename)
    return StreamingResponse(io.BytesIO(im_png.tobytes()), media_type="image/png")
   #return {"file_name": file.filename}    
'''
@app.post("/textbsr")
async def upload_image(file: UploadFile = File(...)):
    # save the image
    with open (f'./images/{file.filename}', "wb") as buffer:
        shutil.copyfileobj(file.file , buffer)  

    # read the image locally    
    #image = cv2.imread(file.filename)
    image, e_image_name = textbsr_func(file.filename)
   
    # make an image response 
    res, im_png = cv2.imencode(".png", image)
    #os.remove("./images/"+file.filename) #delete img 
    #os.remove("./textbsr_output/"+e_image_name) #delete e img 
   
    return StreamingResponse(io.BytesIO(im_png.tobytes()), media_type="image/png")
   

@app.post("/facebfr")
async def upload_image(file: UploadFile = File(...)):
    # save the image
    with open (f'./images/{file.filename}', "wb") as buffer:
        shutil.copyfileobj(file.file , buffer)  

    # read the image locally    
    #image = cv2.imread(file.filename)
    face_image = codeformer_infer(file.filename)
    # make an image response 
    res, im_png = cv2.imencode(".png", face_image)
    #os.remove("./images/"+file.filename) #delete img 
   #os.remove("./textbsr_output/"+e_image_name) #delete e img 
    #os.remove("./output/out.png") #delete e img 
    return StreamingResponse(io.BytesIO(im_png.tobytes()), media_type="image/png")
   
