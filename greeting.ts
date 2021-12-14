export default function greeting(name = 'stranger') {
  if (['Lara', 'Marwin', 'Philipp', 'Jerry'].includes(name)) {
    return 'Hello, coach!';
  }
  return `Hello, ${name}!`;
}
