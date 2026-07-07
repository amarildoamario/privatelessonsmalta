const fs = require('fs')
const path = require('path')

const pdfPath = process.argv[2] || path.join(__dirname, '..', '(EN) Mori Leonardo Resume.pdf')

async function run() {
  try {
    const pdfData = fs.readFileSync(pdfPath)
    const { PDFParse } = require('pdf-parse')
    const parser = new PDFParse({ data: pdfData })
    const data = await parser.getText()
    await parser.destroy()
    console.log(data.text)
  } catch (err) {
    console.error('Error extracting PDF text:', err.message)
    process.exit(1)
  }
}

run()
