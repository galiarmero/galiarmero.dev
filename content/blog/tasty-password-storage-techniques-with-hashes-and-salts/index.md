---
title: "Tasty Password Storage Techniques with Hashes and Salts"
datePublished: "2020-07-03 22:14:06 +0800"
teaser: "Some post teaser"
sharingCard: ./sharing-card-tasty-password-storage-techniques-with-hashes-and-salts.png
---

In one of my recent technical interviews, I got asked how I would store a password in a database. I'm well-aware you don't save them in plaintext and knew they have to be transformed into an unrecognizable format by _'encrypting them'_. But as to how this is done, I offered an unconvincing answer.

I mentioned [MD5](https://en.wikipedia.org/wiki/MD5) and [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithms) and got schooled. Apparently, these algorithms are either already broken or suboptimal. I wish I knew better than my college MD5-using self. For my inner peace, I looked for answers about how they securely handle passwords these days.

In this post, we are operating in this frame of mind: **Our database will get breached. When that time comes, how do we make it difficult and futile for the attacker to use the data to log in to user accounts and do wild sh*t?**

## It's Called Hashing

The process of turning the passwords into an unrecognizable format is called **hashing**, not encrypting as I mentioned in the interview (*cringe). The difference is that encryption is reversible. You can convert an encrypted text back to its original form through decryption. For passwords, we don't want that.

So we use hashing, a one-way transformation. Hashes, the output of hashing, are practically impossible to invert. There is no function that will accept a hash and magically figure out the original plaintext. This makes it an ideal prerequisite for secure password handling.



