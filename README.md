# caret

`caret` is a minimalist markdown editor for the browser  
  
**it will:**  
- recognise markdown as you type and style text accordingly
- auto-save your documents as .md files in Dropbox
- load any Dropbox .md document  
	  
**it will need:**  
- a minimalist setup that allows users to simply start typing as soon as they load the web app
- regex + event handling to style text as the user types
- integration with the [dropbox js sdk][1]
	- to create a new folder in the user's dropbox
	- to save files
	- to load .md files
- section to list files in dropbox/manage dropbox permissions
- contact

**it may**
- include a markdown guide
- include day/night mode

---- 

### references

drawing inspiration from:  
- the [ulysses desktop app][2]
- medium's [story editor][3]

[regexr][4]
[contenteditable elements][5]


[1]:	https://github.com/dropbox/dropbox-sdk-js
[2]:	http://www.ulyssesapp.com/
[3]:	https://medium.com/new-story
[4]:	http://regexr.com/
[5]:	https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content