import json
import pandas as pd
import sys 

data_file = sys.argv[1]
output_file = sys.argv[2] 
column_stats_file = sys.argv[3]

# New arguments
selected_columns = sys.argv[4] if len(sys.argv) > 4 else None
selected_rows = sys.argv[5] if len(sys.argv) > 5 else None

df = pd.read_csv(data_file)

# Process selected columns
if selected_columns:
    selected_columns = selected_columns.split(',') # convert to list
    df = df[selected_columns]

# Process selected rows
if selected_rows:
    if ':' in selected_rows:
        start, end = selected_rows.split(':')
        df = df.iloc[int(start):int(end)]
    else:
        selected_rows = selected_rows.split(',')
        df = df.iloc[[int(idx) for idx in selected_rows]]  # Convert selected rows to integers

# Store original column names before adding row-wise stats
original_columns = list(df.columns)

# Calculate row-wise descriptive statistics
row_wise_stats = df.describe()

# Calculate additional row-wise statistics
row_wise_stats['Variance'] = df.var(axis=1)  # Add variance
row_wise_stats['Row Total'] = df.sum(axis=1)  # Add row total
row_wise_stats['Range'] = df.max(axis=1) - df.min(axis=1)  # Add range
row_wise_stats['Median'] = df.median(axis=1)  # Add median
row_wise_stats['Mode'] = df.mode(axis=1).iloc[:, 0]  # Add mode

# Add row-wise statistics as new columns
for stat_name in row_wise_stats.columns:
    df[stat_name] = row_wise_stats[stat_name]

# Calculate column-wise statistics only for original columns
detailed_column_stats = df[original_columns].describe(include='all').T
detailed_column_stats['Variance'] = df[original_columns].var(axis=0)

# Add column total for clarity
detailed_column_stats['Column Total'] = df.sum(axis=0)

# Save original file with row-wise statistics
df.to_csv(output_file, index=False)

# Save column-wise statistics to a separate file
detailed_column_stats.to_csv(column_stats_file, index=True)
