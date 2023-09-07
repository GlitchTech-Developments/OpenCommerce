DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'medusa_db') THEN
        CREATE DATABASE medusa_db;
    END IF;
END $$;

-- Connect to the newly created database
\c medusa_db;

-- Create user if not exists
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_user WHERE usename = 'medusa_db_user') THEN
        CREATE USER medusa_db_user WITH PASSWORD 'password';
    END IF;
END $$;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE medusa_db TO medusa_db_user;