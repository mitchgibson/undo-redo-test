export function useStack(onChange: (stack: any[], index: number) => void) {
    let stack: string[] = [];
    let index: number = -1;

    function push(item: string) {
        stack = stack.slice(0, index + 1);
        stack.push(item);
        index++;
        onChange(stack, index);
    }

    function pop() {
        if (index >= 0) {
            const item = stack[index];
            index--;
            onChange(stack, index);
            return item;
        }
    }

    function undo() {
        if (index >= 0) {
            const item = stack[index];
            index--;
            onChange(stack, index);
            return item;
        }
    }

    function redo() {
        if (index < stack.length - 1) {
            index++;
            onChange(stack, index);
            return stack[index];
        }
    }

    return {
        push,
        pop,
        undo,
        redo,
    };
}