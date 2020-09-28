# esther-morillo-petit-comerc

DESCRIPTION 1

As a merchant
I want an application
so I can sell my local products

product {
    id: string,
    storeName: string,
    type: string,
    categories: [ string ],
    amount: number,
    size: [ string ],
    price: string,
    active: boolean
}

SCENARIOS

1. Product List
Given a productList
When I navigate to the list view
Then I can see all the stores and their products

2. Given a productListView
When I click in a product
Then the productDetails is displayed

3. Given a product details view
When I hit the add button
Then I add a product to the cart


//////////////////////////////////////////////////////////

DESCRIPTION 2

As a merchant
I want customers to come to the store
so I can have a personal relationship with people

SCENARIOS

1. To buy
Given a buy view
When I navigate to the list view
Then I can buy online and collect the product in the store


//////////////////////////////////////////////////////////

DESCRIPTION 3

As a merchant
I want customers to be able to buy online
so I can sell my product to more people

SCENARIOS

1. To buy
Given a buy view
When I navigate to the list view
Then I can buy online and write my address so they can send me


//////////////////////////////////////////////////////////

DESCRIPTION 4

As a merchant
I want a functionality
to be able to have my user profile and to be able to post products whenever I want

SCENARIOS

1. Add products
Given a view addProduct
When I go to my profile
Then I can add photo, category, price...

2. Countdown
Given the view of adding products
When i go to my profile
Then I can a countdown to have the offers in the app


//////////////////////////////////////////////////////////

DESCRIPTION 5

As a merchant
I want a functionality
to be able to search for products

SCENARIOS

1. Search products
Given an input to search for products
When I write a word
Then I can see all the related stores by name or category


//////////////////////////////////////////////////////////

DESCRIPTION 6

As a merchant
I want users to have a shopping cart
so I can save it and access it at another time to buy

SCENARIOS

1. Cart
Given a shopping cart
When I press the button to add product
Then I can have a page where I have my list of products that I want to buy


//////////////////////////////////////////////////////////

DESCRIPTION 7

As a merchant
I want a payment functionality for users
so they can pay instantly by choosing different methods

SCENARIOS

1. To pay
Given a shopping cart page
When i finish my order
So I can have different ways to pay


//////////////////////////////////////////////////////////

DESCRIPTION 8

As a merchant
I want legal statements and conditions
so they can understand their rights and obligations

SCENARIOS

1. Legal terms
Given a page of legal terms
When the client wants to read it
So I can have different links to inform you


//////////////////////////////////////////////////////////

DESCRIPTION 9

As a merchant
I want a section about us
so they can understand the values ​​of small businesses

SCENARIOS

1. About us
Given a page about us
When the client wants to know us more
Then I can have a view where we explain who we are and the reason for this initiative


//////////////////////////////////////////////////////////

DESCRIPTION 10

As a merchant
I want a news page related to Mallorcan people
so that they can be up to date with everything good that is here

SCENARIOS

1. News
Given a news page
When the client wants to find out about issues related to the island
So I can have a news view to read it

2. Comment news
Given a news page
When the client wants to comment on a news
So I can have a space to write

3. Like news
Given a news page
When the customer likes one of the news
Then I can click and give a "like"

