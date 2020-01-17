const url = require("url");

const urlInfo = new URL("https://www.google.com/search?q=nguyen+ngoc+ngna&rlz=1C1CHBF_enVN865VN865&oq=nguyen+ngoc+ngna&aqs=chrome..69i57j0l7.2933j0j7&sourceid=chrome&ie=UTF-8");
console.log(urlInfo.toJSON());