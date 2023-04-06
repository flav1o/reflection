const vwToPx = (width: number) => {
  const oneVwInPx = window.innerWidth / 100;
  return oneVwInPx * width;
};

export { vwToPx };
