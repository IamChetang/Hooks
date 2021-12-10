export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      const addedPeople = [...state.people, action.payload];
      return {
        ...state,
        people: addedPeople,
        isModalOpen: true,
        modalContent: 'item added',
      };
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Enter a value',
      };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };
    case 'DELETE_PERSON':
      const updatedPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return {
        ...state,
        people: updatedPeople,
        isModalOpen: true,
        modalContent: 'Person removed',
      };
    default:
      throw new Error('no matching action type');
  }
};
