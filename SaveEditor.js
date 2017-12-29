const OFFSETS = {
	"MONEY": 0x91C, //short
	
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

	"ITEMS" : {
		"MUSHROOM": 0x920,
		"SUPER_MUSHROOM": 0x921,
		"ULTRA_MUSHROOM": 0x922,
		"MAX_MUSHROOM": 0x923,
		"NUT": 0x924,
		"SUPER_NUT": 0x925,
		"ULTRA_NUT": 0x926,
		"MAX_NUT": 0x927,
		"SYRUP_JAR": 0x928,
		"SUPER_SYRUP_JAR": 0x929,
		"ULTRA_SYRUP_JAR": 0x92a,
		"MAX_SYRUP_JAR": 0x92b,
		"CANDY": 0x92c,
		"SUPER_CANDY": 0x92d,
		"ULTRA_CANDY": 0x92e,
		"MAX_CANDY": 0x92f,
		"1P_MUSHROOM": 0x930,
		"1P_DELUXE": 0x931,
		"REFRESHING_HERB": 0x932,
		"TAUNT_BALL": 0x939,
		"SHOCK_BOMB": 0x93a,
		"BOO_BISCUIT": 0x93b,
		"SECRET_BOX": 0x93c
	}, // tiny

	"BEANS": {
		"HP_BEAN": 0x933,
		"BROS_BEAN": 0x934,
		"POWER_BEAN": 0x935,
		"DEFENSE_BEAN": 0x936,
		"SPPED_BEAN": 0x937,
		"STACHE_BEAN": 0x938,
		"SUPER_HP_BEAN": 0x93d,
		"SUPER_BROS_BEAN": 0x93e,
		"SUPER_POWER_BEAN": 0x93f,
		"SUPER_DEFENSE_BEAN": 0x940,
		"SUPER_SPPED_BEAN": 0x941,
		"SUPER_STACHE_BEAN": 0x942
	}, // tiny

	"BOOTS":{
		"BOOT_GASTADA": 0x948,
		"BOOT_BARATA": 0x949,
		"BOOT_ORDINARIA": 0x94a,
		"BOOT_PICNIC": 0x94b,
		"BOOT_BASICAS": 0x94c,
		"BOOT_CANON": 0x94d,
		"BOOT_CERTERA": 0x94e,
		"BOOT_ACECHO": 0x94f,
		"BOOT_MONEDAS": 0x950,
		"BOOT_EXPLORADOR": 0x951,
		"BOOT_EXP": 0x952,
		"BOOT_JUSTICIERAS": 0x953,
		"BOOT_CORAZON": 0x954,
		"BOOT_ELITE": 0x955,
		"BOOT_ANTI_AEREAS": 0x956,
		"BOOT_ACCION": 0x957,
		"BOOT_TANDEM": 0x958,
		"BOOT_UNICAS": 0x959,
		"BOOT_VIDRIO": 0x95a,
		"SUPER_BOOT_MONEDAS": 0x95b,
		"SUPER_BOOT_CANON": 0x95c,
		"BOOT_FAMOSAS": 0x95d,
		"SUPER_BOOT_EXP": 0x95e,
		"SUPER_BOOT_ANTI_AEREAS": 0x95f,
		"SUPER_BOOT_BASICAS": 0x960,
		"BOOT_ESTRELLA": 0x961,
		"BOOT_OSCURAS": 0x962,
		"BOOT_CRISTAL": 0x963,
		"BOOT_GRANJERO": 0x964,
		"BOOT_MAESTRA": 0x965,
		"BOOT_EXCELENTE": 0x966,
		"BOOT_EXPERTAS": 0x967,
		"BOOT_MONTANA": 0x968,
		"BOOT_CUMPLEANOS": 0x969,
		"BOOT_MINI": 0x96a
	},  // tiny

	"HAMMERS":{
		"HAMMER_GASTADO": 0x96b,
		"HAMMER_BARATO": 0x96c,
		"HAMMER_ORDINARIO": 0x96d,
		"HAMMER_PICNIC": 0x96e,
		"HAMMER_BASICO": 0x96f,
		"HAMMER_CANON": 0x970,
		"HAMMER_CERTERO": 0x971,
		"HAMMER_BATALLA": 0x972,
		"HAMMER_USADO": 0x973,
		"HAMMER_EXPLORADOR": 0x974,
		"HAMMER_BLANDENGUE": 0x975,
		"HAMMER_JUSTICIERO": 0x976,
		"HAMMER_LLAMARADA": 0x977,
		"HAMMER_SUPERIOR": 0x978,
		"HAMMER_ROMPE_ESPINA": 0x979,
		"HAMMER_ACCION": 0x97a,
		"HAMMER_REMOLINO": 0x97b,
		"HAMMER_UNICO": 0x97c,
		"HAMMER_VIDRIO": 0x97d,
		"SUPER_HAMMER_USADO": 0x97e,
		"SUPER_HAMMER_CANON": 0x97f,
		"HAMMER_FAMOSO": 0x980,
		"SUPER_HAMMER_LLAMARADA": 0x981,
		"SUPER_HAMMER_ROMPE_ESPINA": 0x982,
		"SUPER_HAMMER_BASICOS": 0x983,
		"HAMMER_ESTRELLA": 0x984,
		"HAMMER_OSCURO": 0x985,
		"HAMMER_CRISTAL": 0x986,
		"SUPER_HAMMER_BLANDENGUE": 0x987,
		"HAMMER_MAESTRO": 0x988,
		"HAMMER_EXCELENTE": 0x989,
		"HAMMER_EXPERTO": 0x98a,
		"HAMMER_DORADO": 0x98b,
		"HAMMER_CUMPLEANOS": 0x98c,
		"HAMMER_MINI": 0x98d
	}, // tiny

	"WEARS":{
		"WEAR_1": 0x98e,
		"WEAR_2": 0x98f,
		"WEAR_3": 0x990,
		"WEAR_4": 0x991,
		"WEAR_5": 0x992,
		"WEAR_6": 0x993,
		"WEAR_7": 0x994,
		"WEAR_8": 0x995,
		"WEAR_9": 0x996,
		"WEAR_10": 0x997,
		"WEAR_11": 0x998,
		"WEAR_12": 0x999,
		"WEAR_13": 0x99a,
		"WEAR_14": 0x99b,
		"WEAR_15": 0x99c,
		"WEAR_16": 0x99d,
		"WEAR_17": 0x99e,
		"WEAR_18": 0x99f,
		"WEAR_19": 0x9a0,
		"WEAR_20": 0x9a1,
		"WEAR_21": 0x9a2,
		"WEAR_22": 0x9a3,
		"WEAR_23": 0x9a4,
		"WEAR_24": 0x9a5,
		"WEAR_25": 0x9a6,
		"WEAR_26": 0x9a7,
		"WEAR_27": 0x9a8,
		"WEAR_28": 0x9a9,
		"WEAR_29": 0x9aa,
		"WEAR_30": 0x9ab
	}, // tiny

	"GLOVES":{
		"GLOVE_1": 0x9ac,
		"GLOVE_2": 0x9ad,
		"GLOVE_3": 0x9ae,
		"GLOVE_4": 0x9af,
		"GLOVE_5": 0x9b0,
		"GLOVE_6": 0x9b1,
		"GLOVE_7": 0x9b2,
		"GLOVE_8": 0x9b3,
		"GLOVE_9": 0x9b4,
		"GLOVE_10": 0x9b5,
		"GLOVE_11": 0x9b6,
		"GLOVE_12": 0x9b7,
		"GLOVE_13": 0x9b8,
		"GLOVE_14": 0x9b9,
		"GLOVE_15": 0x9ba,
		"GLOVE_16": 0x9bb,
		"GLOVE_17": 0x9bc,
		"GLOVE_18": 0x9bd,
		"GLOVE_19": 0x9be,
		"GLOVE_20": 0x9bf,
		"GLOVE_21": 0x9c0,
		"GLOVE_22": 0x9c1,
		"GLOVE_23": 0x9c2,
		"GLOVE_24": 0x9c3,
		"GLOVE_25": 0x9c4,
		"GLOVE_26": 0x9c5,
		"GLOVE_27": 0x9c6,
		"GLOVE_28": 0x9c7,
		"GLOVE_29": 0x9c8,
		"GLOVE_30": 0x9c9
	},

	"AMULETS":{
		"AMULET_1": 0x9ca,
		"AMULET_2": 0x9cb,
		"AMULET_3": 0x9cc,
		"AMULET_4": 0x9cd,
		"AMULET_5": 0x9ce,
		"AMULET_6": 0x9cf,
		"AMULET_7": 0x9d0,
		"AMULET_8": 0x9d1,
		"AMULET_9": 0x9d2,
		"AMULET_10": 0x9d3,
		"AMULET_11": 0x9d4,
		"AMULET_12": 0x9d5,
		"AMULET_13": 0x9d6,
		"AMULET_14": 0x9d7,
		"AMULET_15": 0x9d8,
		"AMULET_16": 0x9d9,
		"AMULET_17": 0x9da,
		"AMULET_18": 0x9db,
		"AMULET_19": 0x9dc,
		"AMULET_20": 0x9dd,
		"AMULET_21": 0x9de,
		"AMULET_22": 0x9df,
		"AMULET_23": 0x9e0,
		"AMULET_24": 0x9e1,
		"AMULET_25": 0x9e2,
		"AMULET_26": 0x9e3,
		"AMULET_27": 0x9e4,
		"AMULET_28": 0x9e5,
		"AMULET_29": 0x9e6,
		"AMULET_30": 0x9e7
	} // tiny
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