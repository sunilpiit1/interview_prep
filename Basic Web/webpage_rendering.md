## HOW A WEBPAGE GETS RENDERED ON A BROWSER?

All the data communications related to webpages happens on the web part of the internet, and it follows http protocol to transfer the data.

You request a web-page by entering the URL in the browser and then you hit enter, after that the specified server return you a response related to that request, mostly it's an HTML page (which is mentioned in the content-type of the response).

After the response has reached the browser, browser looks at some of the important headers and start parsing the document (mostly HTML). Parsing happens on the main thread and during the parsing of the document browser creates DOM, which is object representation of the document, this dom is made available to the JS through the dom API, So that it can easily manipulate the content of it (or i should say can add dynamic features to it).

During the parsing whenever the parser encounters some external resource, it fetches it in the mentioned way (otherwise in the default way). Mainly these resources are JS and CSS and media related to that page.

## CSSOM

After constructing the DOM, the browser reads CSS from all the sources (external, embedded, inline, user-agent, etc.) and construct a CSSOM. CSSOM stands for CSS Object Model which is a Tree Like structure just like DOM.

Each node in this tree contains CSS style information that will be applied to DOM elements that it target (specified by the selector). CSSOM, however, does not contain DOM elements which can’t be printed on the screen like meta, script, title etc.
