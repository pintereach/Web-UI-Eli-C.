class Expander {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector(".expandButton");

    this.expandButton.textContent = "Expand";

    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    console.log(this.expandButton);
  }

  expandArticle() {
    this.domElement.classList.toggle("article-open");
    console.log(this.expandButton);
  }
}

let expanders = document.querySelectorAll(".expander");
expanders.forEach(expander => new Expander(expander));
