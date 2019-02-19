# Percy Biotope Readme ⚠️ WIP

## Dependencies
To add percy to your project run:
`npm install jest jest-puppeteer puppeteer http-server env-cmd @percy/puppeteer -D`

## Env File
Add a `.env-cmdrc` file to your project with the following content:
```
{
  "[environment]": {
    "PERCY_BRANCH": "[environment]",
	"PERCY_TOKEN": "[project-token]"
  },
  ...
}
```
If we want to add a test env for example to a project with the token `12345678`, it would look like this:
```
{
  "test": {
    "PERCY_BRANCH": "test",
	"PERCY_TOKEN": "12345678"
  },
  ...
}
```

## Test file
Add a test you can run puppeteer in. Look at the example in `test/vr/test.js`

## Run
Look in the package.json for the `test:vr` script. Add all the other scripts that are needed for this
