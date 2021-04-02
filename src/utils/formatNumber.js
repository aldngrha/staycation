export default function numberFormat(number) {
  // API intl
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
}
