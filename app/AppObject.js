let page;

let AppObject = function AppObject(htmlElement) {
    page = new Page(htmlElement);
    this.CreatePageObject(htmlElement);
    this.SliderMoveHandler();
    this.MainMenuHandler();
};
AppObject.prototype = {
    CreatePageObject: function (htmlElement) {
        page.CreateMainPage(htmlElement);
    },
    SliderMoveHandler: function () {

        let arrowLeft = document.getElementById('lArrow');
        let arrowRight = document.getElementById('rArrow');

        arrowLeft.addEventListener('click', moveLeftSide);
        arrowRight.addEventListener('click', moveRightSide);

        function moveLeftSide(e) {
            console.log(e.target.dataset.id);
            let counter = e.target.dataset.id;
            counter++;
            document.getElementById('lArrow').dataset.id = counter;
            // let pageNumber = document.getElementById('slideNumber');
            if (e.target.dataset.id > 5) {
                e.target.dataset.id = `${1}`;

            }

        }

        function moveRightSide(e) {
            let hiddenContent = document.querySelectorAll('.invisible');
            let counter = e.target.dataset.id;
            let slider = document.getElementsByClassName('slider-' + counter)[0];
            slider.classList.add('fade');
            setTimeout(function () {
                slider.classList.add('invisible')
            }, 1000);
            counter--;
            document.getElementById('rArrow').dataset.id = counter;
            document.getElementById('slideNumber').textContent = `${e.target.dataset.id}` + '/5';

            if (e.target.dataset.id < `${1}`) {
                e.target.dataset.id = `${5}`;
                document.getElementById('slideNumber').textContent = `${e.target.dataset.id}` + '/5';
                hiddenContent.forEach((el) => {
                    if (el.classList.contains('invisible')) {
                        el.classList.remove('invisible', 'fade');
                    }

                })


                // document.querySelectorAll('.landingImg').forEach(el=>{
                //     el.classList.remove('invisible','fade')
                // })


            }


        }

    },
    MainMenuHandler: function () {
        let sectionAbout = document.getElementById('navContent4');
        sectionAbout.addEventListener('click', page.sectionAbout);
        let sectionContact = document.getElementById('navContent5');
        sectionContact.addEventListener('click', page.sectionContact);

    }
};