import { SearchBar } from "./Searchbar";
import { YouTSymbol } from "./YouTSymbol";

export function Appbar(){
    return <div className="grid grid-cols-3 justify-between text-gray-400 p-3">
        
            <div className="flex justify-start  text-md items-center pb-2 p-4">  
                <div className="fixed cursor-pointer">
                    
                    <YouTSymbol/>
                </div>
            </div>
        
        
        <div className="grid justify-center">
            <SearchBar/>
        </div>
        <div className=" justify-end text-md inline-flex items-center pb-2 pt-4">
            <div className="bg-blue-500 cursor-pointer text-slate-100 font-semibold rounded-2xl p-2 flex-col justify-center">
                Sign-in
            </div>
        </div>
    </div>
}