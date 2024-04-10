import { random } from "./misc";

export class Square {
  state: "idle" | "hover" = "idle";
  selected = false;
  constructor(hue = Math.floor(random(0, 360)), sat = 50, lum = 50) {
    this.hue = hue;
  }

  protected _hue = this.hue;
  get hue() {
    return this._hue;
  }
  set hue(h: number) {
    this._hue = h;
  }

//   hittest(mx: number, my: number): boolean {
//     return insideHitTestRectangle(
//       mx,
//       my,
//       this.x,
//       this.y,
//       this.paddingBox.width,
//       this.paddingBox.height
//     );
//   }

//   handleMouseEvent(me: SKMouseEvent) {
//     switch (me.type) {
//       case "mousedown":
//         //this.selected = !this.selected;
//         return true;
//         break;
//       case "mouseup":
//         this.state = "hover";
//         // return true if a bubble listener was registered
//         return this.sendEvent({
//           source: this,
//           timeStamp: me.timeStamp,
//           type: "action",
//         } as SKEvent);
//         break;
//       case "mouseenter":
//         this.state = "hover";
//         return true;
//         break;
//       case "mouseexit":
//         this.state = "idle";
//         return true;
//         break;
//     }
//     return false;
//   }

//   draw(gc: CanvasRenderingContext2D) {
//     gc.save();

//     gc.translate(this.x, this.y);
//     gc.translate(this.margin, this.margin);

//     if (this.fill && this.width && this.height) {
//       gc.fillStyle = this.fill;
//       gc.fillRect(0, 0, this.width, this.height);
//     }
//     if (this.border && this.width && this.height) {
//       if (this.selected) {
//         gc.strokeStyle = "blue";
//         gc.lineWidth = 2;
//         gc.strokeRect(-3, -3, this.width + 6, this.height + 6);
//       } else {
//         if (this.state == "hover") {
//           gc.strokeStyle = Style.highlightColour;
//           gc.lineWidth = 5;
//           gc.strokeRect(0, 0, this.width, this.height);
//         } else {
//           gc.strokeStyle = this.border;
//           gc.lineWidth = 1;
//           gc.strokeRect(0, 0, this.width, this.height);
//         }
//       }
//     }

//     gc.restore();
//   }
}
