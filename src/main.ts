import { useTextInput } from "./components/TextInput";
import { useButton } from "./components/Button";
import { useStack } from "./services/Stack";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="w-full h-screen bg-neutral-900 text-emerald-400 p-4">
    <input id="text-input" type="text" class="bg-neutral-800 rounded-lg border border-green-400 w-full" />

    <div id="console" class="flex flex-col mt-4 h-96 rounded-xl border border-green-400 bg-neutral-900 p-2"></div>
    <button id="undo" class="border border-emerald-400 text-emerald-400 rounded-lg p-2 mt-4 mx-1">Undo</button>
    <button id="redo" class="border border-emerald-400 text-emerald-400 rounded-lg p-2 mt-4 mx-1">Redo</button>
  </div>
`;

const stack = useStack((stack, index) => {
  consoleDiv.innerHTML = "";
  for(let i = 0; i <= index; i++) {
    consoleDiv.appendChild(document.createElement("div")).innerText = stack[i];
  }
});

const textInput = useTextInput("#text-input");
textInput.onComplete(stack.push);

const consoleDiv = document.querySelector<HTMLDivElement>("#console")!;
const undoButton = useButton("#undo");
undoButton.onClick(stack.undo);

const redoButton = useButton("#redo");
redoButton.onClick(stack.redo);
