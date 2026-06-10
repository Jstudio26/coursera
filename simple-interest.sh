#!/bin/bash
# This script calculates simple interest given principal,
# annual rate of interest and time period in years.

# Do not use this in production. Sample purpose only.

# Author: Jeremia Paduli
# Additional Letter Authors:
# gh-username

# Input:
# p, principal amount
# t, time period in years
# r, annual rate of interest

# Output:
# simple interest = p*t*r

echo "Enter the principal amount:"
read p
echo "Enter rate of interest per annum:"
read r
echo "Enter time period in years:"
read t

# Calculate simple interest using basic arithmetic
# Note: integer division inside $(( ))
s=$((p * t * r / 100))

echo "The simple interest is: $s"
