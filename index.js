import Redis from 'ioredis';
//const Redis = require('ioredis');
import Strings from './strings';
import Hashes from './hashes';
import Lists from './lists';
import Sets from './sets';

const redis = new Redis();

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);