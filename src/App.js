import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import List from "./components/List";
import TailwindRoutes from "./components/tailwind";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/tailwind" component={TailwindRoutes}/>
                        <Route path="/" component={List} exact={true}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
