# JavaScript Basic to Advanced

## How do I prepare the initial setups for this project?

### Part 1 of 2: Prepare my repository on GitHub.

1. Enter Command Prompt using Administrator mode.

2. Go to the path that you want to use for cloning from GitHub.
```bash
cd your-path
```

3. Set Up Git for the First Time
```bash
git config --global user.name "Your Name"
```
```bash
git config --global user.email "your-email@example.com"
```

4. Clone the GitHub Repository
```bash
git clone https://github.com/your-username/your-repo.git
```

5. Navigate to the Repository Folder
```bash
cd your-repo
```

6. Open the Repository in VS Code
```bash
code .
```

7. Authenticate with GitHub using HTTPS
- Git will prompt you for your GitHub username and password (or Personal Access Token).
- To generate a Personal Access Token, go to GitHub > Settings > Developer Settings > Personal Access Tokens.

8. Check the current branch
```bash
git branch
```

9. Create a main branch and switch to it
```bash
git checkout -b main
```

10. Add all files to the repo
```bash
git add .
```
Remark: You can use `git add file-name.txt`.

11. Commit your changes
```bash
git commit -m "Initial commit"
```

Remark: The -m flag stands for "message".
12. Push to GitHub
```bash
git push -u origin main
```

Remark: 
- The -u flag makes it easier to work with Git in the future by establishing a link between your local branch and the remote branch. You won’t have to specify origin main every time you push.
- Use `git push -u origin main` for the first time. After that, you can simply use `git push`.

13. Verify the Remote URL
```bash
git remote -v
```
Remark: If the URL is incorrect, set the correct one:
```bash
git remote set-url origin https://github.com/your-username/your-repo.git
```


### Part 2 of 2: Change the default terminal.
1. Enter VS Code.
2. Change the default terminal to Command Prompt in Visual Studio Code.
- 2.1 Click on Settings (`Ctrl + ,`) -> Open Settings (JSON)
- 2.2 In settings.json, at line 7, change `"terminal.integrated.defaultProfile.windows": "Windows PowerShell"` to `"terminal.integrated.defaultProfile.windows": "Command Prompt"`.


