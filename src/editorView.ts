// local imports
import { Observer } from "./observer";
import { Model } from "./model";

export class EditorView implements Observer {
  //#region observer pattern

  update(): void {
    if (this.model.selectedShape === -1) {
    //   const messageElement = document.getElementById(
    //     "display"
    //   ) as HTMLLabelElement;
    //   if (!messageElement) throw new Error("editorView 'display' not found");
    //   const childMessageElement = document.getElementById(
    //     "displaySquare"
    //   ) as HTMLLabelElement;
    //   if (!childMessageElement)
    //     throw new Error("editorView 'displaySquare' not found");
    //   //Remove Coloured rect  
    //   messageElement.removeChild(childMessageElement);
    //   //Remove Form
    //   const formContainerElement = document.getElementById(
    //     "formcontainer"
    //   ) as HTMLLabelElement;

    //   const editorElement = document.getElementById(
    //     "editor"
    //   ) as HTMLLabelElement;



    //   //Add Message
    //   const p = document.createElement("p");
    //   p.textContent = "Select One";
    //   p.id = "displaySquare";

      const displayElement = document.getElementById("rightsidecontent");
      if (!displayElement) throw new Error("editorView 'display' not found");
      displayElement.innerHTML = `<div id="message">Select One</div>`;
      //messageElement.appendChild(p);
    } else {
        const displayElement = document.getElementById("rightsidecontent");
      if (!displayElement) throw new Error("editorView 'display' not found");
      displayElement.innerHTML = `<div id="display">
      <div id="displaySquare"></div>
    </div>
    <div id="formcontainer"></div>
    <div id="editor">
      <form>
        <div>
          <label for="hue">Hue</label>
          <input id="hueTextfield" type="number"/>
        </div>
      </form>
    </div>`;
    //   const messageElement = document.getElementById(
    //     "display"
    //   ) as HTMLLabelElement;
    //   if (!messageElement) throw new Error("editorView 'display' not found");
    //   const childMessageElement = document.getElementById(
    //     "displaySquare"
    //   ) as HTMLLabelElement;
    //   if (!childMessageElement)
    //     throw new Error("editorView 'displaySquare' not found");
    //   messageElement.removeChild(childMessageElement);
    //   //Adding back the coloured rectangle
    //   const p = document.createElement("div");
    //   p.id = "displaySquare";
      const selectedShape = this.model.shapeList[this.model.selectedShape];
      this.colouredRect.style.backgroundColor = `hsl(${
        selectedShape.hue
      } ${50}% ${50}%)`;
      this.hueTextfield.value = `${selectedShape.hue}`;
      const p = document.getElementById(
            "displaySquare"
          ) as HTMLLabelElement
      p.style.backgroundColor = `hsl(${selectedShape.hue} ${50}% ${50}%)`;

      const field = document.getElementById(
        "hueTextfield"
      ) as HTMLInputElement
      field.value = `${selectedShape.hue}`
      field.addEventListener("input", () => {
        const hue = this.model.validateInput(field);
      });
      //messageElement.appendChild(p);
      //Adding back the form



    }
  }

  //#endregion

  colouredRect: HTMLElement;
  hueTextfield: HTMLInputElement;

  constructor(private model: Model) {
    const colouredRectElement = document.getElementById(
      "displaySquare"
    ) as HTMLElement;
    if (!colouredRectElement)
      throw new Error("editorView 'colouredRect' not found");
    this.colouredRect = colouredRectElement;

    const hueTextfieldElement = document.getElementById(
      "hueTextfield"
    ) as HTMLInputElement;
    if (!hueTextfieldElement)
      throw new Error("editorView 'hueTextfield' not found");
    this.hueTextfield = hueTextfieldElement;

    this.hueTextfield.addEventListener("input", () => {
      const hue = this.model.validateInput(this.hueTextfield);
    });

    this.model.addObserver(this);
  }
}
