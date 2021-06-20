import { LightningElement } from "lwc";
import NAV_LINKS from '../../../data/navbarData';
export default class Navbar extends LightningElement {
    navLinkList = NAV_LINKS;
    isToggleMobile = false;

    get mobileNav() {
        return `collapse navbar-collapse ${ this.isToggleMobile && 'show' }`
    }

    toggleMobileNav() {
        this.isToggleMobile = !this.isToggleMobile;
    }
}