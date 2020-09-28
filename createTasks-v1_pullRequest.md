# Description
    When a user is logged in & wants to create a task, they will click "Add New Task"
        - A modal will show alllowing them to enter new task details. 
        - Once saved, the task will render on the webpage containing entire list of tasks. 
        - If task is marked "private" no other users will see that task. 
        - Public Tasks show for everyone

    When user checks off a task, it is marked as completed in the database. 

    When user wants to remove a task, they will click the "edit task" button & select "delete task" 
        - An alert window will show to confirm deletion
        - If confirmed, the task is removed from the database. 
    
    When user wants to view tasks with filters, they will use the dropdown menu provided. 
        - When viewing other users tasks, only public tasks will show. 

## Type of change
Please delete options that are not relevant.
- [] Bug fix (non-breaking change which fixes an issue)
- [x] New feature (non-breaking change which adds functionality)
- [] Breaking change (fix or feature that would cause existing functionality to not work as expected)
# Testing Instructions
Will need to update TASKS database to include: 
    • userID: int
    • name: string
    • taskStatus: boolean
    • private: boolean
    • date: int
    • id: int

# Checklist:
- [x] My code follows the style guidelines of this project
- [x] I have performed a self-review of my own code
- [x] I have commented my code, particularly in hard-to-understand areas
- [x] My changes generate no new warnings or errors
- [x] I have added test instructions that prove my fix is effective or that my feature works
