# [Rate Limiting](https://levelup.gitconnected.com/rate-limiting-a0783293026a)

> - Recommended
>    1. Tocken Bucket Rate Limiting (== "Leaky Bucket” rate limiting) -> to secure APIs
>    2. Exponential Delay Rate Limiting -> for passwords
> - Not Recommended : Fixed Window Rate Limiting & Sliding Window Rate Limiting

## Purpose

- Rate limiting is an effective and relatively easy way to mitigate security risks.
- Although it's not the only thing you do to secure your app, it should be implemented.
- Rate limiting makes the effects of being compromised less severe.
  - If you accidentally allow users to read any arbitrary record from your database instead of only the records they should have access to, the problem will be much less severe if they can only read one un-authorised record per minute rather than extracting at 1000 records per minute.

## 2 Approaches - Don't

### 1. Fixed Window Rate Limiting

e.g, A new window starts every hour on the hour for 10 API requests

### 2. Sliding Window Rate Limiting

e.g, when you can make 10 requests in any period of an hour
    - [X] You have to keep track of the timestamp of every request, in order to accurately account for how many requests the user is allowed to make.

## 2 Approaches - Do

### 1. Token Bucket Rate Limiting / "Leaky Bucket” rate limiting

- Easy to implement
- All you need is a tocken counter representing how many “tokens/available requests” a user has, and a timestamp at which that count was last increased/added to the bucket.
    1. A user has a bucket of tokens and a gate that requires a token to walk through.
    2. If we keep walking through the gate (making requests), we’ll eventually run out of tokens.
    3. while we’re busy taking tokens to make the request, another background process is **adding a token to the bucket at a set interval**. (E.g.,  1 token/6 min added to the bucket)
- Pros
    1. The most we have to wait between one request and the next is 6 min (the interval)
    2. As long as we don’t make requests more than once every 6 minutes on average, we’ll never run out of tokens.

### 2. Exponential Delay Rate Limiting

- This is only appropriate where:
  - You want to be punitive with what you perceive as abuse
  - You have a natural point to “reset” the rate limit
- **Just one use case : Passwords**
- The first few attempts are quick, and then subsequent attempts rapidly take longer and longer.
- Reset the delay after any successful login
