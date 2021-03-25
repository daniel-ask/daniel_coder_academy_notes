# Todo Terminal App

## Set-up Instructions

1. Set up a folder `mkdir todo_terminal_app`
2. cd into it `cd todo_terminal_app`
3. Set up git `git init`
4. Create a README `touch README.md`
5. Create a start file `touch todo_app.rb`
6. Create a lib folder `mkdir lib`
7. Set up bundler `bundle init`
8. Git add `git add .`
9. Git commit `git commit -m"Initial Commit`
  
## What we will have a look at for this project 

- Trello
- Testing
- File IO
- Error exception handling

# Agile -> Kanban -> Trello

Agile software development is project management structure for developing software. It is designed in such a way that enforces customer interaction and involvement. Agile development focuses on small iterative releases of software rather than a big final release. This is often facilitated by what is know a scrum where you have small time frames know as sprint to implement and release some feature for the software. This is now the most popular way that software teams use to develop software. One popular Agile framework is know as Kanban.

Kanban is just another way to implement agile and organise and visualise the task and work to be done. One important aspect Kanban is the use of a kanban board. This kanban board is a serious of columns each donating different statuses of task. The kanban board then uses kanban card to represent the task that needs to be done. A Kanban board can have a physical representation such as whiteboard and post it notes or use software to do this such as Jira or Trello. For this project we will be using Trello as out task management tool.

Trello is the free tool that allows us to create a kanban like board to organise and track our tasks. We will be using a bunch a features that Trello boards provide such as list, cards, deadlines, labels and checklists.

[trello](https://trello.com/)

# Intro to testing

For this project we are gonna implement some testing. Testing in itself is a huge topic. 
For our project we are only going to have a look one type of testing know as unit testing.

## Unit testing

Unit testing is where we test small parts of our code independently. Each of our tests should be independent from our other tests. That is to say each of our test should not require another test to pass.

In our case we are going to tests our classes and methods and this is generally the case for object oriented programming.

Now while testing can and sometimes should be manual, generally the best way to do testing is automatic. This usually means using some kind of testing library that allows us to test code with code. We have already seen this several times in our challenges. This is done using a testing library know as [rspec](https://rspec.info/). There are other libraries out there such as Minitest and Cucumber. Rspec is probably the most popular and widely used and will work both for out ruby terminal apps and later on Rails.

## Test Driven Development - TDD 

Before we get into actually using Ruby. We are gonna talk about the test driven development(TDD). TDD is a software development process in which we write our tests before we write our code. There are several benefits to TDD but the main ones being that more test are written and this in turn has show to increase productivity.

TDD has a usual development cycle that starts with:
1. Create the test
2. Run test and see it fail
3. Write simple code to solve test
4. Run test to pass
5. Refactor code
6. Repeat again for next test

This is another reason why we use RSpec as it works well with TDD and Behaviour Driven Development.

# Setting up Rspec

Make sure you have rspec installed. 

`gem list rspec`

If not run:

`gem install rspec`

Go back to your project folder and initialise rspec by running:

`rspec --init`