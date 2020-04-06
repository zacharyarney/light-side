# Models
[User](##User)  
[Post](##Post)  
[Comment](##Comment)  
[DirectMessage](##DirectMessage)  

## User
Users may eventually develop sub-types like `admin` (probably just denoted with a flag?) to allow for something like workspace or community functionality. For now, though we'll stick with one user type. We also need to figure out image hosting for avatars.

This mvp `User` type will allow users to make posts, like and comment on posts, see timestamps in local time, send direct messages, follow and block users, and see timestamps in local time (though I may end up just using the `<number> hours/days/etc ago` format).

```json
{
  "_id": ID,
  "username": String,
  "password": String,
  "email": String,
  "timezone": String?,
  "posts": Post[],
  "likedPosts": Post[],
  "comments": Comment[],
  "likedComments": Comment[],
  "directMessages": DirectMessages[],
  "following": User[],
  "followers": User[],
  "blockedUsers": User[],
}
```

## Post
Not sure if we should keep track of which users like a post or just the number of likes. I think that's probably the best behavior. All major social media platforms do it that way. We also need to figure out a way to share posts. I haven't decided yet if I want posts to be publicly available like Twitter. We could add a field for `postUrl` but I don't think share/"retweet" functionality will be part of MVP.  

I'm also unsure about non-text posts. We need to be able to determine if a string is a URL and create a link preview if it is. We also need a way to attach photos. Like if a user posts a link to a photo, the photo should show up, but they should also be able to attach a photo.

Also hashtags and user tags might be require new fields. The hard part will probably just be parsing for the syntax. Then we can have fields for tagged users and hashtags.

See [Comment](##Comment) for thoughts about differentiation between these models.  

```json
{
  "_id": ID,
  "author": User,
  "comments": Comment[] || Post[],
  "likes": User[],
  //"parent": Post
}
```

## Comment
Comments should be identical to posts except for a parent field. We could make the argument that comments are unnecessary. Just make the `parent` field in a post determine whether the post shows up in a feed or in a conversation.

```json
{
  "_id": ID,
  "author": User,
  "parent": Post || Comment,
  "comments": Comment[],
  "likes": User[]
}
```

## DirectMessages
I think it's best to keep DMs simple for the time being. I plan to implement this feature using web sockets for real time messaging. They could potentially be as complex as posts in terms of differentiating between links, images and tags. 

Recipients may be handled with namespacing socket connections or "rooms" and so we may only need an `author` property. I'll have to revisit this after implementing all the other features. 

```json
{
  "_id": ID,
  "author": User,
  "recipient": User,
  "content": String
}
```