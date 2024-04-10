import { EditorView } from "./editorView";
import { Model } from "./model";
import { ShapesView } from "./shapesView";
import { StatusbarView } from "./statusBarView";
import { ToolbarView } from "./toolBarView";

const model = new Model();
const toolbarView = new ToolbarView(model);
const editorView = new EditorView(model);
const shapesView = new ShapesView(model);
const statusbarView = new StatusbarView(model)
