import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox"  
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Rocket } from 'lucide-react';

const Sidebar = () => {
    return(
        <div className=" h-screen max-w-80 min-w-80 border-r shadow-sm p-5">
           
            <Card className="p-3  border-violet-600 border-opacity-30 shadow-lg ">
            
                <CardContent className="border-b pb-3">
                   <CardTitle className="text-md font-semibold py-3">Upload Image</CardTitle>
                    <div className="grid w-full max-w-sm items-center gap-1.5 pb-1"> 
                        <Input className=" border-violet-600 border-opacity-30 shadow-sm " id="picture" type="file" />
                    </div>
                </CardContent>
            
            
                <CardContent className="border-b pb-3">
                      <CardTitle className="text-md font-semibold py-2">AI Enhanced Model</CardTitle>
                      <div className="items-top flex space-x-2 ml-1 pb-2">
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                            htmlFor="terms1"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            face model
                            </label>
                        
                        </div>
                      </div>
                      <div className="items-top flex space-x-2 ml-1 pb-2">
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                            htmlFor="terms1"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            text model
                            </label>
                        
                        </div>

                        
                      </div>
                      <div className="items-top flex space-x-2 ml-1 pb-2">
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                            htmlFor="terms1"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            general model
                            </label>
                        
                        </div>
                      </div>
                </CardContent>

                <CardContent className="pb-3">
                      <CardTitle className="text-md font-semibold py-2">Format</CardTitle>
                      <RadioGroup defaultValue="comfortable" className="ml-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <label
                              htmlFor="terms1"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            JPG
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <label
                            htmlFor="terms1"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            PNG
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <label
                            htmlFor="terms1"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            TIFF
                            </label>
                        </div>
                      </RadioGroup>
                </CardContent>

               
               

                <CardFooter className="flex flex-col items-center justify-center pt-5">
                    <Button className="bg-violet-600 hover:bg-violet-800 size-fit">Start Enhancing <Rocket className="mx-1"/></Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Sidebar;