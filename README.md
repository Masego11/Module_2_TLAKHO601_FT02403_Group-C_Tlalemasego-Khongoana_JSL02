# [JSL02] Submission: Debug the DOM

# Debugging Duplicate Goals

**Debugging Brief:**
In the current code, users can add the same fitness goal multiple times, leading to duplicate entries in the goal list. To enhance the user experience and prevent duplicates, you need to implement a check to ensure that the same goal cannot be added more than once. If a duplicate goal is detected, it should NOT be added to the list.


**Solution breakdown:**
1. Intitialized duplicate to false to determine if there is a duplicate goal in the list.
2. the goalList.querySelector was used to retrieve all lists items from the goallist.
3. forEach method used to iterates through each existing goal. 
4. if statement checks if input matches any existing goals
5. if a match is found, duplicate is set to true. 
6. if duplicate is true display alert message
7. the return statement to exit the function to prevent the duplicate goal from being added. 