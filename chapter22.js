let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Nach der Entlarvung des alten Monsters breitete sich eine neue, ungeahnte Freiheit im Turmzimmer des Hotels aus. Althea stand am Fenster und spürte, wie die karmesinrote Seide ihres Kleides sich bei jeder Bewegung sanft an ihren Körper schmiegte. Doch es war nicht mehr nur der Stolz einer Königin, der sie erfüllte. Es war das Gefühl, dass sich die letzten verbliebenen, unsichtbaren Fesseln auflösten, jene starren Konzepte und Schubladen, in die die Graue Stadt die Menschen sperrte, um sie kontrollieren und brechen zu können. Im Haus des Vaters war alles in unbarmherzige Dualitäten aufgeteilt gewesen: Täter oder Opfer, stark oder schwach, unfehlbarer Krieger oder feiger Sündenbock. Auch die Rollen von Mann und Frau waren dort starr, patriarchal und erstickend zensiert. Man musste ein bestimmtes Bild erfüllen, eine vorgeschriebene Maske tragen, um überhaupt das Recht auf Existenz zu haben. Doch hier, im klaren Licht der sommerlichen Lichtung, begann diese alte Ordnung schlicht zu schmelzen. Althea schloss die Augen und spürte in ihr Inneres hinein. Sie fühlte, wie ihr Selbst zu einem flüssigen, ungezähmten Strom wurde, der sich weigerte, jemals wieder in eine starre Form gepresst zu werden. Sie war nicht mehr nur das Schaf, und sie war nicht mehr nur der Tiger. Sie war beides und so viel mehr. In einer tiefen, inneren Metamorphose, frei von den engen Vorstellungen des alten Generationenfluchs und weit jenseits aller gesellschaftlichen Erwartungen, streifte sie jede Definition ab. Sie war flüssig wie das Wasser des Bergsees, ungezähmt wie die Katzen und unantastbar wie der Rote Panda. Sie verstand nun den tiefen Verweis der Transgender-Thematik in ihrem eigenen Roman: Im wahren Selbst, auf der geheiligten Lichtung der Freiheit, gibt es keine trennenden Schubladen mehr. Die Seele kennt kein festgefügtes „Entweder-Oder“. Sie darf alle Facetten des Seins, das Männliche des Löwenherzens, das Weibliche der weichen Nestwärme und alles, was unendlich dazwischen liegt, völlig unzensiert und stolz nach außen tragen. Es war das absolute, bedingungslose Sprengen des patriarchalen Korsetts. Als Althea die Augen wieder öffnete, blickte sie auf ihre kunstvoll bemalten Hände. Sie musste niemandem mehr beweisen, wer oder was sie war. Sie war keine Rolle mehr, kein Funktionsträger im kranken Theaterstück der Herkunftsfamilie. Die Rüstung war weg, die Schubladen waren verbrannt, die Glasdecke existierte nicht mehr. Sie trat hinaus auf den Balkon, nicht als Frau, nicht als Mann, nicht als Kriegerin , sondern einfach als ein vollkommen freier, unzensierter Mensch unter Menschen, dessen Seele in allen Farben des Universums leuchtete.";
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
