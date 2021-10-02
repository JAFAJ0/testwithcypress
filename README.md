# testwithcypress!

Here, I use cypress to make this simple small test project.


# How to get it:

1.init a empty project with npm init\
2.install cypress\
3.edit files to match testing goals.\
4. run ```
npx cypress run ```with [npm@5.2.0](mailto:npm@5.2.0) or greater


# Integration files explainations

My cypress.io files are in ./cypress/integration

## Generate dataset

let cypress write json which include three sets of necessery informations.
The desation json is in ./fixtures
In the set, emails and passwords are randomlized with math. random and toString functions, in order that no repeated data generated.
Thus the testing website will always accepts new emails& passwords.
The other necessary informations are generated by address generater. 
They are hard coded right now, but could be edited to take some address generater APIs as inputs if requested.
NOTE: If you run this test case to generate dataset, you should also register them with create accounts, otherwise you cannot login. The default datasets are registered.

## create accounts

These three test cases are used to register the dataset through the website.

## vertify accounts

There are cases, to verfy the accounts and the functions about the website.
The first case login, and add two items in cart, check out with bank wire and log out
The second login, add one item and direct to cart, edit item number to 99, check out with check
the third one, add two items and check if its add/remove buttons are useful.

