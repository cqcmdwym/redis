import Redis from 'ioredis';
//const Redis = require('ioredis');

const redis = new Redis();

redis.set('name', 'Emmanuel', 'EX', 5);
redis.get('name', (err, result) => {
    console.log(result);
})