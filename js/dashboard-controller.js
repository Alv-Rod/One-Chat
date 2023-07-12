
    // const dashboardOverlay = document.getElementById('dashboard-overlay')
    // dashboardOverlay.style.display = 'flex';

    // sideBar.classList.remove('contact-listing');
    // sideBar.classList.add('contact-listing-disabled');
    // sideBar.style.transitionProperty = "none"

    // dashBtn.classList.remove('dashboard-btn');
    // dashboardIcon.style.display = 'none';
    // returnIcon.style.display = 'block';

const dashBtn = document.querySelector('.dashboard-btn');
const returnBtns = document.querySelectorAll('.return-btn');
const dashboard = document.querySelector('#dashboard-overlay')
const sideBar = document.querySelector('.contact-listing')
const sideBarReturnBtn = document.querySelector('.navigation-bar .return-btn');

export function showDashboard() {
    dashboard.style.display = 'flex';

    sideBar.classList.remove('contact-listing');
    sideBar.classList.add('contact-listing-disabled');

    this.removeEventListener('click', showDashboard);

    sideBarReturnBtn.style.display = 'block';
    dashBtn.style.display = 'none';
    
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.key === 'Backspace') {
            hideDashboard();
        }
    })
    returnBtns.forEach(returnBtn => {
        returnBtn.addEventListener('click', hideDashboard);
    })
}

export function hideDashboard() {
    dashboard.addEventListener('animationend', proceed);
    dashboard.classList.add('hide-overlay-animation');

    function proceed() {
        dashboard.removeEventListener('animationend', proceed);
        dashboard.classList.remove('hide-overlay-animation');
        dashboard.style.display = 'none';
    }

    sideBar.classList.remove('contact-listing-disabled');
    sideBar.classList.add('contact-listing');

    sideBarReturnBtn.style.display = 'none';
    dashBtn.style.display = 'flex';

    returnBtns.forEach(returnBtn => {
        returnBtn.removeEventListener('click', hideDashboard);
    });

    

    dashBtn.addEventListener('click', showDashboard);
}
