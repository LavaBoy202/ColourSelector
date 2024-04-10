import { Subject } from "./observer";
import { Square } from "./square";

export class Model extends Subject {
  private _shapeCount = 8;
  get shapeCount() {
    return this._shapeCount;
  }

  private _shapeList: Square[] = [new Square()];
  get shapeList() {
    return this._shapeList;
  }

  private _selectedShape = -1;
  get selectedShape() {
    return this._selectedShape;
  }

  // model "business logic"
  addShape(shape: Square) {
    this._shapeList.push(shape);
    this.notifyObservers();
  }

  deleteShape() {
    if (this._selectedShape !== -1) {
      this._shapeList.splice(this._selectedShape, 1);
      this._selectedShape = -1;
      this.notifyObservers();
    }
  }

  increment() {
    this._shapeCount++;
    this.notifyObservers();
  }

  decrement() {
    this._shapeCount--;
    this.notifyObservers();
  }

  changeHue(hue: number) {
    this._shapeList[this._selectedShape].hue = hue;
    this.notifyObservers();
  }

  changeSelectedShape(num: number) {
    this._selectedShape = num;
    this.notifyObservers();
  }

  validateInput(tf: HTMLInputElement) {
    const value = parseInt(tf.value);
    if (isNaN(value) || value < 0 || value > 360 || tf.value === "") {
      tf.style.outline = "2px solid red";
    } else {
      tf.style.outline = "1px solid grey";
      this.changeHue(value);
    }
  }
  clearShapes() {
    while (this._shapeList.length) {
      this._shapeList.pop();
    }
    this._shapeCount = 0;
    this._selectedShape = -1;
    //this._selectedList = [];
    console.log("Shape Count", this._shapeCount);
    this.notifyObservers();
  }

  deselectAllShapes() {
    if (this.selectedShape != -1) {
      this.shapeList[this.selectedShape].selected = false;
      this._selectedShape = -1;
      this.notifyObservers();
    }
  }
}
