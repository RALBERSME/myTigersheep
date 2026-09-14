let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Turmzimmer war erfüllt vom sanften, warmen Licht der Abenddämmerung. Althea stand vor dem großen Ganzkörperspiegel, doch an diesem Abend lag zu ihren Füßen kein schwerer Eisenpanzer mehr. Die Rabenmaske der Perfektion und das stumpfe Schwert der Rechtfertigung lagen unbedeutend und eingestaubt in der hintersten Ecke. Es war Zeit für das neue Kleid – das Gewand, das ihr unbewusstes System als Ausdruck ihrer unzerstörbaren, majestätischen Würde für sie gewebt hatte. Althea griff in den Schrank und zog das Gewand heraus. Es war ein Kleid von atemberaubender Pracht, geschmeidig wie feinste Seide und doch schwer wie der Mantel einer Herrscherin. Es leuchtete in einem tiefen, intensiven Karmesinrot – der Farbe des Blutes, der Lebensenergie und des alchemistischen Feuers, das die Eiszeit der Herkunftsfamilie endgültig hinweggebrannt hatte. Um ihre Stirn wand sie ein rotes Kopftuch, das mit echten, schimmernden Goldfäden durchwirkt war und im Licht funkelte wie die Sterne über der sommerlichen Lichtung. Sie blickte auf ihre Hände. Mit feinen, kunstvollen Mustern waren sie bemalt, Zeichen einer uralten Einweihung, Symbole für eine Frau, die ihren eigenen Heilungsweg selbst gestaltet hatte. Schließlich legte sie die goldenen Ohrringe an. Sie waren schwer, geschmiedet aus echten, königlichen Dublonen. Dieses Gold stammte nicht aus dem Erbe der Väter; es war die veredelte Substanz ihres eigenen Selbstwerts, den sie unbeschadet aus der Wüste des elterlichen Terrors gerettet hatte. Als Althea den Blick hob und sich im Spiegel betrachtete, hielt sie den Atem an. Vor ihr stand kein Opfer mehr. Da war keine verschüchterte, verkrüppelte Seele, die um Erlaubnis bat, existieren zu dürfen. Aus dem Spiegel blickte ihr eine unantastbare Königin entgegen, der Rote Panda in seiner vollendeten, aufrechten Größe. Ihre unzensierte Realität, ihre Schwächen und ihre Grenzen waren nun zu ihrer stärksten Festung geworden. Sie musste nicht mehr perfekt sein, um sicher zu sein. Ihre Würde ruhte tief und unerschütterlich in sich selbst. Die Katze sprang vom Bett, strich an ihrem karmesinroten Saum entlang und gab ein tiefes, anerkennendes Schnurren von sich. Althea legte die Hand auf die Klinke der Zimmertür. Sie ging langsam, Schritt für Schritt, und stieg majestätisch die hölzernen Stufen der Treppe hinab zur Pracht-Sanktuariumhalle, in der die Lichter golden brannten. Sie ging nicht mehr als Kämpferin, die sich verteidigen musste. Sie schritt herab, um ihr eigenes Reich in Besitz zu nehmen.";
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
