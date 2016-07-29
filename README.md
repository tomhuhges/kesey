# caret

`caret` is a minimalist markdown notepad for the browser  
  
**it will:**  
- recognise markdown as you type and style text accordingly
	- headings (1-6)
	- strong, emphasis
	- bullet lists, numbered lists
	- block quotes
	- links, images
	- inline code, code blocks
	- page break
- auto-save your documents as .md files in dropbox
- load any dropbox .md document  
	  
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

[markdown cheatsheet][2]  
[regexr][3]  
[contenteditable elements][4]  
  
drawing inspiration from:  
- the [ulysses desktop app][5]
- medium's [story editor][6]

---- 

### wireframe

**sheet view**  

![][image-1]


[1]:	https://github.com/dropbox/dropbox-sdk-js
[2]:	https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[3]:	http://regexr.com/
[4]:	https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
[5]:	http://www.ulyssesapp.com/
[6]:	https://medium.com/new-story

[image-1]:	https://raw.githubusercontent.com/tomhuhges/caret/master/sketch/desktop.png "desktop sheet view"