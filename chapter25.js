let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der späte Nachmittag tauchte die Lichtung in ein unendlich weiches, goldenes Licht. Die Schatten der großen Eiche wurden länger, breiteten sich aus wie schützende Arme über dem hohen Sommergras und luden das gesamte Land zum Verweilen ein. Die Erschöpfung der vergangenen Jahrzehnte war fortgewischt. Was blieb, war eine unerschütterliche, präsente Klarheit im Hier und Jetzt. Althea, der Rote Panda, ging die letzten Schritte zur Schaukel hinüber. Das Gehen war kein Müssen mehr, kein Fliehen und kein Beweisen. Es war das reine, majestätische Fließen des eigenen Lebens. Althea setzte sich auf das breite Holzbrett. Die lebendige Puppe saß fest auf ihrem Schoß, blickte mit leuchtenden, warmen Augen zu ihr auf und hielt Altheas Hand mit ihren kleinen Fingern umklammert. Das hölzerne Herz der Puppe schlug in perfektem, ruhigem Gleichklang mit Altheas eigenem Herzen. Die drei Katzen kamen nacheinander herbeigeschlendert, sprangen ohne Hast auf die Schaukel und rollten sich schnurrend um Altheas Hüften. Jonathan saß ein Stück entfernt im Gras, den Rücken an den mächtigen Stamm der Eiche gelehnt. Er hielt kein Schwert, er trug keine Rüstung. Er saß einfach nur da, sah Althea an, und in seinen Augen sprühten jene unbändigen Lebensfunken, die ihr sagten: Du bist angekommen. Du bist sicher. Du bist zu Hause. Althea stieß sich ganz leicht mit den Zehenspitzen vom taunassen Boden ab. Die Schaukel setzte sich in Bewegung, schwang träge nach vorn und zurück, im Rhythmus des Sommerwindes. Mit jedem sanften Schwung öffnete sich vor ihr eine unendliche, glasklare Weite. Wenn Althea den Blick nach hinten wandte, war da kein tiefer Abgrund mehr, kein Fluss des Vergessens und keine Spur der Grauen Stadt. Der Nebel hatte auch die letzten Kulissen der Vergangenheit geschluckt. Das Ufer des Vaters und der Mutter existierte nicht einmal mehr als Bedrohung. Die Leinwand vor ihr war vollkommen unbeschrieben, hell, frei und weit. Es gab keine Rollen mehr zu spielen, keine Perfektion zu liefern und keine Scham zu fürchten. Die Rabenmaske war zu Staub zerfallen. Der Rote Panda legte den Kopf in den Nacken, schloss die Augen und spürte die letzten, warmen Sonnenstrahlen des Tages auf dem orange-roten Fell. Die endgültige, alchemistische Hochzeit war vollzogen. Das Innere Kind lachte, der innere Mut hielt die Wacht, und die eigene Würde stand wie eine unzerstörbare Festung. Der jahrzehntelange Kampf war vorbei. Das Eis war geschmolzen, und das flüssige Gold der Liebe wärmte sie von innen heraus für alle Ewigkeit. Althea atmete tief aus, ließ sich ganz in das sanfte Pendeln der Schaukel fallen und genoss einfach nur den unendlichen Frieden der Gänseblümchen. Die Wiese des Lebens gehörte ab heute ganz allein ihr.";
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
