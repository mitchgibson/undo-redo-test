import { useTextInput } from "./components/TextInput";
import { useButton } from "./components/Button";
import { useStack } from "./services/Stack";
import "./style.css";
import { useResults } from "./components/Results";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="w-full h-screen bg-neutral-900 text-emerald-400 p-4">
    <input id="text-input" type="text" class="bg-neutral-800 rounded-lg border border-green-400 w-full" />

    <div id="results" class="flex flex-col mt-4 h-96 rounded-xl border border-green-400 bg-neutral-900 p-2"></div>
    <button id="undo" class="border border-emerald-400 text-emerald-400 rounded-lg p-2 mt-4 mx-1">Undo</button>
    <button id="redo" class="border border-emerald-400 text-emerald-400 rounded-lg p-2 mt-4 mx-1">Redo</button>
  </div>
`;

const results = useResults("#results");
const textInput = useTextInput("#text-input");
const undoButton = useButton("#undo");
const redoButton = useButton("#redo");
const stack = useStack(results.fromArray);

textInput.onComplete(stack.push);
undoButton.onClick(stack.undo);
redoButton.onClick(stack.redo);
