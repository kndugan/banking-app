# Banking Application

## Navigation Bar

~~Includes Create Account, Deposit, Withdraw, All Data, and Home pages~~

~~Routing: Each navigation bar item routes the user to the relevant page. For example, by selecting Home the user should be directed to the Home page.~~

~~Styled with Bootstrap~~

1. Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page.

~~Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page.~~

## Home Page

~~Includes bank title, image, and a welcome message.~~

~~Styled as a Bootstrap card.~~

## Create Account Page

~~Includes a Bootstrap card with a form that has:~~

~~Name input field~~

~~Email address input field~~

~~Password input field~~

~~Create account button~~

### Create Account Page Functionality

Create account page should include the following functionality:

~~Success message: Upon selecting the create account button the user should see a success message.~~

~~Add Another Account Button: Upon selecting the create account button, the user should see an add another account button.~~

~~Cleared Create Account Form: Upon selecting the create account button, it will open a cleared create account form.~~

~~Name validation: The user receives an alert if the name field is left blank.~~

~~Email validation: The user receives an alert if this field is blank~~

1. Password validation: The user receives an alert if the password is less than 8 characters long.

2. Disable submit button if nothing is inputted

## Deposit Page

~~Includes a Bootstrap card with a form that has:~~

1. Deposit input field
2. Deposit button
3. Balance information displays above deposit form on the card

### Deposit Page Functionality

Deposit page should include the following functionality:

1. Updated Balance: When a user deposits, the balance updates.
2. Success Message: When a user completes the deposit form, they receive a success message confirming their deposit was received.
3. Not A Number Alert: User receives an alert if they add something that is not a number.
4. Negative Deposit Alert: User receives an alert if they try to deposit a negative number.
5. Disable deposit button if nothing is input

## Withdraw Page

~~Includes a Bootstrap card with a form that has:~~

1. Withdraw input field
2. Withdraw button
3. Balance information displays above deposit form on the card

### Withdraw Page Functionality

Withdraw page should include the following functionality:

1. Updated Balance: When a user completes the withdrawal form, the number submitted is subtracted from the total balance.
2. Success Message: When a user completes the withdrawal form, they receive a success message confirming that their withdraw was processed.
3. Account Overdraft Feature: When a user withdraws a number higher than the account balance, the user receives an alert message on the withdraw page.
4. Not A Number Alert: User receives an alert if they add something that is not a number.
5. Disable deposit button if nothing is input

### All Data Page Functionality

~~All Data page includes the following functionality:~~

1. Track User Submissions: All user submissions appear on All Data page.
2. All Data Displayed On Bootstrap Card: All Data is styled and displayed on a Bootstrap card instead of JSON.
