// local imports
import { Observer } from "./observer";
import { Model } from "./model";
import { Square } from "./square";

export class ToolbarView implements Observer {
  //#region observer pattern

  update(): void {}

  //#endregion

  addButton: HTMLButtonElement;
  deleteButton: HTMLButtonElement;
  clearButton: HTMLButtonElement;

  constructor(private model: Model) {
    const addButtonElement = document.getElementById("addButton") as HTMLButtonElement;
    if (!addButtonElement) throw new Error("toolbarView 'addButton' button not found");
    this.addButton = addButtonElement;

    const deleteButtonElement = document.getElementById("deleteButton") as HTMLButtonElement;
    if (!deleteButtonElement) throw new Error("toolbarView 'deleteButton' button not found");
    this.deleteButton = deleteButtonElement;
    this.deleteButton.classList.add("disabledButton")

    const clearButtonElement = document.getElementById("clearButton") as HTMLButtonElement;
    if (!deleteButtonElement) throw new Error("toolbarView 'clearButton' button not found");
    this.clearButton = clearButtonElement;

    this.addButton.addEventListener("click", () => {
      if (model.shapeCount < 25) {
        if (model.shapeCount == 24) {
          this.addButton.classList.add("disabledButton");
        }
        this.clearButton.classList.remove("disabledButton")
        //this.deleteButton.classList.remove("disabledButton");
        model.increment();
        model.addShape(new Square());
        //model.changeSelectedShape(model.shapeCount - 1)
      } 
    });

    this.deleteButton.addEventListener("click", () => {
        if(model.selectedShape == -1){
            this.deleteButton.classList.add("disabledButton");
        }else{
            this.addButton.classList.remove("disabledButton");
            model.decrement();
            model.deleteShape();
            this.deleteButton.classList.add("disabledButton");
        }  
    });

    this.clearButton.addEventListener("click", () => {
        if(model.shapeCount > 0){
            model.clearShapes()
            this.clearButton.classList.add("disabledButton");
            this.deleteButton.classList.add("disabledButton");
            this.addButton.classList.remove("disabledButton")
        }
      });

    this.model.addObserver(this);
  }
}
