# TECHATHON GROUP 2 TEAM 5 TASK

# PROJECT
 An API for todo list management.

# DESCRIPTION
This api is to allows only logged in users create and manage todo list.

# FEATURES OF THE APPLICATION
1. Implement an authenticated methond using JWT for:
- auth/login
- auth/register
- auth/invite
- auth/remove

**Note:**
POST auth/login and auth/register should not require authentication to allow new users register and login.

2. Implement CRUD for User Model (GET, POST, PUT and DELETE) **/user**. users should not be able to delete his/her account.

3. Implement CRUD for Workspace Model (GET, POST, PUT, and DELETE) **/workspace**, only the creator of the workspace should be able to delete the workspace, and only team members with **admin** role should be able to ***add/invite*** or ***remove*** team members from the workspace.

4. Implement CRUd for Task Model (GET, POST, PUT, and delete) **/task**, all team members should be able to ***create, modify, and delete*** task.

# SCHEMA
Mongo database will be used to model and implement the following.

# USER
```
_id:        ->ObjectID
email:      ->String
password:   ->String
refreshToken:->String
verified:   ->Boolean
createdAt:  ->Date
upatedAt:   ->Date
```

# WORKSPACE
```
_id:        ->ObjectId
creatorid:    ->ObjectId
name:       ->String
description: ->String
Status:      ->String enum["private","public"]
createdAt:  ->Date
upatedAt:   ->Date
```
# TEAM
```
_id:        ->ObjectId
workspaceid:  ->objectId
memberid:     ->ObjectId
role:       ->String enum["admin","user"]
createdAt:  ->Date
updatedAt:  ->Date
```

# BOARD
```
_id:             ->ObjectId
workspaceid:    ->ObjectId
title:          ->String
creatorid:      ->ObjectId
createdAt:      ->Date
upatedAt:       ->Date
```

# TASK
```
_id:            ->ObjectId
creatorid:      ->ObjectId
boardid:        ->ObjectId
taskname:       ->String
description:    ->String
status:         ->String enum["todo","inprogress","done","review","completed"]
createdAt:      ->Date
upatedAt:       ->Date
```