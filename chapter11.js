let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Musik des Flügels vibrierte noch tief in Altheas Zellen, als sie am nächsten Morgen dem schmalen, fuchsartigen Pfad folgte, der hinter der Eiche tiefer in das ungezähmte Land führte. Die drei Katzen liefen wie kleine, lautlose Schatten im Zickzack durch das Unterholz, und die Puppe saß fest und sicher auf Altheas Hüfte. Nach einer Biegung öffnete sich der Wald und gab den Blick frei auf einen weiten, spiegelglatten Bergsee. Das Wasser war von einer so vollkommenen Klarheit, dass man die runden Kiesel am tiefen Grund sehen konnte. Es war das unendliche, gereinigte Becken des Unbewussten, frei von den Strömungen und dem Schlamm der Grauen Stadt. Althea legte ihre Kleider am Ufer ab. Sie zögerte nicht. Die alte Opfer-Angst, sich schutzlos zu machen, hatte auf der Lichtung ihre Macht verloren. Sie trat hinein in das kühle, klare Nass. Das Wasser umschloss ihren Körper wie eine flüssige Heilung. Als Althea tiefer eintauchte und sich ganz vom See tragen ließ, spürte sie, wie die letzte, hartnäckigste Schicht der emotionalen Eiszeit Zelle für Zelle von ihr abgewaschen wurde. Der Schweiß der jahrelangen Kämpfe, der klebrige Ruß der Rechtfertigungen und das Gift der erpressten Scham lösten sich einfach auf. Sie schwamm mit tiefen, ruhigen Zügen, während das Wasser ihr unzensiertes Gesicht küsste. Es war eine rituelle, alchemistische Waschung, das Wasser nahm alles auf und gab ihr dafür die pure, unbeschriebene Leichtigkeit ihres eigenen Seins zurück. Als sie sich auf den Rücken legte und in den weiten Himmel blickte, hörte sie ein leises, majestätisches Rauschen von Flügeln. Sie drehte sich um und sah ihn. Einige Meter von ihr entfernt glitt ein edler, weißer Schwan über den See. Seine Bewegungen strömten eine tiefe Würde, unerschütterliche Ruhe und ein grenzenloses Selbstbewusstsein aus. Althea hielt inne und blickte ihn an. Es war die erlöste Seele ihres Vaters. Der getriebene, ängstliche Jammerlappen, der im Sumpf seiner eigenen narzisstischen Ohnmacht ertrunken war, hatte sich hier im Wasser des Unbewussten endgültig aufgelöst. Er war kein Angreifer mehr; er musste seinen Lebensschmerz nicht mehr auf Althea abwälzen. Der Schwan kehrte nicht zu ihr um und er forderte nichts. Er blieb auf dem See, in sich selbst ruhend, und das war gut so. Althea musste ihn nicht mehr retten, und er konnte sie nicht mehr verkrüppeln. Es herrschte Frieden zwischen den Welten.";
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
