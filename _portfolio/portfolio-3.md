---
title: "Using Amazon Quicksight to visualise Netflix's catalogue trends"
excerpt: "I used AWS services to analyse and visualise a dataset from Netflix's films and TV shows. <br/><img src='/images/QuickSightImages/FinishedQuickSightPage.png' width='500'/>"
collection: portfolio
---

# Visualise data with QuickSight

## Charlie Atkinson

![Finished QuickSight Page](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/QuickSightImages/FinishedQuickSightPage.png)


## Introducing Today's Project!

### What is Amazon QuickSight?

Amazon QuickSight is a cloud-based business intelligence service that allows
users to analyse data, create visualisations, and generate interactive dashboards.

### How I used Amazon QuickSight in this project

In this project, I used Amazon QuickSight to analyse data by connecting to a
dataset and building interactive dashboards. I used filters to refine the data and
highlight specific trends and patterns, making it easier to spot insights at a glance.

### One thing I didn't expect in this project was...

I didnʼt expect how easy QuickSightʼs interface would be to use. I thought setting
up dashboards and applying filters would be more complicated, but it was
surprisingly straightforward. The speed of data processing was also nice.

### This project took me...

This project only took me around an hour, including creating all the needed
accounts.


## Upload project files into S3

S3 is used in this project to store two files, which are manifest.json and
netflix_titles.csv.

I edited the manifest.json file by changing the URL pointing to the netflix_titles.csv
file to make sure that it pointed to the file in my personal bucket.


## Create QuickSight account

Creating a QuickSight account costs a monthly subscription fee but I’ll pay nothing
as I unchecked the "Add Paginated Reports" button at the bottom of the create
screen and will delete the account before the free trial ends.

Creating an account took me less than a minute.


## Download the Dataset

I connected the S 3 bucket to QuickSight by visiting "create a dataset" in the left
side panel in the QuickSight home page.

The manifest.json file was important in this step because it contains the location of
the data I planned to use.


## My first visualisation

To create visualisations on QuickSight, I dragged one of the dataset's fields into the
"auto-graph" space and the data was turned into a chart.

The chart shown here is a breakdown of the number of films/tv programmes
released per year.

I created this graph by dragging and dropping the release_year field and selecting
the 'donut chart' option from the dropdown.


## Using filters

Filters are useful for visualising specific parts of the data, rather than the data as a
whole.

This visualisation is a breakdown of all of the tv shows and films that are Action &
Adventure, Thrillers or TV Comedies. Here I added a filter by clicking on the three
dots on the 'listen_in' data field on the left-hand side.


## Setting up a dashboard

As a finishing touch, I added custom titles to each chart to make it clear what each
one is showing.

Did you know you could export your dashboard as PDFs too? I did this by clicking
the downwards arrow icon in the top right of the screen.


