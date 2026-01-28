
Schema Design fundamentals

1. What is schema design What  a database schema represents?
Schema design is the process of planning how data will be stored in a database.
A database schema is the blueprint or structure of the database. It defines:

What tables exist
What columns each table has
The data type of each column
Rules (constraints) for the data
Relationships between tables
we can able to make  private and public schemas

2. Why schema design is required before writing backend code
Schema design is required first because:
Backend code depends on how data is stored
A clear schema avoids confusion while coding
It reduces bugs and data errors
It saves time and cost in the future
If the schema is not planned well, backend code will need frequent changes, which is risky and expensive.

3. How poor schema design impacts data consistency, maintenance, and scalability
Poor schema design can cause:
Same data stored in many places may not match
Difficult maintenance: Changes become hard and error-prone
 Database becomes slow when data grows
 Incorrect or missing data enters the system

4. What validations are in schema design and why databases enforce validations (for example: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY)
Validations are rules that control what data is allowed in a table.
Databases enforce validations to protect data quality
NOT NULL – column must have a value
UNIQUE – no duplicate values allowed
DEFAULT – automatic value if none is given
PRIMARY KEY – uniquely identifies each row


5. The difference between a database schema and a database table
Database Schema	:
Overall structure	
Logical design	
Contains many tables	
Database Table:
Stores actual data
Physical data storage
Contains rows and columns

6. Why a table should represent only one entity
An entity is a real-world object (Student, Order, Product)
A table should represent only one entity because:
Data becomes easy to understand
Reduces duplication
Updates become simple
Follows normalization rules

7. Why redundant or derived data should be avoided in table design
Redundant data = same data stored multiple times
Derived data = data that can be calculated
Problems with redundancy:
Wastes storage
Causes data mismatch
Hard to update

8. The importance of choosing correct data types while designing tables
choosing correct data types:
Saves storage space
Improves performance
Prevents invalid data
Makes validations stronger