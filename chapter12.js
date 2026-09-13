let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Als Althea das andere Ufer des Bergsees betrat, zog ein dichter, milchig-weißer Morgennebel auf. Er kroch träge über den Boden und hüllte die Umgebung in eine seltsame, fast unwirkliche Stille. Die Katzen blieben in sicherem Abstand am Waldrand stehen, ihre Schwänze zuckten wachsam. Nur der Fuchs saß wie eine unbewegliche, orange-rote Statue auf einem Felsen und sicherte den Raum. Althea spürte, dass dieser Nebel ein letztes, dunkles Relikt der Vergangenheit verbarg, den Kern des mütterlichen Unheils. Wenige Schritte weiter stieß sie im feuchten Gras auf eine tiefe Senke. Dort lag er: der alte, schwere Holzsarg ihrer Mutter. Das Holz war von den Jahren des Schweigens morsch, rissig und vollständig verrottet. Die einst so mächtige Tyrannin, deren narzisstische Kontrolle Altheas Seele über Jahrzehnte hinweg hatte aussaugen wollen, existierte im inneren System nicht mehr. Sie hatte sich selbst in diesem Sarg eingeschlossen, als sie die Macht über Althea und den Vater endgültig verloren hatte, erstickt an ihrem eigenen, unbarmherzigen Gift. Ein unerträglicher, fauliger Gestank von seelischer Verwesung ging von der Senke aus. Sogar die Vögel des Himmels weigerten sich, sich diesem Ort zu nähern; selbst sie wollten das Vergangene nicht fressen. Doch das Bild war nicht vollständig. Über den verrottenden Holzplanken lag eine dicke, schwere Schicht aus Mist. Es war das Werk des Vaters gewesen. Althea verstand die tiefe, tragische Symbolik im Sekundenbruchteil: Zu Lebzeiten hatte der Vater versucht, den Gestank des familiären Missbrauchs verzweifelt mit noch mehr Schmutz und Schuld zuzuschütten. Es war seine unbewusste Methode der Schadensbegrenzung gewesen, Dreck über Dreck, um die Fassade zu wahren. Doch nun, im klaren Licht des erwachten Bewusstseins, war das Versteckspiel vorbei. Allen Beteiligten war nun klar: Dort hinten stinkt es. Es war ein historisches Faktum der Vergangenheit. Man würde sich an das Unheil erinnern, aber es hatte jede lebendige, zerstörerische Kraft verloren. Althea stand am Rand der Senke und blickte hinab. Sie spürte keinen Funken von Hass, keine Rache und kein Bedürfnis, den Schmutz wegzuräumen. Es war nicht ihre Aufgabe, das Grab ihrer Peiniger zu säubern. Sie besaß nun die unzerstörbare Würde der Königin. Sie drehte sich langsam um und ging durch den schwindenden Nebel zurück zum warmen Licht des Pracht-Sanktuariums. Der Gestank blieb hinter ihr zurück, begraben unter dem Mist der Geschichte, während in ihrer Brust das Feuer der Liebe, angefacht durch die Puppe in ihren Armen – immer kräftiger und unaufhaltsamer zu brennen begann.";
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
