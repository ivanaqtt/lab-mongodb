from pymongo import MongoClient

# --- Step 1: Connect to MongoDB ---
uri = "mongodb://localhost:27017/"
client = MongoClient(uri)

# Verify connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You have successfully connected to MongoDB!")
except Exception as e:
    print(e)

# Access database and collection
db = client["bankDB"]
accounts = db["accounts"]

# --- Step 2: Show initial balances ---
print("\nInitial account balances:")
for account in accounts.find():
    print(f"{account['name']} (ID: {account['_id']}): {account['balance']}")

# --- Step 3: Perform a successful fund transfer ---
print("\nPerforming a successful transfer of $30 from Alice to Bob...")
with client.start_session() as session:
    session.start_transaction()
    try:
        # Debit Alice
        accounts.update_one(
            {"_id": 1},
            {"$inc": {"balance": -30}},
            session=session
        )
        # Credit Bob
        accounts.update_one(
            {"_id": 2},
            {"$inc": {"balance": 30}},
            session=session
        )
        session.commit_transaction()
        print("Transaction committed. Funds transferred successfully.")
    except Exception as e:
        session.abort_transaction()
        print("Transaction aborted.")
        print(e)

# Show balances after successful transfer
print("\nBalances after successful transfer:")
for account in accounts.find():
    print(f"{account['name']} (ID: {account['_id']}): {account['balance']}")

# --- Step 4: Simulate a failure during transfer to demonstrate rollback ---
print("\nSimulating a failure during transfer (rollback)...")
with client.start_session() as session:
    session.start_transaction()
    try:
        # Debit Alice again
        accounts.update_one(
            {"_id": 1},
            {"$inc": {"balance": -30}},
            session=session
        )
        # Simulate error
        raise ValueError("Simulated error during transaction")
        # Credit Bob (this will not execute)
        accounts.update_one(
            {"_id": 2},
            {"$inc": {"balance": 30}},
            session=session
        )
        session.commit_transaction()
        print("Transaction committed. Funds transferred successfully.")
    except Exception as e:
        session.abort_transaction()
        print("Transaction aborted.")
        print(e)

# Show balances after failed transfer attempt
print("\nBalances after failed transfer (should be unchanged):")
for account in accounts.find():
    print(f"{account['name']} (ID: {account['_id']}): {account['balance']}")
