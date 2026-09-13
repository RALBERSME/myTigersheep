let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das ungezähmte Spiel der Katzen kam zu einem plötzlichen Stillstand, als aus der Tiefe des Tals ein dumpfes, grollendes Erbeben heraufzog. Althea blickte hinüber zum Fluss des Vergessens. Der Nachthimmel hatte sich verdunkelt, und ein gewaltiges Frühjahrshochwasser, gespeist vom geschmolzenen Eis unzähliger vergangener Winter, schoss in weißen, schäumenden Fontänen durch das Flussbett. Es war das gesammelte, aufgestaute Gefühl jahrzehntelanger Unterdrückung, das sich nun in einer unbändigen Naturgewalt Bahn brach. Das reißende Wasser stieg unaufhaltsam und peitschte mit gigantischer Wucht gegen die Pfeiler der alten Steinbrücke. Am jenseitigen, grauen Ufer standen die Wölfe der Herkunftsfamilie im fahlen Licht der Blitze. Sie schrien, fuchtelten mit den Armen und versuchten ein letztes Mal, ihre Giftpfeile aus Schuld und Scham über das Wasser zu schleudern. Doch die Gischt schluckte ihre Stimmen, und das Fundament, auf dem ihre Macht basierte, begann im tobenden Strom unaufhörlich zu bröckeln. Jonathan trat an Altheas Seite und legte schützend seinen Arm um ihre Schulter, während das karmesinrote Kleid im Sturm flatterte. 'Schau genau hin, Althea', sagte er mit seiner tiefen, gelassenen Löwenherz-Stimme. 'Das ist das Ende der Eiszeit.' Mit einem ohrenbetäubenden Krachen, das das gesamte Tal erzittern ließ, gaben die steinernen Bögen auf der Seite der Grauen Stadt schließlich nach. Unter der unbarmherzigen Wucht des Schmelzwassers brachen die Brückenpfeiler in sich zusammen und stürzten tosend in die reißenden Fluten. Die Steinmassen wurden vom Fluss des Vergessens augenblicklich mitgerissen und an den tiefen Grund gespült, weit weg in die Bedeutungslosigkeit der Geschichte. Die Verbindung zur Vergangenheit, zum elterlichen Terror und der Opfer-Rolle war im Bruchteil einer Sekunde physisch und unwiderruflich gekappt worden. Als der Morgen langsam graute, beruhigten sich die Fluten. Wo einst die bedrohliche Brücke gestanden hatte, gähnte nun ein weiter, unüberbrückbarer Abgrund aus klarem Wasser. Das jenseitige Ufer war im dichten, grauen Nebel verschwunden – es existierte für Althea nicht mehr. Es gab keinen Weg mehr zurück in das Gefängnis. Althea stand an Jonathans Hand, die lebendige Puppe an ihrer Brust, und atmete die unendliche, reine Luft der Freiheit ein. Die Trennung war vollzogen, die Altlasten waren weggeschwemmt. Vor ihr lag der vierte und letzte Teil ihres Lebens: die absolute, unbedrohte Ankunft im Jetzt.";
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
