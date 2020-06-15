function Content(params, parentNode) {
    while (parentNode.firstChild) parentNode.firstChild.remove();
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('container__header');
    parentNode.append(pageHeader);

    const pageLogoContent = document.createElement('div');
    pageLogoContent.classList.add('title-box');
    pageLogoContent.textContent = "BYŁ.SOBIE.KADR";
    pageHeader.appendChild(pageLogoContent);

    let navigation = document.createElement('nav');
    pageHeader.appendChild(navigation);
    let navList = document.createElement('div');
    navList.classList.add('menu__container--black');
    navigation.appendChild(navList);

    new Navigation((params) => {
            params.id = 'menu' //sprawdzić jak nadawało sie parametry
        }
        , navList);
    let pageContent = document.createElement('div');
    pageContent.classList.add('section-about');
    parentNode.appendChild(pageContent);
    let contentDesc = document.createElement('div');
    contentDesc.classList.add('content');
    pageContent.appendChild(contentDesc);
    new Footer((params) => {
            params.id = 'footer' //sprawdzić jak nadawało sie parametry
        }
        , parentNode);


}