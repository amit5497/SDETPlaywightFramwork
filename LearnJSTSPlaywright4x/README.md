# Learn JavaScript, TypeScript & Playwright

<div align="center">
  <img width="100%" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80" alt="Learning workspace" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow" alt="JavaScript ES6+" />
  <img src="https://img.shields.io/badge/Node.js-18%2B-green" alt="Node.js 18+" />
  <img src="https://img.shields.io/badge/Prompt_Engineering-RICE--POT-purple" alt="Prompt Engineering RICE-POT" />
</div>

### Chapter by chapter, built for testers

A practical learning repository for testers moving into JavaScript, TypeScript, and Playwright automation. Every chapter is a folder, and every lesson is a small JavaScript file you can run on its own.

This repo is designed to make the fundamentals easy to understand through small examples, interview-style questions, and real automation-focused thinking.

---

## Why this repo exists

This workspace helps you:
- learn JavaScript from the basics
- understand how variables, values, and identifiers work
- practice literals, operators, and common JS pitfalls
- prepare for TypeScript and Playwright automation later
- strengthen interview confidence with small focused exercises

The goal is not to build a huge framework. The goal is to learn the language clearly and apply it to testing work.

---

## Learning flow

1. Start with `01_JS_Basics`
2. Move to `02_chapter_JS_Keywrods_Identifiers`
3. Study values and types in `03_chapter_JS_Literals`
4. Practice logic in `04_chapter_JS_Operators`
5. Continue into later chapters for increment/decrement and nullish topics
6. Prepare for TypeScript and Playwright after the fundamentals are strong

---

## Current project structure

```text
LearnJSTSPlaywright4x/
├── README.md
├── README_sample file.md
├── 00_chapter_prompt_eng/
│   └── (prompt-eng content placeholder)
├── 01_JS_Basics/
│   ├── 01_HellowWorld.js
│   └── 02_Math.js
├── 02_chapter_JS_Keywrods_Identifiers/
│   ├── 03_to_05_Keywords.js
│   ├── 06_KW_IND_Rules.js
│   ├── 07_KeyWords_Rules2.js
│   ├── 08_Comments.js
│   └── 09_IQ.js
├── 03_chapter_JS_Literals/
│   ├── 11_Numberal.js
│   ├── 12_Null_Undefined.js
│   ├── 15_Number.js
│   ├── 16_Numbers_PART2.js
│   └── 17_Special.js
├── 04_chapter_JS_Operators/
│   ├── 20_Assigment_Op.js
│   ├── 21_Arithematic_Op.js
│   ├── 22_Comparsion_Op.js
│   ├── 23_Logical_Op.js
│   ├── 28_Ternary_Op.js
│   ├── 30_to_37_IQ.js
│   └── 34_Nested_Ternary.js
├── 05_chapter_JS_Incre_Decr_Operators/
│   └── (planned / currently empty)
├── .gitignore
└── .vscode/
```

---

## Chapter-by-chapter breakdown

### 01_JS_Basics
Folder focus: your first JavaScript scripts, console output, and arithmetic.

- `01_HellowWorld.js`  
  Introduces the simplest JavaScript program and shows how to print output with `console.log()`.

- `02_Math.js`  
  Covers arithmetic operations such as addition, subtraction, multiplication, division, and basic expressions.

---

### 02_chapter_JS_Keywrods_Identifiers
Folder focus: keywords, identifiers, declarations, naming rules, comments, and interview questions.

- `03_to_05_Keywords.js`  
  Explains keywords vs identifiers and introduces `var`, `let`, and `const`.

- `06_KW_IND_Rules.js`  
  Shows which characters are valid in an identifier and which patterns cause syntax errors.

- `07_KeyWords_Rules2.js`  
  Covers naming styles such as camelCase, PascalCase, snake_case, and SCREAMING_SNAKE_CASE.

- `08_Comments.js`  
  Demonstrates single-line comments, multi-line comments, and general documentation comments.

- `09_IQ.js`  
  Contains interview-style questions on valid vs invalid identifiers and naming practices.

---

### 03_chapter_JS_Literals
Folder focus: fixed values, data types, and JavaScript literal rules.

- `11_Numberal.js`  
  Introduces literal values and the `typeof` operator to check the type of a value.

- `12_Null_Undefined.js`  
  Explains the difference between `null` and `undefined` and why both are common in testing and automation.

- `15_Number.js`  
  Covers number literals, decimal values, binary/octal/hex notation, and exponents.

- `16_Numbers_PART2.js`  
  Explains numeric separators and `BigInt` for large integer values.

- `17_Special.js`  
  Covers special numeric values like `Infinity`, `-Infinity`, and `NaN`.

---

### 04_chapter_JS_Operators
Folder focus: assignment, arithmetic, comparison, logical expressions, and ternary logic.

- `20_Assigment_Op.js`  
  Covers assignment operators and how values are reassigned in variables.

- `21_Arithematic_Op.js`  
  Demonstrates `+`, `-`, `*`, `/`, `%`, and `**` with example expressions.

- `22_Comparsion_Op.js`  
  Explains comparison operators, equality, and the difference between loose and strict checks.

- `23_Logical_Op.js`  
  Introduces logical operators: `&&`, `||`, and `!`.

- `28_Ternary_Op.js`  
  Shows the compact conditional syntax using the ternary operator.

- `30_to_37_IQ.js`  
  Interview-style practice on operators and comparisons.

- `34_Nested_Ternary.js`  
  Shows nested ternary logic and when it becomes harder to read.

---

### 05_chapter_JS_Incre_Decr_Operators
Folder status: planned / currently expanding.

This chapter is meant to cover:
- `++` and `--` behavior
- pre vs post increment/decrement
- interview questions on mutation logic
- nullish coalescing (`??`)

---

### 00_chapter_prompt_eng
Folder status: placeholder for prompt-engineering content.

This section is intended for later notes, reusable prompt templates, and AI-assisted QA examples.

---

## How to run a lesson

From the project root, run a file like this:

```bash
node 01_JS_Basics/01_HellowWorld.js
node 01_JS_Basics/02_Math.js
node 02_chapter_JS_Keywrods_Identifiers/08_Comments.js
node 03_chapter_JS_Literals/15_Number.js
node 04_chapter_JS_Operators/21_Arithematic_Op.js
```

Most files follow the same pattern:

```bash
node <folder>/<file-name>.js
```

---

## Best practices for this repo

- Keep each script tiny and focused on one concept.
- Run every file with Node.js after reading it.
- Use `console.log()` often while learning.
- Read the interview-question files before running them.
- Try to predict the result before executing the code.

---

## Suggested next steps

After finishing this JavaScript core content, the next natural path is:

- TypeScript basics
- Playwright setup and first automation scripts
- Locators, assertions, and page objects
- Real test automation flows for web apps

---

## Notes

This README is aligned to the actual files currently present in the workspace and intentionally avoids referencing missing folders or assets so it remains accurate as the project grows.
