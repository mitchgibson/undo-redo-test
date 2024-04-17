export function useTextInput(selector: string) {
  const element: HTMLInputElement = document.querySelector<HTMLInputElement>(selector)!;
  const onCompleteCallbacks: ((value: string) => unknown)[] = [];

  if (!element) {
    throw new Error(`Element with selector ${selector} not found`);
  }
  element.addEventListener("keypress", (event: Event) => {
    if ((event as KeyboardEvent).key === "Enter") {
      onCompleteCallbacks.forEach((callback) => callback(element.value));
      element.value = "";
    }
  });

  function onComplete(callback: (value: string) => unknown) {
    onCompleteCallbacks.push(callback);
  }

  return {
    element,
    onComplete,
  };
}
