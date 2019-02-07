class TabLink{
    constructor(element) {
        this.element = element;
        this.data = element.dataset.tab;
        this.item = document.querySelector(`.tabs-item[data-tab = "${this.data}"]`);

        this.tabItem = new TabItem(this.item);
        this.element.addEventListener('click',()=> {
            this.select();
        })
    };
    select() {
        const links = document.querySelectorAll('.tabs-link');
        Array.from(links).forEach(link => {
             link.classList.remove('tabs-link-selected')
        });

        this.element.classList.add('tabs-link-selected');
        
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element){
        this.element = element;

    }
    select() {
        const items = document.querySelectorAll('.tabs-item');
        Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
        this.element.classList.add('tabs-element-selected');

    }
}

links = document.querySelectorAll('.tabs-link');
links.forEach(linky  => new TabLink(linky));