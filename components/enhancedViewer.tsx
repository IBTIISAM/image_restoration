import Image from "next/image";

const EnhancedViewer = () => {
    return(
        <div className=" bg-gray-100 mx-auto w-full p-5 ">
          <div className="flex sm:flex-col md:flex-row gap-1 lg:px-20 lg:pb-20">  
            <div className="basis-1/2">
                <Image  src="/blind-face-2.png" width={600} height={300} alt="blind face"></Image>  
            </div> 
            <div className="basis-1/2">
                <Image  src="/enhanced-face-2.png" width={600} height={300} alt="enhanced face"></Image>  
            </div>  
            
            </div>
        </div>
  
    )
}

export default EnhancedViewer;