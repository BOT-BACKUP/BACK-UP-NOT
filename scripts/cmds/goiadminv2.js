module.exports = {
	config: {
		name: "goiadminv2",
		version: "1.0",
		author: "MD Khairul Islam Mosaddek",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "sarcasm",
		category: "reply",
	},
	onStart: async function () {},
	onChat: async function ({ event, message, getLang, api }) {
		const msg = [
			"ওই, আমার মালিকরে বারবার ট্যাগ দিছিস কেন? প্রেমে পড়ছিস নাকি? 😏",
			"বস ব্যস্ত আছে, আর তুই এখানে পিরিতি জমাচ্ছিস! 😤",
			"আর একবার ট্যাগ দিলে, তোকে খাটের নিচে লুকিয়ে রাখবো! 😈",
			"মালিক ঘুমাচ্ছে ভাই, স্বপ্নে নায়িকা নিয়া ব্যস্ত, ডিস্টার্ব করিস না! 🙄",
			"তোর কি অন্য কোনো কাজ নাই? সারাদিন মালিকরে ট্যাগ দেওয়া লাগে? 😑",
			"এই যে, মালিকরে কেন ট্যাগ দিছস? নাকি রাতের প্ল্যান করছিস? 😉",
			"যদি সত্যি ভালোবাসিস, সরাসরি বল, এভাবে লুকিয়ে লুকিয়ে কেন? 😏",
			"আর একবার ট্যাগ দিলে, তোর ইনবক্সে একশোটা *ভাবি আছে কি?* মেসেজ যাবে! 🤫"
		];

		const CliffRegex = /^(@MD Khairul Islam Mosaddek)$/i;
		if (event.body && CliffRegex.test(event.body)) {
			api.setMessageReaction("🔥", event.messageID, (err) => {}, true);
			return api.sendMessage({ body: msg[Math.floor(Math.random() * msg.length)] }, event.threadID, event.messageID);
		}
	},
};