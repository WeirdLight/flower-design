import { setEventListeners } from "./footerFunctions.js";
import { CreateContentBox } from "./CreateContentBox.js";

export default function catalog(){
    let catalog = new CreateContentBox('section-catalog', 6);

    setEventListeners(catalog);

    return catalog;
}