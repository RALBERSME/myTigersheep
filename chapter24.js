let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die tief gefühlte Erleichterung, niemanden mehr retten zu müssen, senkte sich wie ein goldener Segen auf Altheas gesamtes Wesen. Als sie an diesem Nachmittag die Stufen des Pracht-Sanktuariums hinabgitt, war die Transformation vollendet. Sie brauchte keine künstlichen Gewänder mehr, um ihre Würde zu beweisen. Ihre innere Festung war eins geworden mit ihrer äußeren Gestalt. Althea hatte ihre endgültige, unantastbare Natur angenommen: Sie war der Rote Panda, das leibhaftige Tigerschaf. Sie ging mit einer majestätischen, vollkommenen Langsamkeit durch das hohe Sommergras der Lichtung. Ihr dichtes Fell leuchtete in genau dem prachtvollen Orange-Rot des Fuchses, das einst als kleiner Funke am Horizont der Grauen Stadt ihr Leben gerettet hatte. Sie sah unendlich flauschig, friedlich und harmlos aus. Da war kein Drang mehr nach Zerstörung, kein verbissener Kampf um Rechtfertigung. Sie trug die reine, unschuldige Liebesfähigkeit der Puppe als ihr natürliches Wesen nach außen. Sie pflückte Gänseblümchen, spürte den warmen Wind in ihrem Fell und genoss einfach nur ihr pures Erdensein. Doch unter diesem flauschigen, sanften Äußeren verbarg sich die unerschütterliche Kraft des Tigers. Ihr Gesicht trug die markanten Maskenstreifen der wilden Intuition, und ihr mächtiger, geringelter Schwanz war jene wärmende Decke, mit der sie ihr eigenes Herz in den eisigen Jahren des elterlichen Terrors vor dem Erfrieren geschützt hatte. Als sie den Rand der Lichtung erreichte, spürte sie für einen kurzen Moment den fernen, kalten Luftzug der Vergangenheit, der wie ein schwaches Echo über den tiefen Abgrund des Flusses wehte. Doch Althea erschrak nicht mehr. Sie verfiel nicht in Panik, und sie griff nicht nach Waffen. Sie erinnerte sich an die unzerstörbare Verteidigung des Roten Pandas: Sie stellte sich einfach auf ihre Hinterbeine, machte sich ganz groß, breitete die Arme aus und hielt aufrecht ihre majestätische Würde. Es war kein Bluff. Es war die nackte, unzensierte Wahrheit ihrer Existenz. Jedes verbliebene Giftpfeilchen der alten Scham prallte an dieser aufrechten Größe wirkungslos ab und zerfiel zu Staub. Sie war unantastbar geworden, weil sie ihre eigenen Grenzen und ihre Verwundbarkeit stolz wie eine Krone trug. Sie ließ die Arme sinken, ließ sich gemütlich ins weiche Gras plumpsen und kaute genüsslich auf einem Halm, während die heiße Sommersonne ihr Herz wärmte. Das Sündenbock-Dasein war für immer erloschen.";
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
