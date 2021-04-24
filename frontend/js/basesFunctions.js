/** @format */

// Affiche les prix avec les milliers détachés (1 000,00€)
export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
