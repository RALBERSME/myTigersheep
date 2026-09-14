let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die schwere Holztür schwang lautlos auf, und Althea trat über die Schwelle. Sie hatte mit einer leeren Halle oder einem steifen Empfang gerechnet, mit jener kühlen Bürokratie des Funktionierens, die sie aus der Grauen Stadt kannte. Doch das Pracht-Sanktuarium empfing sie mit einer Stille, die sich anfühlte wie eine Decke aus Samt. Der Boden bestand aus breiten, geölten Eichendielen, die jeden Schritt sanft dämpften. In der Luft lag ein Hauch von getrocknetem Lavendel, Bienenwachs und der unverkennbaren, tiefen Ruhe eines Raumes, in dem seit Jahrhunderten niemand mehr geschrien hatte. Althea stellte die Reisetasche ab. Das dumpfe Aufschlagen des Stoffes auf dem Holz war das einzige Geräusch. Sie atmete aus, und mit diesem Atemzug löste sich die erste, oberflächliche Schicht der permanenten Muskelanspannung. Plötzlich bewegte sich etwas im Augenwinkel. Althea fuhr instinktiv zusammen – die alte Opfer-Programmierung witterte hinter jeder unvorhergesehenen Bewegung sofort eine Gefahr, einen lauernden Vorwurf, einen bevorstehenden Angriff. Doch was dort aus dem weichen Schatten einer Leseecke trat, war kein Feind. Es war eine große, stolze dreifarbige Katze. Ihre Bewegungen waren von einer majestätischen Langsamkeit und Eleganz. Sie hielt nicht inne, um Althea ängstlich zu mustern, und sie schmeichelte sich nicht unterwürfig ein. Sie ging einfach auf Althea zu, so als wäre es das Natürlichste der Welt, dass dieser Raum nun ihnen beiden gehörte. Mit einem leisen, kraftvollen Sprung landete sie auf einem Sessel direkt neben Althea, streckte den Rücken durch und sprang von dort aus mit traumwandlerischer Sicherheit direkt auf Altheas Schulter. Althea hielt den Atem an. Sie spürte das warme, vibrierende Gewicht des Tieres an ihrem Hals. Die Katze begann sofort zu schnurren, ein tiefes, rhythmisches Brummen, das sich über die Knochen direkt in Altheas Nervensystem übertrug. Es war die Sprache der unantastbaren Eigenliebe. Die Katze signalisierte ihr 'Du bist hier. Ich bin hier. Du musst nichts tun, um richtig zu sein.' Zum ersten Mal seit Jahrzehnten fühlte Althea ein Gefühl von Ur-Vertrauen in die eigene, körperliche Präsenz. Althea ging langsam zum großen Panoramafenster, das den Blick auf die Wiese hinter dem Pracht-Sanktuarium freigab. Die Katze blieb wie eine lebendige, wärmende Stola auf ihren Schultern sitzen. Draußen wiegte sich das hohe, ungemähte Sommergras im sanften Wind. Und dort, genau an der Grenze, wo das Gras auf die dichten, grünen Bäume des Urwalds traf, saß der zweite Wächter. Es war ein Fuchs. Sein Fell leuchtete in genau dem prachtvollen, intensiven Orange-Rot, das Althea in der Nacht als fernen Funken am Horizont gesehen hatte. Er lag nicht auf der Lauer, und er floh nicht. Er saß aufrecht im Gras und blickte direkt zum Fenster hinauf. Seine Augen waren wach, klug und unendlich gelassen. In diesem Moment verstand Althea die fuchsartige Medizin dieses Ortes. Der Fuchs zeigte ihr das Prinzip des schlauen Ausweichens. Er war der Gegenentwurf zu den Wölfen der Grauen Stadt. Er signalisierte ihr, dass man Systeme nicht durch frontale Gewalt besiegt, sondern indem man aus ihnen aussteigt und sich sein eigenes Territorium schafft. Das rote Fell des Fuchses brannte wie ein kleines, heiliges Feuer in der Landschaft, ein visuelles Versprechen, dass die Eiszeit der Herkunftsfamilie diesen Ort niemals erreichen würde. Die Katze schnurrte an ihrem Ohr, der Fuchs hielt draußen die Wacht. Althea war nicht mehr allein. Ihre unberührbaren seelischen Hüter hatten sie eingeholt.";
  utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();

  const maleVoiceNames = [
    "Microsoft Stefan",
    "Microsoft Christoph",
    "Google deutsch",
    "Yannick",
    "Markus",
  ];

  let selectedVoice = voices.find(
    (voice) =>
      voice.lang.startsWith("de") &&
      maleVoiceNames.some((name) => voice.name.includes(name)),
  );

  if (!selectedVoice) {
    selectedVoice = voices.find((voice) => voice.lang.startsWith("de"));
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.pitch = 0.75;
  utterance.rate = 0.88;

  window.speechSynthesis.speak(utterance);
}

function stoppeVorlesen() {
  window.speechSynthesis.cancel();
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () =>
    window.speechSynthesis.getVoices();
}
