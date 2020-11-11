import React from 'react'
import NavBar from "./NavBar";
import SideNav from "./SideNav";

const Layout = props => {
    return (
        <React.Fragment>
            <div id="page" className="d-flex">
                <SideNav/>
                <div id="content" className="bg-light">
                    <NavBar />
                    <div className="p-3 h-100C">
                        <div className="card h-100">
                            <div className="card-body h-100">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;
