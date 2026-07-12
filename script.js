function analyzeSignal() {
  const signals = ["BUY", "SELL", "WAIT"];
  const result = signals[Math.floor(Math.random() * signals.length)];

  document.getElementById("signal").innerText = result;
}
