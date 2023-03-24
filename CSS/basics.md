## CSS

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.

The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.

There are numerous ways/sources with which we can apply styles to the markup which includes -

1. Inline Style
2. Internal Style
3. External Style

In these styles Inline Style has given the highest priority, All these resources gets cascaded and after this cascading the final CSSOM is created.

### SELECTORS

Selectors are ways to select an HTML element and after that we can apply styles to the selected element.

There are mainly 5 types of selectors

1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them)
3. Pseudo-class selectors (select elements based on a certain state)
4. Pseudo-elements selectors (select and style a part of an element)
5. Attribute selectors (select elements based on an attribute or attribute value)

### SPECIFICITY

Styles to a HTML element can be applied from different ways (inline, internal, external), and there can arise the condition of conflict among these three ways of styling, in that case How to decide which style to apply?

Specificity are just set of rules with which we decide which CSS rules will be finally applied to the element.

### BOX-MODEL

Every Element in the HTML document can be represented as a box and the architecture of this block cab be easily described with the box-model, different parts of box-model are -

1. Content
2. Padding
3. Border
4. Margin.

### POSITIONING

> Every layer other than the static creates a new stacking context.
