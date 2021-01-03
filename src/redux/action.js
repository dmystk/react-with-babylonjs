
export const ActionType = {
  changeSize: 'change_size',
};

export const changeSize = (size) => {
  return {
    type: ActionType.changeSize,
    size
  };
};
