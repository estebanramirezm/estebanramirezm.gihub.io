# Basic Markdown Guide 
by Esteban Ramirez

## How do you make different levels of headings?
There are 6 different levels of heading, which we can use by putting number signs (#) before the text. One number sign identifies the biggest header, while the smallest is identified by six number signs. 

# Level 1 header (biggest)
## Level 2 header
### Level 3 header
##### Level 4 header
##### Level 5 header
###### Level 6 header (smallest)

Headers separate different sections of the text to make it easier for the users to read. 

## How do you make bullet-point lists?
We can create bullet lists by using asterisks (*).

* This is an example item
* This is another example item
 * This is an example subitem
    * A subitem to the subitem, isn't it cool? 
     * As you can see, we can customize the level items in a list a lot 

## How do you make numbered lists?
Numbered lists are created similarly to bullet-point lists. However, instead of using asterisks we use positive numbers. You can write each item with its respective number in the list, but its easier to just use 1s and let Markdown manage the numbering of the list. 

1. Item #1
1. Item #2
3. Item #3 
    1. Subitem #1
1. Item #4

## How do you make links?
You can insert links to any website by using this format:
[title](example URL)

For example, you can link to [Google](google.com) or [Facebook](facebook.com) 

## How do you insert a block of code?
We can insert blocks of code by using a triple backtick (```)

```
string message = 'This is an example of a code block';
std::cout << message << endl;
```
