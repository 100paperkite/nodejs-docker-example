import express from 'express';
import { createClient } from 'redis';

const { env } = process;

const KEY_NAME = 'number';

const client = createClient({
  url: `redis://${env.REDIS_HOST}:${env.REDIS_PORT}`,
});

await client.connect();
await client.set(KEY_NAME, 0);

const app = express();
app.get('/', async (req, res) => {
  const number = await client.get(KEY_NAME);
  await client.set(KEY_NAME, parseInt(number) + 1);

  res.send(`숫자가 1만큼씩 올라갑니다: ${number}`);
});

app.listen(env.PORT, env.HOST, () => {
  console.log(`Running on http://${env.HOST}:${env.PORT}`);
});
