let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das ruhige, flüssige Gefühl ihres neuen Selbst breitete sich aus wie die sommerliche Wärme auf der Lichtung. Althea saß auf den Stufen des Pracht-Sanktuariums, die lebendige Puppe an ihrer Seite, während die Katzen träge im Schatten der Veranda dösten. Der Fluss des Vergessens trennte sie unüberbrückbar von der alten Welt. Doch ab und zu, wenn der Wind günstig stand, sah Althea am diesseitigen Ufer, weit unterhalb der eingestürzten Brücke, andere Gestalten auftauchen. Es waren Wanderer, die ebenfalls aus der Grauen Stadt geflohen waren,  erschöpft, zerschunden, die schweren Rabenmasken noch krampfhaft an ihre Gesichter gepresst. In Altheas Brust regte sich augenblicklich ein alter, vertrauter Impuls. Die Opfer-Programmierung wollte aufspringen, hinablaufen, diese Menschen retten, ihre Wunden verbinden und die Lasten ihrer Traumata auf die eigenen Schultern nehmen. Es war die alte, erstickende Rolle der Retterin, die sie im Haus des Vaters gelernt hatte: sich selbst aufzuopfern, um die seelische Stabilität anderer zu sichern. Doch als sie sich bewegen wollte, legte Jonatan sanft seine Hand auf ihre Schulter. Er schüttelte den Kopf, und seine Augen sprühten vor unerschütterlicher, gütiger Weisheit. 'Halt deine Würde, Althea', sagte er leise. 'Du bist nicht für ihre Heilung verantwortlich. Das ist nicht deine Aufgabe in diesem Kampf. Ein Leuchtturm schwimmt nicht hinaus in den Sturm, um die Schiffe zu ziehen. Er steht einfach nur da und leuchtet.'Althea hielt inne und atmete tief aus. Sie begriff das Leuchtturm-Prinzip in seiner ganzen erlösenden Tiefe. Wenn sie jetzt hinabliefe, um die Therapeutin zu spielen, würde sie nur wieder die Maske des übermenschlich starken Retters anlegen. Sie würde energetisch ausbluten und Katla hätte sie über das Helfersyndrom wieder im Griff. Sie blieb sitzen. Sie stand nicht auf, sie kämpfte nicht, sie forderte nichts. Sie hielt einfach nur ihre majestätische Würde im karmesinroten Kleid, die Golddublonen glänzend im Sonnenlicht. Und genau in diesem reinen, unbewegten Sein lag die eigentliche Befreiung für die Menschen. Die Wanderer am Flussufer blickten hinauf zum Pracht-Sanktuarium. Sie sahen Althea, unzensiert, rein, unantastbar und glücklich. Sie sahen, dass man die Eiszeit überleben und die Brücke überqueren konnte, ohne daran zu zerbrechen. Altheas reine Existenz zündete einen Funken Hoffnung in ihren eigenen Herzen an. Die Befreiung der anderen war das passive Abfallprodukt ihrer eigenen, vollendeten Heilung. Althea war frei. Sie besaß keine Pflichten mehr gegenüber den Seelen anderer. Ihr Licht war ihr einziges Geschenk an die Welt.";
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
