// ============================================================
//  LISTE DES PDF DU PLANNING
// ============================================================
// Une ligne par semaine, de la semaine du 30/12/2024 à celle du 28/12/2026.
//
// Point de repère :
//  - la clé (ex. "2026-01-05") est la date du LUNDI de la semaine ;
//  - le commentaire à droite donne le numéro de semaine et les dates exactes
//    (du lundi au dimanche).
//
// ERGUN (EH) : les vrais PDF sont déjà liés. Les dossiers PDF_EH_2025 et
// PDF_EH_2025_2 doivent se trouver à côté du fichier index.html.
// Les semaines sans PDF d'Ergun gardent un emplacement générique :
//   eh/AAAA-MM-JJ.webp   (AAAA-MM-JJ = date du lundi)
//
// RACHID (Rch) : emplacements génériques pour toutes les semaines :
//   rch/AAAA-MM-JJ.webp
//
// Pour changer un PDF : remplacez le chemin de la ligne par copier-coller.
// Pour une semaine sans PDF, mettez "" à la place du chemin (le bouton reste grisé).
// Une semaine à cheval sur deux mois n'apparaît qu'une fois (sous le mois
// de son lundi) et le même PDF sert pour les deux mois.
// Gardez les virgules entre les lignes.
// ============================================================

window.pdfParSemaine = {

  // ---------- Décembre 2024 ----------
  "2024-12-30": { RACHID: "rch/19-  semaine du 30 12 2024.webp", ERGUN: "eh/19-  semaine du 30 12 2024.webp" },   // S01 · du 30/12/2024 au 05/01/2025

  // ---------- Janvier 2025 ----------
  "2025-01-06": { RACHID: "rch/20-  semaine du 6 01 2025 .webp", ERGUN: "eh/20-  semaine du 6 01 2025 .webp" },   // S02 · du 06/01/2025 au 12/01/2025
  "2025-01-13": { RACHID: "rch/21 -  semaine du 13 01 2025.webp", ERGUN: "eh/21 -  semaine du 13 01 2025.webp" },   // S03 · du 13/01/2025 au 19/01/2025
  "2025-01-20": { RACHID: "rch/22 -  semaine du 20 01 2025.webp", ERGUN: "eh/22 -  semaine du 20 01 2025.webp" },   // S04 · du 20/01/2025 au 26/01/2025
  "2025-01-27": { RACHID: "rch/23 -  semaine du 27 01 2025.webp", ERGUN: "eh/23 -  semaine du 27 01 2025.webp" },   // S05 · du 27/01/2025 au 02/02/2025

  // ---------- Février 2025 ----------
  "2025-02-03": { RACHID: "rch/24 -  semaine du 03 02 2025.webp", ERGUN: "eh/24 -  semaine du 03 02 2025.webp" },   // S06 · du 03/02/2025 au 09/02/2025
  "2025-02-10": { RACHID: "rch/25 -  semaine du 10 02 2025.webp", ERGUN: "eh/25 -  semaine du 10 02 2025.webp" },   // S07 · du 10/02/2025 au 16/02/2025
  "2025-02-17": { RACHID: "rch/26 -  semaine du 17 02 2025.webp", ERGUN: "eh/26 -  semaine du 17 02 2025.webp" },   // S08 · du 17/02/2025 au 23/02/2025
  "2025-02-24": { RACHID: "rch/27 -  semaine du 24 02 2025 .webp", ERGUN: "eh/27 -  semaine du 24 02 2025 .webp" },   // S09 · du 24/02/2025 au 02/03/2025

  // ---------- Mars 2025 ----------
  "2025-03-03": { RACHID: "rch/28 -  semaine du 03 03 2025 .webp", ERGUN: "eh/28 -  semaine du 03 03 2025 .webp" },   // S10 · du 03/03/2025 au 09/03/2025
  "2025-03-10": { RACHID: "rch/29 -  semaine du 10 03 2025 v3.webp", ERGUN: "eh/29 -  semaine du 10 03 2025 v3.webp" },   // S11 · du 10/03/2025 au 16/03/2025
  "2025-03-17": { RACHID: "rch/30 -  semaine du 17 03 2025_v3.webp", ERGUN: "eh/30 -  semaine du 17 03 2025_v3.webp" },   // S12 · du 17/03/2025 au 23/03/2025
  "2025-03-24": { RACHID: "rch/31 -  semaine du 24 03 2025_v3.webp", ERGUN: "eh/31 -  semaine du 24 03 2025_v3.webp" },   // S13 · du 24/03/2025 au 30/03/2025
  "2025-03-31": { RACHID: "rch/32 -  semaine du 31 03 2025_v3.webp", ERGUN: "eh/32 -  semaine du 31 03 2025_v3.webp" },   // S14 · du 31/03/2025 au 06/04/2025

  // ---------- Avril 2025 ----------
  "2025-04-07": { RACHID: "rch/34 -  semaine du 07 04 2025 .webp", ERGUN: "eh/2025-04-07.webp" },   // S15 · du 07/04/2025 au 13/04/2025
  "2025-04-14": { RACHID: "rch/33 -  semaine du 14 04 2025 .webp", ERGUN: "eh/33 -  semaine du 14 04 2025 .webp" },   // S16 · du 14/04/2025 au 20/04/2025
  "2025-04-21": { RACHID: "rch/34 -  semaine du 21 04 2025 .webp", ERGUN: "eh/34 -  semaine du 21 04 2025 .webp" },   // S17 · du 21/04/2025 au 27/04/2025
  "2025-04-28": { RACHID: "rch/35 -  semaine du 28 04 2025 .webp", ERGUN: "eh/35 -  semaine du 28 04 2025 .webp" },   // S18 · du 28/04/2025 au 04/05/2025

  // ---------- Mai 2025 ----------
  "2025-05-05": { RACHID: "rch/36 -  semaine du 05 05 2025 .webp", ERGUN: "eh/36 -  semaine du 05 05 2025 .webp" },   // S19 · du 05/05/2025 au 11/05/2025
  "2025-05-12": { RACHID: "rch/37 -  semaine du 12 05 2025.webp", ERGUN: "eh/37 -  semaine du 12 05 2025.webp" },   // S20 · du 12/05/2025 au 18/05/2025
  "2025-05-19": { RACHID: "rch/38 -  semaine du 19 05 2025.webp", ERGUN: "eh/38 -  semaine du 19 05 2025.webp" },   // S21 · du 19/05/2025 au 25/05/2025
  "2025-05-26": { RACHID: "rch/39 -  semaine du 26 05 2025 .webp", ERGUN: "eh/39 -  semaine du 26 05 2025 .webp" },   // S22 · du 26/05/2025 au 01/06/2025

  // ---------- Juin 2025 ----------
  "2025-06-02": { RACHID: "rch/40 -  semaine du 02 06 2025 .webp", ERGUN: "eh/40 -  semaine du 02 06 2025 .webp" },   // S23 · du 02/06/2025 au 08/06/2025
  "2025-06-09": { RACHID: "rch/41 -  semaine du 9 06 2025 .webp", ERGUN: "eh/41 -  semaine du 9 06 2025 .webp" },   // S24 · du 09/06/2025 au 15/06/2025
  "2025-06-16": { RACHID: "rch/42 -  semaine du 16 06 2025 .webp", ERGUN: "eh/42 -  semaine du 16 06 2025 .webp" },   // S25 · du 16/06/2025 au 22/06/2025
  "2025-06-23": { RACHID: "rch/43 -  semaine du 23 06 2025 .webp", ERGUN: "eh/43 -  semaine du 23 06 2025 .webp" },   // S26 · du 23/06/2025 au 29/06/2025
  "2025-06-30": { RACHID: "rch/44 -  semaine du 30 06 2025 - V2.webp", ERGUN: "eh/44 -  semaine du 30 06 2025 - V2.webp" },   // S27 · du 30/06/2025 au 06/07/2025

  // ---------- Juillet 2025 ----------
  "2025-07-07": { RACHID: "rch/45 -  semaine du 07 07 2025 - V4.webp", ERGUN: "eh/45 -  semaine du 07 07 2025 - V4.webp" },   // S28 · du 07/07/2025 au 13/07/2025
  "2025-07-14": { RACHID: "rch/46. Semaine du 14 07 2025 V3.webp", ERGUN: "eh/46. Semaine du 14 07 2025 V3.webp" },   // S29 · du 14/07/2025 au 20/07/2025
  "2025-07-21": { RACHID: "rch/47 -  semaine du 21 07 2025 V2.webp", ERGUN: "eh/47 -  semaine du 21 07 2025 V2.webp" },   // S30 · du 21/07/2025 au 27/07/2025
  "2025-07-28": { RACHID: "rch/48 -  semaine du 28 07 2025 v3.webp", ERGUN: "eh/48 -  semaine du 28 07 2025 v3.webp" },   // S31 · du 28/07/2025 au 03/08/2025

  // ---------- Août 2025 ----------
  "2025-08-04": { RACHID: "rch/49 -  semaine du 04 08 2025 v3.webp", ERGUN: "eh/49 -  semaine du 04 08 2025 v3.webp" },   // S32 · du 04/08/2025 au 10/08/2025
  "2025-08-11": { RACHID: "rch/50 -  semaine du 11 08 2025 - V3.webp", ERGUN: "eh/50 -  semaine du 11 08 2025 - V3.webp" },   // S33 · du 11/08/2025 au 17/08/2025
  "2025-08-18": { RACHID: "rch/51 -  semaine du 18 08 2025 - V4.webp", ERGUN: "eh/51 -  semaine du 18 08 2025 - V4.webp" },   // S34 · du 18/08/2025 au 24/08/2025
  "2025-08-25": { RACHID: "rch/1 -  PN semaine du 25 08 2025 v4.webp", ERGUN: "eh/1 -  PN semaine du 25 08 2025 v4.webp" },   // S35 · du 25/08/2025 au 31/08/2025

  // ---------- Septembre 2025 ----------
  "2025-09-01": { RACHID: "rch/2 -  PN semaine du 01 09 2025 v4.webp", ERGUN: "eh/2 -  PN semaine du 01 09 2025 v4.webp" },   // S36 · du 01/09/2025 au 07/09/2025
  "2025-09-08": { RACHID: "rch/3 -  PN semaine du 08 09 2025 v5.webp", ERGUN: "eh/3 -  PN semaine du 08 09 2025 v5.webp" },   // S37 · du 08/09/2025 au 14/09/2025
  "2025-09-15": { RACHID: "rch/4 -  PN semaine du 15 09 2025.webp", ERGUN: "eh/4 -  PN semaine du 15 09 2025.webp" },   // S38 · du 15/09/2025 au 21/09/2025
  "2025-09-22": { RACHID: "rch/2025-09-22.webp", ERGUN: "eh/2025-09-22.webp" },   // S39 · du 22/09/2025 au 28/09/2025
  "2025-09-29": { RACHID: "rch/6 -  PN semaine du 29 09 2025.webp", ERGUN: "eh/6 -  PN semaine du 29 09 2025.webp" },   // S40 · du 29/09/2025 au 05/10/2025

  // ---------- Octobre 2025 ----------
  "2025-10-06": { RACHID: "rch/2025-10-06.webp", ERGUN: "eh/2025-10-06.webp" },   // S41 · du 06/10/2025 au 12/10/2025
  "2025-10-13": { RACHID: "rch/8. PN Semaine du 13 10 2025.webp", ERGUN: "eh/8. PN Semaine du 13 10 2025.webp" },   // S42 · du 13/10/2025 au 19/10/2025
  "2025-10-20": { RACHID: "rch/9. PN Semaine du 20 10 2025- V3.webp", ERGUN: "eh/9. PN Semaine du 20 10 2025- V3.webp" },   // S43 · du 20/10/2025 au 26/10/2025
  "2025-10-27": { RACHID: "rch/10. PN Semaine du 27 10 2025 v3.webp", ERGUN: "eh/10. PN Semaine du 27 10 2025 v3.webp" },   // S44 · du 27/10/2025 au 02/11/2025

  // ---------- Novembre 2025 ----------
  "2025-11-03": { RACHID: "rch/11. PN Semaine du 03 11 2025 v2.webp", ERGUN: "eh/11. PN Semaine du 03 11 2025 v2.webp" },   // S45 · du 03/11/2025 au 09/11/2025
  "2025-11-10": { RACHID: "rch/12. PN Semaine du 10 11 2025 v2.webp", ERGUN: "eh/12. PN Semaine du 10 11 2025 v2.webp" },   // S46 · du 10/11/2025 au 16/11/2025
  "2025-11-17": { RACHID: "rch/13. PN Semaine du 17 11 2025 v2.webp", ERGUN: "eh/13. PN Semaine du 17 11 2025 v2.webp" },   // S47 · du 17/11/2025 au 23/11/2025
  "2025-11-24": { RACHID: "rch/14. PN Semaine du 24 11 2025.webp", ERGUN: "eh/14. PN Semaine du 24 11 2025.webp" },   // S48 · du 24/11/2025 au 30/11/2025

  // ---------- Décembre 2025 ----------
  "2025-12-01": { RACHID: "rch/2025-12-01.webp", ERGUN: "eh/2025-12-01.webp" },   // S49 · du 01/12/2025 au 07/12/2025
  "2025-12-08": { RACHID: "rch/16. PN Semaine du 08 12 2025 v4.webp", ERGUN: "eh/16. PN Semaine du 08 12 2025 v4.webp" },   // S50 · du 08/12/2025 au 14/12/2025
  "2025-12-15": { RACHID: "rch/17. PN Semaine du 15 12 2025 v5.webp", ERGUN: "eh/17. PN Semaine du 15 12 2025 v5.webp" },   // S51 · du 15/12/2025 au 21/12/2025
  "2025-12-22": { RACHID: "rch/18. PN Semaine du 22 12 2025 v3.webp", ERGUN: "eh/18. PN Semaine du 22 12 2025 v3.webp" },   // S52 · du 22/12/2025 au 28/12/2025
  "2025-12-29": { RACHID: "rch/19. PN Semaine du 29 12 2025 V4.webp", ERGUN: "eh/19. PN Semaine du 29 12 2025 V4.webp" },   // S01 · du 29/12/2025 au 04/01/2026

  // ---------- Janvier 2026 ----------
  "2026-01-05": { RACHID: "rch/2026-01-05.webp", ERGUN: "eh/2026-01-05.webp" },   // S02 · du 05/01/2026 au 11/01/2026
  "2026-01-12": { RACHID: "rch/21. PN Semaine du 12 01 2026 v3.webp", ERGUN: "eh/21. PN Semaine du 12 01 2026 v3.webp" },   // S03 · du 12/01/2026 au 18/01/2026
  "2026-01-19": { RACHID: "rch/22. PN Semaine du 19 01 2026.webp", ERGUN: "eh/22. PN Semaine du 19 01 2026.webp" },   // S04 · du 19/01/2026 au 25/01/2026
  "2026-01-26": { RACHID: "rch/23. PN Semaine du 26 01 2026 v2.webp", ERGUN: "eh/23. PN Semaine du 26 01 2026 v2.webp" },   // S05 · du 26/01/2026 au 01/02/2026

  // ---------- Février 2026 ----------
  "2026-02-02": { RACHID: "rch/2026-02-02.webp", ERGUN: "eh/2026-02-02.webp" },   // S06 · du 02/02/2026 au 08/02/2026
  "2026-02-09": { RACHID: "rch/2026-02-09.webp", ERGUN: "eh/2026-02-09.webp" },   // S07 · du 09/02/2026 au 15/02/2026
  "2026-02-16": { RACHID: "rch/26. PN Semaine du 16 02 2026.webp", ERGUN: "eh/26. PN Semaine du 16 02 2026.webp" },   // S08 · du 16/02/2026 au 22/02/2026
  "2026-02-23": { RACHID: "rch/27. PN Semaine du 23 02 2026.webp", ERGUN: "eh/27. PN Semaine du 23 02 2026.webp" },   // S09 · du 23/02/2026 au 01/03/2026

  // ---------- Mars 2026 ----------
  "2026-03-02": { RACHID: "rch/28. PN Semaine du 02 03 2026 v2.webp", ERGUN: "eh/28. PN Semaine du 02 03 2026 v2.webp" },   // S10 · du 02/03/2026 au 08/03/2026
  "2026-03-09": { RACHID: "rch/29. PN Semaine du 09 03 2026.webp", ERGUN: "eh/29. PN Semaine du 09 03 2026.webp" },   // S11 · du 09/03/2026 au 15/03/2026
  "2026-03-16": { RACHID: "rch/30. PN Semaine du 16 03 2026.webp", ERGUN: "eh/30. PN Semaine du 16 03 2026.webp" },   // S12 · du 16/03/2026 au 22/03/2026
  "2026-03-23": { RACHID: "rch/31. PN Semaine du 23 03 2026.webp", ERGUN: "eh/31. PN Semaine du 23 03 2026.webp" },   // S13 · du 23/03/2026 au 29/03/2026
  "2026-03-30": { RACHID: "rch/32. PN Semaine du 30 03 2026 v3.webp", ERGUN: "eh/32. PN Semaine du 30 03 2026 v3.webp" },   // S14 · du 30/03/2026 au 05/04/2026

  // ---------- Avril 2026 ----------
  "2026-04-06": { RACHID: "rch/2026-04-06.webp", ERGUN: "eh/2026-04-06.webp" },   // S15 · du 06/04/2026 au 12/04/2026
  "2026-04-13": { RACHID: "rch/34. PN Semaine du 13 04 2026 v2.webp", ERGUN: "eh/34. PN Semaine du 13 04 2026 v2.webp" },   // S16 · du 13/04/2026 au 19/04/2026
  "2026-04-20": { RACHID: "rch/35. PN Semaine du 20 04 2026 v3.webp", ERGUN: "eh/35. PN Semaine du 20 04 2026 v3.webp" },   // S17 · du 20/04/2026 au 26/04/2026
  "2026-04-27": { RACHID: "rch/36. PN Semaine du 27 04 2026.webp", ERGUN: "eh/36. PN Semaine du 27 04 2026.webp" },   // S18 · du 27/04/2026 au 03/05/2026

  // ---------- Mai 2026 ----------
  "2026-05-04": { RACHID: "rch/37. PN Semaine du 04 05 2026 v2.webp", ERGUN: "eh/37. PN Semaine du 04 05 2026 v2.webp" },   // S19 · du 04/05/2026 au 10/05/2026
  "2026-05-11": { RACHID: "rch/2026-05-11.webp", ERGUN: "eh/2026-05-11.webp" },   // S20 · du 11/05/2026 au 17/05/2026
  "2026-05-18": { RACHID: "rch/39. PN Semaine du 18 05 2026.webp", ERGUN: "eh/39. PN Semaine du 18 05 2026.webp" },   // S21 · du 18/05/2026 au 24/05/2026
  "2026-05-25": { RACHID: "rch/40. PN Semaine du 25 05 2026 v3.webp", ERGUN: "eh/40. PN Semaine du 25 05 2026 v3.webp" },   // S22 · du 25/05/2026 au 31/05/2026

  // ---------- Juin 2026 ----------
  "2026-06-01": { RACHID: "rch/2026-06-01.webp", ERGUN: "eh/2026-06-01.webp" },   // S23 · du 01/06/2026 au 07/06/2026
  "2026-06-08": { RACHID: "rch/42. PN Semaine du 08 06 2026 v2.webp", ERGUN: "eh/42. PN Semaine du 08 06 2026 v2.webp" },   // S24 · du 08/06/2026 au 14/06/2026
  "2026-06-15": { RACHID: "rch/43. PN Semaine du 15 06 2026.webp", ERGUN: "eh/43. PN Semaine du 15 06 2026.webp" },   // S25 · du 15/06/2026 au 21/06/2026
  "2026-06-22": { RACHID: "rch/44. PN Semaine du 22 06 2026.webp", ERGUN: "eh/44. PN Semaine du 22 06 2026.webp" },   // S26 · du 22/06/2026 au 28/06/2026
  "2026-06-29": { RACHID: "rch/2026-06-29.webp", ERGUN: "eh/2026-06-29.webp" },   // S27 · du 29/06/2026 au 05/07/2026

  // ---------- Juillet 2026 ----------
  "2026-07-06": { RACHID: "rch/46. PN Semaine du 06 07 2026.webp", ERGUN: "eh/46. PN Semaine du 06 07 2026.webp" },   // S28 · du 06/07/2026 au 12/07/2026
  "2026-07-13": { RACHID: "rch/2026-07-13.webp", ERGUN: "eh/2026-07-13.webp" },   // S29 · du 13/07/2026 au 19/07/2026
  "2026-07-20": { RACHID: "rch/2026-07-20.webp", ERGUN: "eh/2026-07-20.webp" },   // S30 · du 20/07/2026 au 26/07/2026
  "2026-07-27": { RACHID: "rch/2026-07-27.webp", ERGUN: "eh/2026-07-27.webp" },   // S31 · du 27/07/2026 au 02/08/2026

  // ---------- Août 2026 ----------
  "2026-08-03": { RACHID: "rch/50. PN Semaine du 03 08 2026.webp", ERGUN: "eh/50. PN Semaine du 03 08 2026.webp" },   // S32 · du 03/08/2026 au 09/08/2026
  "2026-08-10": { RACHID: "rch/51. PN Semaine du 10 08 2026.webp", ERGUN: "eh/51. PN Semaine du 10 08 2026.webp" },   // S33 · du 10/08/2026 au 16/08/2026
  "2026-08-17": { RACHID: "rch/2026-08-17.webp", ERGUN: "eh/2026-08-17.webp" },   // S34 · du 17/08/2026 au 23/08/2026
  "2026-08-24": { RACHID: "rch/2026-08-24.webp", ERGUN: "eh/2026-08-24.webp" },   // S35 · du 24/08/2026 au 30/08/2026
  "2026-08-31": { RACHID: "rch/2026-08-31.webp", ERGUN: "eh/2026-08-31.webp" },   // S36 · du 31/08/2026 au 06/09/2026

  // ---------- Septembre 2026 ----------
  "2026-09-07": { RACHID: "rch/2026-09-07.webp", ERGUN: "eh/2026-09-07.webp" },   // S37 · du 07/09/2026 au 13/09/2026
  "2026-09-14": { RACHID: "rch/2026-09-14.webp", ERGUN: "eh/2026-09-14.webp" },   // S38 · du 14/09/2026 au 20/09/2026
  "2026-09-21": { RACHID: "rch/2026-09-21.webp", ERGUN: "eh/2026-09-21.webp" },   // S39 · du 21/09/2026 au 27/09/2026
  "2026-09-28": { RACHID: "rch/2026-09-28.webp", ERGUN: "eh/2026-09-28.webp" },   // S40 · du 28/09/2026 au 04/10/2026

  // ---------- Octobre 2026 ----------
  "2026-10-05": { RACHID: "rch/2026-10-05.webp", ERGUN: "eh/2026-10-05.webp" },   // S41 · du 05/10/2026 au 11/10/2026
  "2026-10-12": { RACHID: "rch/2026-10-12.webp", ERGUN: "eh/2026-10-12.webp" },   // S42 · du 12/10/2026 au 18/10/2026
  "2026-10-19": { RACHID: "rch/2026-10-19.webp", ERGUN: "eh/2026-10-19.webp" },   // S43 · du 19/10/2026 au 25/10/2026
  "2026-10-26": { RACHID: "rch/2026-10-26.webp", ERGUN: "eh/2026-10-26.webp" },   // S44 · du 26/10/2026 au 01/11/2026

  // ---------- Novembre 2026 ----------
  "2026-11-02": { RACHID: "rch/2026-11-02.webp", ERGUN: "eh/2026-11-02.webp" },   // S45 · du 02/11/2026 au 08/11/2026
  "2026-11-09": { RACHID: "rch/2026-11-09.webp", ERGUN: "eh/2026-11-09.webp" },   // S46 · du 09/11/2026 au 15/11/2026
  "2026-11-16": { RACHID: "rch/2026-11-16.webp", ERGUN: "eh/2026-11-16.webp" },   // S47 · du 16/11/2026 au 22/11/2026
  "2026-11-23": { RACHID: "rch/2026-11-23.webp", ERGUN: "eh/2026-11-23.webp" },   // S48 · du 23/11/2026 au 29/11/2026
  "2026-11-30": { RACHID: "rch/2026-11-30.webp", ERGUN: "eh/2026-11-30.webp" },   // S49 · du 30/11/2026 au 06/12/2026

  // ---------- Décembre 2026 ----------
  "2026-12-07": { RACHID: "rch/2026-12-07.webp", ERGUN: "eh/2026-12-07.webp" },   // S50 · du 07/12/2026 au 13/12/2026
  "2026-12-14": { RACHID: "rch/2026-12-14.webp", ERGUN: "eh/2026-12-14.webp" },   // S51 · du 14/12/2026 au 20/12/2026
  "2026-12-21": { RACHID: "rch/2026-12-21.webp", ERGUN: "eh/2026-12-21.webp" },   // S52 · du 21/12/2026 au 27/12/2026
  "2026-12-28": { RACHID: "rch/2026-12-28.webp", ERGUN: "eh/2026-12-28.webp" },   // S53 · du 28/12/2026 au 03/01/2027
};


// ============================================================
//  FICHES MENSUELLES "HRA"
// ============================================================
// Bouton "HRA" dans le coin supérieur gauche du tableau : il ouvre la fiche
// du mois affiché. Une ligne par mois : la clé est AAAA-MM.
// Par défaut les fichiers sont attendus dans le dossier  hra/
// (ex. hra/2025-01.pdf). Pour changer : remplacez le chemin par
// copier-coller. Pour un mois sans fiche, mettez "" (bouton grisé).
// Gardez les virgules entre les lignes.
// ============================================================

window.pdfHRA = {

  // ---------- 2025 ----------
  "2025-01": "hra/2025-01.webp",   // Janvier 2025
  "2025-02": "hra/2025-02.webp",   // Février 2025
  "2025-03": "hra/2025-03.webp",   // Mars 2025
  "2025-04": "hra/2025-04.webp",   // Avril 2025
  "2025-05": "hra/2025-05.pdf",   // Mai 2025
  "2025-06": "hra/2025-06.pdf",   // Juin 2025
  "2025-07": "hra/2025-07.pdf",   // Juillet 2025
  "2025-08": "hra/2025-08.pdf",   // Août 2025
  "2025-09": "hra/2025-09.pdf",   // Septembre 2025
  "2025-10": "hra/2025-10.pdf",   // Octobre 2025
  "2025-11": "hra/2025-11.pdf",   // Novembre 2025
  "2025-12": "hra/2025-12.pdf",   // Décembre 2025

  // ---------- 2026 ----------
  "2026-01": "hra/2026-01.pdf",   // Janvier 2026
  "2026-02": "hra/2026-02.pdf",   // Février 2026
  "2026-03": "hra/2026-03.pdf",   // Mars 2026
  "2026-04": "hra/2026-04.pdf",   // Avril 2026
  "2026-05": "hra/2026-05.pdf",   // Mai 2026
  "2026-06": "hra/2026-06.pdf",   // Juin 2026
  "2026-07": "hra/2026-07.pdf",   // Juillet 2026
  "2026-08": "hra/2026-08.pdf",   // Août 2026
  "2026-09": "hra/2026-09.pdf",   // Septembre 2026
  "2026-10": "hra/2026-10.pdf",   // Octobre 2026
  "2026-11": "hra/2026-11.pdf",   // Novembre 2026
  "2026-12": "hra/2026-12.pdf",   // Décembre 2026
};
