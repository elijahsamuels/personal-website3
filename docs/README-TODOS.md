[Back to README](../README.md)

# TODO LIST

- Auto publish new blog posts to Linkedin
  - configure blog posts to include a publishToLinkedin flag
  - connect to Linkedin API
    - investigate using the [Authorization Code Flow (3-legged OAuth)](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?tabs=HTTPS1)
    - obtain the linkedin URN
  - use the [create-an-article-or-url-share](https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/share-on-linkedin#create-an-article-or-url-share)
  - add CI/CD integration to post new blog posts to Linkedin


# DONE
- [X] - create self hosted blog posts
  - [X] - must be able to include code blocks
- [X] - create contact form
  - [X] must require user name, email address and body
  - [X] must send the email to the host
- [X] - add resume and badges
  - [X] - resume must be viewable as a PDF
  - [X] - badges must link to credly
  - [X] - badges must include badge image
