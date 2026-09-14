let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Als Althea erwachte, stand die Sonne bereits tief über dem Fluss des Vergessens und tauchte das Turmzimmer in ein flüssiges, rotgoldenes Licht. Es war das erste Mal seit Jahrzehnten, dass sie nicht mit einem panischen Herzrasen aufgewacht war. Kein lauernder Gedanke an die Erwartungen anderer, kein inneres Abscannen der Umgebung nach drohender Gefahr. Das Nervensystem hatte im Schlaf die erste große Welle des alten Giftes entladen. Sie fühlte sich leer, aber auf eine unendlich friedliche Weise, wie ein Gefäß, das darauf wartete, neu gefüllt zu werden. Die Katze lag noch immer zusammengerollt am Fußende des Bettes, öffnete kurz ein Auge, schnurrte leise zur Begrüßung und schlief weiter. Althea stand auf. Ohne die schwere Rabenmaske fühlte sich ihr Körper seltsam leicht, fast schwebend an. Sie ging die Stufen hinab in den großen Salon des Pracht-Sanktuariums, geleitet von einer sanften, intuitiven Neugier. An der Nordwand des Salons, halb verborgen hinter einem schweren Vorhang, fiel ihr Blick auf eine alte, kunstvoll verzierte Eisenplatte, die in das Mauerwerk eingelassen war. Es war die Tür eines antiken Wandtresors, bedeckt mit eingravierten Mustern von Eichenblättern und Rosen. Das Schloss hatte keine Zahlenkombination; in der Mitte befand sich lediglich eine Vertiefung, die exakt die Form einer kleinen, menschlichen Handfläche hatte. Althea trat näher. Ihre Hand zitterte leicht, als sie ihre Handfläche auf das kühle Eisen legte. In der Grauen Stadt bedeuteten Geheimnisse immer Gefahr, verdeckte Angriffe oder weggesperrte Wahrheiten. Doch als das Eisen die Wärme ihrer Haut spürte, ertönte ein tiefes, melodisches Klicken. Die schwere Tresortür schwang lautlos auf. Im Inneren des Tresors lag, gebettet auf verblasstem rotem Samt, ein Gegenstand ihrer Kindheit: ihre alte Lieblingspuppe. Es war eine einfache Holzpuppe, deren Farbe an den Gelenken über die Jahre etwas abgeblättert war. Althea stockte der Atem. Die Erinnerung traf sie wie ein physischer Schlag: Die Eltern hatten diese Puppe gehasst. Sie hatten Althea verspottet, wann immer sie sie im Arm hielt, hatten versucht, sie ihr wegzunehmen, und sie als „nutzlosen Tand“ beschimpft. Die narzisstischen Erzeuger hatten instinktiv gespürt, dass in dieser Puppe eine Macht lag, die sie nicht kontrollieren konnten. Sie war der Projektionsort für Altheas unschuldige, reine Liebesfähigkeit gewesen. Wenn die Kälte im Haus des Vaters unerträglich wurde, hatte Althea ihre gesamte Herzenswärme, ihr Lachen und ihre Zärtlichkeit in diese Puppe ausgelagert. Der Tresor des Unbewussten hatte diesen Schatz über all die Jahre der Eiszeit unbeschadet bewacht. Althea streckte langsam die Finger aus und berührte das Holz der Puppe. Sie war kühl und reglos, eine schweigende Hülle. Doch in dem Moment, in dem Altheas Fingerspitzen die Puppe berührten, passierte etwas Magisches: Tief im Inneren des Holzfeindes begann ein leises, rhythmisches Pulsieren. Es war keine Einbildung. Es fühlte sich an wie ein schlagendes Herz, das im Takt einer ganz fernen, warmen Sommermusik vibrierte. Das unschuldige Innere Kind war nicht tot. Es war nicht verkrüppelt worden. Es hatte im Verborgenen überlebt und wartete nun darauf, von der Königin abgeholt zu werden. Althea nahm die schweigende Puppe behutsam in die Arme, hielt sie fest an ihre Brust gepresst und spürte, wie eine erste, zarte Welle von echter, unzensierter Rührung durch ihren Körper floss.";
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
