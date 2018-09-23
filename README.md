# Basic Node.js Note App
> This basic app was built using npm package [yargs](https://www.npmjs.com/package/yargs) used for command line and node inbuilt package [fs](https://nodejs.org/api/fs.html) is used to save the notes in the notesData.json file.

> In this app we store the various notes with a title and its description. We use a json format to store every note in the file.

> 4 main commands used are: 
```
node app.js add --title="Name of note" --body="Description of note"
node app.js remove --title="Name of title"
node app.js read --title="Name of note"
node app.js list
```

> To know more about any command use:
```
node app.js --help
node app.js --help commandName(add | remove | read | list)
```