let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Unter den schützenden Ästen der großen Eiche, während die Musik des Großvaters wie ein sanfter Strom durch die Sommernacht floss, geschah das, was in der Grauen Stadt für unmöglich gehalten worden wäre. Althea hielt die Holzpuppe fest an ihre Brust gepresst, die Hand in Jonatans warmer Hand. Plötzlich spürte sie ein tiefes, kraftvolles Beben, das von dem kleinen Holzkorpus ausging. Es war kein starr mechanischer Takt mehr, sondern ein lebendiger, glühender Pulsschlag. Die Puppe, die Altheas Eltern so tief gehasst und verspottet hatten, begann in ihren Armen zum Leben zu erwachen. Das einst spröde, abgeblätterte Holz fühlte sich unter Altheas Fingern plötzlich weich, warm und pulsierend an. Die kleine Gestalt hob den Kopf, blickte Althea aus klugen, leuchtenden Augen an und begann zum ersten Mal seit Jahrzehnten der Eiszeit laut, unbeschwert und frei zu lachen. Es war das Lachen der puren, ungezähmten Lebensfreude, jenes Lachen, das man ihr im Haus des Vaters mit brutaler Kälte austreiben wollte. Mit einer unendlich zärtlichen Bewegung schlang die Puppe ihre nun lebendigen Arme enger um Altheas Hals und begann, ihr sanft über die Wange zu streicheln. In diesem Moment brach der letzte verbliebene Damm in Altheas Innerem. Ein unbändiger, gewaltiger Strom von flüssigem Gold, die reine, blockierte Herzenswärme und Ur-Liebe, schoss aus dem Herzen der Puppe direkt in Altheas Brust hinein. Es war, als würde ein inneres Kraftwerk, das jahrzehntelang unter einer dicken Schicht aus Gletschereis vergraben war, mit einem Schlag explodieren und die gesamte Psyche mit Licht fluten. Die Wärme breitete sich in Sekundenschnelle in jeder einzelnen Zelle ihres Körpers aus, floss durch ihre Venen bis in die Spitzen ihrer Zehen und wärmte ihr gefrorenes Nervensystem von innen heraus vollständig auf. Althea weinte, doch es war das glücklichste Weinen ihres Lebens. Sie saugte diese Liebe nicht gierig auf, denn sie spürte augenblicklich das kosmische Gesetz der Fülle: Liebe und Herzenswärme müssen nicht rational eingeteilt oder verdient werden. Es gibt sie im Universum in Hülle und Fülle, unendlich und unerschöpflich für jeden, der bereit ist, seine Maske abzulegen. Jonatan zog sie sanft an sich, die Puppe kuschelte sich an ihre Schulter, und Althea stand mitten auf der Lichtung, vollständig aufgewärmt, überfließend vor Kraft und bereit für die Freiheit, die vor ihr lag.";
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
