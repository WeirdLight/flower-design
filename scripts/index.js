 import catalog from "./catalog.js";
 import review from "./review.js";
 import { init } from "./init.js";
 import sendNewComment from "./sendComment.js";

init(catalog());
init(review());

sendNewComment();