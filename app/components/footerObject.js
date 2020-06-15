function Footer(params, parentNode) {

    let footer;
    footer = document.createElement('footer');
    footer.classList.add('pageFooter');
    parentNode.appendChild(footer);
    let links = document.createElement('div');
    footer.appendChild(links);
    let footerContent = document.createElement('div');
    footerContent.classList.add('footerContent');

    footerContent.setAttribute('style', 'white-space: pre;');
    footerContent.textContent = "Wedding & Family Natural Photography \r\n";
    footerContent.textContent += "Based in Bieszczady, Poland | ready to work worldwide \r\n";
    footerContent.textContent += "Copyright ©2019 Był Sobie Kadr by Aneta Smarkucka\r\n";
    footerContent.textContent += "POLITYKA PRYWATNOŚCI\r\n";
    footerContent.textContent += "Created by Katarzyna Wisła";
    footer.appendChild(footerContent);
}