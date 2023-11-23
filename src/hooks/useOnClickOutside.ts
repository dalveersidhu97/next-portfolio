import { useEffect, RefObject } from "react";
type Handler = (event: MouseEvent) => void

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler, mouseEvent: keyof DocumentEventMap = 'mouseup',) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener(mouseEvent, listener);
        return () => {
            document.removeEventListener(mouseEvent, listener);
        };
    }, []);
};

export default useOnClickOutside;