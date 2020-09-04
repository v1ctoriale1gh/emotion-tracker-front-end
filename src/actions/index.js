export const addLog = log => {
    return {
      type: 'ADD_LOG',
      log
    };
  };
  
  export const removeAuthor = id => {
    return {
      type: 'REMOVE_AUTHOR',
      id
    };
  };
  
  export const addBook = book => {
    return {
      type: 'ADD_BOOK',
      book
    };
  };
  
  export const removeBook = id => {
    return {
      type: 'REMOVE_BOOK',
      id
    };
  };