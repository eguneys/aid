let _sri: string;

try {
  const data = window.crypto.getRandomValues(new Uint8Array(9));
  _sri = btoa(String.fromCharCode(...data).replace(/[/+]/g, '_'));
} catch (_) {
  _sri = Math.random().toString(36).slice(2, 12);
}

const sri = _sri;

export default sri;
