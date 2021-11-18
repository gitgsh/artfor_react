import { PropertySafetyFilled } from "@ant-design/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Marker() {
    return(
        <IconContext.Provider value={{color:'red', size:"3em"}}>
            <div>
                <FaMapMarkerAlt style={{outline:'black'}}/>
            </div>
        </IconContext.Provider>
    )
}
export default Marker;