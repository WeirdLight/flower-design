export function CreateContentBox(containerId, numOfNewItems){
    this.containerId = containerId;
    this.contentId = this.containerId.replace('section-','');
    this.section = document.getElementById(containerId);
    this.children = this.section.children;
    this.circles = this.section.getElementsByClassName('circle');
    this.circlesActive = 0;
    this.numOfNewItems = numOfNewItems;
}