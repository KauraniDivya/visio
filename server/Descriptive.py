import os
import pandas as pd
import firebase_admin
from firebase_admin import credentials, storage
import sys

# Initialize Firebase Admin SDK with your Firebase configuration
firebase_config = {
    "apiKey": "AIzaSyAPmI2GrAGRim5IRKJbnbzkh_vkss8d2tk",
    "authDomain": "xenesis-ff41b.firebaseapp.com",
    "projectId": "xenesis-ff41b",
    "storageBucket": "xenesis-ff41b.appspot.com",
    "messagingSenderId": "817731298821",
    "appId": "1:817731298821:web:bde1873ed1e25a093e5e6c",
    "measurementId": "G-2NC81SKZDN",
    "databaseURL": "https://xenesis-ff41b-default-rtdb.firebaseio.com",
}

cred = credentials.Certificate(r"C:\Users\Galaxy\Desktop\Projects\visio\server\xenesis-ff41b-firebase-adminsdk-rb0f6-989c5dfcb1.json")
firebase_admin.initialize_app(cred, firebase_config)
bucket = storage.bucket()

# Input arguments
data_file = sys.argv[1]
output_file = sys.argv[2]

# New arguments
selected_columns = sys.argv[3].split(',') if len(sys.argv) > 3 else None
print("Selected Columns:", selected_columns)  # Debugging statement

selected_rows = sys.argv[4].split(':') if len(sys.argv) > 4 else None

# Read the CSV file
try:
    df = pd.read_csv(data_file)
except Exception as e:
    print("Error:", e)
    sys.exit(1)

# Process selected columns
if selected_columns:
    # Filter out selected columns that exist in the DataFrame
    selected_columns = [col for col in selected_columns if col in df.columns]
    if selected_columns:
        df = df[selected_columns]
    else:
        print("No valid columns selected. Using all columns.")

print("DataFrame after selecting columns:")
print(df)  # Debugging statement
print("Original Columns:", df.columns)

# Process selected rows
if selected_rows:
    try:
        start, end = map(int, selected_rows)
        df = df.iloc[start:end]
    except Exception as e:
        print("Error:", e)

print("DataFrame after selecting rows:")
print(df)  # Debugging statement

# Check if DataFrame has columns
if df.empty or df.columns.empty:
    print("DataFrame is empty or does not have any columns.")
    sys.exit(1)

# Store original column names before adding row-wise stats
original_columns = list(df.columns)

# Calculate row-wise descriptive statistics
try:
    numeric_columns = df.select_dtypes(include=['number']).columns
    row_wise_stats = df[numeric_columns].describe()
    row_wise_stats['Variance'] = df[numeric_columns].var(axis=1)  # Add variance
    row_wise_stats['Row Total'] = df[numeric_columns].sum(axis=1)  # Add row total
except Exception as e:
    print("Error calculating row-wise statistics:", e)
    sys.exit(1)

# Calculate additional row-wise statistics
row_wise_stats['Range'] = df[numeric_columns].max(axis=1) - df[numeric_columns].min(axis=1)  # Add range
row_wise_stats['Median'] = df[numeric_columns].median(axis=1)  # Add median
row_wise_stats['Mode'] = df[numeric_columns].mode(axis=1).iloc[:, 0]  # Add mode

# Add row-wise statistics as new columns
for stat_name in row_wise_stats.columns:
    df[stat_name] = row_wise_stats[stat_name]

# Calculate column-wise statistics only for numeric columns
try:
    detailed_column_stats = df[numeric_columns].describe(include='all').T
    detailed_column_stats['Variance'] = df[numeric_columns].var(axis=0)
except Exception as e:
    print("Error calculating column-wise statistics:", e)
    sys.exit(1)

# Add column total for clarity
detailed_column_stats['Column Total'] = df[numeric_columns].sum(axis=0)

# Save original file with row-wise statistics
df.to_csv(output_file, index=False)

# Upload the updated file to Firebase Storage
blob = bucket.blob(output_file)
blob.upload_from_filename(output_file)

# Make the file publicly accessible
blob.make_public()

# Get the public download URL
download_url = blob.public_url

# Print the download URL to the console
print("Download URL:", download_url)
