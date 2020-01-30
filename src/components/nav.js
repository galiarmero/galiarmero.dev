import React from "react"

export default (props) => {
    return (<header role="banner">
        <nav role="navigation">
            <div class="nav-logo">
                <div class="logo">G</div>
                <div><button id="burger">=</button></div>
            </div>
            <div class="nav-links hidden">
                <div class="nav-item">About</div>
                <div class="nav-item">Work</div>
                <div class="nav-item">Blog</div>
            </div>
        </nav>
    </header>
    )
}