BPG22

## DOCUMENTATION
###  Bottom-up Guides
1. https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/

## HELP
### DB Git Control
Database is version controlled. It can be found in the "database" folder.

dbnae should be a already created database in Postgres. Dumpfile is the Git controlled database backup.
#### Import
    psql dbname < dumpfile
#### Export
    pg_dump dbname > dumpfile
