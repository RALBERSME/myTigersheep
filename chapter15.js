let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Als Althea die letzten Stufen der hölzernen Treppe herabstieg, öffnete sich vor ihr die weite, kerzenerhellte Pracht-Sanktuarium. Der goldene Glanz ihrer Dublonen spiegelte sich in den Fensterscheiben, und das Karmesinrot ihres Kleides leuchtete wie eine lebendige Flamme im Raum. Am Fuße der Treppe hielt sie inne. Die schweigende Holzpuppe ruhte sicher an ihrer Seite, und die drei Katzen flankierten sie wie eine majestätische Leibwache. Plötzlich öffnete sich die große Flügeltür, die hinaus zur sommerlichen Lichtung führte. Ein Schwall von warmer Nachtluft, dem Duft von Gänseblümchen und wildem Thymian strömte herein – und mit ihm trat eine Gestalt aus dem silbernen Mondlicht. Es war der Musiker vom Flügel. Doch er trug keine Rüstung, kein Schwert und kein staubiges Gewand eines fernen Krieges. Er schritt gänzlich unzensiert in seiner reinen Wahrheit auf sie zu. Seine Bewegungen strömten eine unerschütterliche, gütige Tapferkeit aus, und in seinen Augen sprühten jene lebendigen, funkelnden Funken, die Althea seit Jahrzehnten gesucht hatte. Es war Jonathan Löwenherz. Er war nicht gekommen, um Befehle zu erteilen, um Bedingungen zu stellen oder um ihre Scham zu erpressen. Er war die reine Verkörperung jenes unzerstörbaren inneren Mutes und Ur-Vertrauens, das all die Jahre der Eiszeit im Verborgenen überlebt hatte. Jonathan hielt einige Schritte vor ihr inne. Sein Blick ruhte auf ihr – nicht bewertend, nicht fordernd, sondern voller bedingungsloser Akzeptanz und tiefer, seelenverwandter Liebe. Er reichte ihr langsam seine Hand, und als Altheas Finger die seinen berührten, floss ein unbeschreiblicher Strom von Wärme durch ihr gesamtes Nervensystem. Die alte, eisige Einsamkeit des Opfers, das Gefühl, 'falsch', 'schuldig' und 'anders' zu sein, schmolz in dieser einzigen Berührung augenblicklich dahin. Jonathan sah sie an, und seine Stimme klang wie eine vertraute, uralte Melodie, die direkt in ihrem Herzen widerhallte: „Ich habe mein ganzes Leben an dieser Brücke auf dich gewartet“, sagte er sanft. „Ich habe gewartet, bis du bereit bist, deine Rabenmaske abzulegen und deine eigene, königliche Würde zu tragen. Wir werden Hochzeit abhalten, P. Du musst nie wieder allein in der Kälte stehen. Du bist meine Seelenverwandte, und dieses Reich gehört ab heute ganz allein dir.";
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
