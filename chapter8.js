let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das friedliche Wiegen der Schaukel fand ein abruptes Ende, als ein schneidender, hässlicher Ton die sommerliche Stille zerriss. Es war ein Geräusch, das Althea augenblicklich im Mark erschüttern ließ – das hämische, fordernde Rufen jener verbalen Angreifer aus der Grauen Stadt, die sie so lange gequält hatten. Ihr Körper reagierte im Bruchteil einer Sekunde: Die Muskeln verkrampften sich, das Herz raste los, und in ihrem Kopf schossen die alten, panischen Programmierungen hoch. Instinktiv griffen ihre Hände nach der abgelegten Rüstung; sie wollte sich rechtfertigen, argumentieren, laut zurückschreien, um zu beweisen, dass sie unschuldig und im Recht war. Althea blickte hinüber zum Fluss des Vergessens. Am fernen, grauen Ufer standen sie: die Echos ihrer Herkunftsfamilie und deren Handlanger. Sie fuchtelten mit den Armen, spien Gift und Galle über das Wasser und schleuderten ihre erpresserischen Sätze über die verbliebenen Steinbögen der Brücke. „Du bist egoistisch! Du bist an allem schuld! Komm sofort zurück und funktioniere!“, grollte es dumpf zu ihr herüber. Die Pfeile der Scham wurden reihenweise abgeschossen, begierig darauf, sich in Altheas ungeschütztes Fleisch zu bohren. In diesem Moment der höchsten Not spürte Althea eine sanfte, aber unnachgiebige Berührung an ihrem Knöchel. Es war der Fuchs. Der orange-rote Wächter war lautlos aus dem Gebüsch getreten und blickte sie mit seinen klugen, bernsteinfarbenen Augen an. Er knurrte nicht, er zitterte nicht. Er verharrte vollkommen gelassen in seiner unzerstörbaren Würde. Als Althea seinen Blick auffing, verstand sie die fuchsartige Medizin ohne ein einziges Wort. Der Fuchs war der Trickster, er kämpfte nicht frontal gegen das Wolfsrudel, weil er wusste, dass dieser Krieg nur den Jägern diente. Seine Stärke lag im Haken-Schlagen, im lautlosen Ausweichen, im Entziehen der gesamten energetischen Nahrung. Althea atmete tief aus und ließ die unsichtbaren Waffen, die sie schon in den Händen gehalten hatte, wieder fallen. Sie tat etwas, was die Angreifer aus der Grauen Stadt nicht für möglich gehalten hätten: Sie weigerte sich, in den Ring zu steigen. Sie schaute nicht mehr hin. Mit einer majestätischen Gelassenheit drehte sie der Brücke den Rücken zu. Sie setzte sich wieder auf ihre Holzschaukel, schlang den Arm um die Holzpuppe und kraulte das weiche Fell der Katze, die leise auf ihrem Schoß antwortete. Draußen am Fluss liefen die Giftpfeile der Wölfe vollständig ins Leere. Weil kein Gegenangriff kam, weil keine panische Rechtfertigung über das Wasser schallte, verhungerte die narzisstische Dynamik im Nu. Die Stimmen am anderen Ufer wurden leiser, heiserer und schrumpften schließlich zu einem unbedeutenden, lächerlichen Hintergrundrauschen zusammen. Althea saß im warmen Sommerwind, geschützt von der fuchsartigen List ihrer eigenen Abgrenzung. Das Ufer der Peiniger hatte aufgehört, für sie zu existieren.";
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
