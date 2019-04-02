// add a card

// arrow function with implicit return that returns an object
export const addCard = (text, boardIndex) => ({
  type: "ADD_CARD",
  text,
  boardIndex
});

// remove a card
export const removeCard = id => ({
  type: "REMOVE_CARD",
  id
});

// transfer a card

export const transferCard = (id, destinationBoardIndex) => ({
  type: "TRANSFER_CARD",
  id,
  destinationBoardIndex
});

// add a board at the end

export const addBoard = name => ({
  type: "ADD_BOARD",
  name
});

// remove a board

export const removeBoard = id => ({
  type: "REMOVE_BOARD",
  id
});
