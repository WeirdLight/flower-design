import { setEventListeners } from "./footerFunctions.js";
import { CreateContentBox } from "./CreateContentBox.js";

export default function review(){
    let review = new CreateContentBox('section-review', 2);

    setEventListeners(review);
    return review;
}