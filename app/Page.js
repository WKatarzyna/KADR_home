function Page(htmlElement) {

this.mainPage(htmlElement);
}
Page.prototype.mainPage=(htmlElement)=>{
  let pageHead= document.createElement('header');
  pageHead.classList.add('header')
  htmlElement.appendChild(pageHead);  
  let title = document.createElement('div');
  title.classList.add('title')
  pageHead.appendChild(title);
  let main= document.createElement('h1');
  main.textContent="Był.Sobie.Kadr";
  title.appendChild(main);
  let sub = document.createElement('h2');
  sub.textContent="Fotografia Ślubna i Rodzinna";
  title.appendChild(sub)
  let navigation= document.createElement('nav');
  let navList= document.createElement('div');
  navList.classList.add('grid-container');
  pageHead.appendChild(navigation);
  navigation.appendChild(navList);
  let navContent;
  let navArray = ['Portfolio Ślubne',	'Kilka Historii	', 'Portfolio Rodzinne ',  'Oferta','O mnie', 'Kontakt'];
  for(let i=0; i <navArray.length; i++){
      navContent=document.createElement('div');
      navContent.textContent=navArray[i];
      navContent.classList.add('grid-container--text')
      navList.appendChild(navContent)


  }

 
}