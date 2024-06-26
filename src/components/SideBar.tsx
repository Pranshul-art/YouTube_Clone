import { SideBarComp } from "./SideBarComp";
import { SvgHome } from "./Svg";

export function SideBar(){
    return <div className="hidden sm:block fixed bg-slate-600 p-12 rounded-lg">
        <div>
            <div className="flex bg-slate-300 rounded-lg">
                

                <SideBarComp Name="Home" /> 
                <SvgHome/>

            </div>
            
            <SideBarComp Name="Shorts"/>
            <SideBarComp Name="Subcriptions"/>
        </div>
        <div>
            --------------------
        </div>
        <div>
            <SideBarComp Name="You"/> 
            <SideBarComp Name="History"/>
            
        </div>
        <div>
            --------------------
        </div>
        <div>
            <SideBarComp Name="Categories"/> 
            <SideBarComp Name="Shopping"/>
            <SideBarComp Name="Music"/>
            <SideBarComp Name="Films"/>
            <SideBarComp Name="Live"/>
            <SideBarComp Name="Gaming"/>
            <SideBarComp Name="News"/>
            <SideBarComp Name="Sports"/>
        </div>
    </div>
}