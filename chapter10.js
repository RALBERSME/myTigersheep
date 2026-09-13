let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Nachdem der Scheinriese im Nebel der Brücke verschwunden war, legte sich eine neue, tiefere Qualität von Frieden über das Pracht-Sanktuarium. Es war nicht mehr die starre Stille der Erschöpfung, sondern die lebendige, atmende Ruhe eines Raumes, der soeben gereinigt worden war. Althea ging langsam zurück in die große Pracht-Sanktuariumhalle. Die Katze folgte ihr mit erhobenem Schwanz, und die Holzpuppe ruhte sicher in Altheas Arm. In der Mitte des Raumes stand ein großer, schwarzer Flügel. Er hatte dort wohl schon seit Jahrhunderten geschwiegen, bedeckt von einer feinen Schicht aus Vergessenheit, so wie das Klavierspiel und jede Form der unbeschwerten Freude im Haus des Vaters verboten gewesen waren. Doch an diesem Abend war die Halle nicht leer. Am Klavier saß ein junger Mann. Seine Hände ruhten gelassen auf den Tasten, und seine gesamte Haltung strahlte jene unerschütterliche, gütige Tapferkeit aus, die Althea aus ihren tiefsten Sehnsüchten kannte. Es war der Musiker mit dem Löwenherzen. Er blickte zu Althea auf, seine Augen sprühten vor lebendigen Funken, und er schenkte ihr ein wissendes, sanftes Lächeln. Er verlangte nichts, er stellte keine Fragen. Er begann einfach zu spielen. Die ersten Töne flossen wie flüssiges Gold durch die Halle. Es war keine laute, dröhnende Musik, die einschüchtern wollte, sondern eine Melodie von unendlicher Zärtlichkeit und Kraft. Die Töne vibrierten durch die Eichendielen direkt in Altheas Füße und stiegen von dort aus in ihr gefrorenes Herz auf. Mit jedem Akkord fühlte sie, wie die jahrzehntelange Eiszeit der Herkunftsfamilie weiter in sich zusammenbrach. Das Trauma hatte sie gezwungen, das innere Feuer der Liebe so weit zu drosseln, dass sie fast erfroren wäre, doch diese Musik wirkte wie eine wärmende Glut. Da geschah das nächste Wunder: Die schweigende Holzpuppe auf Altheas Schoß begann sich zu bewegen. Erst hob sie ganz langsam eine kleine Hand, dann begann ihr hölzernes Herz im Takt der Klaviermelodie kräftig zu pulsieren. Das im Elternhaus ausgetriebene Lachen, das Tanzen und die reine, unschuldige Lebensfreude kehrten in die sichtbare Welt zurück. Die Puppe strömte eine unbändige Wärme direkt in Altheas Brust, und zum ersten Mal seit Jahrzehnten floss die Kraft des Inneren Kindes ungehindert in ihren Körper zurück. Es gab in diesem Moment keine Pflichten und kein Arbeiten-Müssen mehr, nur noch das reine, unzensierte Feiern des gegenwärtigen Seins.";
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
