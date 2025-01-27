window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.innerHTML = `
        <div>
            <h1>Clerick Barrion's Crazy Bat | WEB215</h1>
        </div>
        <small><i></i></small>
        <nav>
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="introduction.html">Introduction</a></li>
                <li><a href="contract.html">Contract</a></li>
            </ul>
        </nav>
    `;
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <ul>
            <li><a href="https://github.com/clerickbarrion" target="_blank">GitHub</a></li>
            <li><a href="https://clerickbarrion.github.io" target="_blank">GitHub.io</a></li>
            <li><a href="https://clerickbarrion.github.io/web215" target="_blank">WEB215.io</a></li>
            <li><a href="https://www.freecodecamp.org/clerick" target="_blank">freeCodeCamp</a></li>
            <li><a href="https://www.codecademy.com/profiles/cbarrion" target="_blank">Codecademy</a></li>
            <li><a href="https://jsfiddle.net/u/clerickbarrion/fiddles/" target="_blank">JSFiddle</a></li>
            <li><a href="https://www.linkedin.com/in/clerickbarrion" target="_blank">LinkedIn</a></li>
        </ul>
        <br>
        <p>Website designed by Clerick Barrion</p>
    `;
});