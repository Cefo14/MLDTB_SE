'use strict'

var files

(function()
{	
	Dropzone.options.dropZone = {
		init: function() 
		{
			this.on("addedfile", function(file) 
			{ 
				onChange(file)
				this.removeFile(file)
				document.getElementById("dropZone").classList.add("green-bg")
			})
		},

		dictDefaultMessage: '<p>Drop or click to load the file (ML4_001.sav)</p><span class="glyphicon glyphicon-upload"></span>'
	}
})()

function onChange(file) 
{
	files = new Files(file)
	
	document.getElementById("app").innerHTML = ""
	document.getElementById("save").classList.remove('hide')

	files.onLoadEnd(function()
	{
		let app = document.getElementById("app")

		let event = {
			type: "click",
			action: function()
			{
				let values = ["ITEMS", "BEANS", "BOOTS", "HAMMERS", "WEARS", "GLOVES", "AMULETS"]
				values.forEach(function(value)
				{
					for(let item in OFFSETS[value])
						files.writeTiny(OFFSETS[value][item], 244)
				})

				this.classList.remove("blue-bg")
				this.classList.add("green-bg")
				this.classList.add("black-text")
				this.value = "You have all the items :D"
			}
		}
	
		app.appendChild(makeBox("ITEMS & MONEY"))
		app.appendChild(makeInput("money", files.readShort(OFFSETS["MONEY"]), "MONEY"))
		app.appendChild(makeInput("max_items", "Click if you want the maximum number of items", "MAX_ITEMS", "button", event))

		let PJ = ["MARIO", "LUIGI"]
		PJ.forEach(function(offset)
		{
			app.appendChild(makeBox(offset, [offset.toLowerCase()]))
			for (let stat in OFFSETS[offset])
			{
				let id = offset.toLowerCase() + '-' + stat.toLowerCase()
				let value
				if(stat == "CURENT_LV")
					value = files.readTiny(OFFSETS[offset][stat])
				else
					value = files.readShort(OFFSETS[offset][stat])
				
				app.appendChild(makeInput(id, value, stat))
			}
		})
	})
}

function save() 
{
	if(typeof files == "object" && files.isReady())
	{
		let inputs = document.getElementById('app').getElementsByTagName('input')
		
		for (let x in inputs)
		{
			if(typeof inputs[x] != "object") 
				break

			let input = inputs[x]
			let id = input.getAttribute("id").toUpperCase()
			let value = input.value

			if(id == "MAX_ITEMS") 
				continue

			if(id.indexOf("-") > -1)
			{
				let [offset, stat] = id.split("-")
				if(stat == "CURENT_LV")
					files.writeTiny(OFFSETS[offset][stat], value)
				else
					files.writeShort(OFFSETS[offset][stat], value)
			}

			else
				files.writeShort(OFFSETS[id], value)
		}

		files.save(saveAs) 
	}

	else
		throw "App.js: files is not load"
		
}

function makeBox(title, classes)
{
	let div = document.createElement('div')
	div.className = 'box black-text '  + (classes ? classes.join(' ') : '')
	let h2 = document.createElement('h2')
	h2.innerHTML = title
	div.appendChild(h2)
	return div
}

function makeInput(id, value, text, type, event)
{
	let div = document.createElement("div")
	div.className = "input-group"

	let span = document.createElement("span")
	span.className = "input-group-addon black-text border"
	span.appendChild(document.createTextNode(text))
	span.setAttribute("for", id)

	let input = document.createElement("input")
	input.className = "form-control black-text border"
	input.setAttribute("type", type || "number")
	input.setAttribute("id", id)
	input.value = value

	if(event)
	{
		input.addEventListener(event.type, event.action)
	}

	div.appendChild(span)
	div.appendChild(input)

	return div
}