export const initialState = {
    basket: [],
    // basket: new Map(),
  };
  
  export const getTotalQuantity = (basket) => {
    return basket.reduce((quantity, element) => element.quantity + quantity, 0);
  };
  
  export const getTotalBasket = (basket) => {
    return basket.reduce((amount, element) => element.price * element.quantity + amount, 0);;
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        const id = action.item.id;
        let newBasket = [...state.basket];
        const index = newBasket.findIndex((element) => element.id === action.item.id);
        if ( index >= 0) {
          newBasket[index] = {...state.basket[index], quantity : state.basket[index].quantity + 1}
        } else {
          newBasket.push(action.item);
        }
        return { ...state, basket: newBasket };

      case "UPDATE_ITEM" :
        let newBasket_update = [...state.basket];
        const index_update = newBasket_update.findIndex((element) => element.id === action.item.id);
        newBasket_update[index_update] = action.item;
        return {...state, basket : newBasket_update};

      case "DELETE_ITEM" :
        const x = [...state.basket];
        const index_delete = x.findIndex(element => element.id === action.id);
        x.splice(index_delete, 1);
        return {...state, basket : x};

      case "CLEAR_BASKET" :
        return {...state, basket : [] };

      case "SET_USER":
        return {...state, user : action.user};

      default:
        return state;
    }
  };
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD_TO_BASKET":
//         const id = action.item.id;
//         const newBasket = new Map(state.basket); // Create a new Map based on existing basket
//         if (newBasket.has(id)) {
//           const item = newBasket.get(id);
//           newBasket.set(id, { ...item, quantity: item.quantity + 1 });
//         } else {
//           newBasket.set(id, { ...action.item, quantity: 1 });
//         }
//         return { ...state, basket: newBasket };

//       case "UPDATE_ITEM" :
//         const y = new Map(state.basket);
//         y.set(action.item.id, action.item);
//         return {...state, basket : y};

//       case "DELETE_ITEM" :
//         const x = new Map(state.basket);
//         x.delete(action.id);
//         return {...state, basket : x};

//       case "CLEAR_BASKET" :
//         return {...state, basket : new Map() };

//       case "SET_USER":
//         return {...state, user : action.user};

//       default:
//         return state;
//     }
//   };
  
  export default reducer;
  