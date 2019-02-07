class TabLink{
    constructor(element) {
        this.element = element;
        this.data = element.dataset.tab;
        this.itemElement = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);

        this.tabItem = new TabItem(this.itemElement);
        element.addEventListener('click',()=> this.select());
    };
    select() {
        const links = document.getElementsByClassName('tab-link');
        Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
        this.element.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element){
        
    }
}