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
