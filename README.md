# ResearchHub  

## Steps for setup:
1. Fork this repo into your github

2. After forking, clone the "forked" repo like using git terminal:
```bash
git clone https://github.com/<your_username>/ReserachHub
```

3. Move inside project directory:

```bash
cd ReserachHub
```

4. Install the dependencies: 
```bash
npm install
```
...
## Steps for running

To start the express server, run the following

```bash
nodemon 
```

OR

```bash
npm app.js
```

After completing all the steps: 
### Open [http://localhost:3000](http://localhost:3000) and take a look around.  
  
Steps for creating PR:  

Visit https://github.com/Delhi-Hacksteam/ResearchHub/  
click on pull request, you will be able to see New Pull Request option, click on that and compare across forks  
then create a PR from your repo into master repo.

### Setting upstream for fetching changes from master repo
(You have to do this step once only)  
```bash
git remote -v  
```
```bash
git remote add upstream https://github.com/Delhi-Hacksteam/ResearchHub  
```
```bash
git fetch upstream  
```
```bash
git checkout master  
```
```bash
git merge upstream/master  
```
```bash
git push origin master  
```

# Commands for fetching changes everytime you start working on new feature or while creating a PR  
```bash
git fetch upstream  
```
```bash
git pull upstream master  
```
# Git basic command to commit your changes  
```bash
git status                        (to check for the modified files)  
```
```bash
git add <file name>               (to add files You have modified)  
```
```bash
git commit -m "<commit name>"     (to save your commit)  
```
```bash
git push                          (to push your changes to your repo)  
```  
  
## google oath20 setup
create google+ api from consolehttps://console.developers.google.com/
set javascript origin to http://localhost:3000
set redirect uri to http://localhost:3000/auth/google/redirect
note your_client_id and your_secret_id

create a file named keys.js under config folder and paste the code below

```javascript
module.exports = {
    google: {
        clientID: your_client_id,
        clientSecret: your_secret_id
    }
}

this will setup the oauth
```

## mongodb setup

have an mongo instance running
code connects to the local mongo session