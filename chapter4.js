let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Getragen von dem tiefen, rhythmischen Schnurren der Katze auf ihren Schultern stieg Althea die hölzerne Wendeltreppe des Hotels hinauf. Jeder Schritt führte sie weiter weg von dem schweren Staub der Vergangenheit. Sie öffnete die Tür zu ihrem Turmzimmer, einem weiten, kreisrunden Raum, der fast vollständig aus Fenstern bestand und den Blick auf die unendliche Weite des Flusslaufs freigab. Es war ein reizarmer, heiliger Ort. Hier gab es keine dunklen Ecken für verdeckte Vorwürfe, keine engen Wände, die die Seele erstickten. Nur Holz, Licht und die absolute Erlaubnis zur Stille. Die Katze glitt elegant von Altheas Schulter und rollte sich sofort auf einer weichen Decke inmitten eines Sonnenstrahls zusammen. Althea blieb allein in der Mitte des Raumes stehen. Hier, in dieser unendlichen Stille, fordernt das Unbewusste nun seinen ersten, Tribut: die absolute Waffenruhe. Althea ging auf den großen, schweren Ganzkörperspiegel zu, der in der Ecke des Zimmers stand. Sie blickte sich an und erschrak. Auf ihren Schultern und über ihrem Gesicht lag immer noch die schwere, eiserne Rüstung der Unfehlbarkeit. Es war die Rabenmaske der Perfektion, jene starre Fassade, mit der sie jahrzehntelang versucht hatte, die unbarmherzigen Angriffe und die Scham-Erpressungen der narzisstischen Familie abzuwehren. Diese Maske hatte ihr das Überleben gesichert, doch der Preis war hoch gewesen. Sie hatte sie fast vollständig von ihrem eigenen Körper entfremdet und ihr Herz in eine dicke Schicht aus Eis gehüllt. Althea hob die Hände. Ihre Finger zitterten, als sie die unsichtbaren, aber tief sitzenden Schnallen hinter ihren Ohren berührte. Die alte Opfer-Programmierung schrie in ihrem Kopf auf: 'Wenn du die Deckung fallen lässt, bist du schutzlos! Wenn du einen Fehler machst, werden sie dich vernichten!' Eine Welle von panischer Angst schoss durch ihr Nervensystem. Doch Althea schloss die Augen und erinnerte sich an den orange-roten Funken des Fuchses am Horizont. Sie erinnerte sich an Jonathans Versprechen, das wie ein leises Echo durch den Raum vibrierte. Sie atmete tief aus, hielt den Druck stand, und zog. Mit einem metallischen, schweren Klang löste sich die Maske. Es fühlte sich an, als würde ein jahrhundertealter Panzer von ihrem Gesicht gerissen. Althea legte die Rabenmaske langsam auf den Boden. Dann folgten die schweren Schulterplatten der ständigen Rechtfertigung und das stumpfe Schwert des ständigen Kampfes. Sie legte das gesamte Waffenarsenal in die hinterste Ecke des Zimmers. Als sie wieder in den Spiegel blickte, sah sie sich zum ersten Mal in ihrer nackten, unzensierten Wahrheit. Da war kein unfehlbarer Held im Kinofilm. Da war ein Mensch. Sie sah die tiefen Schatten der Erschöpfung unter ihren Augen, die Müdigkeit in ihren Zügen und die normalen, menschlichen Grenzen ihres Körpers. Doch das Erstaunliche war: Sie fühlte sich nicht ausgeliefert. Indem sie ihre Schwächen und ihre Müdigkeit offen besaß, wurde sie unantastbar. Der Narzisst im Außen hatte kein Ziel mehr, weil Althea sich nicht mehr schämte. Eine unendliche, bleierne Schwere überrollte sie. Ohne die Rüstung brach die jahrelang unterdrückte Müdigkeit des Überlebenskampfes wie eine Welle über ihr zusammen. Ihr Nervensystem schaltete endgültig um, weg vom Kampfmodus, hin zur tiefen Heilung. Althea schleppte sich zum Bett, sank in die weichen, nach Lavendel duftenden Kissen und schloss die Augen. Während sie in einen traumlosen, heilenden Schlaf sank, wusste sie: Die Festung stand. Und sie war von innen heraus unzerstörbar.";
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
