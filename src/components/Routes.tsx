import { Route } from "react-router-dom"
import Login from "../containers/Login/Login"

const Routes: React.FC = () => {
    return (
        <switch>
            <Route path="/" Component={Login}></Route>
        </switch>
    )
}
export default Routes