from textbsr import textbsr
import cv2



def textbsr_func(image_name):
    
    # text enhancement
    textbsr.bsr(input_path='/home/ibtesam/Documents/projects/self_learning/fastapi_backend/images/',save_text=False, output_path= '/home/ibtesam/Documents/projects/self_learning/fastapi_backend/textbsr_output')
    
    e_image_name = image_name.split('.jpeg')[0]+'_BSRGANText.png'

    # read the enhanced image locally    
    image = cv2.imread('./textbsr_output'+'/'+e_image_name)

    return image, e_image_name


