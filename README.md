# Display a table with all the transactions. One transaction on each row. The columns should be:
# Created_at
# Sales_reference ○ amount
# Detect missing transactions
# Leave an empty row for those transactions that are missing.
# Allow the user to create manually the transaction for those that are missing. When creating the transaction, the user should only enter the amount. Assume that there is a backend REST service with the following endpoints:
# GET transactions/ -> [{“sales_reference”: “:sales_reference”, “created_at”: “:created_at”, “amount”: “:amount”},{}, ...]
# POST transactions/ [{“sales_reference”: “:sales_reference”, “created_at”: “:created_at”, “amount”: “:amount”}
# Important: For the purpose of the exercise, you should use the attached csv of sample transactions that already contain a few missing transactions.
