---
title: Making Sense of Regex in JavaScript
published: false
description: 
tags: javascript, regex, beginner
---

**References:**
1. JavaScript: The Good Parts by Douglas Crockford, 2008. Page 65-77.

<hr>

<center>
 **NOTICE**  
This article serves as my notes upon reading "JavaScript: The Good Parts". While I do refer to other materials as shown in the above references, the information in this article might not be 100% accurate/updated. 

At this point, I identify myself as a beginner who knows next to nothing about regular expression. What I write is my form of learning the concept and I hope that fellow readers who are also new to the concept would benefit from this article. 

<hr>
</center>


# 1. What is Regular Expression (regex)?

I'm still not too sure what "regular" refers to, but I think I have an understanding of how the expression fits in place. 

## 1.1. Concept of Expression

Recall in Mathematics, expressions are simply a combination of **components** such as: numbers, operators, variables, parentheses, etc. 

This means to learn about regex, we need to first know what are the equivalent **components** available. 

## 1.2. Purpose of regex

Apart from the components, we would also need to know what the purpose of regex is. In math, expression helps us express known and unknown numerical components in order to identify the value of the unknowns. In regex, expression helps us **express a string pattern** that we are trying to match against another string source. 

For example, let's say I want to find all phone numbers from a webpage, and I know phone numbers follow a certain format. I would express the phone number format through regex and use it to search through the webpage. 

In this case, we have two variables (expressed in psuedo-code):

```javascript
var phone_number_pattern; //some phone number format expressed in regex format
var entire_webpage_stored_as_a_string;
```

# 2. Components

Recall that regex is trying to express a string pattern that we are trying to find in a larger set of string. This means that the obvious components are the expression of basic units of string such as (1) Numbers, (2) Alphabets, and (3) Special Characters.


# 2.1 Escape Characters Components
JavaScript: The Good Parts by Douglas Crockford, 2008. Page 73-74

```javascript
var regex;

// NOTE: the slashes indicate the start and end of a regex;
// just like how single/double quotes indicate the start and end of a string

regex = /\d/; // use to find digit
regex = /\D/  // use to find non-digit

regex = /\w/; // use to find word character (a-z, A-Z, 0-9, _)
regex = /\W/; // use to find non-word character 

regex = /\s/; // use to find white space character; 
// such as \r (carriage return), \t (tab), \f (form feed)

```

The first thing that pops up from the above regex pattern is that a small caps letter symbolizes the actual string units that we are searching for; while capitalized represents the negation. 

In natural language, a regex pattern of `\d` could be interpreted as "Does this string contains any digit?" The inverse regex pattern of `\D` would then be interpreted as "Does this string contains NO digit?".

> Personally, I feel this pattern of 

