# ROUTES

- contiennent les diférents routeurs
- suivent une structure de dossier mimant les urls
- contiennent les pages

## PAGES

- sont des sous-éléments d'une route
- se contentent d'ajouter aux screens : 
    - le layout commun (header, body, footer, meta tags head)
    - les éléments de navigation pour passer d'une route à l'autre
    - d'hydrater les screens avec les call api nécéssaires / redux / contexte
    - de gérer l'état de loading/ready
    - de fournir aux screens les fonctions de submit, d'écriture API, ou d'appels API (comme ça il est facile de tester les screens sans mockjer la terre entière)
