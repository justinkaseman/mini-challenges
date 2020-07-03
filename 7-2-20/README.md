# Computer Network Traffic

## Context

Monitor, trace, and analyze network traffic data are some of the questions typically asked in take home challenges. In today’s mini-challenge, we will start with a sample network analysis task. We will collaborate together on the problem but each Fellow will submit their own solution. Time yourselves for 2 hours only.

## Data

Computer Network Traffic Data - A ~500K CSV with summary of some real network traffic data from the past. The dataset has ~21K rows and covers 10 local workstation IPs over a three month period. Half of these local IPs were compromised at some point during this period and became members of various botnets.

Source: http://hci.stanford.edu/courses/cs448b/data/ipasn/cs448b_ipasn.csv

Each row consists of four columns:

date: yyyy-mm-dd (from 2006-07-01 through 2006-09-30)
l_ipn: local IP (coded as an integer from 0-9)
r_asn: remote ASN (an integer which identifies the remote ISP)
f: flows (count of connections for that day)

Reports of "odd" activity or suspicions about a machine's behavior triggered investigations on the following days (although the machine might have been compromised earlier)

Date : IP
08-24 : 1
09-04 : 5
09-18 : 4
09-26 : 3 6

## Goal

Can you discover when a compromise has occurred by a change in the pattern of communication?

## Deliverables

Each Fellow would submit the following (add the links in the sheet attached):

- Codebase repo link on github.
- A report that includes (results/plots, analysis, insights from the data).

## Acknowledgements

This public dataset was found on http://statweb.stanford.edu/~sabatti/data.html

Kaggle challenge https://www.kaggle.com/crawford/computer-network-traffic
