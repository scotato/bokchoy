const cheerio = require('cheerio')
const got = require('got')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
}

exports.handler = async (event = {}) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { url } = JSON.parse(event.body)

  try {
    const { body: html } = await got(url)
    const $ = cheerio.load(html)
    const metadata = parseMetadata($)
    const jsonld = parseJsonLD($)
    const graph = convertToSchemaGraph(jsonld)

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        metadata,
        graph,
      }),
      headers,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 500,
        message: error.response.body,
      }),
      headers,
    }
  }
}

function parseMetadata($) {
  const result = {}

  $('meta').each(function () {
    const $tag = $(this)
    const name = $tag.attr('name') || $tag.attr('property')
    if (name) {
      result[name] = $tag.attr('content')
    }
  })

  $('head title').each(function () {
    result.title = $(this).text()
  })

  return result
}

function parseJsonLD($) {
  const results = []

  $('script[type="application/ld+json"]').each(function () {
    try {
      results.push(JSON.parse($(this).html()))
    } catch (err) {
      console.error(err)
    }
  })

  return results
}

function convertToSchemaGraph(jsonld) {
  const graphs = jsonld.map(function (result) {
    const context = result['@context']
    const graph = result['@graph']
    const data = graph || jsonld
    const isSchema = context.includes('schema.org')

    if (!isSchema) return {}
    return data.reduce((acc, cur) => {
      let key = convertTypeToKey(cur['@type'])
      return { ...acc, [key]: cur }
    }, {})
  })

  const graph = graphs.reduce((acc, cur) => {
    return { ...acc, ...cur }
  })

  return graph
}

function convertTypeToKey(type) {
  switch (type) {
    case 'Organization':
      return 'organization'
    case 'WebSite':
      return 'website'
    case 'WebPage':
      return 'webpage'
    case 'Article':
      return 'article'
    case 'Recipe':
      return 'recipe'
    case 'HowToSection':
      return 'howToSection'
    case 'HowToStep':
      return 'howToStep'
    case 'NutritionInformation':
      return 'nutritionInformation'
    case 'Author':
      return 'author'
    case 'Person':
      return 'person'
    case 'ImageObject':
      return 'imageObject'
    default:
      return type.toLowerCase()
  }
}
