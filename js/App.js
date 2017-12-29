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
				document.getElementById("dropZone").style = "background-color: #2e9f3c";
			})
		},

		dictDefaultMessage: "Drop or click to load the file (ML4_001.sav)"
	}
})()

function onChange(file) 
{
	files = new Files(file)
	
	document.getElementById("app").innerHTML = ""
	document.getElementById("save").classList.remove('hide');

	let div = document.createElement("div")
	div.className = "input-group"

	let span = document.createElement("span")
	span.className = "input-group-addon"
	span.appendChild(document.createTextNode("MAX_ITEMS"))
	span.setAttribute("for", "MAX_ITEMS")
	span.style = "color: black"

	let input = document.createElement("input")
	input.className = "form-control"
	input.setAttribute("type", "button")
	input.setAttribute("id", "max_items")
	input.value =  "Click if you want the maximum number of items"
	input.style = "background-color: #43b0e2; color: black;"

	input.addEventListener("click", function()
	{
		let values = ["ITEMS", "BEANS", "BOOTS", "HAMMERS", "WEARS", "GLOVES", "AMULETS"]
		values.forEach(function(value)
		{
			for(let item in OFFSETS[value])
				files.writeTiny(OFFSETS[value][item], 244)
		})

		this.style = "background-color: #2e9f3c; color:black"
		this.value = "You have all the items :D"
	});
	
	div.appendChild(span)
	div.appendChild(input)
	document.getElementById("app").appendChild(div)

	files.onLoadEnd(function()
	{
		let app = document.getElementById("app")
		
		for (let offset in OFFSETS)
		{
			if(offset == "MARIO" || offset == "LUIGI")
			{
				let div = document.createElement("div")
				div.className = "border " + (offset == "MARIO" ? "mario-border" : "luigi-border")

				let h2 = document.createElement("h2")
				h2.className = (offset == "MARIO" ? "mario-text" : "luigi-text")
				h2.innerHTML = offset

				div.appendChild(h2)
				app.appendChild(div)
				
				for (let stat in OFFSETS[offset])
				{
					let id = offset.toLowerCase() + '-' + stat.toLowerCase()

					let div = document.createElement("div")
					div.className = "input-group"

					let span = document.createElement("span")
					span.className = "input-group-addon"
					span.appendChild(document.createTextNode(stat))
					span.setAttribute("for", id)

					let input = document.createElement("input")
					input.className = "form-control"
					input.setAttribute("type", "number")
					input.required = true
					input.setAttribute("id", id)

					if(stat == "CURENT_LV")
						input.value = files.readTiny(OFFSETS[offset][stat])
					else
						input.value = files.readShort(OFFSETS[offset][stat])
					
					div.appendChild(span)
					div.appendChild(input)
					app.appendChild(div)
				}
				continue;
			}

			else if(offset == "ITEMS")
				break

			else
			{
				let id = offset.toLowerCase()

				let div = document.createElement("div")
				div.className = "input-group"

				let span = document.createElement("span")
				span.className = "input-group-addon"
				span.appendChild(document.createTextNode(offset))
				span.setAttribute("for", id)

				let input = document.createElement("input")
				input.className = "form-control"
				input.setAttribute("type", "number")
				input.required = true
				input.setAttribute("id", id)
				input.value = files.readShort(OFFSETS[offset])
				
				div.appendChild(span)
				div.appendChild(input)
				app.appendChild(div)
			}
		}
	});
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
		throw "App.js: files is not load";
		
}
