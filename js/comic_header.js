//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <div id="nav">
		<h1>NEW ASTRONAUTS</h1>
            <a href="index.html">HOME</a> |
            <a href="archive.html">ARCHIVE</a> |
        </div>
    </header>
`;