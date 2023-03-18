---
id: mdx
title: створено з MDX
---

Ви можете писати JSX і використовувати компоненти React у своєму Markdown завдяки [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}> {children} </span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> та <Highlight color="#1877F2">Facebook blue</Highlight> це мої улюблені кольори.

Я можу написати  **Markdown** разом зі своїм _JSX_!