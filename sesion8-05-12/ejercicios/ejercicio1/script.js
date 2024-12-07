const doTask = (iterations) => {
  const numbers = [];
  for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);

    if (number === 6) {
      setTimeout(async () => {
        console.log(await "iteraciones necesarias:", i + 1);
      }, 8000);
      return {
        error: true,

        message: "Se ha sacado un 6",
      };
    }
  }
  return {
    error: false,
    value: numbers,
  };
};
console.log(doTask(10));
