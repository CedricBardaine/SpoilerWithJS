Those simple JS and CSS files allow you to create simple spoiler button hiding the content you want to warn.

# How to include 
Insert in the head of your page the css, and optionally  a link to Bootsrap's css.  
`<link rel="stylesheet" href="./spoiler.css">`  

optionally :  
`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`

And insert the js script at the end of the body.  
`<script src="./spoiler.js"></script>`

# How to use
Enclose each part of your paragraph you want to warn with any element with the class .spoiler. 
```
This is an example and <span class="spoiler"> this is hidden </span> until you click on me.
```