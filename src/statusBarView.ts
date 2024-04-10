// local imports
import { Observer } from "./observer";
import { Model } from "./model";

export class StatusbarView implements Observer {
  //#region observer pattern

  update(): void {
    this.message.innerText = `${this.model.shapeCount} shapes`;
  }

  //#endregion

  message: HTMLLabelElement;

  constructor(private model: Model) {
    const messageElement = document.getElementById("statusbar") as HTMLLabelElement;
    if (!messageElement) throw new Error("statusbarView 'statusbar' not found");
    this.message = messageElement;

    this.model.addObserver(this);
  }
}
