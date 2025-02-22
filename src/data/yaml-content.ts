import { TopicContent } from '../types/content';

export const yamlContent: TopicContent = {
  title: "YAML",
  description: "Complete guide to YAML (YAML Ain't Markup Language) syntax and best practices",
  sections: [
    {
      title: "YAML Basics",
      content: `YAML is a human-readable data serialization format that's commonly used for configuration files. It's designed to be easy to read and write, with a focus on being more human-friendly than XML or JSON.

Key Concepts:
• Indentation-based structure
• Key-value pairs
• Lists and arrays
• Comments
• Data types
• Document markers`,
      examples: [
        `# Basic YAML Syntax
# Key-value pairs
name: John Doe
age: 30
is_active: true

# Lists
colors:
  - red
  - blue
  - green

# Nested objects
person:
  name: Jane Smith
  address:
    street: 123 Main St
    city: Boston
    country: USA`,
        
        `# YAML Comments and Document Markers
---  # Document start marker
# Single line comment
name: Example

multi_line: |
  This is a multi-line
  text block in YAML
  
...  # Document end marker`
      ]
    },
    {
      title: "Data Types",
      content: `YAML supports various data types for representing different kinds of information.`,
      examples: [
        `# Common Data Types
# Strings
simple: Just a string
quoted: "String with special chars: {}[]"
multi_line: |
  Multiple lines
  preserved with |
folded: >
  Multiple lines
  folded into one

# Numbers
integer: 42
float: 3.14159
scientific: 12.3e-4

# Boolean
boolean_true: true
boolean_false: false
boolean_string: "true"

# Null
empty_value: null
empty_value_2: ~

# Dates and Times
iso_date: 2024-01-15
iso_datetime: 2024-01-15T15:30:00Z`
      ]
    },
    {
      title: "Collections",
      content: `YAML provides different ways to represent collections of data, including sequences (arrays) and mappings (dictionaries).`,
      examples: [
        `# Sequences (Arrays)
# Simple sequence
- Apple
- Banana
- Orange

# Nested sequences
matrix:
  - [1, 2, 3]
  - [4, 5, 6]
  - [7, 8, 9]

# Mixed sequences
items:
  - name: Item 1
    price: 10.99
  - name: Item 2
    price: 20.99`,
        
        `# Mappings (Dictionaries)
# Simple mapping
name: John
age: 30

# Complex mapping
person:
  name: Jane
  address:
    street: 123 Main St
    city: Boston
  hobbies:
    - reading
    - hiking`
      ]
    },
    {
      title: "Advanced Features",
      content: `Advanced YAML features for complex configurations and data structures.`,
      examples: [
        `# Anchors and Aliases
# Define anchor
default: &default
  timeout: 30
  retry: 3
  logging: true

# Use alias
development:
  <<: *default  # Merge default values
  logging: false  # Override specific value

production:
  <<: *default
  timeout: 60`,
        
        `# Complex Structures
# Multiple documents
---
server: prod
---
server: dev
...

# Custom tags
!!python/object:
  name: CustomClass
  value: 42

# Flow style
array: [1, 2, 3]
object: {key: value, another: value}`
      ]
    },
    {
      title: "Best Practices",
      content: `Best practices for writing maintainable and efficient YAML configurations.`,
      examples: [
        `# 1. Formatting and Style
# Use consistent indentation (2 spaces recommended)
service:
  name: web-app
  port: 8080
  environment:
    - production
    - staging

# Use descriptive keys
good_example:
  application_port: 8080
  database_host: db.example.com

bad_example:
  p: 8080  # Unclear naming
  h: db.example.com`,
        
        `# 2. Validation and Schema
# OpenAPI/Swagger example
openapi: 3.0.0
info:
  title: API
  version: 1.0.0
paths:
  /users:
    get:
      responses:
        '200':
          description: Success

# Docker Compose example
version: '3.8'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"`
      ]
    }
  ]
}; 