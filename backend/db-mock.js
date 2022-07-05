const faker = require('faker');

const SEED_SIZE = 50;
const REPOST_RATIO = .5;

const messages = [
  { alias: 'az', text: 'HeY ProGraMmErs', postedAt: new Date() }
];

for (let i = 0; i < SEED_SIZE; i += 1) {
  const alias = faker.internet.userName();
  const text = faker.hacker.phrase();
  const postedAt = faker.date.recent();
  messages.push({ alias, text, postedAt });
}

for (let i = 0; i < REPOST_RATIO * SEED_SIZE; i += 1) {
  const randomMessageIndex = Math.floor(Math.random() * messages.length);
  const alias = messages[randomMessageIndex].alias;
  const text = faker.hacker.phrase();
  const postedAt = faker.date.recent();
  messages.push({ alias, text, postedAt });
}

module.exports = {
  messages
};