/* eslint-disable @typescript-eslint/no-explicit-any */
export const thaiMonthsFormat = (index: number) => {
  const thaiMonthsFull = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  return thaiMonthsFull[index - 1];
};

export const articleDateTimeFormat = (dateTime: any): string => {
  const date = new Date(dateTime);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${date?.getDate()} ${thaiMonthsFormat(
    date?.getMonth()
  )} ${date?.getFullYear()} - ${hours}:${minutes} น.`;
};
