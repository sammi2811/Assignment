# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

This is a online banking system where there are multiple functions like getting salary, set aside money for savings, when spending money it will be deducted from your bank account and invesment through online banking.

The first function will be creating an account; account number, account name, initial balance, investment amount and savings amount, if there is a duplicate account number there will be an error shown. And if there is no input for "initalBalance", "investment_amt" and "saving_amt" it will be default as 0

The second function is getting your salary. The amount you enter in the console.log it will add up to the balance and show total amount of the new balance.

The third function is putting aside your money to spend and save. I initialized it to be 0 at first, taking the salary amount to know how much you are able to spend. In the console.log you are needed to enter the amount of percentage from your balance to know how much you can spend.

The fourth function is spending money. The balance amount will minus the spending amount and it will show the remaining amount left in your bank account. You are needed to insert how much money you have spent in the console.log

The fifth function is investment. It will take the remaining amount of money that you have not spend and invest it. You are required to enter the percentage amount of the investment and it will calculate the amount you have earned after the investment.

The sixth function is to check balance of how much is there left in your bank account. Not including the saving amount.
