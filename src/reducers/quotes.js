export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      const newQuotes = state.filter(q => q.id !== action.quoteId)

      return newQuotes;

    case "UPVOTE_QUOTE":
      const indx = state.findIndex(q => q.id === action.quoteId)

      const newQuote = {
        ...state[indx], 
        votes: state[indx].votes + 1
      }

      return [
        ...state.slice(0, indx),
        newQuote,
        ...state.slice(indx + 1)
      ];
  
    default:
      return state;
  }
}
