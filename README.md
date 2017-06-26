Decksettuner + Vorstellung Raspberry PI
=======================================

## Projektbeschreibung
In der Veranstaltung Prototyping SS2017 habe ich eine Präsentation zum Thema Raspberry PI gehalten. Als Teil dieser Präsentation habe ich zu Demonstrationszwecken einen Prototypen gebaut der es einem ermöglichte die Farben der Präsentation in Echtzeit zu ändern. 

## Technischer Hintergrund
Die Präsentation ist mit dem Framework React geschrieben. Dabei wird über Firebase ein Objekt "subscribed/observed" um die Änderungen mitzubekommen. Auf der anderen liest der Raspberry PI sekündlich von 3 Potentiometern die Daten über ein MCP3008 aus und schickt diese über die Firebase REST Api an Firebase. 

## Demo
[Demo Video](https://vimeo.com/223156879)

[Präsentation](https://dst.jurekbarth.de/)
