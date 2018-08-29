/********************************************
 * Main function for handling calculator main functionality i.e. On, Off or Clear field. 
 ********************************************/

export default function(state, key) {

  switch (key.value) {
    case 'clear':
    case 'on':
      return {
        ...state,
        open: key.value === "clear" ? state.open : true,
        currentEntry: 0,
        nextEntry: null,
        operation: null
      };

    case 'off':
      return {
        ...state,
        open: false,
        currentEntry: 0,
        nextEntry: null,
        operation: null
      };

    default:
      return state;
  }
}