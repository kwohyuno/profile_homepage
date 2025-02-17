import { Route, Routes } from "react-router-dom";
import {Mainpage} from "../pages/mainpage";
import {Project} from "../pages/project";
import {Study} from "../pages/study";
import {Certificate} from "../pages/certificate";
import {Career} from "../pages/career";
import {Education} from "../pages/education";

/**
 * RouteMain component: Defines the application's main routing structure using Routes and Route components.
 * */
function RouteMain(props){

    return(
        <Routes>
            <Route>
                <Route path="/" element={<Mainpage />} />
                <Route path="/project" element={<Project />} />
                <Route path="/study" element={<Study />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/career" element={<Career />} />
                <Route path="/education" element={<Education />} />
            </Route>
        </Routes>
    );
}
export default RouteMain;