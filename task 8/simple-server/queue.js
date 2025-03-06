const { Queue } = require('bullmq');
const Redis = require('ioredis');

const connection = new Redis();
const emailQueue = new Queue('emailQueue', { connection });

async function addEmailJob(email) {
    await emailQueue.add('sendEmail', { email });
    console.log(`📩 Email job added for ${email}`);
}

module.exports = { addEmailJob };
