let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Goldwärme der Puppe pulsierte noch wie eine sanfte Flut in Altheas Brust, als auf der sommerlichen Festwiese eine neue, unbändige Dynamik erwachte. Die drei Katzen, die bisher wie eine stille, majestätische Leibwache verharrt hatten, brachen plötzlich aus ihrer Starre aus. Es war, als hätten auch sie das endgültige Schmelzen der elterlichen Eiszeit gespürt. Mit einem Mal begannen sie ein wildes, ausgelassenes und ungezähmtes Spiel im hohen, taunassen Gras unter den Sternen. Sie schlugen Haken, jagten unsichtbaren Glühwürmchen nach und vollführten weite, lautlose Sprünge durch die Luft. Althea beobachtete sie mit einem tiefen, befreiten Lächeln im Gesicht. Sie verstand im Sinne C.G. Jungs, dass diese Tiere ihre vollständig integrierte Intuition und Instinktnatur verkörperten. Im Haus des Vaters hatte sie jeden Impuls, jeden Eigensinn und jedes Bauchgefühl unterdrücken müssen; sie hatte ununterbrochen auf der Hut sein müssen, um den narzisstischen Erzeugern zu gefallen. Doch die ungezähmte Seele der Katzen war für die Peiniger unerreichbar geblieben. Dieser Tresor der Wildheit war im Verborgenen herangewachsen und forderte nun sein unzensiertes Recht auf Existenz. Eine der Katzen schoss wie ein kleiner, pelziger Blitz auf Althea zu, sprang mit traumhafter Leichtigkeit an ihrem karmesinroten Kleid empor und landete schnurrend auf ihrer Schulter. Die beiden anderen folgten auf dem Fuße, strichen um ihre Knöchel und rieben ihre Köpfe an den kunstvoll bemalten Mustern ihrer Hände. Das gemeinsame, tiefe Brummen der Tiere verband sich mit dem Schlagen von Altheas eigenem, warmen Herzen zu einer kraftvollen Symphonie des Ur-Vertrauens. Katzen lassen sich nicht brechen, sie fordern ihre Freiheit ein, schlafen, wenn sie müde sind, und entziehen sich jedem Druck ohne einen Funken von Scham oder Schuldgefühl. Indem Althea die Tiere an sich drückte, nahm sie diese Eigenschaften vollständig in ihr eigenes Wesen auf. Sie war kein Opfer mehr, den man einsperren, beschämen oder manipulieren konnte. Sie besaß nun die unzähmbare Autonomie der Katzen. Sie stand majestätisch im Mondlicht, geschützt von ihrer eigenen, wilden Intuition, während der Fuchs im Hintergrund leise die Grenzen des neuen, freien Territoriums sicherte.";
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
