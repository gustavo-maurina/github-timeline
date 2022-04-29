export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day > 9 ? day : "0" + day}/${
    month > 9 ? month : "0" + month
  }/${year}`;
}
