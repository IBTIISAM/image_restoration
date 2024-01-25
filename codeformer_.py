from codeformer.app import inference_app
import cv2
def codeformer_infer(image_name):
    
    
    #e_image_name = image_name.split('.jpeg')[0]+'_codeformer.png'

    # read the enhanced image locally    
    #image = cv2.imread('./code_output'+'/'+e_image_name)    
    inference_app(image="./images/"+image_name, background_enhance=True,face_upsample=True,upscale=2,codeformer_fidelity=0.5,)
    image = cv2.imread('./output/out.png') 
    return image