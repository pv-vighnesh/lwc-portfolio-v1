import { LightningElement } from "lwc";
import BANNER_DATA from '../../../data/bannerData';

export default class extends LightningElement {
    welcomeText = BANNER_DATA.welcomeText;
    name = BANNER_DATA.name;
    description = BANNER_DATA.description;
    getInTouchBtn = BANNER_DATA.getInTouchBtn;
    resumeBtn = BANNER_DATA.resumeBtn;
}