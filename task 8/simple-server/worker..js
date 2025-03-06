const { Worker } = require('bullmq');
const Redis = require('ioredis');

const connection = new Redis();

const emailWorker = new Worker('emailQueue', async (job) => {
    console.log(`📧 Sending email to ${job.data.email}`);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
    console.log(`✅ Email sent to ${job.data.email}`);
}, { connection });

console.log('🚀 Worker is running...');
