---
title: "URL shortener"
lang: "en"
layout: "~/layouts/base-md.astro"
---

# URL Shortener

A URL shortener is a tool that takes a long URL and converts it into a shorter, more manageable version without losing its ability to redirect to the original destination. Here is an explanation of how it works.

## How does a URL shortener work?

1. **Receiving the long URL**: The process begins when a user inputs a full URL (for example, `https://www.example.com/products/item?id=12345`). The goal of the shortener is to create a shorter, easier-to-share alias.

1. **Generating the short alias**: The shortener's server generates a unique alias (usually a combination of random characters, though it can sometimes be customized). This alias is assigned to the original URL and stored in a database. For example, the URL `https://www.example.com/products/item?id=12345` might become something like `https://url-shortener.vercel.app/abc123`.

   - The alias can be generated using different algorithms:
     - **Hashing**: A hash is generated based on the URL.
     - **Incremental IDs**: The shortener uses unique IDs for each URL that increment with every new request.
     - **Random character generation**: Random strings of letters and numbers of fixed length are generated.

1. **Storing in the database**: The shortener stores both the long URL and its short alias in a database. Typically, additional data is stored, such as the creation date, number of clicks, and other relevant details.

1. **Redirection**: When a user clicks or enters the short URL in their browser (`https://url-shortener.vercel.app/abc123`), the shortener receives the request. It then looks up the alias in its database and retrieves the associated long URL. The server then sends an HTTP redirection (usually with a 301 or 302 code) to redirect the user to the original URL.

1. **Statistics**: Some URL shorteners offer detailed statistics, such as the number of clicks, user location, device used, and more. This data is collected with each redirection.

## Benefits of a URL shortener

- **Easier sharing**: Short URLs are easier to share on social media, messages, and emails.
- **Click tracking**: Provides the ability to track the number of times the short link has been clicked.
- **Customization**: Some platforms allow you to customize the short URL, making it easier to remember.

## Basic implementation example

Imagine a database with two main columns: one for the long URL and another for the short URL.

- Database:
  - Long URL: `https://www.example.com/products/item?id=12345`
  - Short URL: `https://url-shortener.vercel.app/abc123`

When the server receives a request for the short URL (`https://url-shortener.vercel.app/abc123`):

1. It looks up the long URL associated with `abc123` in the database.
1. It redirects the user to `https://www.example.com/products/item?id=12345`.

## Considerations

- **Collisions**: When random short URLs are generated, there is a risk that two different URLs could receive the same alias. To avoid this, strategies like uniqueness checks in the database are implemented.
- **Security**: Some shorteners include features to prevent redirection to malicious sites, such as blacklist checks or security scans.

In summary, a URL shortener takes a long address and converts it into a shorter, easier-to-share link while maintaining its original functionality through redirections. These systems can also include features for tracking clicks and analyzing link usage.
