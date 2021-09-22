let initFunction = () => {
    let heroImages = document.getElementsByClassName("image");
    let imgNum = 1;
    for (let index of heroImages) {
        let imgUrl = makeImgUrl(imgNum++);
        index.style.backgroundImage = `url(${imgUrl})`;
    }
}

let app = {
    init: initFunction,
}


let makeImgUrl = (num) => {
    let imgSrc = "images/hero";
    let imgExt = ".png";
    let urlString = imgSrc + num + imgExt;
    return urlString;
}

app.init();