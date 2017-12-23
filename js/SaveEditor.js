const OFFSETS = {
	"MONEY": 0x91C,
	"MARIO": {
		"CURENT_LV": 0x77B, // tiny
		"CURENT_EXP": 0x778, // short
		"NEXT_EXP": 0x77C, // short
		"CURENT_HP": 0x74E, // short
		"MAX_HP": 0x752, // short
		"CURENT_BP": 0x750, // short
		"MAX_BP": 0x754, // short
		"POW" : 0x756, // short
		"DEF": 0x758, // short
		"SPEED": 0x75A, // short
		"MUSTACHE": 0x75C // short
	},

	"LUIGI" : {
		"CURENT_LV": 0x863, // tiny
		"CURENT_EXP": 0x860, // short
		"NEXT_EXP": 0x864, // short
		"CURENT_HP": 0x836, // short
		"MAX_HP": 0x83A, // short
		"CURENT_BP": 0x838, // short
		"MAX_BP": 0x83C, // short
		"POW" : 0x83E, // short
		"DEF": 0x840, // short
		"SPEED": 0x842, // short
		"MUSTACHE": 0x844 // short
	},

	"ITEMS" : [
		0x920, 0x928, 0x930, 0x938, 0x940, 0x948, 0x950, 0x958, 0x960, 0x968, 0x970, 0x978, 
		0x980, 0x988, 0x990, 0x998, 0x9A0, 0x9A8, 0x9B0, 0x9B8, 0x9C0, 0x9C8, 0x9D0, 0x9D8, 
		0x9E0, 0x9E8, 0x9F0, 0x9F8, 0xA00
	] // tiny
}

const RANKS = {
	"shell" : {
		lv: 7,
		exp: [1220, 1290], // [0] = Mario [1] = Luigi 
		next: 1
	},

	"flower" : {
		lv: 15,
		exp: [9930, 10210], // [0] = Mario [1] = Luigi 
		next: 1
	},

	"star" : {
		lv: 25,
		exp: [49490, 50560], // [0] = Mario [1] = Luigi 
		next: 1
	},

	"rainbow" : {
		lv: 39,
		exp: [231160, 233360], // [0] = Mario [1] = Luigi 
		next: 1
	},

	"final" : {
		lv: 99,
		exp: [3000000, 3002500], // [0] = Mario [1] = Luigi 
		next: 1
	}
}
