
export function useResults(selector: string) {
    const element: HTMLDivElement = document.querySelector<HTMLDivElement>(selector)!;
    
    if (!element) {
        throw new Error(`Element with selector ${selector} not found`);
    }
    
    function clear() {
        element.innerHTML = "";
    }

    function insertLine(string: string) {
        element.appendChild(document.createElement("div")).innerText = string;
    }

    function fromArray(array: string[], end: number = array.length) {
        console.log("fromArray", array, end);
        clear();
        for(let i = 0; i <= end; i++) {
            insertLine(array[i]);
        }
    }
    
    return {
        element,
        clear,
        insertLine,
        fromArray,
    };
}