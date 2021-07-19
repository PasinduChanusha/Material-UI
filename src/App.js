import { BrowwerRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./Pages/Create";

function App() {
    return ( 
        <Router >
            <switch >
                <Route exact path = "/" >
                    <Notes/>
                </Route>
                <Route path = "./create" >
                    <Create />
                </Route> 
            </switch> 
        </Router>
    );
}

export default App;