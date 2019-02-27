import React, { Component } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import Home from './Home';
import About from './About';
import Project from './Project';
import Sample from './Sample';

const anchorRef = React.createRef()

class Header extends Component {


    render() {
        return (

            <BrowserRouter>
                <div>
                    {/* <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/project">Projects</a>
                    <a href="/sample">Sample</a> */}

                    <Link to="/" >Home</Link>
                    {' '}
                    <a href="/about/">About</a>
                    {' '}
                    <a href="/project/">Projects</a>
                    {' '}
                    <a href="/sample/">Sample</a>

                    <Route exact path="/" component={Home} />
                    <Route path="/about/" component={About} />
                    <Route path="/project/" component={Project} />
                    <Route path="/sample/" component={Sample} />
                </div>
            </BrowserRouter >

        )
    }
}



export default Header
