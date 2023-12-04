GIT
   
    1.Quel est l'intérêt de commiter régulièrement et de manière atomique ?

Commiter souvent et de façon atomique sur GitHub, c'est comme enregistrer chaque  changement que l'on fait dans un travail ou projet. Ça aide à garder une trace des modifications et ça rend plus facile de voir ce qui a été modifié et quand via un système de branches. Ça permet aussi de travailler de manière collaborative et organisé avec d'autres personnes sans écraser leur travail ou avoir des conflits . 


    2.A quoi sert une branche de type feature dans un développement logiciel de type git flow ?

Une branche de type "feature" dans Git Flow est un endroit spécifique où un développeur peut travailler sur une nouvelle fonctionnalité sans affecter le code principal. C'est un peu comme créer une zone de travail isolée pour ajouter une nouvelle fonctionnalité ou résoudre un problème spécifique. Cela permet à l'équipe de développer des fonctionnalités séparément, de les tester et de les intégrer une fois qu'elles sont prêtes, tout en préservant la stabilité du code principal pour éviter de tout perdre en cas d'erreur.


    3.Quelle est la différence entre une branche main et une branche develop ?

La branche "main" ou "master" est la branche principale de Git, c'est là où se trouve la version principale, finale et stable du code. 

la branche "develop" est une branche secondaire, elle est utilisée pour intégrer les fonctionnalités en cours de développement. Cette branche contient le code en cours de préparation pour la prochaine version du logiciel. C'est là que les fonctionnalités sont intégrées et testées avant d'être fusionnées dans la branche "main" pour une nouvelle version stable.


    4.Quelle est la différence entre git add, git commit et git push ?

git add : Cette commande permet d'ajouter et de voir des modifications ou des fichiers à la zone de préparation, en les préparant pour le prochain commit. Cela signifie que on indiques à Git les changements que l'on veut inclure dans le prochain commit.

git commit : Une fois que on a ajouté des modifications avec git add, on utilise git commit pour créer une nouvelle validation (commit). Cela crée une sauvegarde des changements avec un message descriptif pour expliquer ce qui a été modifié.

git push : Une fois que on a effectué les commits localement, git push est utilisé pour envoyer tes commits vers GitHub. Cela met à jour avec les derniers changements à distance, ce qui les rend accessibles et partageables avec d'autres collaborateurs.


GITHUB


    5.Quel est l'intérêt d'une protection de branche ?

La protection d'une branche, pour quelqu'un comme lui, c'est comme ajouter une sécurité spéciale à une zone du code. Ça empêche des changements non autorisés ou des erreurs accidentelles. De plus on s'assure que seules les personnes autorisées peuvent y accéder ou apporter des modifications. Ça aide à maintenir la stabilité du code et à éviter des problèmes.


    6.Quel est l'intérêt d'une pull request ?

C'est comme une notification pour montrer qu'on a terminé une partie du travail pour montrer aux autres ce qu'on a fait et demander s'ils veulent l'ajouter au projet. 
Ça ouvre une discussion où les membres de l'équipe peuvent voir, commenter et éventuellement fusionner ces changements dans le code principal. 

VERSIONNING


    7.Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?

C'est faire des ajustements mineurs ou des corrections de bugs sans vraiment ajouter de nouvelles fonctionnalités. On l'utilise lorsque cela rend la version existante plus stable ou pour corriger des erreurs mineures sans changer l'essence de ce qui a déjà été livré. 
   

    8.Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?

C'est  ajouter de nouvelles fonctionnalités ou des améliorations significatives au logiciel sans tout révolutionner. C'est enrichir l'expérience utilisateur en introduisant de nouvelles capacités ou des changements qui apportent un plus à ce qui existe déjà, sans pour autant changer fondamentalement l'ensemble du logiciel.


    9.A quoi sert une version release candidate ?

Une version release candidate,c'est  une étape importante avant de publier officiellement une nouvelle version d'un logiciel. C'est uune version "presque finale" où l'équipe pense que tout est prêt pour la sortie, mais elle subit encore des tests approfondis pour s'assurer qu'elle est stable et sans bugs majeurs avant d'être officiellement publiée.


TEST

    10.Quel est l'intérêt des tests unitaires ?


Les tests unitaires permettent de vérifier chaque petite partie d'un grand mécanisme pour s'assurer qu'elle fonctionne comme prévu. Ça permet de détecter rapidement des erreurs ou des problèmes dans des parties spécifiques du code et de s'assurer que chaque morceau fonctionne correctement. Ça rend le développement plus sûr en identifiant les bugs tôt et en garantissant que chaque morceau de code fait son travail comme prévu.





