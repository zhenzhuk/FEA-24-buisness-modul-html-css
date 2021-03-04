
const allForSlider = () => {
    const renderBanner = item => {
        const containerSlider = document.createElement('div');
        containerSlider.className = 'consultation__slider';
        containerSlider.innerHTML = `
        <div class="consultation__img-box">
            <img src="img/${item.imgUrl}" class="consultation__img" alt="slider">
            <div class="consultation__container-title container-title">
                <h1 class="text-change">We Providing</h1>
                <span>Social Media marketing for businesses</span>
                <button class="consultation__btn">free consultation</button>
            </div>
        </div>
    `
        return containerSlider;
    }

    const renderSlider = items => {
        const container = document.querySelector('.consultation__slider-content');
        container.innerHTML = '';
        const elems = items.map(item => renderBanner(item))
        container.append(...elems)
    }

    renderSlider(sliderImg)

    const banner = document.querySelectorAll('.consultation__slider');
    const sliderContent = document.querySelector('.consultation__slider-content');
    let count = 0;
    let width;

    const rollSlider = () => {
        sliderContent.style.transform = 'translate(-' + count * width + 'px)';
    }

    const init = () => {
        width = document.querySelector('.consultation__slider-box').offsetWidth;
        sliderContent.style.width = width * banner.length + 'px';
        banner.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    }
    init();

    window.onresize = (init);

    const autoSlider = () =>{
        let timer = setTimeout( () =>{
            count++;
            if (count >= banner.length) {
                count = 0;
                clearTimeout(timer)
            }
            rollSlider();
            autoSlider();
        }, 5000);
    }
    autoSlider()
}
allForSlider()

const headerBurger = document.querySelector('.header-nav__burger');
const headerMenuContent = document.querySelector('.header-nav__navigation');
const headerList = document.querySelector('.header-nav__list');
const submitBlock = document.querySelector('.submit__content-part');
const openSubmitBlock = document.querySelector('.submit__open');
const closeSubmitBlock = document.querySelector('.submit__close');

headerBurger.onclick = () => {
    headerBurger.classList.toggle('active-burger')

    if(headerBurger.classList.contains('active-burger')) {
        headerBurger.innerHTML = `
            <a target=”_black” class="header__icons icons"><i class="icon iconclose"></i></a>
        `
        headerMenuContent.classList.toggle('header-nav__active-menu');
    }else {
        headerBurger.innerHTML = `
            <a target=”_black” class="header__icons icons"><i class="icon iconalign-justify"></i></a>
        `
        headerMenuContent.classList.toggle('header-nav__active-menu');
    }
}

headerList.onclick = () => {
    headerBurger.classList.remove('active-burger')
    headerBurger.innerHTML = `
            <a target=”_black” class="header__icons icons"><i class="icon iconalign-justify"></i></a>
        `
    headerMenuContent.classList.remove('header-nav__active-menu')
}

openSubmitBlock.onclick = () => {
    submitBlock.style.display = "block";
}

closeSubmitBlock.onclick = () =>{
    submitBlock.style.display = "none";
}
