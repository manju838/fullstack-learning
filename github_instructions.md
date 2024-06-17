Generic Instructions reference for github and markdown files

These commands are to be run to initialize a local folder as a git repo and push it into a certain git repo created already
```bash
git init
git remote add origin https://github.com/manju838/fullstack-learning.git
git add .
git commit -m "3d_portfolio project setup_vitejs_tailwindcss complete video_20:47min"
git push --set-upstream origin master
```
Last command creates a master branch and pushes it into it, from next time master branch is the default branch when pushed from that system.(```git push``` is sufficient from next time)

If repo is not owned, then create a new branch and push it, the repo owners check and merge the branch.

If already initialised repo needs to be pushed to a different repo, then git init reinitialise, and then git remote set-url origin https://github.com/newrepo.git to update the remote url.




#### Markdown Formats:

To check the formating visually use <www.makeareadme.com> and for cheatsheet refer to <github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>

1) To make a link a url in readme.md, enclose it in angular brackets such as <www.youtube.com>. Alternatively to name the hyperlink, the format is to enclose the name in square brackets and immediately followed by link enclosed in curly brackets. Make sure https:// part is avoided for the link to work properly.

2) To write commands enclose the commands with (```) and if the command is a bash command follow up opening triple quotes with a "bash" keyword and if it is a python command follow up with a "python" keyword. Look at the readme.md file's text in 3d_portfolio_project directory for example.