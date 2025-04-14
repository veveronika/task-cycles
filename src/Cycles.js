export function rangeSum(start, end) {
  let sum = 0;
  const [min, max] = start < end ? [start, end] : [end, start];
  
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

export function iterationCount(a) {
  let count = 0;
  let current = a;
  
  while (current > 0.1) {
    current /= 2;
    count++;
  }
  
  return count;
}

export function symbolsReplace(message) {
  let result = '';
  let i = 0;
  
  if (!message) return '';
  
  do {
    result += (i + 1) % 3 === 0 ? '_' : message[i];
    i++;
  } while (i < message.length);
  
  return result;
}