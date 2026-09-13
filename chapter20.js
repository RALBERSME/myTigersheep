let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Morgen nach dem großen Einsturz brach mit einer unendlichen, fast heiligen Stille an. Das Tosen der Fluten war verstorben, und über der weiten Sommerwiese lag ein unbeschreiblicher Frieden. Althea spürte, dass der schwerste Teil der Reise vollbracht war. Die Trennung war vollzogen, die Brücke weg. Doch anstatt sofort das neue, unentdeckte Land zu stürmen, verlangte ihr Körper nun nach dem, was Jonathan ihr befohlen hatte: nach dem fuchsartigen Rückzug in die absolute Sicherheit. Althea stieg die Stufen hinauf in ihr Turmzimmer und schloss die schwere Holztür hinter sich. Sie trat hinein in ihren ganz persönlichen, inneren Fuchsbau. Es war ein Raum der reinen Reizarmut. Hier gab es keine blinkenden Lichter der Grauen Stadt, keine fordernden Stimmen und keine Erwartungen, die wie unsichtbare Fäden an ihren Gliedern zerrten. Althea dunkelte die Fenster mit schweren, weichen Vorhängen ab, bis nur noch ein einzelner, goldener Lichtstrahl den Raum durchschnitt. Sie baute sich inmitten des Zimmers ein Nest aus unzähligen Kissen und Decken, die nach Lavendel und Bienenwachs dufteten. Die Katze rollte sich schnurrend an ihrem Bauch zusammen, und die lebendige Puppe kuschelte sich fest an ihre Brust, während ihr Herz in einem ruhigen, gleichmäßigen Rhythmus schlug. Althea schloss die Augen und ließ sich tief in die Kissen sinken. In diesem geschützten Raum gab es kein Arbeiten-Müssen mehr. Ihr Nervensystem, das jahrzehntelang im permanenten Alarmzustand der Opfer-Rolle gefangen gewesen war, begriff Zelle für Zelle, dass die Wölfe sie niemals mehr erreichen konnten. Die Gefahr war vorbei. Sie erlaubte sich, einfach nur müde zu sein, ohne schwach zu wirken. Sie schlief Stunden, vielleicht Tage – ein tiefer, traumloser und alchemistischer Heilschlaf, in dem sich die chronische Erschöpfung der vergangenen Kämpfe endgültig aus ihrem Bindegewebe entlud. Der Fuchs saß draußen vor der Tür auf der Schwelle und sicherte die absolute Unantastbarkeit ihres Rückzugs. Althea war abgetaucht in die stärkste Festung der Welt: die Erlaubnis, im absoluten Nichts-Tun einfach nur zu existieren und das eigene Herz im Verborgenen zu wärmen.";
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
