import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Filterpage from './filterpage/Filterpage';
import Detailspage from './detailspage/Detailspage';

class Routing extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/filterpage/:category_id" component={Filterpage}/>
                <Route path="/detailspage/:product_id" component={Detailspage}/>
            </Switch>
            </BrowserRouter>
        )
    }
};

export default Routing;