# Voici les exercices en JavaScript avec un peu de CSS(Tailwind)

# 1. Premier exercice: usage de l’objet console

L’intitulé est simple: créer une page web qui va afficher dans la console de développement Hello world
Pour savoir si ça marche, vous devez donc avoir l’inspecteur ouvert !

➡ on voit ici le lien entre un script et une page
➡ l’attribut `defer` indique d’éxecuter le JavaScript quand tout l’HTML est chargé
➡ on utilise `console.log` pour écrire dans la console de l’inspecteur. Il existe d’autres fonctions à `console` tel `console.warn` ou `console.error.` Voir https: developer.mozilla.org/fr/docs/Web/API/console

# 2. Second exercice: intervention sur une balise HTML

Afficher `Hello world` sur la page web en l’écrivant à l’intérieur de la balise `body`

➡ on voit ici que la balise body est accessible via une variable dont le nom est `document.body`
➡ on peut modifier le contenu de `document.body` en changeant la valeur de sa variable `document.body.innerHTML`

# 3. Troisième exercice: créer de l’HTML dynamique

Modifiez votre code, affichez `Hello world` dans une balise de titre (`h1` donc)
➡ Vous devez passer par la création d’une balise (`var helloWorldH1 = document.createElement("h1")`;)
➡ Puis vous ajoutez votre texte (`helloWorldH1.innerHTML = "hello world")`;)
➡ Puis vous ajoutez votre balise au document (`document.body.appendChild(helloWorldH1)`;)

➡ innerHTML porte bien son nom: on modifie le contenu HTML de la balise. On peut y écrire de l’HTML mais c’est assez bourrin et pas trop recommandé.

# 4. Quatrième exercice: créer de l’HTML dynamique dans une balise HTML, plus avancé

Modifiez votre code et ajouter une balise `div id="greetings"`
À l’aide de la fonction `document.querySelector`, vous affichez Hello world à l’intérieur de cette nouvelle balise

➡ on peut manipuler des balises HTML en JavaScript
➡ par delà le contenu, on peut modifier la classe CSS, gérer les balises HTML enfantes et parentes …

# 5. Cinquième exercice: tableau et usage d’une boucle

Nous allons créer un tableau avec des noms:

`var students = ["Alexandre.C","Alexandre.B","Benoît","Donatien","Hugo","Myriam","Youcef","Nicolas","Vlad","Quentin rmc","Quentin Kiou","Steven","Loïc","Julian","Maxence","Thomas","Amandine", "Tristan"]`;

- Afficher un à un tous les noms à l’aide d’une boucle dans la console
Essayez, ça sera plus compliqué cette fois-ci.
➡ un tableau est un type spécial de variable qui contient plusieurs variables
➡ on peut utiliser une boucle `for` classique, comme en C, pour parcourir un tableau. C’est plus simple à rédiger
➡ on peut utiliser la fonction `forEach` propre à chaque tableau pour le parcourir. C’est un peu plus complexe à rédiger, <strong>mais c’est la bonne manière</strong>

# 6. Sixième exercice: ajouter à une balise

Créez une balise `ul id="studentsList"` et ajoutez y les étudiants sous forme `[li]`


# 7. Septième exercice: évènements et CSS

Cet exercice va être plus guidé…

1.créez dans votre fichier JS une fonction appelée `loadStyle` qui a un paramètre appelé `event`

2.la fonction `loadStyle` contiendra le code suivant `event.target.className = "dynamicStyle"`;

3.dans votre HTML, mettez une balise `main` 

4.créez et ajoutez un fichier CSS qui contiendra la définition de `.dynamicStyle` avec comme propriété `background-color: red;` et de `main` avec une hauteur,   une largeur et une bordure

5.ajoutez à votre fichier JS ce code: `document.querySelector("main").addEventListener("click", loadStyle)`

➡ on peut ajouter des listeners d’évènement: click, survol de la souris, valeur changée …
➡ les listeners passent un paramètre à la fonction, ce sont les données de l’événement. Dans cette variable, l’élément concerné est présent dans la variable target
➡ on peut modifier le CSS d’un élément

# 8. Huitième exercise : Addition

Affichez le résultat de l’addition de deux nombres entrés par l’utilisateur dans des champs de type `input`
Indices en vrac:

on récupère la valeur d’un champ `input` avec l’attribut `value` (exemple: `document.querySelector("#myInput").value`)