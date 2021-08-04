# COMPONENTS

- composants fonctionnels de moyen/haut niveaux
    - connecté au store ou non
    - api calls ou non
    - réutilisé ou non

- peut contenir des sous-composants
    - en utilisant nom `ComponentChildName`

- contiens un index qui exporte les éléments publiques
    - permet des imports `components/ComponentName` au lieu de `components/ComponentName`
    - définit clairement ce qui est publique vs privé dans le dossier

- avec couverture de test local à 100%