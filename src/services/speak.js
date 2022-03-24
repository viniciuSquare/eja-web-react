function speak(text) {
  let message = new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();
  message.voice = voices[15];
  message.voiceURI = 'native';
  message.volume = 1;
  message.rate = 1.2;
  message.pitch = 2;
  message.text = text;
  message.lang = 'pt-BR';
  message.localeService = true;

  speechSynthesis.speak(message);
}

export default speak;