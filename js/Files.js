'use strict'
// Mejora de MacBinFile.js
function Files(file) 
{
	if (typeof window.FileReader != "function") 
		throw "Files.js: Browser doesn't support FileReader"

	if (typeof file == "object" && file.name && file.size) 
	{
		this._file = file
		this._fileName = file.name
		this._fileType = file.type
		this._littleEndian = true
		this._fileReader = new FileReader()
	}

	else
		throw "Files.js: Invalid File"
}

Files.prototype.onLoadEnd = function(callBack) 
{
	this._fileReader.addEventListener("loadend", function()
	{
		this.dataView = new DataView(this.result)
		delete this._file
		callBack()
	})

	this._fileReader.readAsArrayBuffer(this._file) 
}

Files.prototype.isReady = function() 
{
	return this._fileReader.readyState == 2
}

Files.prototype.save = function(saveAs) 
{
	let data;
	data = new Blob([this._fileReader.dataView], { type: this._fileType });
	saveAs(data, this._fileName)
}


Files.prototype.readTiny = function(offset)
{
	return this._fileReader.dataView.getUint8(offset, this._littleEndian)
}

Files.prototype.readShort = function(offset)
{
	return this._fileReader.dataView.getUint16(offset, this._littleEndian)
}

Files.prototype.readInt = function(offset)
{
	return this._fileReader.dataView.getUint32(offset, this._littleEndian)
}

Files.prototype.writeTiny = function(offset, value)
{
	return this._fileReader.dataView.setUint8(offset, value, this._littleEndian)
}

Files.prototype.writeShort = function(offset, value)
{
	this._fileReader.dataView.setUint16(offset, value, this._littleEndian)
}

Files.prototype.writeInt = function(offset, b)
{
	this._fileReader.dataView.setUint32(offset, value, this._littleEndian)
}

