

export function SideBarComp(props: any){
    return <div className="flex flex-col justify-center p-6 h-10 w-34 font-semibold hover:rounded-lg hover:bg-slate-300 cursor-pointer">
        
        {props.Name}
    </div>
}