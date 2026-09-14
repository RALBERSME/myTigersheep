let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Nacht war gewichen, doch sie hatte keinem grellen Tag Platz gemacht, sondern einer sanften, dämmerigen Helligkeit, die wie ein schützender Schleier über der Landschaft lag. Der Staub der Grauen Stadt klebte noch an Altheass Schuhen, aber der Geruch von Ruß und Asphalt war verschwunden. Stattdessen roch die Luft hier nach feuchter Erde, nach Moos und nach dem kühlen, ungezähmten Atem von fließendem Wasser. Althea spürte jeden einzelnen Muskel in ihrem Körper. Die Rüstung der Unfehlbarkeit, die schwere Rabenmaske, hatte sie kilometerweit getragen, doch nun drückte das Gewicht sie unbarmherzig zu Boden. Ihre Beine waren schwer wie Blei, ihr Atem ging flach. In einer toxischen Familie lernt man, die Signale des eigenen Körpers zu ignorieren; man funktioniert einfach weiter, bis das System kollabiert. Althea stand kurz vor diesem Punkt. Ihre Kräfte waren am Ende, die Reisetasche in ihrer Hand fühlte sich an, als sei sie mit Mühlsteinen gefüllt. Doch als sie den Kopf hob, hielt sie den Atem an. Der Nebel vor ihr lichtete sich und gab den Blick auf ein Panorama frei, das ihr unbewusstes Herz sofort wiedererannte. Vor ihr strömte ein gewaltiger, tiefer Fluss. Seine Wellen waren dunkel und mächtig, doch sie strömten ohne Hast. Es war der Fluss des Vergessens,  ein Gewässer, das alles wegschwemmte, was an das alte Ufer der Schuld und der Scham erinnerte. Und direkt über diesen Fluss spannte sich die Brücke. Sie war aus mächtigen, grauen Natursteinen gemauert, uralt und unerschütterlich. Bögen, die seit Jahrhunderten den Fluten trotzten, führten hinüber an das andere Ufer, das noch im dichten, verheißungsvollen Nebel lag. Diese Brücke brauchte keine Stützen aus Perfektion; ihre bloße, majestätische Existenz war ihre Stärke. Am Jenseits des Brückenkopfes, eingebettet in die sanften Hügel der Uferlandschaft, thronte das Pracht-Sanktuarium. Es war ein großes, verwinkeltes Haus aus dunklem Holz und hellem Stein. Seine Architektur wirkte organisch, als sei es direkt aus der Erde gewachsen, um Althea zu empfangen. Das Besondere aber waren die Fenster. Während der Himmel über dem Fluss in ein kühles Nebelgrau getaucht war, glänzten die Scheiben des Hotels in einem warmen, tiefen Goldton. Es war, als brenne im Inneren dieses Hauses ein ewiges, einladendes Herdfeuer, das nur darauf wartete, die jahrzehntelange Eiszeit in Altheas Nervensystem zum Schmelzen zu bringen. Hier gab es keine engen Mauern, keine lauernden Blicke der Erzeuger, keine Erwartungen, die man erfüllen musste, um nicht vernichtet zu werden. Das Pracht-Sanktuarium strahlte eine tiefe, heilige Reizarmut aus. Es war ein Ort des absoluten Stillstands. Althea ging die letzten Schritte auf die schwere Holztür des Pracht-Sanktuariums zu. Jeder Schritt auf diesem neuen Boden fühlte sich seltsam ungewohnt an,  frei von dem zähen Schlamm der Grauen Stadt. Sie spürte, dass an diesem Ort die alten Gesetze der Ohnmacht keine Gültigkeit mehr besaßen. Sie stand an der Schwelle zu einem Raum, in dem sie einfach nur sein durfte. Sie legte die Hand auf den warmen Messingknauf der Tür und drückte ihn nach unten. Sie wusste, dass sie das alte Ufer nie wieder betreten würde.";
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
