function LogoTitle(params, parentNode) {
    parentNode.id = params.id;
    let logo = document.createElement('img');
    logo.id = 'logo';
    parentNode.appendChild(logo);

    logo.src = "./images/logo.png";

    // let sub = document.createElement('h2');
    // sub.textContent="Fotografia Ślubna i Rodzinna";
    // parentNode.appendChild(sub);


}