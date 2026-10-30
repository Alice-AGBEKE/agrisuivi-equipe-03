// MEMBRE 2 — Irrigation : lire les relevés des capteurs et décider quoi faire.
// Fiche : fiches/2-irrigation.md · Vérifier : npm run test:irrigation

// Renvoie seulement les relevés de la parcelle demandée.
export function relevesDeParcelle(releves, idParcelle) {
  return releves.filter(releve => releve.parcelle === idParcelle);
}
// Renvoie la moyenne des humidités, arrondie à l'entier le plus proche.
// Liste vide : null (on ne peut pas calculer de moyenne).
export function moyenneHumidite(releves) {
  if (releves.length === 0){
    return null;
  }
const somme = releves.reduce((total, releve) => total + releve.humidite, 0);
return Math.round(somme / releves.length);
}
