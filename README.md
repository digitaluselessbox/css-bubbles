Jedes Bublefeld ist von einem Wrapper umgeben. 
Im dem Bubblefeld ist die Gruße Bubble mit Verlinkung und Logo 
enthalten. Neben der großen Bubble gibt es 4 kleine Bubbles.
Die Position des Bubble-Wrapper wird relativ gesetzt.
Die Position der kleinen Bubbles wird absolute gesetzt.
Jede der kleinen Bubbles hat eine festgelegte Grundposition.

Die kleinen Bubbles werden mittels zweier css-Animationen animiert. 
Dabei wird die Farbe und die Position verändert. Hierdurch wird eine
pulsierende Bewegung simuliert.

Es wäre natürlich von Vorteil, wenn alle bubbles eine andere Animation
haben, damit eine Art Zufälligkeit entsteht. 
Problem an der Sache ist die Konfiguration der Animationen. Damit man diese 
Zufälligkeit bekommt muss man für jede kleine Bubble die Animation einzelln 
definieren mit unterschiedlichen Anfangs- und Laufzeiten. Bei 4 Bubbles 
mit 4 Sub-Bubbles sind das 16 Animationskofigurationen.

Um das zu umgehen, gibt es nur eine CSS-Animation, die mit Variablen
für animation-duration und animation-delay bestückt werden.

Parameter Animation: 
- animation_name 
- animation_duration 
- animation-timing-function
- animation-delay

Dabei wird zur Hilfe genommen, dass CSS-Variablen Selector abhängig sind.
So setzten wir für jede Bubble und jede Sub-Bubble einen Multiplikatur.

Die Animation wird direkt auf die Sub-Bubbles gelegt und durch die 
Selector abhängigen Variablen werden immer die passenden Multiplikatoren 
für jede Sub-Bubble genutzt.

Folgende Subbubble Konfiguration ist möglich:

.subbubble_x{
	--sub-multiplicator: 1;
	--animation-delay-offset: 1s;
	--animation-duration-offset: 1s;
	--position-left-offset: 10px;
	--position-top-offset: 10px;
}

Theoretisch kann diese Konfiguration auch auf den großen Bubbles eingesetzt werden.

