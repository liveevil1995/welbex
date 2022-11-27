function headerFixModule() {
    const header = document.querySelector('.header');

    const headerFix = () => {

        if (window.pageYOffset > 50) {
            header.classList.add('header_fix');
        }
        else {
            header.classList.remove('header_fix');
        }
    }

    document.addEventListener('scroll', headerFix);

    window.addEventListener('resize', () => {
        if (window.innerWidth < 767) {
            document.addEventListener('scroll', headerFix);
        } else {
            document.removeEventListener('scroll', headerFix);
            header.classList.remove('header_fix');
        }
    });
}


export default headerFixModule;