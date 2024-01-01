# Password Validator Demo

A simple demo project that demonstrates validation of a password and confirmation password.

The rules the demo follows are:
- Has two input fields to validate the entry from the user (both inputs must match)
- Password has a min length of 6 characters 
- Password has at least 1 uppercase character 
- Password has at least 1 lowercase character 
- Password has at least 1 number 
- Password has at least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)
- Has a submit button that will trigger validation and present success or why the password entry failed

## Installation 
### 1. Project Dependencies
Install project dependencies with 
```bash
npm i
```
You may use another package manager of your choosing, however, please note that 
dependency installation is untested and not ensured to work with others. 

### 2. Build
After dependencies have been installed, build the project with 
```bash
npm run build
```
Running this command will generate a `/dist` folder containing the bundled project.

### 3. Preview
Start and preview the built application with 
```bash
npm run preview
```

### Development Mode (optional)
In order to preview and run the project in development, use 
```bash
npm run dev
```
Development mode features HMR

### Runing Tests (optional)

After you have installed dependencies, you can check whether the tests pass
with 

```bash
npm t
```

## Author's Notes

This section is to provide some context to decisions made and to provide greater clarity as
to why certain dependencies, files, etc. exist.

### Vite
Firstly, I decided to use Vite to help make the demo application. It was chosen for the reason
that Vite contains a bundler and features dev mode/HMR out of the box with very little overhead 
needed to configure these. 

Bundling and HMR work out of the box, and it was a hassle free way to spin up a nice
demo project.

### Styling

Styling was not one of the requirements 
given, however, it took an insignificant amount of time to add.

Most of the CSS came from the template, but some was added and removed depending on what was needed. 
The CSS was something I reviewed and modified.

The main reason I kept/modified it was because  I believe **a properly implemented website is one that supports
mobile/desktop dynamic design.
The same can be said for dark/light mode, particularly for accessibility purposes.** 

I also wanted to present something that looked remotely decent.

### Layout Shift
There's a pretty nasty layout shift that happens when the success/error messages are triggered. This is something a little less
trivial to handle than other stylistic problems. 

Because style was not outlined in the requirements, I did not want to go overkill.

This is definitely something you would want to address and resolve within a professional application.

### Accessibility

Accessibility was considered by merely implementing the semantically correct elements.

### Unit Tests

You'll see some unit tests in the project. These were created for no other reason than to 
provide myself with a rigorous, routine way to check that the most vital functions were behaving
exactly as expected and to reduce the amount of manual testing needed.

**If this were a production level application,** I would recommend that there exist more tests
than what I have provided for my own sake.

The following are what I consider missing:

1. `utils/password-utils.ts` should be tested in the same way that `string-utils.ts` is. The point when
I wrote `password-utils.ts`, writing additional tests would not have brought me much benefit. 
In a bigger, production-targeted app, it would though.
2. Components are untested programmatically - UI testing is something that contains controversial opinion as to how 
they should be approached. I recommend visual regression tests for this, as opposed to unit tests. The logic within components
should be tested via unit testing somehow.


**Note:**
The testing framework is Jest, so any files/folders containing the words 'jest' or 'test' in their name
pertain to jest tests. 

Furthermore, babel exists in this project not for the bundling of the main application, but purely for 
enable TypeScript to work within the test environment. 

There is a transpilation step required for Jest to run the tests.