export default function firstUpCase(_input) {
  const output = _input.split('');
  output[0] = _input[0].toUpperCase();
  return output.join('');
}