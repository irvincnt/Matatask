import { UIState } from "./UIProvider";

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Set isAddingEntry"; payload: boolean }
  | { type: "UI - Start dragging" }
  | { type: "UI - End dragging" }

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    case "UI - Set isAddingEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case "UI - Start dragging": 
      return {
        ...state,
        isDragging: true
      };
    case "UI - End dragging": 
      return {
        ...state,
        isDragging: false
    };

    default:
      return state;
  }
};
