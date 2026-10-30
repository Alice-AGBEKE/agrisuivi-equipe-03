// MEMBRE 2 — Irrigation : lire les relevés des capteurs et décider quoi faire.
// Fiche : fiches/2-irrigation.md · Vérifier : npm run test:irrigation

// Renvoie seulement les relevés de la parcelle demandée.
export function relevesDeParcelle(releves, idParcelle) {
  return releves.filter(releve => releve.parcelle === idParcelle);
}
