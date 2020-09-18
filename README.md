# Celluláris automaták vizsgálatára alkalmas keretrendszer

*BSc szakdolgozat*

A dolgozat célja egy olyan webalkalmazás elkészítésének és működésének a bemutatása, amely segítségével celluláris automaták modellezhetők. A keretrendszer lehetőséget kell biztosítson a klasszikus négyzetrács alapú modell mellett a kevésbé elterjedt (például háromszögháló alapú) állapotterek elemzésére. A két állapotú sejtek mellett a folytonos állapottal rendelkező sejteket is tudni kell szimulálni vele.

A szimulátor egy fontos eleme az a nyelvi értelmező, amely a szövegesen megadott, állapotátmeneteket leíró szabályokat értelmezni tudja. Ez egy egyszerű domain specifikus nyelvet kell használjon, amelyen a felhasználó meg tudja fogalmazni, hogy milyen feltételek mellett milyen módon megy végbe egy-egy állapotváltozás.

A dolgozat először bemutatja a celluláris automaták elvi működését, az ezekkel kapcsolatos jelentősebb eredményeket. Ezt követi a saját fejlesztésű szimulátornak a specifikációja. A szimulátor az Angular nevű JavaScript keretrendszerrel készül.

