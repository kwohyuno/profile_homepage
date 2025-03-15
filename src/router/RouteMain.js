import { Route, Routes, useLocation } from "react-router-dom";
import {Mainpage} from "../pages/mainpage";
import {Project} from "../pages/project";
import {Study} from "../pages/study";
import {Certificate} from "../pages/certificate";
import {Career} from "../pages/career";
import {Education} from "../pages/education";
import { CSSTransition, SwitchTransition } from "react-transition-group";

/**
 * RouteMain component: Defines the application's main routing structure using Routes and Route components.
 * */
function RouteMain(props){
    const location = useLocation();
    return(
        <SwitchTransition>
            <CSSTransition  key={location.pathname} classNames="page" timeout={500}>
                <Routes location={location}>
                    <Route>
                        <Route path="/" element={<Mainpage />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/study" element={<Study />} />
                        <Route path="/certificate" element={<Certificate />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/education" element={<Education />} />
                    </Route>
                </Routes>
            </CSSTransition>
        </SwitchTransition>
    );
}
export default RouteMain;