function Navigation(params, parentNode) {
    // parentNode.id= 'menu-black'
    let navContent;
    let navArray = ['Kilka Historii	', 'Portfolio', 'Oferta', 'O mnie', 'Kontakt'];
    for (let i = 0; i < navArray.length; i++) {
        navContent = document.createElement('div');
        navContent.textContent = navArray[i];
        navContent.id = 'navContent' + `${(i + 1)}`;
        navContent.classList.add('nav-panel');
        navContent.classList.add('box', 'bd-tl-h');
        parentNode.appendChild(navContent)

    }


}