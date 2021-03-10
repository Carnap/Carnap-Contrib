# Carnap-Contrib

This is a repository for housing extensions, customizations, and extra tools
that can be used with Carnap, including 

1. Custom CSS Stylesheets for assignments,
2. JavaScript extensions that can be applied to assignments, and
3. scripts and other simple tools for interacting with the Carnap Server's REST
   API.

The JavaScript and CSS extensions housed here can be added directly to a Carnap
assignment, using a CDN like [jsDelivr](https://jsdelivr.com), and listing the
relevant CDN-provided URL in the `css`, `base-css` or `js` fields of the
assignment's [metadata block](https://carnap.io/srv/doc/pandoc.md#custom-css).

Here's a table of the current contents of this repository, and URLs (where
applicable) that you can use to include the relevant extensions in your
assignments:

| Title              |  URL  |  
| ------------------ | ----  | 
| pointTotal.js      | https://cdn.jsdelivr.net/gh/carnap/carnap-contrib@9df544f/js/pointTotal.js   | 
| hide-points.css    | https://cdn.jsdelivr.net/gh/carnap/carnap-contrib@9df544f/css/hide-points.js | 
| whiteboard.css     | https://cdn.jsdelivr.net/gh/carnap/carnap-contrib@9df544f/css/whiteboard.js  | 

Here's what each of these does:

### pointTotal.js

This is a JavaScript extension that calculates the available point total for a
given assignment and inserts it into each span with the class `pointspan`. So,
you can show your students how many points an assignment is worth by including
such a span (in pandoc, you can include the span as raw html, or as
`[pointsgohere]{.pointspan}`.

### hide-points.css

This is a stylesheet that hides the point values for problems that have a
custom point value.

### whiteboard.css

This is a stylesheet that takes the first deduction playground occurring in
given assignment, and resizes and positions it to occupy the entire browser
viewport. You can use it to create a "whiteboard" document for doing
demonstrations in class or creating instructional videos.
