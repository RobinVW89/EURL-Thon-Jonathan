# EURL Thon Jonathan — Site vitrine

Site vitrine statique (mobile-first) pour EURL Thon Jonathan, plombier chauffagiste et installateur de climatisation dans l'Yonne (89).

## Prévisualisation locale

Depuis la racine du dépôt :

```bash
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Arborescence utile

- `/home/runner/work/EURL-Thon-Jonathan/EURL-Thon-Jonathan/index.html`
- `/home/runner/work/EURL-Thon-Jonathan/EURL-Thon-Jonathan/styles.css`
- `/home/runner/work/EURL-Thon-Jonathan/EURL-Thon-Jonathan/script.js`
- `/home/runner/work/EURL-Thon-Jonathan/EURL-Thon-Jonathan/public/img/rge/`
- `/home/runner/work/EURL-Thon-Jonathan/EURL-Thon-Jonathan/sitemap.xml`
- `/home/runner/work/EURL-Thon-Jonathan/EURL-Thon-Jonathan/robots.txt`

## À brancher avant mise en ligne

- Formulaire de contact : action de formulaire à configurer (Formspree / Netlify Forms / EmailJS).
- Avis Google : intégrer widget officiel ou captures réelles.
- Analytics : ajouter script mesure d'audience si souhaité.
- Convertir les futures photos réelles en WebP optimisé.

## Emplacements des `{{PLACEHOLDER}}` à remplacer

Dans `index.html` :

- `{{PHONE}}` : téléphone principal (header, hero, bandeau mobile, contact, footer, JSON-LD).
- `{{EMAIL}}` : email professionnel (contact, footer, JSON-LD).
- `{{ADDRESS_LOCALITY}}` : commune principale (contact, footer, JSON-LD).
- `{{ADDRESS_REGION}}` : région administrative (JSON-LD, ex. Bourgogne-Franche-Comté).
- `{{POSTAL_CODE}}` : code postal (JSON-LD).
- `{{STREET_ADDRESS}}` : adresse postale (JSON-LD).
- `{{SIRET}}` : SIRET (footer).
- `{{RGE_QUALIFICATION_NUMBER}}` : numéro de qualification RGE (footer).
- `{{HOURS}}` : plage horaire d'ouverture (contact, ex. Lun-Ven 8h-18h).
- `{{GOOGLE_BUSINESS_URL}}` : lien fiche Google Business (section avis).
- `{{FORM_ENDPOINT}}` : endpoint de soumission formulaire.
- `{{AREA_SERVED_PRIMARY}}`, `{{AREA_SERVED_SECONDARY}}`, `{{AREA_SERVED_TERTIARY}}` : zones de service JSON-LD.

## Assets RGE à déposer

Dans `/home/runner/work/EURL-Thon-Jonathan/EURL-Thon-Jonathan/public/img/rge/` :

- `Logo-ChauffageRGE.png`
- `Logo-QualiPAC-RGE.png`
- `Logo-VentilationRGE-1.png`