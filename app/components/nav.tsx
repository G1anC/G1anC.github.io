const Nav = () => {
    return (
        <nav className="w-full flex justify-between items-center">
            <a href='/' className="flex gap-6">
                <h1 className="kanji font-bold">義安</h1>
                <h1>G1AN</h1>
            </a>
            <div className="flex items-center gap-16">
                <a className="link" href="/me">
                    <h1>
                        ME - INTERESTS
                    </h1>
                </a>
                <div className="flex flex-col">
                    <a href="/works" className="link text-end mx-4 w-full">
                        <h1>
                            WORKS
                        </h1>
                    </a>
                    <a className="link" href="/works">
                        <h1>
                            CREATIONS
                        </h1>
                    </a>
                </div>
                <a className="link" href="/writings">
                    <h1>
                        WRITINGS
                    </h1>
                </a>
                <a className="link" href="/yapbox">
                    <h1>
                        YAPBOX
                    </h1>
                </a>
            </div>
        </nav>
    );
}

export default Nav;
