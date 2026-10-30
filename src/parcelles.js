// MEMBRE 1 — Parcelles : chercher, filtrer et additionner des informations.
// Fiche : fiches/1-parcelles.md · Vérifier : npm run test:parcelles
// Renvoie une ligne de texte qui décrit la parcelle.
// Exemple : 'P01 | Awa Diallo | Soubré | cacao | 3 ha'


export function formaterParcelle(parcelle) {
    return `${parcelle.id} | ${parcelle.producteur} | ${parcelle.localite} | ${parcelle.culture} | ${parcelle.surface} ha`;
}

