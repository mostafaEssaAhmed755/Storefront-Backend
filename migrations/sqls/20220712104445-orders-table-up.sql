CREATE TYPE STATUS AS ENUM ('pending', 'completed', 'rejected');

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS orders (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    total_price NUMERIC(10,2) NOT NULL,
    status STATUS DEFAULT 'pending' NOT NULL,
    user_id uuid NOT NULL REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);