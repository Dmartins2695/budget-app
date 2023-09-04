export const getRandomColor = (string) => {
  let hash = [...string].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  return `hsl(${hash % 360},75%,35%`
}
export const convertCSVToJson = (csvData) => {
  const formattedData = csvData.replace(/","/g, '";"')
  const lines = formattedData.split('\n')
  const headers = lines[0].split(';')
  const result = []

  for (let i = 1; i < lines.length - 1; i++) {
    const obj = {}
    const currentLine = lines[i].split(';')

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim()] = currentLine[j].trim()
    }

    result.push(obj)
  }

  return result
}

export const handleImport = (file, setCsvOutput) => {
  const fileReader = new FileReader()

  if (file) {
    fileReader.onload = function (event) {
      const csvOutput = event.target.result
      setCsvOutput(csvOutput)
    }
    fileReader.readAsText(file, 'ISO-8859-1')
  }
}

export const uploadFile = () => {}
