const cheerio = require('cheerio');
const got = require('got');

function parseJsonLD($) {
    const result = [];

    $('script[type="application/ld+json"]').each(function () {
        try {
            result.push(JSON.parse($(this).html()));
        } catch (err) {
            console.error(err);
        }
    });
    
    return result;
}

function parseMetadata($) {
  const result = {};
  
  $('meta').each(function () {
      const $tag = $(this);
      const name = $tag.attr('name') || $tag.attr('property');
      if (name) {
          result[name] = $tag.attr('content');
      }
  });

  $('head title').each(function () {
      result.title = $(this).text();
  });

  return result;
}

const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}

exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  
  const { url } = JSON.parse(event.body);
  
  try {
    const { body: html } = await got(url);
    const $ = cheerio.load(html);
    const metadata = parseMetadata($);
    const jsonld = parseJsonLD($);

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        metadata,
        jsonld
      }),
      headers
    }
  } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          status: 500,
          message: error.response.body
        }),
        headers
      }
  }
}
