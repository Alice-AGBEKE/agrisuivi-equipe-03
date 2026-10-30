// MEMBRE 1 — Parcelles : chercher, filtrer et additionner des informations.
// Fiche : fiches/1-parcelles.md · Vérifier : npm run test:parcelles
// Renvoie une ligne de texte qui décrit la parcelle.
// Exemple : 'P01 | Awa Diallo | Soubré | cacao | 3 ha'

// Renvoie une ligne de texte qui décrit la parcelle.
// Exemple : 'P01 | Awa Diallo | Soubré | cacao | 3 ha'
export function formaterParcelle(parcelle) {
    return `${parcelle.id} | ${parcelle.producteur} | ${parcelle.localite} | ${parcelle.culture} | ${parcelle.surface} ha`;
}
// "TODO Membre 1 : coder formaterParcelle dans src/parcelles.js",

// Renvoie la parcelle dont l'id est demandé.
export function trouverParcelle(parcelles, id) {
    return parcelles.find((parcelle) => parcelle.id === id);
}
 // "TODO Membre 1 : coder trouverParcelle dans src/parcelles.js",

 // Renvoie seulement les parcelles de la culture demandée.
export function parcellesParCulture(parcelles, culture) {
    return parcelles.filter((parcelle) => parcelle.culture === culture);
}
// "TODO Membre 1 : coder parcellesParCulture dans src/parcelles.js",

// Renvoie la somme des surfaces.
export function surfaceTotale(parcelles) {
    return parcelles.reduce((total, parcelle) => total + parcelle.surface, 0);
}
//"TODO Membre 1 : coder surfaceTotale dans src/parcelles.js");



