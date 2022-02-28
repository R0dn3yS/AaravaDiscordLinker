const { SubmissionStream } = require('snoostorm');
const Snoowrap = require('snoowrap');
const config = require('./config.json')

const BOT_START = Date.now() / 1000;

const r = new Snoowrap(config);

const submissions = new SubmissionStream(r, {
	subreddit: 'testingground4bots',
	limit: 25,
	pollTime: 10000,
});

submissions.on('item', post => {
	if (post.created_utc < BOT_START) return;
	post.reply('Join our new Discord: https://discord.gg/9UkybRgRxW').then(comment => {
		const id = comment.id;
		console.log(`I have commented on ${id}`);
		// r.getComment(id).distinguish({ status: true, sticky: true });
	})
})