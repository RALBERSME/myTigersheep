let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Mit der schweigenden Holzpuppe fest im Arm ging Althea hinüber zu dem wuchtigen Eichensekretär, der im hellsten Winkel des Pracht-Sanktuarium-Salons stand. Das Holz fühlte sich glatt und warm unter ihren Fingern an. Auf der Schreibplatte lag, genau im Zentrum eines wandernden Sonnenstrahls, ein einsamer, ungeöffneter Umschlag. Das Papier war dick, von der Zeit leicht vergilbt und verströmte den herben Geruch von Tabak, Leder und Pferdedung – die unverkennbaren Düfte jenes Arbeitswagens aus den 1930er Jahren, dem Althea in ihrem tiefsten Inneren begegnet war. Auf der Vorderseite stand Altheas Name, geschrieben in einer wuchtigen, charaktervollen Tinte, die mit festem Druck aufs Papier gebracht worden war. Althea erkannte die Schrift sofort, obwohl sie sie im realen Leben nie hatte sehen können. Es war die Handschrift ihres Großvaters. Althea setzte sich auf den hölzernen Stuhl und öffnete den Umschlag mit einer feierlichen Langsamkeit. Jedes Rascheln des Papiers fühlte sich an wie das Aufbrechen eines alten Siegels. Als sie den Brief entfaltete, war es, als würde eine tiefe, raue und unendlich gütige Stimme direkt in ihrem Herzen zu sprechen beginnen: 'Meine liebe Althea,'' stand dort geschrieben. 'Wenn du diese Zeilen liest, hast du die Steinbrücke endlich überquert. Du hast den Staub der Grauen Stadt von deinen Schuhen gewaschen und die Rabenmaske der Unfehlbarkeit abgelegt. Ich weiß, wie unendlich schwer dieser Weg für dich war. Ich weiß von der seelischen Wüste, in die dein Vater das Haus verwandelt hat, das ich einst voller Hoffnung für euch gebaut habe. Ich weiß, dass sie deine Seele auffressen wollten, aber an den Tresor deines Herzens kamen sie nicht heran. Du musst wissen: Als ich im Krieg erschossen wurde, ließ ich einen kleinen Jungen zurück. Dein Vater ging danach durch die absolute Hölle der emotionalen Kälte, gehasst von seiner eigenen narzisstischen Mutter. Er war zu schwach für diesen Schmerz, Althea. Er erfand keine Puppe, er baute keinen Tresor. Er mutierte selbst zum Narzissten, um nicht zu sterben, und wälzte seinen Lebensschmerz auf dich ab. Er machte dich zu seinem Opfer, weil er ein getriebener, ängstlicher Jammerlappen war, der nie gelernt hat, was es heißt, ein Mensch unter Menschen zu sein. Ich habe diesen Ort, dieses Pracht-Sanktuarium an der Grenze der Welten, mit jedem Herzschlag meiner jenseitigen Existenz für dich erbaut. Der Fuchs vor deinem Fenster, die Katzen auf deinen Schultern, sie sind die Boten des Ur-Vertrauens, die ich dir geschickt habe. Ich habe auf dich gewartet. Dein Vater ist nun erlöst; er schwimmt als stummer Schwan auf dem See und kann dir nichts mehr anhaben. Die Mutter ist in ihrem eigenen Sarg erstickt und der Mist hat sie begraben. Du bist frei, meine kleine Königin. Du musst niemanden mehr retten. Du musst nicht mehr stark sein. Tritt heraus auf die Lichtung, nimm meine Hand und feiere deine Hochzeit mit dir selbst. Der Zigeunerwagen der reinen Lebensfreude steht für dich bereit. In unendlicher, stolzer Liebe, Dein Großvater.' Eine einzelne, heiße Träne löste sich aus Altheas Auge und fiel genau auf die Unterschrift des alten Mannes. Doch es war keine Träne der Verzweiflung mehr. Es war das flüssige Gold der Erlösung. Die unbarmherzige Kälte, die über Generationen hinweg wie ein Fluch auf dieser Familie gelegen hatte, war in diesem Moment endgültig gebrochen. Althea spürte den schützenden Ahnenmantel ihres Großvaters wie eine physische Wärme um ihre Schultern gelegt. Sie war angekommen. Sie war gewollt. Und die Zukunft, die auf der sommerlichen Lichtung auf sie wartete, war rein und unbeschrieben.";

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

let htmlContent = document.body.innerHTML;
