import NavCard from "./NavCard"
import ContainerSidebar from "../paginas/ContainerSidebar";

function Sidebar() {
    return ( 
        <>
            <ContainerSidebar>
                <NavCard />
                <NavCard />
                <NavCard />
            </ContainerSidebar>
        </>
     );
}

export default Sidebar;