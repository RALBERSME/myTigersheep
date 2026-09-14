let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Nebel war vollständig verflogen, und das Pracht-Sanktuarium auf der Brücke atmete die unbeschwerte Frische eines strahlenden Sommertages. In der großen Halle des Hauses herrschte ein neues, geschäftiges Treiben. Althea saß am wuchtigen Eichensekretär, doch diesmal las sie keine alten Briefe der Ahnen, sondern sie erschuf die Kulissen für ihre eigene Zukunft. Es war an der Zeit, das Ende der langen Eiszeit nicht mehr nur im Stillen zu bewahren, sondern es mit einem großen, alchemistischen Fest der Freiheit zu besiegeln. Vor ihr lagen Bögen aus schwerem, handgeschöpftem Papier. Althea griff nach einer Feder und begann, Einladungskarten zu schreiben. Sie nutzte eine Tinte, die im Licht in tiefem Karmesinrot glänzte, und verzierte die Ränder mit feinen, glänzenden Goldfäden – exakt den Farben des Fuchses und des Roten Pandas. Jedes Wort, das sie zu Papier brachte, floss rein aus ihrer neu gewonnenen inneren Fülle. Es war eine Einladung an alle verbannten, eingefrorenen und versteckten Anteile ihrer eigenen Seele. Sie rief die Kreativität, die Sinnlichkeit, die ungezähmte Intuition und das unzensierte Sein zusammen, um sich endlich im warmen Licht des Bewusstseins zu zeigen. Während sie schrieb, sprang die Katze mit einem sanften Satz auf die Tischplatte und legte sich schnurrend neben die Bögen. Draußen im hohen Gras hielt der Fuchs unermüdlich die Wacht. Die Puppe saß aufrecht im Sessel daneben, und ihr hölzernes Herz pulsierte in einem immer kräftigeren, warmen Rhythmus. Althea verstand, dass dieses Fest keine Maskerade werden durfte. Es sollte das exakte Gegenteil jener starren, verlogenen Familienfeiern der Herkunftsfamilie sein, bei denen jeder eine Rolle spielen musste, um dem narzisstischen System zu gefallen. Am Nachmittag ging Althea zum Haupteingang des Pracht-Sanktuariums. Direkt neben der schweren Holztür stellte sie eine große, wunderschön verzierte Holzkiste auf. Mit der roten Tinte schrieb sie ein Schild, das sie über der Truhe befestigte. Die Aufschrift war unmissverständlich: 'Masken-Depot. Wer diesen Raum betritt, legt seine Fassade ab. Zutritt nur für unzensierte Seelen.' Es war die endgültige Demarkationslinie. Wer hier feierte, musste die Rabenmaske der Perfektion und die Rüstung des Recht-haben-Wollens draußen lassen. Als die Sonne langsam hinter den Bergen versank und den Fluss des Vergessens in ein tiefes Violett tauchte, war alles bereit. Die Lichter des Pracht-Sanktuariums glänzten golden auf den Scheiben, und Althea spürte ein tiefes, freudiges Kribbeln in ihrem Körper. Das System der Unterdrückung war kollabiert, die Altlasten waren begraben, und die Einladung an das Leben war geschrieben. Das Fest ihrer eigenen Erlösung konnte beginnen.";
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
