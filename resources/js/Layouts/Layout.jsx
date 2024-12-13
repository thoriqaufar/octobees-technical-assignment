import React from "react";
import { Link } from "@inertiajs/react";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/persons/create">
                        Create
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
};

export default Layout;
