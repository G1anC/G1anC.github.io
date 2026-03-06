const Nav = () => {
    return (
        <nav className="w-full flex justify-between items-center">
            <a href='/' className="flex gap-2">
                <p className="kanji">義安</p>
                <p>G1AN</p>
            </a>
            <div className="flex items-center gap-16">
                <a className="link" href="/me">
                    ME - INTERESTS
                </a>
                <div className="flex flex-col">
                    <a href="/works" className="link text-end mx-4 w-full">
                        WORKS
                    </a>
                    <a className="link" href="/works">
                        CREATIONS
                    </a>
                </div>
                <a className="link" href="/diary">
                    DIARY
                </a>
                <a className="link" href="/yapbox">
                    YAPBOX
                </a>
            </div>
        </nav>
    );
}

export default Nav;