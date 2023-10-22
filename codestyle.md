(1) Naming style

None of the names in the code can begin or end with an underscore or dollar sign.



The naming in the code is strictly forbidden to use the combination of pinyin and English, and it is not allowed to directly use the Chinese way.



Class names use the UpperCamelCase style and must follow the hump form, except in the following cases: DO/BO/DTO/VO/AO



Method names, parameter names, member variables, and local variables all use the lowerCamelCase style and must follow the hump form.



(2) Code format

The use of braces convention. If the brace is empty, it can be simply written as {}, without line wrapping; if



There is no space between the open parenthesis and the character; Similarly, there is no space between the close parenthesis and the character. For details, see the positive example below Article 5. Counterexample: if (space a == b space)



Reserved words such as if/for/while/switch/do must have Spaces between the brackets.



Use 4-space indentation and tab characters are not allowed



(3) Notes

Write clear, meaningful comments, including file header comments, function comments, and important logic comments.

Use JSdoc-style comments to describe the parameters and return values of functions and methods.

Avoid unnecessary comments, the code itself should be self-explanatory.

(4) Code structure:

Maintain appropriate code lines, usually no more than 80 characters per line.

Follow modular development, encapsulating the code for related functions into functions, classes, or modules.