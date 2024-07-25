import { districts } from "@/data";

export const formatDate = (date: string) =>
  new Date(date)
    .toLocaleDateString("uz-UZ", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .split("-")
    .reverse()
    .join("/");

export function filterByRegionId(id: string | number) {
  const filteredDistricts = districts.filter((dis) => +dis.region_id! === +id);

  return filteredDistricts;
}

export const formatNumbers = (sum: string | number | undefined) =>
  sum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const formatPhone = (phoneNumber: string): string =>
  `+998 (${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 10)} ${phoneNumber.slice(9, 10)}`;

export const formatPrice = (price: number | string | undefined): string => {
  // Handle the undefined case
  if (price === undefined) return "";

  // Convert the price to a string if it's not already
  const priceStr =
    typeof price === "number" ? price.toFixed(0) : parseInt(price).toFixed(0);

  // Format the string with spaces as thousand separators
  const formattedPrice = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return formattedPrice;
};
