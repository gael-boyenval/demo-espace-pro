# UI-KIT

- composants d'interface et de mise en page de bas niveaux
    - jamais connectés au store
    - jamais d'API calls
    - hautement réutilisable
    - toujours présent dans storybook

- peut contenir des sous-composants
    - en utilisant nom `ComponentChildName`

- contiens un index qui exporte les éléments publiques
    - permet des imports `components/ComponentName` au lieu de `components/ComponentName`
    - définit clairement ce qui est publique vs privé dans le dossier

- avec couverture de test à la discretion du dev (parfois aucun tests, puisque leur fonctionnement est testé à travers les pages et autre composants )

- sont tous exportés via un index pour import simplifié de type 

```js
import {
  Heading1,
  Heading2,
  Button,
  TextInput,
  Grid
} from '@ui-kit'
```