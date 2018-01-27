import Redis from 'ioredis';
//const Redis = require('ioredis');
import Strings from './strings';
import Hashes from './hashes';

const redis = new Redis();

Strings(redis);
Hashes(redis);