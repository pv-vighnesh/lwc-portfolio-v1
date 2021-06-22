import { LightningElement } from "lwc";
import NAV_LINKS from '../../../data/navbarData';
export default class Navbar extends LightningElement {
    navLinkList = NAV_LINKS;
    isToggleMobile = false;
    isDOMLoaded = false;

    get mobileNav() {
        return `collapse navbar-collapse ${ this.isToggleMobile && 'show' }`
    }

    toggleMobileNav() {
        this.isToggleMobile = !this.isToggleMobile;
    }

    navLinkClick(event) {
        event.preventDefault();
        if(this.isToggleMobile) {
            this.toggleMobileNav();
        }
        console.log(event.target.name)
        const name = event.target.name.toLowerCase().replace(/\s+/g, '');
        console.log(name)
        let secName  = `my-${name}`;
        console.log(secName)
        const selectedNav = document.querySelector(secName);
        selectedNav.scrollIntoView();
    }

    renderedCallback() {
        if(!this.isDOMLoaded) {
            const ele = document.querySelector('.nav-link');
            if (ele) {
                ele.classList.add('active');
                this.isDOMLoaded = true;
            }
        }
    }
}