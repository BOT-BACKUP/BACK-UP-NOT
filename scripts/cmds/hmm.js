module.exports = {
	config: {
		name: "hmm",
		version: "1.0",
		author: "Jaychris Garcia",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "sarcasm",
		category: "reply",
	},
	onStart: async function () { },
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() == "hmm") {
			const replies = [
				"hmm hmm না করে সোজা বল... **তোর কি আদর দরকার নাকি একটু জোরে ধরা?** 😏🔥",
				"hmm hmm করলে মনে হয় **তোর শরীরটা কেমন যেন শিরশির করছে!** 😉💋",
				"hmm hmm করে লাভ নাই, **আজ রাতের প্ল্যান ঠিক হয়ে গেছে!** 😈",
				"এই যে, hmm hmm? **বিছানা নাকি সোফায় আসবি?** 😏🔥",
				"hmm hmm করলে মনে হয় **তোর একলা রাত কষ্টে কাটছে!** আমি কি হেল্প করবো? 😉",
				"hmm hmm? **তোর ঠোঁট কাঁপতেছে নাকি? একদম কাছে আয় দেখি!** 😘",
				"hmm hmm... **এইভাবে চললে একদিন বিছানায় টেনে নেব!** 😈🔥",
				"hmm hmm মানে কি বুঝছি! **তোরও একটু গরম বাতাস লাগছে নাকি?** 😉",
				"hmm hmm করলে মনে হয় **আজ একটা নতুন পজিশন ট্রাই করা লাগবে!** 😏💦",
				"hmm hmm... **লজ্জা পাস না, সোজা বল, কবে শুরু করবো?** 😈🔥"
			];

			const randomReply = replies[Math.floor(Math.random() * replies.length)];
			return message.reply(randomReply);
		}
	}
};