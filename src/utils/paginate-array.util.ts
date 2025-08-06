export const paginateArray = <T = any>(data: T[], page: number): T[] => {
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return data.slice(startIndex, endIndex);
};
