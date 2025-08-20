export const paginateArray = <T = any>(data: T[], page: number, limit: number = 10): T[] => {
  const pageSize = limit;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return data.slice(startIndex, endIndex);
};
