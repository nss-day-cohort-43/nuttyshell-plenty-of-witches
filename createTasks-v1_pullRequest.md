# Description
Given a user wants to enter a task
When the user clicks an affordance for entering a new task (i.e. button or hyperlink)
Then a form should be presented to the user with a field to enter in the task name
And a field to enter in the expected completion date

Given a user wants to mark a task complete
When the user is viewing their task list
Then there should be a checkbox next to each task that, when clicked, should mark the task as complete in the database
And prevent the task from being displayed in the list

Given a user is on the task list and wants to remove a task
When when the user performs a gesture on the delete affordance
Then the task should be removed from the database
And the task should be removed from the task list
## Type of change
Please delete options that are not relevant.
- [x] Bug fix (non-breaking change which fixes an issue)
- [x] New feature (non-breaking change which adds functionality)
- [x] Breaking change (fix or feature that would cause existing functionality to not work as expected)
# Testing Instructions
Please describe the tests required to verify your changes. Provide instructions so PR Tester can check functionality. Please also list any relevant details for your tests
# Checklist:
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings or errors
- [ ] I have added test instructions that prove my fix is effective or that my feature works
