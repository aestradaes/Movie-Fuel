# Movie-Fuel
Movie Fuel project

# Initialize project
1. Clone: `git clone https://github.com/CronusV/Movie-Fuel.git`
2. Move to directory: `cd Movie-Fuel`
3. Get dev branch: `git checkout dev`

# Git Workflow
- main branch is **production ready code** and should be stable
- dev branch is **development code** where features branches should be merged to
1. From dev, create another branch with feature name `git checkout -b <feature-branch-name>`
2. Finish developing code on feature branch by adding and commiting changes
3. Push feature Branch `git push origin <feature-branch-name>`
4. On github go to *pull requests* tab and click on *new pull request* button
5. Select dev branch for base base branch (this is where we want to merge)
6. On compare select your feature-branch-name
7. Submit pull request
8. Team lead and members will approve/deny pull request


# Notes
[OneNote](https://1drv.ms/o/s!ApP_R6BWyXl_iRcVc1mQlGErCN8H?e=lo5D76)

# Pulling
When pulling it is important to install any new modules that might have been added. But this might mean you will mutate package-lock.json.
This can cause enormous merge conflicts. So instead of using `npm install` use `npm ci` which stands for clean install.
It ensures packages are installed from package-lock.json file. [link](https://support.deploybot.com/article/131-why-developers-should-use-npm-ci-instead-of-npm-install-and-its-benefits#:~:text=npm%20ci%20is%20a%20command,json%20file.)

   

