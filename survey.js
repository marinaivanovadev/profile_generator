const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// questions
rl.question(`What's your name? `, (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (music) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)? `, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (eat) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
              // generated profile
              const profile = `${name} loves listening to ${music} while ${activity}, devouring ${eat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`;
              console.log(profile);
              rl.close();
            });

          });
        });
      });
    });
  });
});


