# Share your website with the world, with the help of Azure!

(Derived from https://code.visualstudio.com/tutorials/app-service-extension/getting-started, but simplified for starting up)

This tutorial will walk you through how you can share your website with the rest of the world. In this tutorial, we will start with checking out a very simple project. We will first run this project in our own machine to see how it works, and make some changes as we like. Then we will deploy a static website using Azure Storage. Deploying a static website to Azure Storage will allow us to share our website with others! We will also see how we can continue to make changes to our website even after it is deployed in Azure

## **Pre-requisites**:
To complete this tutorial successfully and deploy your website you will need the following:

1. Git: Git is used widely by software developers (and others) for __version control__. You can install it from here: https://git-scm.com/downloads
2. Visual Studio Code (VS Code): It is a light-weight code editor from Microsoft. Think of it as Microsoft Word... but for code
3. Azure Subscription: In order to deploy our website to Azure and share it to the world, we will need an Azure subscription
4. Node.js: Technical lingo: __Javascript runtime library__. In other words: It is a tool/platform/environment that we will use to run our code. You can install it from here: https://nodejs.org/en/download/
5. Npm: Short for node package manager. This will automatically be installed when you install node.js from above. NPM helps us retrieve common code that has already been created by someone else, and use it for our development. It is super useful!


## **Things we will also need/explore**:
In order to complete the tutorial, we will also touch upon a few other technologies. Here's a list of things that we will touch upon. Don't worry, you don't need to install all of them right away, we will install them along the way

1. Github: Github is where our initial code will be. We will clone (copy) our code and make changes to it
2. Azure Storage Extension: This will be a tool we will add-on to VS Code that will then help us deploy our website in azure
3. React: A framework for building UI
4. Powershell: Tool to **run** our website locally


## Part 1: Deploying our website locally
In this first part we will start with some existing code, make some changes and deploy it locally to see it running and working. 

**Step 1: Get the source code from Github**
Start with opening a new powershell window (from windows start menu). We will now create a new folder and copy some starting code to that folder
To clone the source code to a convenient location on your machine, do the following steps:

    $ mkdir C:\git
    $ cd C:\git
    $ git clone https://github.com/orktopus/build-react-homepage.git

**Step 2: Run the website locally**
    
    $ cd build-react-homepage
    $ npm install
    $ npm start

At this point, your website is running on your local machine. You can check it out by opening a browser window and typing in:

     http://localhost:3000

You can now see a very simple version of the website. Alas, it only has information about one Thor Odinson....

**Step 3: Modify your website in vscode**
Open a new powershell window, and run the following commands to open our code folder in vscode.

    $ cd C:\git\build-react-homepage
    $ code .

Let's start by just modifying the header of the website. From the explorer pane, open "App.tsx" file. There you can see that the "userName" is set to "Thor Odinson". Change this name to your own and you should see your website refresh shortly.

We have other changes that we can make on this site, but let's do them later. Let's first deploy this website to Azure, so we can share it with others.

## Part 2: Deploying our website to Azure

**Step 4: Building our website for Azure deployment** :

Before we deploy to Azure, we need to __build__ our code so that it is deployable to azure. We do this by simply running the followin in a new powershell window:
    $ cd C:\git\build-react-homepage
    $ npm run build

Remember to do "npm run build" __before__ you deploy to Azure, to ensure your latest changes are deployed.

**Step 4: Install Azure Storage Extension** :

1. From "View" Menu, select "Extensions"
2. Search and install "Azure Storage" extension

**Step 5: Sign In to your Azure account**:
Once the extension is installed, log into your Azure account - in the Activity Bar, click on the Azure logo to show the Azure storage extension. Click Sign in to Azure... and follow the instructions.

**Step 6: Deploy the website to azure**:

1. From the Explorer section in VSCode, right click on the "build" directory and click "Deploy to Static Website".
2. Choose "Create New Storage Account"
3. Type a unique name for your storage account (using only lower case letters and digits)
4. Choose a location in a region near you or near other services you may need to access.
5. Choose index.html for starting page
6. Leave error page blank
7. Once the deployment completes, click Browse Website in the prompt to view your freshly deployed website.

Congratulations! Your website is now deployed! Share it with a friend or a fellow coder to your right or left. And check out their website too!

### Part 3: Make more modifications (optional)

**Step 7: Modify about-me, description and timeline**
Now that we know how to deploy our website, let's go back and modify other text on the website. All the data that is displayed on the website can be found on "Homepage.tsx". Open that file and we can go to various code sections to modify the data on the website.

1. About Me: getAboutMeInfo() has the title and description of the about me section. Go ahead and change them to your liking.
2. Timeline: The getTimelineItems() method has the list of timeline items that you see. Go ahead and modify them and see that they show up.
3. Countries Visited: getVisitedCountriesProps() has a list of countries that have been visited.
4. Countries Wish List: getCountriesWishListProps()

### Part 4: Add your own new sections (optional)
The website right now has a few specific parts but you can easily add your own new parts. The website is made out of a few components:

1. TagCard
2. TextCard
3. TimelineCard

Take a look at these classes, and see how they are made. If you are familiar with HTML, you can create your own components. In making this website, we used react 'antd' framework and react to create Feel free to take a look at the link and learn more.

Here are some resources for you to look at:

1. React: https://reactjs.org/
2. Ant Design: https://ant.design/components/tag/
3. Visual Studio Code: https://code.visualstudio.com/