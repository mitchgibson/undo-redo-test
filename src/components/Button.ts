export function useButton(selector: string) {
    const element = document.querySelector(selector)!;
    if (!element) {
        throw new Error(`Element with selector ${selector} not found`);
    }
    
    function onClick(callback: () => void) {
        element.addEventListener('click', callback);
    }
    
    return {
        element,
        onClick,
    };
}