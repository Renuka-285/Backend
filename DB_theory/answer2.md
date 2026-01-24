Database Relationship:
A database relationship is a logical connection between two or more tables in a database, established using primary keys and foreign keys, to represent how data entities are related to each other.
ex:
In an e-commerce application, data is interconnected:
Customers place orders
Orders contain products
Products belong to categories
Customers make payments
Types of relationships:
There are three main types:
1.One-to-One (1:1)
2.One-to-Many (1:M)
3.Many-to-Many (M:N)
One-to-One Relationship (1:1):
In a one-to-one relationship, one record in a table is related to exactly one record in another table
ex:
User ↔ User_Profile
One user has only one profile
One profile belongs to only one user
user_id is PRIMARY KEY in users
user_id is FOREIGN KEY in user_profiles
One-to-Many Relationship (1:M):
In a one-to-many relationship, one record in a table can be related to multiple records in another table.
ex:
Customer ↔ Orders
One customer can place many orders
Each order belongs to one customer
customer_id is primary key in customers
customer_id is foreign key in orders
Many-to-Many Relationship (M:N):
In a many-to-many relationship, multiple records in one table are related to multiple records in another table.
*implemented using a junction (bridge) table.
ex:
Orders ↔ Products
One order can contain many products
One product can appear in many orders
order_items connects orders and products
Contains foreign keys from both tables
Can store extra data 




