/**
 * @description      :
 * @author           : pasin
 * @group            :
 * @created          : 19/07/2021 - 02:40:34
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 19/07/2021
 * - Author          : pasin
 * - Modification    :
 **/
import { BrowwerRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./Pages/Create";

function App() {
    return ( <
        Router >
        <
        switch >
        <
        Route exact path = "/" >
        <
        Notes / >
        <
        /Route>{" "} <
        Route path = "./create" >
        ` <Create />` { " " }
        /Route>{" "} < /
        switch > { " " } <
        /Router>
    );
}

export default App;