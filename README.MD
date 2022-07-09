**Portfolio du photographe Charles Cantin**

Mise en valeur du travail du photographe professionnel Charles Cantin ainsi que des prestations proposées et leur tarification.

**Déploiement du projet en local**

**> Node JS**

Téléchargement et installation via le site de Node JS :
```
https://nodejs.org/en/
```

Vérifier le statut d'installation en regardant la version installée :
```
npm -v
```

Initialiser le projet :
```
npm init
```

**> SASS**

Installer Sass :
```
npm -g install sass
```

Vérifier le status d'installation en regardant la version installée :
```
sass --version
```

Dans le fichier package.json du projet > partie "scripts":

- Ajouter "sass": "sass --watch ./sass/main.scss:.public/css/style.css"

Lancer Sass :
```
npm run sass
```

**> 11ty**

Installer 11ty :
```
npm install --save-dev @11ty/eleventy
```

Lancer 11ty :
```
npx @11ty/eleventy
```

