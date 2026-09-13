let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die trügerische Stille hielt nicht lange an. Das Rascheln im Unterholz am Rande der Steinbrücke kündigte an, was Altheas Nervensystem am meisten gefürchtet hatte: Einer der Angreifer hatte sich nicht mit dem Rufen über das Wasser begnügen wollen. Er hatte die Brücke physisch überquert und stapfte nun mit schweren, rücksichtslosen Schritten direkt auf die sommerliche Lichtung des Pracht-Sanktuariums zu. Aus der Ferne, im fahlen Licht des Brückenkopfes, wirkte die Gestalt gigantisch. Sie warf einen riesigen, bedrohlichen Schatten, der sich wie eine dunkle Gewitterwolke über das hohe Gras legte. Es war das exakte Abbild der Ur-Angst, die Altheas im Haus des Vaters gelernt hatte – die unbezwingbare, alles verschlingende Macht des Monsters Catla. Altheass Körper schrie sofort nach Flucht. Jede Faser ihrer Programmierung signalisierte ihr, dass dieser Riese sie mit einem einzigen verbalen Schlag vernichten, sie wieder in die Knie zwingen und ihre Scham erpressen würde. Doch als der Angreifer die Mitte der Lichtung erreichte und im grellen, unbarmherzigen Licht der Sommersonne stand, weigerte Altheas sich, wegzulaufen. Sie erinnerte sich an das königliche Gewand, das in ihrem Turmzimmer wartete, und an das Versprechen von Jonathan Löwenherz. Sie legte die Puppe sanft auf die Schaukel, stand langsam auf und strich ihr Kleid glatt. Sie atmete tief in den Bauch, besann sich auf ihre unzerstörbare Würde und blieb wie eine lebendige Festung stehen. Sie zog keine Waffe. Sie hob nicht einmal die Stimme. Sie sah ihm einfach nur unzensiert, echt und furchtlos direkt in die Augen. Und dann geschah das alchemistische Wunder, das Michael Ende einst im Scheinriesen Tur Tur beschrieben hatte. Mit jedem Schritt, den die bedrohliche Gestalt näher auf Althea zukam, verlor sie an Größe. Was aus der Ferne wie ein unbezwingbares Monster gewirkt hatte, schrumpfte im Licht der unerschütterlichen Wahrheit Meter für Meter zusammen. Als der Angreifer schließlich nur noch wenige Schritte von Althea entfernt stand, war von dem Riesen nichts mehr übrig. Vor ihr stand ein kleiner, tief verunsicherter und erbärmlicher Mensch. Seine verbalen Attacken, sein lautes Fauchen und seine herrischen Vorwürfe wirkten plötzlich wie das hilflose Trommeln eines Kindes gegen eine Marmorwand. Er besaß keine Macht mehr, weil Althea seine Bedingungen nicht mehr akzeptierte und sich nicht länger schämte. Der Scheinriese starrte Althea an, doch in ihren Augen fand er keinen Schrecken, keine Panik und keine Rechtfertigung – nur die tiefe, majestätische Gelassenheit des Roten Pandas. Ihre unzensierte Realität war für ihn unerträglich. Nach wenigen, kraftlosen Sätzen erstickte seine Stimme in der reizarmen Stille der Lichtung. Er drehte sich um, wirkte nun winzig und gebückt, und schlich mit hängenden Schultern zurück über die Brücke, um im grauen Nebel der Vergangenheit zu verschwinden. Althea stand allein unter der Eiche. Sie hatte nicht gekämpft, sie hatte nur ihre Würde gehalten – und der Drache war zu Staub zerfallen.";
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
