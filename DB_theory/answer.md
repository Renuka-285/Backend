1.Why is db.json (file-based storage) NOT suitable for real projects?
ANS:A db.json file is only useful for learning, demos
Slow for large datasets
Multiple users accessing the file at the same time can:
Overwrite data
Cause corruption
2.What are the ideal characteristics of a database system (apart from just storage)?
ANS:
Performance:
Fast data retrieval and insertion
Uses indexes, caching, and query optimization
Handles large volumes efficiently
Concurrency:
Multiple users can read/write simultaneously
Prevents conflicts using:
Locks
Transactions
Reliability:
Data remains safe even if:
System crashes
Power fails
Supports automatic recovery and backups
Data Integrity

Ensures accuracy and consistency of data using:
Constraints
Primary key
Foreign key
Unique
Not null
Scalability:
Supports growth without performance loss
Types:
Vertical scaling (better hardware)
Horizontal scaling (more servers)
3.How many types of databases are there? What are their use cases or applications?
ANS:
Relational Databases (SQL)
Data stored in tables (rows and columns)
Uses Structured Query Language (SQL)
Follows ACID properties
Examples:
MySQL
PostgreSQL
Oracle
SQL Server
applications:
Banking systems
Student management systems
Inventory management
Enterprise applications
Non-Relational Databases (NoSQL):
Data stored in:
Documents
Key-value pairs
Columns
Graphs
Schema-less or flexible schema
applications:
Social media apps
Real-time analytics
IoT applications
Big data systems