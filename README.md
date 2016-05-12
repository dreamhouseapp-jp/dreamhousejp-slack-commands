# DreamHouse Slash Commands for Slack

Slack Slash commands implementation for the DreamHouse sample application.

Watch [this video](https://youtu.be/xB-1SsUoBHk) to see the application in action.
 
Read [this blog post](http://coenraets.org/blog/2016/01/slack-salesforce-integration-part-2/) for more details. 

Follow the instructions below to create your own instance of the bot:

### Step 1: Install the DreamHouse App

If you haven't already done so, follow [these instructions](http://dreamhouse-site.herokuapp.com/installation/) to install the DreamHouse sample application.

### Step 2: Create a Connected App

If you haven't already done so, follow the steps below to create a Salesforce connected app:

1. In Salesforce Setup, type **Apps** in the quick find box, and click the **Apps** link

1. In the **Connected Apps** section, click **New**, and define the Connected App as follows:

    - Connected App Name: MyConnectedApp (or any name you want)
    - API Name: MyConnectedApp
    - Contact Email: enter your email address
    - Enabled OAuth Settings: Checked
    - Callback URL: http://localhost:8200/oauthcallback.html (You'll change this later)
    - Selected OAuth Scopes: Full Access (full)
    - Click **Save**

### Step 3: Deploy the Slash Commands

1. Make sure you are logged in to the [Heroku Dashboard](https://dashboard.heroku.com/)
1. Click the button below to deploy the Slash Commands on Heroku:

    [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

1. Fill in the config variables as described.

    - For **SF_CLIENT_ID**, enter the Consumer Key of your Salesforce Connected App
    - For **SF_CLIENT_SECRET**, enter the Consumer Secret of your Salesforce Connected App
    - For **SF_USER_NAME**, enter the the username of your Salesforce integration user
    - For **SF_PASSWORD**, enter the the username of your Salesforce integration user
    - Leave **SLACK_HOUSE_TOKEN** blank for now.

### Step 4: Create the Slash Command in Slack

1. In a browser, go to the custom integration page for your Slack team. For example ```https://YOUR_TEAM_NAME.slack.com/apps/manage/custom-integration```. Replace ```YOUR_TEAM_NAME``` with your actual team name.

1. Click **Slash Commands**, and click **Add Configuration**

1. In the **Choose a Command** input field, type **/house** and click **Add Slash Command Integration**

1. In the **Integration Settings** section: 

    - Command: /house
    - URL: the URL of the app you deployed on Heroku followed by /house. For example: ```https://my-heroku-app.herokuapp.com/house```
    - Method: POST
    - Copy the token, open another browser tab, login to the Heroku Dashboard, and set the Heroku **SLACK_HOUSE_TOKEN** config variable to the value of that token (**Setting>Reveal Config Vars**)
    - Customize Name: DreamHouse
    
    Click **Save Integration**.

