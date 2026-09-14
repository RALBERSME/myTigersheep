let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Als Althea aus ihrem tiefen Heilschlaf erwachte, fühlte sich ihr Körper so leicht und unverbraucht an wie noch nie zuvor in ihrem Leben. Das Nervensystem hatte die bleierne Schwere der Erschöpfung vollständig entladen. Sie trat an das große Panoramafenster ihres Turmzimmers und zog den schweren Vorhang beiseite. Die Sommersonne stand hoch am Himmel und tauchte die gesamte Lichtung in ein glasklares, unbarmherzig schönes Licht, das keinen einzigen Schatten duldete. Jonatan stand bereits unten auf der Wiese, die Hände gelassen in den Taschen, und blickte zu ihr herauf. In seinen Augen blitzten die funkelnden Lebensfunken unbändiger denn je. Er hielt ein altes, hölzernes Fernrohr in der Hand. Althea spürte den fuchsartigen Impuls in ihren Gliedern, stieg die Treppen hinab und trat an seine Seite. Die Puppe saß fest auf ihrer Hüfte, und die Katzen streunten neugierig durch das hohe Gras. 'Es ist Zeit, Althea', sagte Jonathan sanft und reichte ihr das Fernrohr. 'Wir müssen Katla aus ihrer Höhle holen. Aber nicht mit dem Schwert. Nur mit deinen Augen.' Althea nahm das Fernrohr und richtete es über den weiten, unüberbrückbaren Abgrund des Flusses des Vergessens. Sie blickte weit in die Ferne, dorthin, wo im grauen Nebel der Vergangenheit die düsteren, verackerten Berge der Herkunftsfamilie lagen. Und dort, tief in den Felsen, erblickte sie das dunkle, gähnende Loch, vor dem sie sich ihr ganzes Leben lang zu Tode gefürchtet hatte: Katlas Höhle. Es war der Ort der Ur-Angst, der verinnerlichte Terror, das zerstörerische Prinzip des bösartigen Toxismus, das ihre Seele hatte auffressen wollen. Solange dieses Monster im Dunkeln des Unbewussten geschlummert hatte, war es eine alles verschlingende Bedrohung gewesen. Doch als Althea den Fokus des Fernrohrs im scharfen, unbarmherzigen Licht der Wahrheit scharf stellte, stockte ihr der Atem, und dann begann sie leise zu lachen. Da war kein feuerspeiendes Urzeit-Monster. Da war kein unbezwingbarer Drache, der sie vernichten konnte. Im hellen Licht des erwachten Bewusstseins entlarvte sich die gesamte Bedrohung als eine billige, hohle Kulisse aus Pappmasché und staubigem Stein. Das Monster war im Licht der unzensierten Wahrheit zu einer harmlosen, zahnlosen Steinstatue erstarrt. Es hatte niemals echte, lebendige Macht über ihre Seele besessen; es hatte nur von ihrer eigenen Angst und ihrer erpressten Scham gelebt. Nun, da Althea ihre eigene Würde wie eine Königin trug, war der Drache im kollektiven Raum in sich zusammengefallen. Althea nahm das Fernrohr von den Augen. Sie spürte, wie der letzte Rest des alten Schreckens wie feiner Staub im Sommerwind verwehte. Die Höhle war leer. Das Monster war entmachtet. Die Vergangenheit hatte endgültig aufgehört, ihr Angst zu machen.";
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
