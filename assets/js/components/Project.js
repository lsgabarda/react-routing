import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Todo from './Todo';
import Calculator from './Calculator';
class Project extends Component {
    render() {
        return (
            <Router>
                <div>
                    This is Project
                {' '}
                    <div>
                        < button><Link to="/project/todo" >Todo</Link> </button>
                        {' '}
                        < button><Link to="/project/calculator" >Calculator</Link> </button>
                    </div>

                    <Route path="/project/todo" component={Todo} />
                    <Route path="/project/calculator" component={Calculator} />

                </div>
            </Router>
        )
    }
}




export default Project
