let counter = 0;

const getRandomDadJoke = async () => {
  counter += 1;
  const url = "https://icanhazdadjoke.com";
  const jokeStream = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJoke = await jokeStream.json();
  return jsonJoke.joke;
};

const displayJoke = (joke) => {
  const h1 = document.querySelector("h1");
  h1.textContent = joke;
};

const refreshJoke = async () => {
  const joke = await getRandomDadJoke();
  displayJoke(joke);
};

// load the first joke
refreshJoke();

const interval = setInterval(refreshJoke, 5000);
