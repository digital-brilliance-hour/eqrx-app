## Documenation

Documentation for Attex Template: 

https://docs.digitalbrilliancehour.com/attex/installation.html

## Dev Installation

One pulled down on computer, run the following commands from git(bash): 

`yarn` - this will install all the packages needed to run the development server locally. Creates a "node_modules" folder

Once everything has completed, run the following to run the development server locally:

`yarn dev` - this will start a local server and give you a web address to put in to a browser window. While active, it keeps track of your changes. 

## Possible Prework / Troubleshooting

If you're getting messages like `yarn: command not found`, here are a few steps to ensure to install the proper stuff on your windows computer. 

1. Ensure that you have Node.js installed on your computer. Download the following link, https://nodejs.org/dist/v23.2.0/node-v23.2.0-x64.msi and install on your computer follow default instructions. (Do this before opening up Git Bash. If Git Bash is already open, wait until after step 2 to restart Git Bash after the installation)
2. Add the following location to our Environment Variables Path. To get there, Go to Windows Search and type "Environment Variables" and open the "edit your system environment variables" entry.
3. On bottom right click the "Environment Variables" button. Then under the "System Variables" list, find and click on the "Path" variable. Then click the Edit button underneath.
4. On this screen, first click "New", which will add a new row, where you will add `C:\Users\<whateveryourusernameis>\AppData\Roaming\npm`. Then click ok, and keep clicking ok until done.
5. Now you can open Git Bash.


![2024-11-12_092607](https://github.com/user-attachments/assets/016d2590-d1bb-4e3a-9870-02cb86cd1e74)
![2024-11-12_092631](https://github.com/user-attachments/assets/e0380a59-2587-4484-a3e4-bcc8bb977624)
![2024-11-12_092944](https://github.com/user-attachments/assets/be4cfe63-db10-4cd6-a7a2-63fee6f8d5e4)


Now Node should be installed and properly seen by Git Bash. Once Git Bash is open, do the following:

1. Install global yarn package with the following command `npm install -g yarn` make sure it's installed by running `yarn -v`
2. Install global corepack package with the following command `npm install -g corepack`, make sure it's installed by running `corepack -v`
3. You should now be good to do the Dev Installation
