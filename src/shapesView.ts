// local imports
import { Model } from "./model";
import { Observer } from "./observer";
import { Square } from "./square";

export class ShapesView implements Observer {
  //#region observer pattern

  update(): void {
    this.squareList.innerHTML = "";
    this.model.shapeList.forEach((s, index) => {
      const shapeElement = document.createElement("div");
      shapeElement.classList.add("shape");
      shapeElement.style.width = "50px";
      shapeElement.style.height = "50px";
      shapeElement.style.backgroundColor = `hsl(${s.hue} ${50}% ${50}%)`;

      if (index == this.model.selectedShape) {
        shapeElement.style.outlineOffset = "2px";
        shapeElement.style.outline = "1px solid blue";
      }

      shapeElement.addEventListener("click", () => {
        if (index === this.model.selectedShape) {
          this.model.changeSelectedShape(-1);
          const deleteButtonElement = document.getElementById(
            "deleteButton"
          ) as HTMLButtonElement;
          if (!deleteButtonElement)
            throw new Error("toolbarView 'deleteButton' button not found");
        deleteButtonElement.classList.add("disabledButton")
        } else {
          this.model.changeSelectedShape(index);
          const deleteButtonElement = document.getElementById(
            "deleteButton"
          ) as HTMLButtonElement;
          if (!deleteButtonElement)
            throw new Error("toolbarView 'deleteButton' button not found");
        deleteButtonElement.classList.remove("disabledButton")
        }
      });

      this.squareList.appendChild(shapeElement);
    });
  }

  squareList: HTMLElement;

  constructor(private model: Model) {
    const shapeListElement = document.getElementById(
      "shapelist"
    ) as HTMLElement;
    if (!shapeListElement)
      throw new Error("editorView 'colouredRect' not found");
    this.squareList = shapeListElement;

    for (let i = 1; i < model.shapeCount; i++) {
      const square = new Square();
      model.addShape(square);
    }

    shapeListElement.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target === shapeListElement) {
          this.model.deselectAllShapes();
          const deleteButtonElement = document.getElementById(
            "deleteButton"
          ) as HTMLButtonElement;
          if (!deleteButtonElement)
            throw new Error("toolbarView 'deleteButton' button not found");
        deleteButtonElement.classList.add("disabledButton")
      }
  });

    this.model.addObserver(this);
  }
}
