import { ReactNode } from "react"

export function VideoCard(props: any){
    return <div className="bg-gray-900 p-4 pl-2 cursor-pointer">
        

        <img src={props.image} className="rounded-2xl"></img>
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-1 ">
                <img src={props.thumbImage} className="rounded-full w-10 h-10 "></img>
            </div>
            <div className="col-span-11 text-gray-100 md:pl-3  ">
                <div>
                    {props.title}
                </div>
                <div  className="text-gray-500">
                    {props.author}
                </div>
                <div className="text-gray-500">
                    {props.views} | {props.timestamp}
                </div>
               
            </div>
        </div>
        
           
        
    </div>
}

