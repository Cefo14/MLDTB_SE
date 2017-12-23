var files

function onChange(event) 
{
	let file = event.target.files[0];
	files = new Files(file)

	files.onLoadEnd(function()
	{
		let app = document.getElementById("app")
		
		for (let offset in OFFSETS)
		{
			if(offset == "MARIO" || offset == "LUIGI")
			{
				let h2 = document.createElement("input").appendChild(document.createTextNode(offset))
				app.appendChild(h2);
				app.appendChild(document.createElement("hr")) // Provitional
				
				for (let stat in OFFSETS[offset])
				{
					let id = offset.toLowerCase() + '-' + stat.toLowerCase()

					let label = document.createElement("label")
					label.appendChild(document.createTextNode(stat))
					label.setAttribute("for", id)

					let input = document.createElement("input")
					input.setAttribute("type", "number")
					input.required = true
					input.setAttribute("id", id)

					if(stat == "CURENT_LV")
						input.value = files.readTiny(OFFSETS[offset][stat])
					else
						input.value = files.readShort(OFFSETS[offset][stat])
					
					app.appendChild(label)
					app.appendChild(input)
					app.appendChild(document.createElement("br")) // Provitional
				}
				app.appendChild(document.createElement("hr")) // Provitional
				continue;
			}

			else if(offset == "ITEMS")
				break

			else
			{
				let id = offset.toLowerCase()

				let label = document.createElement("label")
				label.appendChild(document.createTextNode(offset))
				label.setAttribute("for", id)

				let input = document.createElement("input")
				input.setAttribute("type", "number")
				input.required = true
				input.setAttribute("id", id)
				input.value = files.readShort(OFFSETS[offset])
				
				app.appendChild(label)
				app.appendChild(input)
				app.appendChild(document.createElement("hr")) // Provitional
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
