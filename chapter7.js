let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Am nächsten Morgen war der Himmel über dem Fluss des Vergessens von einem makellosen, tiefen Azurblau. Althea trat durch die hintere Flügeltür des Pracht-Sanktuariums direkt hinaus auf die weite Sommerwiese. Sie trug die schweigende Holzpuppe im Arm, während die drei Katzen wie eine lautlose, lebendige Garde um ihre Knöchel strichen. Der Fuchs saß ein Stück entfernt im Halbschatten der Sträucher; sein orange-rotes Fell glänzte in der Morgensonne wie eine Einladung an das Leben. Inmitten der Wiese stand die mächtige, jahrhundertealte Eiche, von der ihr Großvater im Brief geschrieben hatte. Ihre tief hängenden, knorrigen Äste wirkten wie weit geöffnete Arme, die der Hitze des Tages einen schützenden Raum boten. An den stärksten Ast waren zwei dicke, wettergegerbte Hanfseile geknüpft, die ein einfaches, breites Holzbrett hielten. Eine Schaukel. Althea ging langsam auf den Baum zu. Jeder Schritt durch das taunasse Gras fühlte sich wie eine sanfte Fußwaschung an, die den letzten restlichen Staub der Grauen Stadt von ihrer Haut spülte. Sie setzte sich auf das Holzbrett, legte die Puppe behutsam auf ihren Schoß und stieß sich mit den Zehenspitzen ganz leicht vom Boden ab. Mit einer trägen, beruhigenden Langsamkeit begann die Schaukel sich in Bewegung zu setzen. Ein sanfter Fahrtwind strich Althea durch das Haar und küsste ihr unzensiertes Gesicht. In diesem Moment erfasste Althea das fundamentale Gesetz dieses neuen Raumes: das Gesetz der absoluten Leistungslosigkeit. Im Haus des Vaters bedeutete Stillstand immer Lebensgefahr. Wer nicht funktionierte, wer nicht perfekt lieferte, wurde mit Verachtung und emotionaler Vernichtung bestraft. Das Nervensystem war im Daueralarm gefangen gewesen. Doch hier, im rhythmischen Vor und Zurück der Schaukel, gab es nichts zu tun. Sie musste sich diese Pause nicht verdienen. Sie musste keine Erwartungen erfüllen, um sicher zu sein. Das Schaukeln war eine rhythmische Wiegebewegung, die das uralte Trauma der emotionalen Eiszeit Zelle für Zelle aus ihren Muskeln wiegte. Die Katzen sprangen nacheinander mit einer traumhaften Leichtigkeit auf das breite Holzbrett, rollten sich um Altheas Hüften herum zusammen und stimmten ein tiefes, gemeinsames Schnurren an. Das Vibrieren der Tiere und das Pendeln der Schaukel verschmolzen zu einer einzigen Heilmelodie für Altheas Nervensystem. Althea schloss die Augen und legte den Kopf in den Nacken. Sie tat das, was ihr im Haus des Vaters am gründlichsten ausgetrieben worden war: Sie verschwendete Zeit. Sie genoss einfach nur die Wärme der Sonne, den Duft der Gänseblümchen im Gras und die unendliche Erleichterung, endlich an einem Ort zu sein, an dem die Uhren der Tyrannen keine Macht mehr besaßen.";
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
